function initialiseMIDIPorts() 
{
	let
		inputs = WebMidi.inputs,
		outputs = WebMidi.outputs;
	AppData.MidiInputs = [];
	AppData.MidiOutputs = [];
	var indexUsb = 0;
	inputs.forEach((port, index) => 
	{
		let input = new MidiXDevice(index, port.name, port.id);
		AppData.MidiInputs.push(input);		
	});
	
	outputs.forEach((port, index) => 
	{
		let output = new MidiXDevice(index, port.name, null, port.id);
		AppData.MidiOutputs.push(output);
	});
	MatchDevice();
	FillListDeviceInput($("select-midi-inputs"), null, true);	
	FillListDeviceOutput($("select-midi-outputs"), null, true);
}
function MatchDevice()
{
	AppData.Devices.forEach((device) =>
	{
		if(device.deviceNameInput)
		{
			var input = AppData.MidiInputs.find((i) => {return i.name.includes(device.deviceNameInput);});
			if(input)
			{
				device.deviceInputId = input.deviceInputId;
			}
		}
		if(device.deviceNameOutput)
		{
			var input = AppData.MidiOutputs.find((i) => {return i.name.includes(device.deviceNameOutput);});
			if(input)
			{
				device.deviceOutputId = input.deviceOutputId;
			}
		}
	});
}
function SendMidi(message, action)
{
	if(isLearnMidi) return;
	try
	{
		if(action)
		{
			Console(action.name);
		}
		if(message.device == "Any")
		{
			WebMidi.outputs.forEach((output) =>
			{
				message.device = output.id;
				SendMidi(message);
			});
			return;
		}
		if(message.midiType=="CC")
		{
			sendMidiCC(message);
		}
		else if( message.midiType=="PC")
		{
			sendMidiPC(message);
		}
		else if(message.midiType=="NoteOn")
		{
			sendMidiNote(message);
		}
		else if(message.midiType=="NoteOff")
		{
			sendMidiNote(message);
		}
		else if(message.midiType=="NoteOnOff")
		{
			sendMidiNote(message);
		}
	}
	catch(e)
	{
		LogError(e);
	}
}
function sendMidiNote(message) {
	
	var channel = message.channel;
	var ccNum = message.value;
	var ccValue = message.ccValue;
	outputDeviceId = GetDeviceOutput(message.device);
	Console(`Send Midi ${message.midiType} ${message.device} ${channel}-${ccNum}-${ccValue} ${outputDeviceId}`);
	
	var device = WebMidi.getOutputById(outputDeviceId);
	
	if(!device)
	{
		LogError(`No device found ${message.device}`, outputDeviceId);
		return;
	}
	if(message.midiType == "NoteOn")
	{
		device.channels[channel].playNote(message.value, {rawAttack : message.ccValue ? message.ccValue : 0.5});		
	}
	else if( message.midiType == "NoteOff")
	{
		device.channels[channel].stopNote(message.value, {attack : 0.5});
	}
	else if( message.midiType == "NoteOnOff")
	{
		device.channels[channel].playNote(message.value, {attack : 0.5});
		device.channels[channel].stopNote(message.value, {attack : 0.5, time : "+100"});
	}
}
function StopAllNote()
{
	let	outputs = WebMidi.outputs;
	
	outputs.forEach((port, index) => 
	{
		port.sendAllSoundOff();
	});
}
function sendMidiCC(message) {
	
	var channel = message.channel;
	var ccNum = message.value;
	var ccValue = message.ccValue;
	outputDeviceId = GetDeviceOutput(message.device);
	Console(`Send MidiCC ${message.device} ${channel}-${ccNum}-${ccValue} ${outputDeviceId}`);
	var device = WebMidi.getOutputById(outputDeviceId);
	if(!device)
	{
		LogError(`No device found ${message.device}`, outputDeviceId);
		return;
	}
	device.channels[channel].sendControlChange(parseInt(ccNum), parseInt(ccValue));
}
function sendMidiPC(message) {
	var channel = message.channel;
	var programNumber = message.value;
	var outputDeviceId = GetDeviceOutput(message.device);
	Console(`Send sendMidiPC ${channel}-${programNumber} ${outputDeviceId}`);
	var device = WebMidi.getOutputById(outputDeviceId);
	if(!device)
	{
		LogError(`No device found ${message.device}`, outputDeviceId);
		return;
	}
	device.channels[channel].sendProgramChange(parseInt(programNumber));
}
function sendMidiClock(device)
{
	var clockMsg = [0xF8]; // message d'horloge MIDI
	device.send(clockMsg);
}
function SubscribeToMidiEvents()
{
	WebMidi.inputs.forEach((input) => {
		if(input.name == "MidiXXXToReaper") return;
		input.addListener("controlchange", e =>		
		{
			var channel = e.message.channel;
			var value = e.data[1];
			var ccValue = e.data[2];
			Console(`Input Control Change channel ${input.name}: ${channel} value : ${value} ccValue : ${ccValue}`);
			var id = `${input.id}-CC-${channel}-${value}-${ccValue}`;
			if(isLearnMidi)
			{
				InjectLearnedMidiMessage(new MidiXMessage(input.id, channel, "CC", value, ccValue));
				return;
			}
			if(AppData.MidiInputToHandle[id])
			{
				AppData.MidiInputToHandle[id].forEach((f)=> { f(ccValue); });
			}
			else
			{
				id = `${input.id}-CC-${channel}-${value}`;
				if(AppData.MidiInputToHandle[id])
				{
					AppData.MidiInputToHandle[id].forEach((f)=> { f(ccValue); });
				}
			}
		});
	});
	WebMidi.inputs.forEach((input) => {
		if(input.name == "MidiXXXToReaper") return;
		input.addListener("programchange", e =>		
		{
			var channel = e.message.channel;
			var value = e.data[1];
			Console(`Input Program Change ${input.name} channel : ${channel} value : ${value}`);
			var id = `${input.id}-PC-${channel}-${value}`;
			if(isLearnMidi)
			{
				InjectLearnedMidiMessage(new MidiXMessage(input.id, channel, "PC", value));
				return;
			}
			if(AppData.MidiInputToHandle[id])
			{
				AppData.MidiInputToHandle[id].forEach((f)=> { f(); });
			}
		});
	});
	WebMidi.inputs.forEach((input) => {
		if(input.name == "MidiXXXToReaper") return;
		input.addListener("noteon", e =>		
		{
			var channel = e.message.channel;
			var note = e.note.getOffsetNumber();
			Console(`Input Note On ${input.name} channel : ${channel} note : ${note}`);
			var id = `${input.id}-NoteOn-${channel}-${note}`;
			//Console(id);
			if(isLearnMidi)
			{
				InjectLearnedMidiMessage(new MidiXMessage(input.id, channel, "NoteOn", note));
				return;
			}
			if(AppData.MidiInputToHandle[id])
			{
				AppData.MidiInputToHandle[id].forEach((f)=> { f(note); });
			}
		});
	});
	WebMidi.inputs.forEach((input) => {
		if(input.name == "MidiXXXToReaper") return;
		input.addListener("noteoff", e =>		
		{
			var channel = e.message.channel;
			var note = e.note.getOffsetNumber();
			Console(`Input Note Off ${input.name} channel : ${channel} note : ${note}`);
			var id = `${input.id}-NoteOff-${channel}-${note}`;
			if(isLearnMidi)
			{
				InjectLearnedMidiMessage(new MidiXMessage(input.id, channel, "NoteOff", note));
				return;
			}
			if(AppData.MidiInputToHandle[id])
			{
				AppData.MidiInputToHandle[id].forEach((f)=> { f(note); });
			}
		});
	});
	WebMidi.inputs.forEach((input) => {
		if(input.name == "MidiXXXToReaper") return;
		input.addListener("clock", e =>		
		{
			//Console(`Input clock ${input.name} port : ${e.port} target : ${e.timestamp}`);
			nbClock++;
			if(nbClock >= 24)
			{
				nbClock = 0;
				var timestamp = e.timestamp;
				var delta = lastTimestamp - timestamp;

				var hasTempoChange = Math.abs(delta - tapLastDelta) > 2;
				if(hasTempoChange)
				{					
					tapToResync = 8;
				}
				if(tapToResync > 0)
				{
					ClickButton(AppData.Pages[0].items[28]);
					tapToResync--;
				}
				lastTimestamp = timestamp;
				tapLastDelta = delta;				
			}
		});
	});
}
var lastTimestamp = 0;
var tapToResync = 0;
var tapLastDelta = 0;
var nbClock = 0;
function GetDeviceInput(value)
{
	var myDevice = AppData.Devices.find(function (e) {return e.name == value});
	if(myDevice)
		return myDevice.deviceInputId;
	if(!value || value == "")
	{
		return GetDefaultInputDevice();
	}
	return value;
}
function GetDeviceOutput(value)
{
	var myDevice = AppData.Devices.find(function (e) {return e.name == value});
	if(myDevice)
		return myDevice.deviceOutputId;
	if(!value || value == "")
	{
		return GetDefaultOutputDevice();
	}
	return value;
}
function RegisterMessageToHandle(trigger, myFunction)
{
	if(trigger.device == "Keyboard")
	{
		var idKeyboard = `keyboard-${trigger.keyboardKey}`;
		if(!AppData.KeyboardInputToHandle[idKeyboard])
		{
			AppData.KeyboardInputToHandle[idKeyboard] = []
		}
		AppData.KeyboardInputToHandle[idKeyboard].push(myFunction);
		return;
	}
	if(trigger.channel == "Any")
	{
		for(var i = 1; i<=16; i++)
		{
			trigger.channel = i;
			RegisterMessageToHandle(trigger, myFunction);
		}
		return;
	}
	if(trigger.device == "Any")
	{
		WebMidi.inputs.forEach((input) =>
		{
			trigger.device = input.id;
			RegisterMessageToHandle(trigger, myFunction);
		});
		return;
	}
	var device = GetDeviceInput(trigger.device);
	var id = `${device}-${trigger.midiType}-${trigger.channel}-${trigger.value}` + (trigger.ccValue || trigger.ccValue == 0 ? `-${trigger.ccValue}` : "");
	if(!AppData.MidiInputToHandle[id])
	{
		AppData.MidiInputToHandle[id] = []
	}
	AppData.MidiInputToHandle[id].push(myFunction);
}
function SetInputMidiMessageToHandle()
{
	AppData.MidiInputToHandle = [];
	AppData.KeyboardInputToHandle = [];
	RegisterExpUi();
	RegisterExpMidiInput();
	RegisterGlobalTriggerButton();
	RegisterCustomerTriggerButton();
	RegisterTriggerPages();
	
}
function RegisterExpUi()
{
	AppData.Expressions.forEach((exp) =>
	{
		exp.trigger.ccValue = null;
		var trigger = exp.trigger;
		var f = function(value)
		{	
			UpdateExpUi(value, exp);
		}
		RegisterMessageToHandle(trigger, f);
	});
}
function UpdateExpUi(value, exp, isFromTrigger)
{
	var divExp = $("exp" + exp.id);
	if(!divExp) return;
	var divLevel = divExp.firstChild;			
	var valueTo100 = MapMidiValueTo100(value);
	var valueTo10 = parseInt(valueTo100 / 10);
	
	if(valueTo10 == 10)
	{
		divExp.classList.add("exp-bar-10");
	}
	else
	{
		divExp.classList.remove("exp-bar-10");
	}
	if(!isFromTrigger)
	{
		divLevel.innerHTML = valueTo10;
		divExp.style.height = valueTo100 + "%";
		exp.currentValue = value;
	}
	if(exp.isSync == false && !isFromTrigger)
	{
		var diff = exp.isExpLowerToResync ? exp.valueToResync - exp.currentValue : exp.currentValue - exp.valueToResync;
		if(diff <= 0)
		{
			exp.isSync = true;
			divExp.classList.remove("exp-not-sync");
			divExp.parentNode.querySelector(".level-not-sync").style.display = "none";
			if(exp && exp.currentButton && exp.currentButton.actions)
			{
				var actionExp = AppData.Pages[exp.currentButton.idPage].items[exp.currentButton.idButton].actions.filter(function(e){return e.action=="EXP" || e.action == "ExpSetValue";})[0];
				if(actionExp)
				{
					actionExp.valueExp = value;
				}
			}
		}
	}
	if(isFromTrigger)
	{
		divExp.classList.add("exp-not-sync");
		var divLevelNotSync = divExp.parentNode.querySelector(".level-not-sync");
		ShowElement(divLevelNotSync);
		divLevelNotSync.style.height = valueTo100 + "%";
	}
	if(exp.isSync && exp.currentButton)
	{
		var page = GetCurrentPage();
		if(page.id == exp.currentButton.idPage)
		{
			var divElement = $("div-element-" + exp.currentButton.idButton);
			if(divElement)
			{
				var divExpInside = divElement.querySelector(".div-element-inside-exp" + exp.id);
				if(divExpInside)
				{
					divExpInside.style.height = valueTo100 + "%";
				}
			}
		}
	}
	
}
function RegisterExpMidiInput()
{
    //Gestion des envois midi Expressions
	AppData.Pages.forEach((page) => 
	{
		page.items.filter(function (e){return e.active == true;}).forEach((item) =>
		{
			item.actions.forEach((action) =>
			{				
				if(action.action == "EXP" || action.action == "ExpSetValue")
				{
					var exp = AppData.Expressions.find(function (e) {return e.id == action.idExp;});
					exp.trigger.ccValue = null;
					// fonction déclencher par les message midi relié à l'exp
					var f = function(value)
					{		
						if(exp.isSync == false)	return;
						var message = action.message;
						if(!action.expMin) action.expMin = 0;
						if(!action.expMax) action.expMax = 127;
						message.ccValue = Map(value, 0, 127, action.expMin, action.expMax);
						SendMidi(message);
					};
					RegisterMessageToHandle(exp.trigger, f);					
				}
				if(action.action == "EXPTrigger")
				{
					var exp = AppData.Expressions.find(function (e) {return e.id == action.idExp;});
					// fonction déclencher par les message midi relié à l'exp par comparaison de valeur
					var f = function(value)
					{		
						if(exp.isSync == false)	return;
						HandleExpTrigger(exp, value);
					};
					RegisterMessageToHandle(exp.trigger, f);					
				}
			});
		});
	});
}
function HandleExpTrigger(exp, value)
{
	if(!exp.expTriggerAction) return;
	exp.expTriggerAction.forEach((action)=>
	{
		var expTrigger  = action.expTrigger;
		switch (expTrigger.comparator) {
			case 'Equals':
			  	if(value == expTrigger.value) { HandleLinkButton(action); }
			  	break;
			case 'LessOrEquals':
				if(value <= expTrigger.value) { HandleLinkButton(action); }
				break;
			case 'Less':
				if(value < expTrigger.value) { HandleLinkButton(action); }
				break;
			case 'GreaterOrEquals':
				if(value >= expTrigger.value) { HandleLinkButton(action); }
				break;
			case 'Greater':
				if(value > expTrigger.value) { HandleLinkButton(action); }
				break;
		}
	});
}
function RegisterGlobalTriggerButton()
{
    //Gestion des triggers globaux de boutons
	AppData.ButtonsTrigger.forEach((button) =>
	{
        if(button.triggers.length == 0) return;
        button.triggers.forEach((trigger) => 
        {	
			var item = GetCurrentPage().items[button.id];
			if(item && item.type == "Momentary" && trigger.midiType == "NoteOn")
			{
				
				var fOn = function()
				{
					console.log("on");
					HandleAction(new MidiXItem( "",0, item.name, "Preset", true, "", item.actions), $("div-element-"+ button.id), item.actions[0], 0);
				};
				RegisterMessageToHandle(trigger, fOn);
				var fOff = function()
				{
										console.log("off");

					HandleAction(new MidiXItem( "",0, item.name, "Preset", false, "", item.actions), $("div-element-"+ button.id), item.actions[0], 0);
				};
				var triggerNoteOff = new MidiXMessage(trigger.device, trigger.channel, "NoteOff", trigger.value);
				RegisterMessageToHandle(triggerNoteOff, fOff);
			}
			else
			{
				var f = function()
				{				
				console.log(item);
					ClickButton(GetCurrentPage().items[button.id], $("div-element-"+ button.id));
				};
				RegisterMessageToHandle(trigger, f);
			}
        });		
	});
}
function RegisterCustomerTriggerButton()
{
	//Gestion des triggers custom des boutons
	AppData.Pages.forEach((page) =>
    {
        page.items.forEach((item) =>
		{
			if(item.triggers)
			{
				item.triggers.forEach((trigger)=>
				{
					var f = function(value)
					{					
						if(trigger.triggerAction == "StateOn")
						{
							item.active = true;
							UpdateButtons(item.id);
						}
						else if(trigger.triggerAction == "StateOff")
						{
							item.active = false;
							UpdateButtons(item.id);
						}
						else if(trigger.triggerAction == "Expression")
						{
							UpdateExpButton(page, item, value)
						}
						else if(trigger.triggerAction == "Expression0")
						{
							UpdateExpButton(page, item, value, 0)
						}
						else if(trigger.triggerAction == "Expression1")
						{
							UpdateExpButton(page, item, value, 1)
						}
						else
						{
							var obj = null;
							if(page.id == GetCurrentPage().id)
							{
								obj = $("div-element-" + item.id);
							}
							ClickButton(item, obj);
						}
					};
					RegisterMessageToHandle(trigger, f);
				});
			}
			if(item.buttonsInside)
			{
				item.buttonsInside.forEach((buttonInside, index) =>
				{
					if(buttonInside.triggers)
					{
						buttonInside.triggers.forEach((trigger)=>
						{
							var f = function(value)
							{					
								if(trigger.triggerAction == "StateOn")
								{
									buttonInside.active = true;
									UpdateButtons(buttonInside.id);
								}
								else if(trigger.triggerAction == "StateOff")
								{
									buttonInside.active = false;
									UpdateButtons(buttonInside.id);
								}
								else
								{
									var obj = null;
									if(page.id == GetCurrentPage().id)
									{
										obj = $("div-element-button-inside-" + buttonInside.id);
									}
									ClickButton(item, obj);
								}
							};
							RegisterMessageToHandle(trigger, f);
						});
					}
				});
			}
		});
    });
}
function RegisterTriggerPages()
{
    //Gestion des triggers de Pages
    AppData.Pages.forEach((page) =>
    {		
        if(!page.triggers || page.triggers.length == 0) return;
        page.triggers.forEach((trigger) => 
        {
            var f = function()
            {
                GotoPage(page.id);
            };
			RegisterMessageToHandle(trigger, f);
        });        
    });
	//Gestion des trigger de PreviousPage
    AppData.PreviousPageTriggers.forEach((trigger) =>
    {
		var f = function()
		{
			PreviousPage();
		};      
		RegisterMessageToHandle(trigger, f);
    });
	AppData.NextPageTriggers.forEach((trigger) =>
    {
		var f = function()
		{
			NextPage();
		};      
		RegisterMessageToHandle(trigger, f);
    });
}
var isLearnMidi = false;
var htmlMidiMessageToLearn = null;
function LearnMidiInput(obj)
{
	if(htmlMidiMessageToLearn && htmlMidiMessageToLearn != obj) return;
	isLearnMidi = isLearnMidi == false ? true : false;
	if(isLearnMidi)
	{
		obj.classList.add("learn");
		htmlMidiMessageToLearn = obj;
	}
	else
	{
		obj.classList.remove("learn");
		htmlMidiMessageToLearn = null;
	}	
}