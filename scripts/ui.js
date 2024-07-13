function SetActionsHtml(ul, actions, isPage)
{	
	RemoveAllElements(ul);	
	if(!actions) return;
	actions.forEach((action) =>
	{
		var li = document.createElement("li");
		var htmlAction = $("template-action").cloneNode(true);
		ShowElement(htmlAction);
		htmlAction.id = "action-" + action.id;
		var actionNumber = htmlAction.querySelector(".action-id");
		actionNumber.innerText = "Action " + (action.id + 1);
		var txtNameAction = htmlAction.querySelector(".txt-action-name");
		txtNameAction.value = action.name == undefined ? "" : action.name;
		var txtNameDescription = htmlAction.querySelector(".txt-action-description");
		txtNameDescription.value = action.description == undefined ? "" : action.description;
		var txtTimeAction = htmlAction.querySelector(".txt-action-time");
		txtTimeAction.value = action.timeToWait == undefined ?  0 : action.timeToWait;
		var selectStep = htmlAction.querySelector(".select-step");
		FillEventList(htmlAction, action.event, isPage);
		FillActionList(htmlAction, action.action, isPage);		
		FillListPage(htmlAction.querySelector(".select-page"), action.idPage);
		FillListExp(htmlAction, action);			
		FillLinkButton(htmlAction, action.linkedButton);
		FillListStep(selectStep, actions, action);
		FillExpTrigger(htmlAction, action.expTrigger);
		var selectColor = htmlAction.querySelector(".select-color");		
		selectColor.value = action.color;
		ChangeColor(selectColor);
		if(isPage)
		{
			HideElement(selectColor.parentNode);
			HideElement(selectStep.parentNode);
		}
		if(action.action =="LFO")
		{
			htmlAction.querySelector(".select-action-lfo-type").value = action.LFO.type; 
			htmlAction.querySelector(".txt-lfo-min").value = action.LFO.min; 
			htmlAction.querySelector(".txt-lfo-max").value = action.LFO.max; 
			htmlAction.querySelector(".txt-lfo-frequency").value = action.LFO.frequency; 
			htmlAction.querySelector(".txt-lfo-refresh-time").value = action.LFO.refreshTime; 
		}
		var messageHtml = GetHtmlMidiMessage(action.message);
		messageHtml.id = "action-messages-" + action.id;
		htmlAction.append(messageHtml);		
		li.append(htmlAction);
		ul.append(li);
		var selectAction = htmlAction.querySelector(".select-action-action")
		ChangeActionAction(selectAction);
		if(action.conditionnalLinkButtons)
		{
			action.conditionnalLinkButtons.forEach((conditionnalLinkButton) =>
			{
				htmlAction.querySelector(".ul-list-conditionnal-link-button").append(GetHtmlConditionnalLinkButton(conditionnalLinkButton));
			});
		}
		
	});
}
function DeleteAction(obj)
{
	var action = obj.parentNode.parentNode;
	var li = action.parentNode;
	var ul = li.parentNode;
	ul.removeChild(li);
}
function DeleteTrigger(obj)
{
	var div = obj.parentNode;
	var li = div.parentNode.parentNode;
	var ul = li.parentNode;
	ul.removeChild(li);
}
function DeleteConditionnalLinkButton(obj)
{
	var div = obj;
	var li = div.parentNode;
	var ul = li.parentNode;
	ul.removeChild(li);
}
function AddPageTrigger()
{
	var listActions = $("ul-edit-page-trigger");
	var li = document.createElement("li");
	var messageHtml = GetHtmlMidiMessage(new MidiXMessage(), true);
	li.append(messageHtml);
	listActions.append(li);	
}
function BuildUi()
{
	initialiseMIDIPorts();
	BuildButtons();
	BuildExp();
	
	FillColorPicker();
	var selectNbButton = $("select-nb-buttons");
	var selectNbButtonByLine = $("select-nb-buttons-by-line");
	RemoveOptions(selectNbButton);
	RemoveOptions(selectNbButtonByLine);
	for(var i=1; i<=40; i++)
	{
		AddOption(selectNbButton, i, i);
		AddOption(selectNbButtonByLine, i, i);
	}
	var selectExpMin = $("select-exp-min");
	var selectExpMax = $("select-exp-max");
	RemoveOptions(selectExpMin);
	RemoveOptions(selectExpMax);
	for(var i = 0;i<=127; i++)
	{
		AddOption(selectExpMin, i, i);
		AddOption(selectExpMax, i, i);
	}
	selectExpMin.value = 0;
	selectExpMax.value = 127;
}
function BuildExp()
{
	var divExps = Array.from(document.getElementsByClassName("div-main-page-element-exp"));
	divExps.forEach((d) => { d.remove();});

	var page = GetCurrentPage();
	var expressions = [];
	AppData.Expressions.forEach((exp) =>
	{
		/*if(!page.ExpToHide.includes(exp.id + ""))
		{
			expressions.push(exp);
		}*/
		if(exp.isVirtual && exp.isVirtual === true) return;
		exp.toHide = page.ExpToHide.includes(exp.id + "");
		expressions.push(exp);
	});
	var divMainPage = $("div-main-page");
	var divCenter = $("div-main-page-center");
	expressions.forEach((expression, index) =>
	{
		var div = document.createElement("div");
		if(expression.toHide == true)
		{
			div.style.display = "none";		
		}
		var divExpBar = document.createElement("div");
		var divExpLevel = document.createElement("div");
		var divLevelNotSync = document.createElement("div");
		var divExpLabel = document.createElement("div");
		divExpLabel.innerHTML = expression.description ? expression.description : expression.name;
		div.className = "div-main-page-element div-main-page-element-exp";
		
		divExpBar.className = "exp-bar";
		divExpBar.id = "exp" + expression.id;
		divLevelNotSync.className = "level-not-sync";
		divExpLabel.className = "exp-label";
		divExpBar.append(divExpLevel);
		div.append(divExpBar);
		div.append(divLevelNotSync);
		div.append(divExpLabel);
		div.idExp = expression.id;
		var nbExp = expressions.length;
		if(index < nbExp / 2)
		{
			divMainPage.insertBefore(div,divCenter);
		}
		else
		{
			divMainPage.append(div);
		}
		UpdateExpUi(expression.currentValue, expression);
		div.addEventListener('click', calculerPositionPointeur);
	});
	var nbToShow = expressions.filter((x)=>{return x.toHide===false;});
	divCenter.style.width = (99 - (nbToShow.length * 5)) + "%"; 
}
function calculerPositionPointeur(event) {
	var element = event.target;
	var hauteurTotale = element.clientHeight;
	var positionPointeur = event.clientY;
  
	var pourcentageDepuisLeBas = parseInt(((hauteurTotale - positionPointeur) / hauteurTotale) * 100);
  
	var exp = AppData.Expressions[element.idExp];
	if(exp)
	{
		//console.log(pourcentageDepuisLeBas + '%');
		//console.log(exp);
	}
  }
function FillListMyDevices()
{
	var listDevices = $("ul-my-devices");
	RemoveAllElements(listDevices);
	AppData.Devices.forEach((device) =>
	{
		var li = document.createElement("li");		
		var htmlDevice = $("template-device").cloneNode(true);
		htmlDevice.id = "device-" + device.id;
		ShowElement(htmlDevice);
		var txtDevice = htmlDevice.querySelector(".txt-device-name");
		var labelTxtDevice = htmlDevice.querySelector(".label-txt-device-name");
		var selectDeviceInput = htmlDevice.querySelector(".select-midi-message-device-input");
		var selectDeviceOutput = htmlDevice.querySelector(".select-midi-message-device-output");
		FillListDeviceInput(selectDeviceInput, device.deviceInputId, true);
		FillListDeviceOutput(selectDeviceOutput, device.deviceOutputId, true);
		txtDevice.id = "txt-device-" + device.id;
		txtDevice.value = device.name;
		labelTxtDevice.htmlFor = txtDevice.id;

		li.append(htmlDevice);
		listDevices.append(li);
	});
}
function FillListExpressionPageSettings()
{
	var list = $("ul-global-expression");	
	RemoveAllElements(list);
	AppData.Expressions.forEach((expression)=>
	{
		var li = document.createElement("li");
		li.append(GetHtmlInput("Name", expression.name, "expression-name-"+expression.id, "expression-name"));
		var html = GetHtmlMidiMessage(expression.trigger, true);
		html.id = "global-expression-" + expression.id;
		HideElement(html.querySelector(".element-midi-message-ccValue"));
		HideElement(html.querySelector(".element-midi-message-type"));
		HideElement(html.querySelector(".div-send-message-midi"));
		li.append(html);
		list.append(li);
	});	
}
function GetHtmlInput(title, value, inputId, inputClass)
{
	var form = document.createElement("div");
	form.className = "form";
	var input = document.createElement("input");
	input.id = inputId;
	input.type = "text";
	input.className = inputClass;
	input.value = value;
	var label = document.createElement("label");
	label.className = "label-name";
	var span = document.createElement("span");
	span.className = "content-name";
	span.innerHTML = title;
	label.append(span);
	form.append(input);
	form.append(label);
	return form;
}
function AddNewMyDevice()
{
	AppData.Devices.push(new MidiXDevice(AppData.Devices.length,"" ));
	FillListMyDevices();
}
var isEditButtons = false;
function ClickEditButtons()
{
	if(isEditButtons == true)
	{
		isEditButtons = false;
	}
	else
	{
		isEditButtons = true;
	}
	SetOpacityForEditButton();
}
function SetOpacityForEditButton()
{
	$("bar").style.opacity = isEditButtons ? 0.5 : 1;
	var buttons = document.getElementsByClassName("element");		
	for(var i = 0;i<buttons.length;i++)
	{
		if(isEditButtons)
		{
			buttons[i].classList.add("opacity");
		}
		else
		{
			buttons[i].classList.remove("opacity");
		}		
	}
}
function AddActionClick(idUl, isPage)
{
	var listActions = $(idUl);
	var li = document.createElement("li");
	var htmlAction = $("template-action").cloneNode(true);
	htmlAction.id = "edit-button-midi-action" + GetRandom();
	var action = new MidiXAction();
	var hide = true;
	FillEventList(htmlAction, action.event, isPage);
	FillActionList(htmlAction, action.action, isPage);
	FillListPage(htmlAction.querySelector(".select-page"), action.idPage, hide);
	FillListExp(htmlAction, action, hide);			
	FillLinkButton(htmlAction, action.linkedButton, hide);
	FillListStep(htmlAction.querySelector(".select-step"), null, action);
	FillExpTrigger(htmlAction, null, hide);
	FillKeyboardKey(htmlAction)
	ShowElement(htmlAction);
	if(isPage)
	{
		HideElement(htmlAction.querySelector(".div-select-step"));
		HideElement(htmlAction.querySelector(".div-select-color"));
	}
	var messageHtml = GetHtmlMidiMessage(new MidiXMessage());
	HideElement(messageHtml);
	htmlAction.append(messageHtml);		
	li.append(htmlAction);
	listActions.append(li);	
}
function AddGlobalTrigger()
{
	var listActions = $("ul-edit-button-global-trigger");
	var li = document.createElement("li");
	var messageHtml = GetHtmlMidiMessage(new MidiXMessage(), true);
	li.append(messageHtml);
	listActions.append(li);	
}
function AddCustomTrigger()
{
	var listActions = $("ul-edit-button-custom-trigger");
	var li = document.createElement("li");
	var messageHtml = GetHtmlMidiMessage(new MidiXMessage(), true);
	li.append(messageHtml);
	listActions.append(li);	
}
function GetCurrentPage()
{
	return AppData.Pages.find(function(e) {return e.active == true;});
}
function BuildButtons()
{
	var page = GetCurrentPage();
	$("page-title").innerText = page.name;
	$("page-title").style.fontSize = page.name.length > 12 ? "0.95em" : "0.95em";
	var itemByLine = page.items.length / 2;
	var itemForLine1 = page.nbButtonsByLine * Math.floor((page.items.length / page.nbButtonsByLine)/ 2);
	var ligne1 = $("div-ligne-1");
	var ligne2 = $("div-ligne-2");
	RemoveAllElements(ligne1);
	RemoveAllElements(ligne2);
	page.items.filter(function(e){return e.id < itemForLine1 ;}).forEach((item) =>
	{
		AddButtonToLigne(ligne1, item, page);
	});
	page.items.filter(function(e){return e.id >= itemForLine1;}).forEach((item) =>
	{
		AddButtonToLigne(ligne2, item, page);
	});
    UpdateButtons();
	
	if(page.items.length > 16)
	{
		ligne1.className = "ligneSup16Button";
		ligne2.className = "ligneSup16Button";
	}
	else
	{
		ligne1.className = "ligne";
		ligne2.className = "ligne";
	}
}
function UpdateButtons(idButtonClicked)
{
	var page = GetCurrentPage();
	page.items.forEach((item) => 
	{
		var divElement = $("div-element-"+item.id);
		if(!divElement)
		{
			return;
		}
		var divElementInside = divElement.firstChild;
		var p = divElementInside.firstChild;
		if(item.isPrepareMacro)
		{
			divElementInside.classList.add("prepare-macro");
			if(item.type=="Momentary")
			{
				p.className = "p-button-active"; 
			}
			else
			{
				var macro = itemsMacro.find(x=> x.idPage == page.id && x.idButton == item.id);
				p.className = macro.state == "On" ? "p-button-active" : "p-button";
			}
		}
		else
		{
			divElementInside.classList.remove("prepare-macro");
			if(item.type=="Momentary")
			{
				p.className = "p-button-active"; 
			}
			else
			{
				p.className = item.active ? "p-button-active" : "p-button";
			}
			if(item.buttonsInside)
			{
				item.buttonsInside.forEach((buttonInside, index) =>
				{
					
					var divElementButtonInside = $("div-element-button-inside-"+item.id+"-"+buttonInside.id);
					if(divElementButtonInside)
					{
						var pButtonElementInside = divElementButtonInside.firstChild.firstChild;
						if(buttonInside.type=="Momentary")
						{
							pButtonElementInside.className = "p-button-active"; 
						}
						else
						{
							pButtonElementInside.className = buttonInside.active ? "p-button-active" : "p-button";
						}
					}
				});		
			}
		}
		var macroItem = itemsMacro.find(x=> x.idPage == page.id && x.idButton == item.id);
		if(macroItem)
		{
			p.classList.add(macroItem.state == "Off" ? "macro-button-off" : "macro-button-on");
			var infoMacro = p.querySelector(".info-macro");
			infoMacro.innerHTML = itemsMacro.indexOf(macroItem) + 1;
		}
		else
		{
			p.classList.remove("macro-button-on");
			p.classList.remove("macro-button-off");
		}
		if(AppData.Expressions)
		{
			AppData.Expressions.forEach((expression) =>
			{
				if(!item.actions) return;
				var actionExp = item.actions.filter(function(e){return (e.action=="EXP" || e.action == "ExpSetValue") && e.idExp == expression.id;})[0];
				if(actionExp)
				{
					var divExp = divElementInside.querySelector(".div-element-inside-exp"+expression.id);
					if(divExp)
					{
						divExp.style.height = MapMidiValueTo100(actionExp.valueExp)+ "%";
					}
				}
			});
		}
		UpdateStep(item, divElement);
		UpdateLFO(item, divElement, idButtonClicked);
	});
}
function UpdateLFO(item, div, idButtonClicked)
{
	if(idButtonClicked != undefined && idButtonClicked != item.id) return;	
	if(!item.actions) return;
	var actionLFO = item.actions.filter(function(e) { return e.action=="LFO"; })[0];
	if(actionLFO)
	{
		
		var canvas = div.querySelector(".canvas-lfo");
		const ctx = canvas.getContext('2d');
		ctx.lineWidth = 3;
		ctx.strokeStyle ='#CACACA55';

		let lfo;
		let x;
		let y = canvas.height / 2;

		if(actionLFO.LFO.bypassType == "Pause")
		{
			if(!item.active) return;
			if(!item.Interval)
			{
				item.Interval = setInterval(() => {draw(actionLFO);}, actionLFO.LFO.refreshTime);
				ctx.beginPath();
				lfo = new LFO(actionLFO.LFO.min, actionLFO.LFO.max, actionLFO.LFO.frequency);
				x = 0;
			}
		}
		else if(actionLFO.LFO.bypassType == "Thru")
		{
			if(!item.Interval)
			{
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				item.Interval = setInterval(() => {draw(actionLFO);}, actionLFO.LFO.refreshTime);
				lfo = new LFO(actionLFO.LFO.min, actionLFO.LFO.max, actionLFO.LFO.frequency);
				x = 0;
			}
		}
		else
		{
			clearInterval(item.Interval);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if(!item.active) return;
			item.Interval = setInterval(() => {draw(actionLFO);}, actionLFO.LFO.refreshTime);
			lfo = new LFO(actionLFO.LFO.min, actionLFO.LFO.max, actionLFO.LFO.frequency);
			x = 0;
		}
		
		
		let state = 0.7;
		let lineSize = canvas.width / 3;
		function draw() 
		{
			if(actionLFO.LFO.bypassType == "Pause" && !item.active)
			{
				return;
			}
			else
			{
				ctx.beginPath();
			}
			let value = 0;
			state += 0.03;
			if(state> 1)
			{
				state = 0;
			}
			lfo.setState(state);
			if(actionLFO.LFO.type== "Sin") value = lfo.getSin();
			if(actionLFO.LFO.type== "Cos") value = lfo.getCos();
			if(actionLFO.LFO.type== "Triangle") value = lfo.getTriangle();
			if(actionLFO.LFO.type== "Saw") value = lfo.getSaw();
			if(actionLFO.LFO.type== "Square") value = lfo.getSquare();
			if(actionLFO.LFO.type== "Noise") value = lfo.getNoise();
			
			
			ctx.moveTo(x, y);
			x++;
			if (x >= canvas.width) {
				ctx.beginPath();
				x = 0;
				
			}
			y = (canvas.height / 2) - (value / 2);
			ctx.lineTo(x, y);
			ctx.stroke();
			if(x > lineSize)
			{
				ctx.clearRect(0,0, x - lineSize, canvas.height);
			}
			else
			{
				ctx.clearRect(x, 0,  (x/4) + canvas.width - lineSize, canvas.height);
			}
			///Send Midi
			if(actionLFO.LFO.bypassType == "Pause")
			{
				if(actionLFO.message)
				{		
					actionLFO.message.ccValue = MapValueLFOToMidi(value);
					SendMidi(actionLFO.message);			
				}
			}
			else if(actionLFO.LFO.bypassType == "Thru")
			{
				if(actionLFO.message && item.active)
				{		
					actionLFO.message.ccValue = MapValueLFOToMidi(value);
					SendMidi(actionLFO.message);			
				}
			}
			else
			{	
				if(actionLFO.message)
				{		
					actionLFO.message.ccValue = MapValueLFOToMidi(value);
					SendMidi(actionLFO.message);			
				}
			}
			
		}
	}
}
function ClickButton(item, obj)
{
	if(obj)
	{
		obj.classList.remove("animateOnce");
		obj.firstChild.className = "element-inside bg-rainbow-" + item.color;
		obj.classList.add("animateOnce");
	}
	if(isEditButtons)
	{
		OpenEditButtonPage(item);
		isEditButtons = false;
		SetOpacityForEditButton();
		return;
	}
	if(isPrepareMacro)
	{
		
		//var page = GetCurrentPage();
		//if(page.id != buttonPrepareMacro.idPage || item.id != buttonPrepareMacro.idButton)
		{
			var hasToReturn = AddButtonToMacro(item, obj);
			if(hasToReturn)
			{
				ActionClickFinalise(item, obj);
				return;
			}
		}
		
	}
	SetInfoExpToActions();   
	HandleActions(item, obj);	
}
function ActionClickFinalise(item, obj)
{
	if(item.doublePressTime)
	{
		item.doublePressTime = null;
	}
	item.currentStep++;
	if(obj)
	{
		setTimeout(function(){obj.classList.remove("animateOnce");}, 500);
	}
	SetInputMidiMessageToHandle();
	UpdateButtons(item.id);	
	SetLastButtons(item);
	SetActiveButtons(item);
}
function SetLastButtons(item)
{
	if(item.excludeToLast === true) return;
	var page = AppData.Pages.filter((p) =>{return p.name == "Last";})[0];
	if(!page)
	{
		page = new MidiXPage(AppData.Pages.length, "Last");
		AppData.Pages.push(page);
		for(var i = page.items.length; i < 8 ; i++)
		{
			page.items.push(new MidiXItem("", i, "", "Preset", false, "", [], "brown", []));
		}
	}
	var exist = page.items.filter((x) => {return x.identifier == item.identifier;})[0];
	if(exist) return;
	var newItem = Object.assign({}, item);
	page.items.push(newItem);
	if(page.items.length < 8)
	{
		for(var i = page.items.length; i < 8 ; i++)
		{
			page.items.push(new MidiXItem("", i, "", "Preset", false, "", [], "brown", []));
		}
	}
	if(page.items.length > 8)
	{
		var items = [];
		for(var i = page.items.length - 8; i < page.items.length; i++)
		{
			items.push(page.items[i]);
		}
		page.items = items;
	}
	page.items.forEach((item, index)=>{
		item.id = index;
	});
}
function SetActiveButtons(item)
{
	if(item.excludeToLast === true) return;

	AppData.Pages = AppData.Pages.filter((p) => { return !p.name.startsWith("Active");});	
	
	var itemsActive = [];
	AppData.Pages.forEach((page) =>{
		if(page.name == "Last") return;
		page.items.forEach((i) => {
			if(i.excludeToLast === true) return;
			if(i.type == "Preset" && i.active === true )
			{
				var newItem = Object.assign({}, i);
				itemsActive.push(newItem);
			}
		});
	});
	for(var i = 0; i < parseInt(itemsActive.length / 8) + 1 ; i++ )
	{
		var page = new MidiXPage(AppData.Pages.length, "Active "+ (i+1));
		AppData.Pages.push(page);
		for(var y = 0; y < 8; y++)
		{
			var index = y + (i*8);
			var xItem = itemsActive[index];
			if(!xItem)
			{
				xItem = new MidiXItem("", y, "", "Preset", false, "", [], "brown", []);				
			}
			xItem.id = y;
			page.items.push(xItem);
		}
	}
	
}
function SusbcribeToKeyboardEvents()
{
	document.addEventListener('keydown', function (event) {
		var id = `keyboard-${event.key}`;
		if(AppData.KeyboardInputToHandle[id])
		{
			AppData.KeyboardInputToHandle[id].forEach((f)=> { f(); });
		}
	  });
}
function HandleActions(item, obj)
{
	var doublePressActions = item.actions.filter(function(a) {return a.event == "DoublePress"});	
	if(!item.doublePressTime)	
	{
		var hasDoublePress = doublePressActions.length > 0;	
		if(hasDoublePress)
		{
			ShowLoading(obj, AppData.DoublePressTime);
			item.doublePressTime = Date.now();
			setTimeout(() => 
			{
				if(!item.doublePressTime) return;
				var now = Date.now();
				if(now - item.doublePressTime >= AppData.DoublePressTime)
				{
					if(item.type == "Preset")	{ item.active = item.active ? false : true;	}
					HandleGroup(item);
					var action = item.actions[0];	
					if(action)
					{
						item.doublePressTime = null;
						HandleAction(item, obj, action, 0);	
					}
					else
					{
						ActionClickFinalise(item, obj);
					}
				}
			}, AppData.DoublePressTime);
			return;
		}		
	}
	else
	{
		var now = Date.now();
		if(now - item.doublePressTime < AppData.DoublePressTime)
		{
		}
		else
		{
			item.doublePressTime = null;
		}
	}
	var isDoublePressGoToPage = doublePressActions.length == 1 && (doublePressActions[0].action == "GoPage");
	if(item.type=="Preset" && !isDoublePressGoToPage)	{ item.active = item.active ? false : true;	}
	HandleGroup(item);
	var action = item.actions[0];	
	if(action)
	{
		HandleAction(item, obj, action, 0);	
	}
	else
	{
		ActionClickFinalise(item, obj);
	}
}
function HandleAction(item, obj, action, index)
{
	if(item && item.doublePressTime && action.event != "DoublePress") { HandleNextAction(item, obj, action, index); return; }
	if(HandleConditionnalLinkButton(action) == false) { HandleNextAction(item, obj, action, index); return; }
	if(HandleConditionnalScript(action) == false) { HandleNextAction(item, obj, action, index); return; }
	if(action.event == "DoublePress" && !item.doublePressTime) { HandleNextAction(item, obj, action, index); return; }
	if(action.action == "Midi" && action.message.midiType == "Clock") { HandleMidiClock(item, obj, action, index); return; }
	if(action.event == "OnPress" && !item.active && item.type=="Preset")  { HandleNextAction(item, obj, action, index); return; }
	if(action.event == "OnRelease" && item.active && item.type=="Preset") { HandleNextAction(item, obj, action, index); return; }
	if(action.step)
	{
		if(action.step.id != item.currentStep) {
			HandleNextAction(item, obj, action, index);
			return;
		};
	}
	if(action.action == "NextPage")
	{
		NextPage();
	}
	else if(action.action == "PreviousPage")
	{
		PreviousPage();
	}
	else if(action.action == "LastPage")
	{
		var currentPage = GetCurrentPage();
		if(currentPage.idLastPage)
		{
			GotoPage(currentPage.idLastPage)
		}
	}
	else if(action.action == "GoPage")
	{
		GotoPage(action.idPage);
	}
	else if(action.action == "Midi" || (action.action == "Midi" && item.type=="Momentary"))
	{
		SendMidi(action.message, action);
	}
	else if(action.action == "EXP")
	{
		var page = GetCurrentPage();
		var exp = AppData.Expressions[action.idExp];
		var divExp = $("exp"+exp.id);	
		if(divExp)
		{			
			exp.valueToResync = action.valueExp;
			exp.isExpLowerToResync = exp.currentValue < action.valueExp;
			exp.isSync = false;			
			exp.expTriggerAction = [];			
			exp.currentButton = new MidiXLinkButton(page.id, item.id);
			divExp.classList.add("exp-not-sync");
			var divExpLabel = divExp.parentNode.querySelector(".exp-label");
			if(action.name)
			{
				divExpLabel.innerHTML = action.name;
				exp.description = action.name;
			}
			else	
			{
				divExpLabel.innerHTML = exp.name;
			}		
			
			var divLevelNotSync = divExp.parentNode.querySelector(".level-not-sync");
			ShowElement(divLevelNotSync);
			divLevelNotSync.style.height = MapMidiValueTo100(action.valueExp) + "%";
		}
	}
	else if(action.action == "EXPTrigger")
	{
		var exp = AppData.Expressions[action.idExp];
		exp.expTriggerAction.push(action);
	}
	else if( action.action == "ExpSetValue")
	{
		var page = GetCurrentPage();
		var exp = AppData.Expressions[action.idExp];
		var divExp = $("exp"+exp.id);	
		exp.currentValue = action.valueExp;			
		exp.valueToResync = action.valueExp;
		exp.isSync = true;			
		exp.expTriggerAction = [];			
		exp.currentButton = new MidiXLinkButton(page.id, item.id);
		divExp.classList.remove("exp-not-sync");
		var divExpLabel = divExp.parentNode.querySelector(".exp-label");
		if(action.name)
		{
			divExpLabel.innerHTML = action.name;
			exp.description = action.name;
		}
		else	
		{
			divExpLabel.innerHTML = exp.name;
		}		
		
		var midi = action.message;
		midi.ccValue = action.valueExp;
		SendMidi(midi, action);
	}
	else if(action.action == "LinkButton")
	{
		var linkedButton = AppData.Pages[action.linkedButton.idPage].items[action.linkedButton.idButton];
		HandleLinkButton(action, linkedButton);
	}
	else if(action.action == "PrepareMacro")
	{
		if(isPrepareMacro == true)
		{
			isPrepareMacro = false;
			buttonPrepareMacro = null;
			AppData.Pages.forEach((page) =>
			{
				page.items.forEach((item) =>
				{
					item.isPrepareMacro = false;
				});
			});
			HideElement($("macro-recording"));
			ShowElement($("edit-page"));
		}
		else
		{			
			isPrepareMacro = true;
			itemsMacro = [];
			var page = GetCurrentPage();
			buttonPrepareMacro = new MidiXMacroButtonToExecute(page.id, item.id);
			ShowElement($("macro-recording"));
			HideElement($("edit-page"));
		}
	}
	else if(action.action == "CancelMacro")
	{
		isPrepareMacro = false;
		itemsMacro = [];
		buttonPrepareMacro = null;
		AppData.Pages.forEach((page) =>
		{
			page.items.forEach((item) =>
			{
				item.isPrepareMacro = false;
			});
		});
		
	}
	else if(action.action == "PlayMacro")
	{
		HandleMacro();
	}
	if(obj)
	{
		var label = obj.querySelector(".label-button");
		label.innerHTML = item.name;
		if(action.event == "OnPress" && item.active == true && action.name) 
		{
			if(action.action=="EXP" && (action.idExp == 2 || action.idExp == 3))
			{

			}
			else
			{
				label.innerHTML = action.name;
			}
		} 
		if(action.ev == "OnRelease" && item.active == false && action.name)
		{
			label.innerHTML = action.name;
		}
	}
	if(index != undefined)
	{
		HandleNextAction(item, obj, action, index);
	}
}
function HandleConditionnalLinkButton(action)
{
	var result = true;	
	if(!action.conditionnalLinkButtons) return result;
	var forceResult = "";
	var listMustConditionnal = action.conditionnalLinkButtons.filter(function (e) {return e.conditionnalOperator == "MustBe" || e.conditionnalOperator == "MustNotBe"});
	listMustConditionnal.forEach((link, index) =>
	{
		var button = AppData.Pages[link.idPage].items[link.idButton];
		if(button.active == undefined)
		{
			button.active = false;
		}	
		if(
			(link.conditionnalOperator == "MustBe" && link.state == "On" && button.active == true)
		   || (link.conditionnalOperator == "MustBe" && link.state == "Off" && button.active == false))
		{
				forceResult = "O"
		}
		if(
			(link.conditionnalOperator == "MustNotBe" && link.state == "On" && button.active == true)
		   || (link.conditionnalOperator == "MustNotBe" && link.state == "Off" && button.active == false))
		{
				forceResult = "N"
		}
	});
	if(forceResult!= "")
	{
		return forceResult == "O";
	}
	action.conditionnalLinkButtons.forEach((link, index) =>
	{		
		var button = AppData.Pages[link.idPage].items[link.idButton];
		if(button.active == undefined)
		{
			button.active = false;
		}		
		var current = (link.state == "On" && button.active == true) || (link.state=="Off" && button.active == false);
		if(index == 0) result = current;
		else
		{
			if(link.conditionnalOperator == "AND")
			{
				result = (result == true) && (current == true);
			}
			else if (link.conditionnalOperator == "OR")
			{
				result = (result == true) || (current == true);
			}
		}
	});
	
	return result;
}
function HandleConditionnalScript(action)
{
	if(!action.conditionnalScript) return true;
	var resultTestConditionnalScript;
	var script = `
		function TestConditionnal()
		{
			${action.conditionnalScript}
		}
		resultTestConditionnalScript = TestConditionnal();
	`;
	eval(script);
	return resultTestConditionnalScript;
}
function HandleNextAction(item, obj, action, index)
{
	var nextAction = item.actions[index + 1];
	if(nextAction)
	{	
		if(action.timeToWait> 0 && obj)
		{
			ShowLoading(obj, action.timeToWait);
		}
		setTimeout(() => {
			HandleAction(item, obj, nextAction, index + 1);	
		}, action.timeToWait);		
	}
	else
	{
		ActionClickFinalise(item, obj);
	}
}
function HandleMidiClock(item, obj, action, index)
{
	var divMidiClock = obj.querySelector(".midi-clock");
	if(!item.active && action.message.clockInterval)
	{
		clearInterval(action.message.clockInterval);
		divMidiClock.style.animation = "";
		HideElement(divMidiClock)
	}
	if(item.active)
	{
		var time = BpmToMs(action.message.bpm);
		var outputDeviceId = GetDeviceOutput(action.message.device);
		var device = WebMidi.getOutputById(outputDeviceId);
		var interval = setInterval(()=>
		{
			if(!device)
			{
				LogError("No device found", outputDeviceId);
				return;
			}
			sendMidiClock(device);
			

		}, time);
		action.message.clockInterval = interval;
		ShowElement(divMidiClock);
		divMidiClock.style.animation = `fade-out ${time * 24}ms infinite`;
	}
	HandleNextAction(item, obj, action, index);
}
function ShowLoading(div, time)
{
	var loading = div.querySelector(".circle-wrap");
	ShowElement(loading);
	var elements = div.querySelectorAll(".mask.full,.circle .fill");
	elements.forEach((e) => 
	{
		e.style.animation = `fill ease-in-out ${time}ms`;
	})
	setTimeout(() =>
	{
		HideElement(loading);
	}, time);
	
}
function HandleLinkButton(action, linkedButton)
{
	var linkButtonAction = action.linkedButton;
	var linkedButton = AppData.Pages[action.linkedButton.idPage].items[action.linkedButton.idButton];
	if(linkButtonAction.action == "Toggle")
	{
		ClickButton(linkedButton);
	}
	else if(linkButtonAction.action =="On" && !linkedButton.active)
	{
		ClickButton(linkedButton);
	}	
	else if(linkButtonAction.action =="Off" && linkedButton.active)
	{
		ClickButton(linkedButton);
	}
	else if(linkButtonAction.action == "StepReset")			
	{
		linkedButton.currentStep = 0;
	}
	else if(linkButtonAction.action == "StepNext")
	{
		var maxStep = GetMaxStep(linkedButton.actions);
		linkedButton.currentStep++;
		if(linkedButton.currentStep > maxStep)
		{
			linkedButton.currentStep = 0;
		}
	}
	else if(linkButtonAction.action == "StepPrevious")
	{
		var maxStep = GetMaxStep(linkedButton.actions);
		linkedButton.currentStep--;
		if(linkedButton.currentStep < 0)
		{
			linkedButton.currentStep = maxStep;
		}
	}
	else if(linkButtonAction.action == "StateToggle")
	{
		linkedButton.active = linkedButton.active == true ? false : true;
	}
	else if(linkButtonAction.action =="StateOn" )
	{
		linkedButton.active = true;
	}	
	else if(linkButtonAction.action =="StateOff" && linkedButton.active)
	{
		linkedButton.active = false;
	}
}
function HandleMacro()
{
	itemsMacro.forEach((macro) => 
	{
		var button = AppData.Pages[macro.idPage].items[macro.idButton];
		if(button.active == true && macro.state == "On")
		{
			button.active = false;
		}
		else if( button.active == false && macro.state == "Off")
		{
			button.active = true;
		}
		ClickButton(button);
	});
}
function GetMaxStep(actions)
{
	var maxStep = 0;
	if(!actions) return maxStep;
	actions.forEach((action) =>
	{	
		if(action.step)
		{
			if(action.step.id > maxStep)
			{
				maxStep = action.step.id;
			}
		}		
	});
	return maxStep;
}
function UpdateStep(item, obj)
{
	var maxStep = GetMaxStep(item.actions);
	var stepName = "";
	if(!item.actions) return;
	item.actions.forEach((action) =>
	{	
		if(action.step)
		{
			if(action.step.id == item.currentStep)
			{
				stepName = action.name;
			}
		}
		if(action.color)
		{
			if(obj)
			{					
				if(action.step && action.step.id == item.currentStep)
				{
					obj.firstChild.className = "element-inside bg-rainbow-" + action.color;
				}
				else if(!action.step)
				{
					if(action.event == "OnPress" && item.active)
					{
						obj.firstChild.className = "element-inside bg-rainbow-" + action.color;
					}
					else if(action.event == "OnRelease" && !item.active)
					{
						obj.firstChild.className = "element-inside bg-rainbow-" + action.color;
					}
					else if(action.event == "Any")
					{
						obj.firstChild.className = "element-inside bg-rainbow-" + action.color;
					}
				}
				else
				{
					obj.firstChild.className = "element-inside bg-rainbow-" + item.color;
				}	
			}
		}
				
	});
	if(item.currentStep > maxStep)
	{
		item.currentStep = 0;
		item.actions.forEach((action) =>
		{	
			if(action.step)
			{
				if(action.step.id == item.currentStep)
				{
					stepName = action.name;
				}
			}		
		});
	}
	if(obj && maxStep > 0 )
	{
		var labelStep = obj.querySelector(".label-step");
		labelStep.innerHTML = `${item.currentStep + 1}/${maxStep + 1} ${stepName}`;
	}
}
function SetInfoExpToActions()
{
	AppData.Pages.forEach((page) =>
	{
		page.items.filter(function(e) {return e.active == true;}).forEach((item) =>
		{
			item.actions.forEach((action) =>
			{
				if(action.action == "EXP" || action.action == "ExpSetValue")
				{
					var exp = AppData.Expressions[action.idExp];
					if(exp.isSync == true)
					{
						action.valueExp = exp.currentValue;						
					}
				}
			});
		});
	});
}
function GetDefaultInputDevice()
{
	return $("select-midi-inputs").value;
}
function GetDefaultOutputDevice()
{
	return $("select-midi-outputs").value;
}
function HandleGroup(item)
{
	if(!item.active) return;
	AppData.Pages.forEach((page) =>
	{
		page.items.forEach((i) =>
		{
			if(item.id  != i.id && item.group && i.group == item.group && item.group != "None")
			{
				if(i.active && i.actions && i.actions[0])
				{
					HandleAction(i, null, i.actions[0], 0);
				}
				i.active = false;
			}
		});
	});
}
function AddButtonToLigne(ligne, item, page, idInsideButton, indexInsideButton)
{	
	
	let divElement = document.createElement("div");
	divElement.className = "element";		
	divElement.id = "div-element-" + item.id;
	if(idInsideButton != undefined)
	{
		divElement.className = "element-button-inside element-button-inside-"+indexInsideButton;
		divElement.id = "div-element-button-inside-" + idInsideButton;
	}
	divElement.item = item;
	divElement.addEventListener("click", 
		function(event)
		{
			ClickButton(this.item, divElement);
			event.stopPropagation();
		});
	let divElementInside = document.createElement("div");
	divElementInside.className = "element-inside shadow bg-rainbow-" + item.color;
	if(page != undefined)
	{
		divElement.style.width = (100 / page.nbButtonsByLine) + "%";
		if(page.items.length < 10)
		{
			divElementInside.style.fontSize = "2.5em";
		}
	}	

	let p = document.createElement("div");
	if(AppData.Expressions)
	{
		AppData.Expressions.forEach((expression)=>{
			if(!item.actions) return;
			var actionExp = item.actions.filter(function(e){return (e.action=="EXP" || e.action == "ExpSetValue") && e.idExp == expression.id;})[0];
			if(actionExp && expression.id % 2 == 0)//(expression.id == 0 || expression.id==2))
			{
				let divExp = document.createElement("div");
				divExp.className = "div-element-inside-exp div-element-inside-exp" + expression.id;
				p.appendChild(divExp);
			}
		});
	}
	p.className = item.active == true ? "p-button-active" : "p-button";
	var label = document.createElement("p");
	label.innerHTML = item.name;
	
	label.className = "label-button";
	var lengthName = item.name.length;
	var startInfoMix = item.name.indexOf("<div class='info-mix'>");
	if(startInfoMix > -1)
	{
		lengthName = startInfoMix;
	}
	if(lengthName > 20)
	{
		label.className += " small-font-size";	
	}
	p.append(label);
	var labelStep = document.createElement("p");
	labelStep.className = "label-step";
	p.append(labelStep);
	divElementInside.appendChild(p);
	AddLoadingToButton(p);
	var divMidiClock = CreateElement("div", "midi-clock");
	p.append(divMidiClock);
	var divInfoMacro = CreateElement("div", "info-macro");
	p.append(divInfoMacro);
	if(AppData.Expressions)
	{
		AppData.Expressions.forEach((expression)=>{
			if(!item.actions) return;
			var actionExp = item.actions.filter(function(e){return (e.action=="EXP" || e.action == "ExpSetValue") && e.idExp == expression.id;})[0];
			if(actionExp && expression.id % 2 == 1)//&&  (expression.id == 1 || expression.id==3))
			{
				let divExp = document.createElement("div");
				divExp.className = "div-element-inside-exp div-element-inside-exp" + expression.id;
				p.appendChild(divExp);
			}
		});
	}

	divElement.appendChild(divElementInside);	
	var canvas = document.createElement("canvas");
	canvas.style.width = "100%";
	canvas.style.height = "100%";
	canvas.id = "canvas-" + item.id;
	canvas.className = "canvas-lfo";
	p.append(canvas);

	AddTouchExp(item, p);
	AddTouchButton(item, p);
	AddButtonsInside(item, p);
	
	ligne.appendChild(divElement);
}
function AddButtonsInside(item, p)
{
	if(item.buttonsInside == undefined || item.buttonsInside.length == 0) return;
	item.buttonsInside.forEach((buttonInside, index) =>{
		if(!buttonInside.color)
		{
			buttonInside.color = item.color;
		}
		AddButtonToLigne(p, buttonInside, null, `${item.id}-${buttonInside.id}`, index);
	});
	
}
var startTouchMidiValue = 0;
function AddTouchExp(item, p)
{
	var expActions = item.actions.filter(function(e){return e.action=="EXP";});
	var expAction = expActions[0];
	if(expAction)
	{
		
		var divTouchExpButton = CreateElement("div", expActions.length>1 ? "touch-exp0" : "touch-exp");
		var divLabel = CreateElement("div", "touch-exp-label0");
		divLabel.innerText = expAction.name;
		p.append(divLabel);
		
		divTouchExpButton.addEventListener('touchstart', function (e) {
			const touch = e.touches[0]; // Obtenez le premier touch (il peut y en avoir plusieurs)
			item.startY = touch.clientY; // Stockez la coordonnée X de départ
			startTouchMidiValue = expAction.valueExp;
		});
		divTouchExpButton.addEventListener('touchmove', function (e) {
			const touch = e.touches[0]; 
			var currentY = parseInt(touch.clientY); 
			var totalHeight = parseInt(divTouchExpButton.offsetHeight) * 2;
			var startY = parseInt(item.startY);
			var diff = startY - currentY;
			var valueDiffMidi = parseInt(Map(Math.abs(diff), 0, totalHeight, 0, 127));
			var newValueMidi = startTouchMidiValue + ((diff < 0 ? -1 : 1)* valueDiffMidi);
			if(newValueMidi > 127) newValueMidi = 127;
			if(newValueMidi < 0) newValueMidi = 0;
			//console.log("-----------------------------");
			//console.log(`start 				: ${startY}`);
			//console.log(`totalHeight 		: ${totalHeight}`);
			//console.log(`currentY 			: ${currentY}`);
			//console.log(`diff 				: ${diff}`);
			//console.log(`valueDiffMidi 		: ${valueDiffMidi}`);
			//console.log(`newValueMidi 		: ${newValueMidi}`);
			var newMessage = new MidiXMessage(expAction.message.device, expAction.message.channel, expAction.message.midiType, expAction.message.value, newValueMidi);
			SendMidi(newMessage);
			UpdateExpButton(GetCurrentPage(), item, newValueMidi, 0);
			
		});
		divTouchExpButton.addEventListener('touchend', function (e) {
			//ClickButton(AppData.Pages[0].items[1]);
		});
		p.append(divTouchExpButton);
	}
	var expAction1 = expActions[1];
	if(expAction1)
	{
		var divTouchExpButton = CreateElement("div", expActions.length>1 ? "touch-exp1" : "touch-exp");
		var divLabel = CreateElement("div", "touch-exp-label1");
		divLabel.innerText = expAction1.name;
		p.append(divLabel);

		divTouchExpButton.addEventListener('touchstart', function (e) {
			const touch = e.touches[0]; // Obtenez le premier touch (il peut y en avoir plusieurs)
			item.startY = touch.clientY; // Stockez la coordonnée X de départ
			startTouchMidiValue = expAction1.valueExp;
		});
		divTouchExpButton.addEventListener('touchmove', function (e) {
			const touch = e.touches[0]; 
			var currentY = parseInt(touch.clientY); 
			var totalHeight = parseInt(divTouchExpButton.offsetHeight) * 2;
			var startY = parseInt(item.startY);
			var diff = startY - currentY;
			var valueDiffMidi = parseInt(Map(Math.abs(diff), 0, totalHeight, 0, 127));
			var newValueMidi = startTouchMidiValue + ((diff < 0 ? -1 : 1)* valueDiffMidi);
			if(newValueMidi > 127) newValueMidi = 127;
			if(newValueMidi < 0) newValueMidi = 0;
			//console.log("-----------------------------");
			//console.log(`start 				: ${startY}`);
			//console.log(`totalHeight 		: ${totalHeight}`);
			//console.log(`currentY 			: ${currentY}`);
			//console.log(`diff 				: ${diff}`);
			//console.log(`valueDiffMidi 		: ${valueDiffMidi}`);
			//console.log(`newValueMidi 		: ${newValueMidi}`);
			var newMessage = new MidiXMessage(expAction1.message.device, expAction1.message.channel, expAction1.message.midiType, expAction1.message.value, newValueMidi);
			SendMidi(newMessage);
			UpdateExpButton(GetCurrentPage(), item, newValueMidi, 1);
			
		});
		divTouchExpButton.addEventListener('touchend', function (e) {
			//ClickButton(AppData.Pages[0].items[1]);
		});
		p.append(divTouchExpButton);
	}
}
function AddTouchButton(item, p)
{
	var butActions = item.actions.filter(function(e){return e.action=="Button";});
	butActions.forEach((butAction, index) => {
		var divTouchButton = CreateElement("div", "touch-button touch-button-" +index);
		var divLabel = CreateElement("div", "touch-button-label");
		divLabel.innerText = butAction.name;
		divTouchButton.append(divLabel);
		p.append(divTouchButton);

		divTouchButton.addEventListener('click', function (e) {
			//ClickButton(AppData.Pages[0].items[1]);
			e.stopPropagation();
		});
	});	
}
function AddLoadingToButton(div)
{
	var divCircleWarp = CreateElement("div", "circle-wrap");
	var divCircle = CreateElement("div", "circle");
	var divMaskFull = CreateElement("div", "mask full");
	var divFill1 = CreateElement("div", "fill");
	var divMaskHalf = CreateElement("div", "mask half");
	var divFill2 = CreateElement("div", "fill");
	var divInsideCircle = CreateElement("div", "inside-circle");


	div.append(divCircleWarp);
	divCircleWarp.append(divCircle);
	divCircle.append(divMaskFull);
	divCircle.append(divMaskHalf);
	divCircle.append(divInsideCircle);
	divMaskFull.append(divFill1);
	divMaskHalf.append(divFill2);	
}
function GotoPage(id)
{
	var idLastPage  = null;
	AppData.Pages.forEach((page) =>
    {
		if(page.active)
		{
			idLastPage = page.id;
			if(page.actions)
			{
				page.actions.filter(function(e){return e.event == "OnLeaving";}).forEach((action) =>
				{
					SendMidi(action.message,action);
				});
			}
		}
        page.active = false;
    });
    var page = AppData.Pages[id];
	page.active = true;
	page.idLastPage = idLastPage;
	if(page.actions)
	{
		page.actions.filter(function(e){return e.event == "OnLoad";}).forEach((action) =>
		{
			HandleAction(null, null, action);

		})
	}
	BuildButtons();	
	BuildExp();
}
function NextPage()
{
	try
	{
		var currentPage = GetCurrentPage();
		
		var nextPage = AppData.Pages.find(function (e) {return e.id == currentPage.id + 1;});
		if(nextPage)
		{
			GotoPage(nextPage.id);
			if(nextPage.visible != undefined && nextPage.visible === false)
			{
				NextPage();
			}
		}
		else
		{
			GotoPage(0);
			var currentPage = GetCurrentPage();
			if(currentPage.visible != undefined && currentPage.visible === false)
			{
				NextPage();
			}
		}
	}
	catch(e)
	{
		
		GotoPage(0);
	}

	
}
function PreviousPage()
{
	var currentPage = GetCurrentPage();
	var nextPage = AppData.Pages.find(function (e) {return e.id == currentPage.id - 1;});
	if(nextPage)
	{
		GotoPage(nextPage.id);
		if(nextPage.visible != undefined && nextPage.visible === false)
		{
			PreviousPage();
		}
	}
	else
	{
		GotoPage(AppData.Pages.length -1);
		var currentPage = GetCurrentPage();
		if(currentPage.visible != undefined && currentPage.visible === false)
		{
			PreviousPage();
		}
	}
	
}
function OpenPage(page)
{
	ClosePages();
	ShowElement(page);
}
function ClosePages()
{
	HideElement($("div-main-page"));
	HideElement($("div-settings-page"));
	HideElement($("div-edit-button-page"));
	HideElement($("div-logs-page"));
	HideElement($("div-edit-page"));
}
function OpenSettingsPage()
{	
	FillSettingsPages();
	FillSettingsGroups();
	FillListMyDevices();
	FillListExpressionPageSettings();	
	BuildProfiles();
	$("txt-double-press-time").value = AppData.DoublePressTime;
	OpenPage($("div-settings-page"));
}
function FillSettingsGroups()
{
	var list = $("ul-list-group");
	RemoveAllElements(list);
	AppData.Groups.forEach((group)=>
	{
		AddGroupToList(list, group);
	});
}
function AddGroupToList(ul, group)
{
	if(group =="None")return;
	var li = document.createElement("li");
	var label = document.createElement("label");
	label.className = "label-group-name"
	label.innerText = group;
	li.append(label);
	ul.append(li);
}
function FillSettingsPages()
{
	var listPages = $("ul-list-pages");
	RemoveAllElements(listPages);
	AppData.Pages.forEach((page)=>
	{
		var li = document.createElement("li");
		var label = document.createElement("label");
		var divButton = CreateElement("div", "div-inline")
		var buttonOpen = document.createElement("button");
		buttonOpen.className = "button-open-page";
		buttonOpen.innerText = "Open";
		buttonOpen.onclick = function()
		{
			OpenMainPage();
			GotoPage(page.id);
		};
		
		var buttonEdit  = document.createElement("button");
		buttonEdit.className = "button-edit-page";
		buttonEdit.innerText = "Edit";
		buttonEdit.onclick = function()
		{
			OpenEditPage(page.id);
		};
		divButton.append(buttonEdit);
		divButton.append(buttonOpen);
		label.innerText = page.name;
		li.append(label);
		li.append(divButton);
		listPages.append(li);
	});
}
function AddNewGroup()
{	
	var input = $("txt-new-group");
	if(!CheckNotEmpty(input)) return;
	var value = input.value;
	var list = $("ul-list-group");
	if(value && !AppData.Groups.includes(value))
	{
		AddGroupToList(list, value);
	}
	input.value = "";
}
function AddNewExpression()
{	
	var ul = $("ul-global-expression");
	var li = document.createElement("li");
	var index = AppData.Expressions.length;
	li.append(GetHtmlInput("Name", "", "expression-name-" + index, "expression-name"));
	var html = GetHtmlMidiMessage(new MidiXMessage("", "", "CC"), true);
	html.id = "global-expression";
	HideElement(html.querySelector(".element-midi-message-ccValue"));
	HideElement(html.querySelector(".element-midi-message-type"));
	li.append(html);
	ul.append(li);
}
function AddNewConditionnalLinkButton(obj)
{	
	var ul = obj.parentNode.parentNode.querySelector(".ul-list-conditionnal-link-button");
	var li = document.createElement("li");
	li.append(GetHtmlConditionnalLinkButton());
	ul.append(li);
}
function GetHtmlConditionnalLinkButton(link)
{
	var html = $("template-conditionnal-link-button").cloneNode(true);
	html.id = "midi-message" + GetRandom();
	var selectLinkButton = html.querySelector(".select-conditionnal-link-button");
	var selectLinkButtonOperator = html.querySelector(".select-conditionnal-link-button-operator");
	var selectLinkButtonState = html.querySelector(".select-conditionnal-link-button-state");
	RemoveOptions(selectLinkButton);
	AppData.Pages.forEach((page) =>
	{
		page.items.forEach((item)=>
		{
			AddOption(selectLinkButton, `${page.name} - ${item.name}`, `${page.id}-${item.id}`)
		})
	});
	ShowElement(html, true);
	if(link)
	{
		selectLinkButton.value = link.idPage + "-" + link.idButton;
		selectLinkButtonOperator.value = link.conditionnalOperator;
		selectLinkButtonState.value = link.state;
	}
	return html;
}
function AddNewProfile()
{	
	var input = $("txt-new-profile");
	if(!CheckNotEmpty(input)) return;
	var value = input.value;
	var list = $("ul-profiles");
	if(value)
	{
		var profile = GetNewProfile(AppProfiles.Profiles.length, value);
		
		AppProfiles.Profiles.push(profile);		
		OpenProfile(profile.id);
		SaveDb("profiles", AppProfiles);
	}
	input.value = "";
}
function GetNewProfile(id, name)
{
	var profile = new Profile(id, name);
	var page = new MidiXPage(0, "Default", true, [], []);
	for(var i=0;i<page.nbButtons;i++)
	{
		page.items.push(new MidiXItem( "",i, i, "Preset", false, null, [], null, []));
	}
	profile.Pages.push(page);
	profile.DoublePressTime = 300;
	return profile;
}
function OpenProfile(id)
{
	AppProfiles.Profiles.forEach((profile) =>
	{
		profile.active = false;
	});
	var profile = AppProfiles.Profiles[id];
	profile.active = true;
	AppData = profile;
	BuildUi();
	OpenMainPage();
	SaveProfile();
}
function CloseEditPage()
{
	OpenMainPage();
}
function SetTriggersHtml(ul, triggers)
{
	RemoveAllElements(ul);
	if(triggers)
	{
		triggers.forEach((trigger) =>
		{
			var li = document.createElement("li");
			li.append(GetHtmlMidiMessage(trigger, true));
			ul.append(li);
		});
	}
}
function FillActionList(htmlAction, value, isPage)
{
	var select = htmlAction.querySelector(".select-action-action");
	RemoveOptions(select);
	if(!isPage)
	{
		AddOption(select, "Midi", "Midi");
		AddOption(select, "Go Page #", "GoPage");
		AddOption(select, "Previous Page", "PreviousPage");
		AddOption(select, "Next Page", "NextPage");
		AddOption(select, "Last Page", "LastPage");
		AddOption(select, "Expression", "EXP");
		AddOption(select, "Trigger Express", "EXPTrigger");
		AddOption(select, "Exp Set Value", "ExpSetValue");
		AddOption(select, "Link Button", "LinkButton");
		AddOption(select, "LFO", "LFO");
		AddOption(select, "Pause", "Pause");
		AddOption(select, "PrepareMacro", "PrepareMacro");
		AddOption(select, "CancelMacro", "CancelMacro");
		AddOption(select, "PlayMacro", "PlayMacro");
	}
	else
	{
		AddOption(select, "Midi", "Midi");
		AddOption(select, "Link Button", "LinkButton");
		AddOption(select, "Pause", "Pause");
	}
	select.value = value
}
function FillKeyboardKey(htmlAction, message)
{
	var select = htmlAction.querySelector(".select-keyboard-key")
	RemoveOptions(select);
	AddOption(select, "Space", "Space");
	AddOption(select, "Enter", "Enter");
	AddOption(select, "NumPadEnter", "NumPadEnter");
	AddOption(select, "NumpadDivide", "NumpadDivide");
	AddOption(select, "NumpadSubstract", "NumpadSubstract");
	AddOption(select, "NumpadAdd", "NumpadAdd");
	AddOption(select, "NumpadDecimal", "NumpadDecimal");
	AddOption(select, "NumpadMultiply", "NumpadMultiply");
	AddOption(select, "Numpad0", "Numpad0");
	AddOption(select, "Numpad1", "Numpad1");
	AddOption(select, "Numpad2", "Numpad2");
	AddOption(select, "Numpad3", "Numpad3");
	AddOption(select, "Numpad4", "Numpad4");
	AddOption(select, "Numpad5", "Numpad5");
	AddOption(select, "Numpad6", "Numpad6");
	AddOption(select, "Numpad7", "Numpad7");
	AddOption(select, "Numpad8", "Numpad8");
	AddOption(select, "Numpad9", "Numpad9");
	AddOption(select, "NumpadEscape", "NumpadEscape");
	
	for(var i=33; i<127; i++)
	{
		AddOption(select, String.fromCharCode(i), String.fromCharCode(i));
	}
	
	if(message.device == "Keyboard")
	{
		select.value = message.keyboardKey;
	}
}
function FillEventList(htmlAction, value, isPage)
{
	var select = htmlAction.querySelector(".select-action-event");
	RemoveOptions(select);
	if(!isPage)
	{
		AddOption(select, "Any", "Any");
		AddOption(select, "On Press", "OnPress");
		AddOption(select, "On Release", "OnRelease");
		AddOption(select, "On Double Press", "DoublePress");
	}
	else
	{
		AddOption(select, "On Load", "OnLoad");
		AddOption(select, "On Leaving", "OnLeaving");
	}
	select.value = value;
}
function FillExpTrigger(htmlAction, expTrigger, hide)
{
	var selectComparator = htmlAction.querySelector(".select-exp-trigger-comparator")
	var selectValue = htmlAction.querySelector(".select-exp-trigger-value");
	
	RemoveOptions(selectValue);
	for(var i = 0; i < 128; i++)
	{
		AddOption(selectValue, i, i);
	}
	if(expTrigger)
	{
		selectComparator.value = expTrigger.comparator;
		selectValue.value = expTrigger.value;
	}
	if(hide)
	{
		HideElement(htmlAction.querySelector(".div-exp-trigger"))
	}
}
function FillListStep(select, actions, currentAction)
{
	var maxStep = 0;
	if(actions)
	{
		maxStep = GetMaxStep(actions);
	}
	RemoveOptions(select);
	AddOption(select, "None", "");
	if(actions)
	{
		for(var i=0;i <= maxStep; i++)
		{
			AddOption(select, `Step ${i + 1}`, i);
		}
	}
	AddOption(select, "Add Step", "Add");
	select.value = currentAction ? currentAction.step : "";
}
function ChangeStep(select)
{
	if(select.value == "Add")
	{
		select.options.remove(select.options.length -1);
		AddOption(select, `Step ${select.options.length}`, select.options.length - 1);
		AddOption(select, "Add Step", "Add");
		select.value = select.options.length - 3;
	}		
}
function ChangeSelectActionTrigger(select, item, triggerActionStepNumber)
{
	var li = select.parentNode.parentNode.parentNode;
	var divSelectStep = li.querySelector(".element-midi-message-action-trigger-step");
	var select = divSelectStep.querySelector(".select-midi-message-action-trigger-step")
	if(item)
	{
		RemoveAllElements(select);
		var maxStep = GetMaxStep(item.actions);
		for(var i = 0; i<maxStep; i++)
		{
			AddOption(select, "Step " + (i+1));
		}
		select.value = triggerActionStepNumber;
	}
	if(select.value == "Step")
	{
		ShowElement(divSelectStep);
	}
	else
	{
		HideElement(divSelectStep);
	}
}
function CloseSettingsPage()
{
	OpenMainPage();
}
function OpenLogsPage()
{
	OpenPage($("div-logs-page"));
}
function CloseLogsPage()
{
	OpenMainPage();
}
function CloseEditButtonPage()
{
	OpenMainPage();
}
function OpenEditButtonPage(item)
{
	idButtonEditing = item.id;
	OpenPage($("div-edit-button-page"));
	$("txt-button-name").value = item.name;
	$("select-item-type").value = item.type;
	SetActionsHtml($("ul-edit-button-midi-actions"), item.actions);
	FillGroupEditButton(item);	
	if(item.color)
	{
		$("color-picker-"+item.color).checked = "checked";
	}
	AddGlobalButtonTrigger(item);
	AddCustomButtonTrigger(item);
}
function FillGroupEditButton(item)
{
	var select = $("select-edit-button-group");
	RemoveOptions(select);
	AppData.Groups.forEach((group) =>
	{
		AddOption(select, group, group);
	});
	select.value = item.group;
}
function AddCustomButtonTrigger(item)
{
	var ul = $("ul-edit-button-custom-trigger");
	RemoveAllElements(ul);
	if(item.triggers)
	{		
  		for(var i = 0; i<item.triggers.length; i++) 
		{
			var trigger = item.triggers[i];
			var li = document.createElement("li");
			var div = document.createElement("div");
			div.style.width = "100%";
			div.className = "div-inline";
			div.append(GetHtmlMidiMessage(trigger, true, true, item));
			li.append(div);
			ul.append(li);			
		};
	}
}
function UpdateExpButton(page, item, value, index)
{
	var actionExp = item.actions.filter(function(e){return e.action=="EXP" || e.action == "ExpSetValue";})[index ? index : 0];
	if(!actionExp) return;
	var currentPage = GetCurrentPage();
	if(currentPage.id == page.id)
	{
		var div = $("div-element-"+item.id);
		var valueTo100 = MapMidiValueTo100(value);
		div.querySelector(".div-element-inside-exp" + actionExp.idExp).style.height = valueTo100 + "%";
	}
	actionExp.valueExp = value;
	var exp = AppData.Expressions[actionExp.idExp];	
	exp.valueToResync = value;
	exp.isExpLowerToResync = value > exp.currentValue;
	
	if(item.active)
	{
		if(exp.currentValue != value)
		{
			exp.isSync = false;
			UpdateExpUi(value, exp, true);		
		}
	}
}
function AddGlobalButtonTrigger(item)
{
	var ulEditButtonGlobalTrigger = $("ul-edit-button-global-trigger");
	RemoveAllElements(ulEditButtonGlobalTrigger);
	var buttonTrigger = AppData.ButtonsTrigger[item.id];
	if(buttonTrigger)
	{		
  		for(var i = 0; i<buttonTrigger.triggers.length; i++) 
		{
			var trigger = buttonTrigger.triggers[i];
			var li = document.createElement("li");
			var div = document.createElement("div");
			div.style.width = "100%";
			div.className = "div-inline";
			div.append(GetHtmlMidiMessage(trigger, true, true));
			li.append(div);
			ulEditButtonGlobalTrigger.append(li);			
		};
	}
}
function ShowElement(obj, inline)
{
	if(obj)
	{
		obj.style.display = inline? "inline-block" : "block";
	}
}
function HideElement(obj)
{
	if(obj)
	{
		obj.style.display = "none";
	}
}
function ChangeActionAction(selectAction)
{
	var htmlAction = selectAction.parentNode.parentNode.parentNode.parentNode;
	var selectPage = htmlAction.querySelector(".div-select-page");
	var divActionExpression = htmlAction.querySelector(".div-action-exp");
	var selectLinkedButton = htmlAction.querySelector(".div-select-linked-button");
	var selectLinkedButtonAction = htmlAction.querySelector(".div-select-linked-button-action");
	var tempalteMidiMessage = htmlAction.querySelector(".template-midi-message");
	var divLfo = htmlAction.querySelector(".div-action-lfo");
	var divExpTrigger = htmlAction.querySelector(".div-exp-trigger");
	HideElement(selectPage);
	HideElement(tempalteMidiMessage);
	HideElement(divActionExpression);
	HideElement(selectLinkedButton);
	HideElement(selectLinkedButtonAction);
	HideElement(divLfo);
	HideElement(divExpTrigger);
	var inlineBlock = true;
	if(selectAction.value == "GoPage")
	{
		ShowElement(selectPage, inlineBlock);
	}
	else if(selectAction.value == "PreviousPage")
	{

	}
	else if(selectAction.value == "NextPage")
	{
		
	}
	else if(selectAction.value == "Midi")
	{
		ShowElement(tempalteMidiMessage, inlineBlock);
	}
	else if(selectAction.value == "EXP")
	{
		ShowElement(divActionExpression);
		ShowElement(tempalteMidiMessage, inlineBlock);
	}
	else if(selectAction.value == "EXPTrigger")
	{
		ShowElement(divActionExpression);
		ShowElement(divExpTrigger, inlineBlock);
		ShowElement(selectLinkedButton, inlineBlock);
		ShowElement(selectLinkedButtonAction, inlineBlock);
	}
	else if(selectAction.value == "OnLoad")
	{
		ShowElement(tempalteMidiMessage);
	}
	else if(selectAction.value == "OnLeaving")
	{
		ShowElement(tempalteMidiMessage);
	}
	else if(selectAction.value == "LinkButton")
	{
		ShowElement(selectLinkedButton, inlineBlock);
		ShowElement(selectLinkedButtonAction, inlineBlock);
	}
	else if(selectAction.value == "LFO")
	{
		ShowElement(tempalteMidiMessage, inlineBlock);
		ShowElement(divLfo);
	}
}
function GetHtmlMidiMessage(message, isInput, isTriggerButton, item)
{
	if(!message)
	{
		message = new MidiXMessage();
	}
	var html = $("template-midi-message").cloneNode(true);
	html.id = "midi-message" + GetRandom();
	ShowElement(html, true);
	var selectMidiActionDevice = html.querySelector(".select-midi-message-device");
	var divDeleteElement = html.querySelector(".div-delete-element");
	var divSendMessage = html.querySelector(".div-send-message-midi");
	if(isInput)
	{
		FillListDeviceInput(selectMidiActionDevice, message.device);
		ShowElement(divDeleteElement);
		HideElement(divSendMessage);
		FillKeyboardKey(html, message);
	}
	else
	{
		FillListDeviceOutput(selectMidiActionDevice, message.device);
		HideElement(divDeleteElement);		
	}	
	var selectMidiType = html.querySelector(".select-midi-message-type");
	selectMidiType.value = message.midiType;
	ChangeTypeMidi(selectMidiType);	
	var selectMidiChannel = html.querySelector(".select-midi-message-channel");
	AddOption(selectMidiChannel, "Any", "Any");
	for(var i = 1;i<=16; i++)
	{
		AddOption(selectMidiChannel, i, i);
	}	
	selectMidiChannel.value = message.channel;
	var selectMidiValue = html.querySelector(".select-midi-message-value");
	var selectMidiCcValue = html.querySelector(".select-midi-message-ccValue");
	for(var i = 0;i<=127; i++)
	{
		AddOption(selectMidiValue, i, i);
		AddOption(selectMidiCcValue, i, i);
	}
	selectMidiValue.value = message.value;
	selectMidiCcValue.value = message.ccValue;

	var selectBPM = html.querySelector(".select-midi-message-bpm");
	for(var i = 20; i<300;i++)
	{
		AddOption(selectBPM, i, i);
	}
	selectBPM.value = message.bpm;

	var random = GetRandom();
	html.querySelectorAll(".radio-element-custom").forEach((element) =>
	{
		element.id += random;
		element.htmlFor += random;
		element.name += random;
	});
	var divActionTrigger = html.querySelector(".element-midi-message-action-trigger");
	HideElement(divActionTrigger);
	if(isTriggerButton)
	{
		ShowElement(divActionTrigger, true);
		var selectTriggerAction = html.querySelector(".select-midi-message-action-trigger");
		selectTriggerAction.value = message.triggerAction;
		ChangeSelectActionTrigger(selectTriggerAction, item, message.triggerActionStepNumber);		
	}
	
	return html;
}
function GetRandom()
{
	return Math.random(Date.now);
}
function ChangeTypeMidi(select)
{
	var type = select.value;
	var content = select.parentNode.parentNode.parentNode;
	var selectChannel = content.querySelector(".element-midi-message-channel");
	var selectValue = content.querySelector(".element-midi-message-value");
	var selectValueCC = content.querySelector(".element-midi-message-ccValue");
	var selectBPM = content.querySelector(".element-midi-message-bpm");
	HideElement(selectChannel);
	HideElement(selectValue);
	HideElement(selectValueCC);
	HideElement(selectBPM);
	var inline = true;
	if(type == "PC")
	{
		ShowElement(selectChannel, inline);
		ShowElement(selectValue, inline);
	}
	else if( type == "CC")
	{
		ShowElement(selectChannel, inline);
		ShowElement(selectValue, inline);
		ShowElement(selectValueCC, inline);
	}
	else if( type == "NoteOn")
	{
		ShowElement(selectChannel, inline);
		ShowElement(selectValue, inline);
		ShowElement(selectValueCC, inline);
	}
	else if( type == "NoteOff")
	{
		ShowElement(selectChannel, inline);
		ShowElement(selectValue, inline);
		ShowElement(selectValueCC, inline);
	}
	else if( type == "Clock")
	{
		ShowElement(selectBPM, inline);
	}
}
function FillListPage(list, value, hide)
{
	RemoveOptions(list);
	AppData.Pages.forEach((page) =>
	{
		AddOption(list, page.name, page.id);
	});
	list.value = value;
	if(hide) HideElement(list.parentNode);
}
function FillListExp(html, action, hide)
{
	var list = html.querySelector(".select-exp");
	RemoveOptions(list);
	AppData.Expressions.forEach((expression) =>
	{
		AddOption(list, expression.name, expression.id);
	});
	list.value = action.idExp;
	if(hide) HideElement(list.parentNode);
	if(!action.expMin) action.expMin = 0;
	if(!action.expMax) action.expMax = 127;
	html.querySelector(".select-exp-min").value = action.expMin;
	html.querySelector(".select-exp-max").value = action.expMax;
}
function FillLinkButton(html, linkedButton, hide)
{
	var listLinkedButton = html.querySelector(".select-linked-button");
	var listLinkedButtonAction = html.querySelector(".select-linked-button-action");
	RemoveOptions(listLinkedButton);
	AppData.Pages.forEach((page) =>
	{
		page.items.forEach((item)=>
		{
			AddOption(listLinkedButton, `${page.name} - ${item.name}`, `${page.id}-${item.id}`)
		})
	});
	if(linkedButton)
	{
		listLinkedButton.value = `${linkedButton.idPage}-${linkedButton.idButton}`;
		listLinkedButtonAction.value = linkedButton.action;
	}
	if(hide)
	{
		HideElement(listLinkedButton.parentNode.parentNode);
		HideElement(listLinkedButton.parentNode.parentNode.parentNode.querySelector(".div-select-linked-button-action"));
	}
}
function FillListDeviceInput(list, selectedValue, trueName)
{
	var inputs = AppData.MidiInputs;
	if(!trueName)
	{
		AppData.Devices.forEach((input) => 
		{
			if(!inputs.find(function (i){return i.deviceInputId == input.deviceInputId;}))
			{
				inputs.push(input);
			}
		});
	} 
	FillListDevice(true, inputs, list, selectedValue, trueName);
}
function FillListDeviceOutput(list, selectedValue, trueName)
{
	var outputs = AppData.MidiOutputs;
	if(!trueName)
	{
		AppData.Devices.forEach((output) => 
		{
			if(!outputs.find(function (o){return o.deviceOutputId == output.deviceOutputId;}))
			{
				outputs.push(output);
			}
		});
	} 
	FillListDevice(false, outputs, list, selectedValue, trueName);
}
function FillListDevice(isInput, devices, list, selectedValue, trueName)
{
	RemoveOptions(list);
	if(!trueName)
	{
		if(isInput)
		{
			AddOption(list, "Keyboard", "Keyboard");	
		}
		AddOption(list, "Any", "Any");
	}
	else
	{
		AddOption(list, "", "");
	}
	devices.forEach((device) =>
	{
		var name = device.name;
		if(!trueName)
		{
			var myDeviceInput = AppData.Devices.find(function (e){
				return e.deviceInputId == device.deviceInputId; 
			});
			var myDeviceOuput = AppData.Devices.find(function (e){
				return e.deviceOutputId == device.deviceOutputId; 
			});
			
			if(isInput && myDeviceInput)
			{
				name = myDeviceInput.name;
				if(name == selectedValue)
				{
					selectedValue = myDeviceInput.deviceInputId;
				}
				
			}
			else if(myDeviceOuput)
			{
				name = myDeviceOuput.name;
				if(name == selectedValue)
				{
					selectedValue = myDeviceOuput.deviceOutputId;
				}
			}
		}
		AddOption(list, name, isInput?device.deviceInputId : device.deviceOutputId);
	});
	list.value = selectedValue;
}
function AddOption(list, text, value)
{
	var option = document.createElement("option");
	option.value = value;
	option.innerHTML = text;
	list.append(option);
}
function RemoveAllElements(obj)
{
	if(obj.firstChild)
	{
		while (obj.firstChild) {obj.removeChild(obj.firstChild); }
	}
}
function RemoveOptions(list)
{
	if(list &&  list.options)
	while (list.options.length > 0) { list.remove(0); }
}
function ChangeColor(obj)
{
	obj.className = "select-color select-select bg-option-" + obj.value; 
}
var idButtonEditing = 0;
function SaveButton()
{
	if(isLearnMidi)
	{
		document.getElementsByClassName("learn")[0].scrollIntoView();
		return;
	}
	var validatorButton = GetValidatorForButton(idButtonEditing);
	if(!validatorButton.isValid) return;
	var validatorGlobalTrigger = GetValidatorForGlobalTrigger(idButtonEditing);
	if(!validatorGlobalTrigger.isValid) return;
	AppData.ButtonsTrigger[idButtonEditing] = validatorGlobalTrigger.obj;
	var page = GetCurrentPage();
	var item = validatorButton.obj;
	var oldItem = page.items[item.id];
	ClearInterval(oldItem);
	AppData.Pages[page.id].items[item.id] = item;
	OpenMainPage();
	GotoPage(page.id);
	SaveProfile();
	SetInputMidiMessageToHandle();
}
function ClearInterval(item)
{
	if(!item) return;
	if(!item.Interval) return;
	clearInterval(item.Interval);	
	item.Interval = null;
}
function SaveProfile()
{
	AppProfiles.Profiles[AppData.id] = AppData;
	SaveDb("profiles", AppProfiles);
}
/////Edit Page
var idPageEditing = 0;
function OpenEditPage(id)
 {
	idPageEditing = id;
	OpenPage($("div-edit-page"));
	var page = id == -1? new MidiXPage(0, "") : AppData.Pages[id];
	$("txt-page-name").value = page.name;
	SetTriggersHtml($("ul-edit-page-trigger"), page.triggers);
	SetActionsHtml($("ul-edit-page-midi-actions"), page.actions, true);
	$("select-nb-buttons").value = page.nbButtons;
	$("select-nb-buttons-by-line").value = page.nbButtonsByLine;
	$("select-page-visible").value = page.visible ? page.visible : "true";
	var ulExpToDisplay = $("ul-edit-page-exp-to-display");
	RemoveAllElements(ulExpToDisplay);
	AppData.Expressions.forEach((expression) =>
	{
		var li = document.createElement("li");
		var input = document.createElement("input");
		input.type = "checkbox";
		input.id = "checkbox-exp-to-display-"+ expression.id;
		input.value = expression.id;
		input.className = "radio-element-custom checkbox-exp-to-display";
		input.checked = page.ExpToHide.includes(expression.id + "") == false;
		var label = document.createElement("label");
		label.htmlFor = input.id;
		label.innerHTML = expression.name;
		label.className = "radio-element-custom";
		li.append(input);
		li.append(label);
		ulExpToDisplay.append(li);
	});
}
function SavePage()
{
	if(isLearnMidi)
	{
		document.getElementsByClassName("learn")[0].scrollIntoView();
		return;
	}
	var idPage = idPageEditing;
	var page = idPage == -1 ? new MidiXPage(-1) : AppData.Pages[idPage];	
	var validationPage = GetValidationForPage(page);
	if(!validationPage.isValid)
	{
		 return;
	}
	page = validationPage.obj;
	GotoPage(page.id);
	
	OpenMainPage();
	SaveProfile();
	SetInputMidiMessageToHandle();
	BuildUi();
}
function SetPageButtons(page)
{
	for(var i=0;i<page.nbButtons;i++)
	{
		if(!page.items[i])
		{
			page.items.push(new MidiXItem( "",i, "", "Preset", false, "", [], "blue", []));
		}
	}
	page.items.length = page.nbButtons;
}
function GetTriggers(ul)
{
	var triggers = [];
	ul.childNodes.forEach((li, index) =>
	{
		var trigger = GetMidiMessage(li);
		trigger.id = index;
		triggers.push(trigger);
	});
	return triggers;
}

function GetLinkedButton(li)
{
	var select = li.querySelector(".select-linked-button");
	var selectAction = li.querySelector(".select-linked-button-action");
	if(select.value)
	{
		var values = select.value.split("-");
		return new MidiXLinkButton(values[0], values[1], selectAction.value);
	}
	return "";
}
function GetMidiMessage(li)
{
	var message = new MidiXMessage();
	message.device = li.querySelector(".select-midi-message-device").value;
	message.midiType = li.querySelector(".select-midi-message-type").value;
	message.channel = li.querySelector(".select-midi-message-channel").value;
	message.value = li.querySelector(".select-midi-message-value").value;
	message.ccValue = li.querySelector(".select-midi-message-ccValue").value;
	return message;
}
function AddNewPage()
{
	OpenEditPage(-1);
}
function SaveSettings()
{
	if(isLearnMidi)
	{
		document.getElementsByClassName("learn")[0].scrollIntoView();
		return;
	}
	var validatorDevice = GetValidatorForDevicesSettingPage();
	if(!validatorDevice.isValid) return;
	//TODO Verification Expressions ? 
	var validationForExpressions = GetValidatorForExpressionsSettingPage();
	if(!validationForExpressions.isValid) return;
	var validationForMisc = GetValidatorForMisc();
	if(!validationForMisc.isValid) return;
	var groups = GetGroupsSettingPage();
	AppData.Devices = validatorDevice.obj;
	AppData.Expressions = validationForExpressions.obj;
	AppData.Groups = groups;
	AppData.DoublePressTime = validationForMisc.obj.DoublePressTime;
	BuildUi();		
	OpenMainPage();
	SaveProfile();
	SetInputMidiMessageToHandle();
}
function OpenMainPage()
{
	OpenPage($("div-main-page"));
}
function GetGroupsSettingPage()
{
	var groups = ["None"];
	$("ul-list-group").childNodes.forEach((li, index) =>
	{
		var group = li.querySelector(".label-group-name").innerHTML;
		if(!groups.includes(group))
		{
			groups.push(group);
		}
	});
	return groups;
}
function FillColorPicker()
{
	var div = $("div-color-picker");
	RemoveAllElements(div);
	colors.forEach((color) =>
	{
		var input = document.createElement("input");
		input.type = "radio";
		input.name = "color-picker";
		input.className = "radio-element-color-picker";
		input.id = "color-picker-"+color;
		input.value = color;
		div.append(input);
		var label = document.createElement("label");
		label.htmlFor = input.id;
		label.className = "color-picker radio-element-color-picker bg-rainbow-"+color;
		div.append(label);
	});
}
function SendMidiClick(obj)
{
	var li = obj.parentNode.parentNode.parentNode.parentNode;
	var validator = GetValidationForMidiMessage(li);
	if(validator.isValid)
	{
		SendMidi(validator.obj);
	}
}
function ChangeTriggerDevice(obj)
{
	var div = obj.parentNode.parentNode.parentNode;
	var value = obj.value;
	var divElementMidiMessageType = div.querySelector(".element-midi-message-type");
	var divElementMidiMessageChannel = div.querySelector(".element-midi-message-channel");
	var divElementMidiMessageValue = div.querySelector(".element-midi-message-value");
	var divElementMidiMessageCcValue = div.querySelector(".element-midi-message-ccValue");
	var divElementMessageBpm = div.querySelector(".element-midi-message-bpm");
	var divElementKeyboardKey = div.querySelector(".element-keyboard-key");
	var selectMidiMessageType = div.querySelector(".select-midi-message-type");
	if(value == "Keyboard")
	{
		HideElement(divElementMidiMessageType);
		HideElement(divElementMidiMessageChannel);
		HideElement(divElementMidiMessageValue);
		HideElement(divElementMidiMessageCcValue);
		HideElement(divElementMessageBpm);
		ShowElement(divElementKeyboardKey, true);
	}
	else
	{
		ShowElement(divElementMidiMessageType, true);
		ShowElement(divElementMidiMessageChannel, true);
		ShowElement(divElementMidiMessageValue, true);
		ShowElement(divElementMidiMessageCcValue, true);
		ShowElement(divElementMessageBpm, true);
		HideElement(divElementKeyboardKey);
		ChangeTypeMidi(selectMidiMessageType);
	}
}
function BuildProfiles()
{
	var ul = $("ul-profiles");
	RemoveAllElements(ul);
	AppProfiles.Profiles.forEach((profile) => 
	{
		var li = document.createElement("li");
		var label = document.createElement("label");
		label.innerHTML = profile.name;
		var button = document.createElement("button");
		button.onclick = function()
		{
			OpenProfile(profile.id);
		}
		button.innerHTML = "Open";
		button.className = "button-open-profile";
		var divButton = CreateElement("div", "div-inline");
		divButton.append(button);
		li.append(label);
		li.append(divButton);
		ul.append(li);
	});
}
function ClickUpActionElement(obj)
{
	var li = obj.parentNode.parentNode.parentNode;
	var ul = li.parentNode;
	var total = ul.childNodes.length;
	var index = GetDomIndex(li);
	if(index == 0) return;
	li.remove();
	var previousNode = ul.childNodes[index-1];
	ul.insertBefore(li, previousNode);
}
function ClickDownActionElement(obj)
{
	var li = obj.parentNode.parentNode.parentNode;
	var ul = li.parentNode;
	var total = ul.childNodes.length;
	var index = GetDomIndex(li);
	if(index == total -1) return;
	li.remove();
	var nextNode = ul.childNodes[index];
	InsertAfter(li, nextNode);
}
function ShowHideUpDownButton()
{

}
function InjectLearnedMidiMessage(message)
{
	var div = htmlMidiMessageToLearn.parentNode.parentNode;
	var selectDevice = div.querySelector(".select-midi-message-device");
	selectDevice.value = message.device
	div.querySelector(".select-midi-message-type").value = message.midiType;
	div.querySelector(".select-midi-message-channel").value = message.channel;
	div.querySelector(".select-midi-message-value").value = message.value;
	div.querySelector(".select-midi-message-ccValue").value = message.ccValue;
	ChangeTypeMidi(selectDevice);
}
function CopyMidiDeviceId(obj)
{
	var select = obj.parentNode.querySelector("select");
	var value = select.value;
	navigator.clipboard.writeText(value);
}
var isPrepareMacro = false;
var itemsMacro = []; // MidiXMacroButtonToExecute[]
var buttonPrepareMacro = null;  //MidiXMacroButtonToExecute
function AddButtonToMacro(item, obj)
{
	var excludeButtonToMacro = item.actions.filter((action) =>
	{
		return action.action == "PreviousPage" || action.action == "NextPage" || action.action == "PrepareMacro" || action.action == "CancelMacro" || action.action == "PlayMacro";
	});
	if(excludeButtonToMacro.length > 0 )
	{
		return false;
	}
	if(item.excludeRegisterInMacro === true)
	{
		return false;
	}
	var page = GetCurrentPage();
	var buttonMacro = itemsMacro.find(x=> x.idPage == page.id && x.idButton == item.id);
	if(!buttonMacro)
	{
		buttonMacro = new MidiXMacroButtonToExecute(page.id, item.id);
		itemsMacro.push(buttonMacro);
	}
	if(item.type == "Preset")
	{
		buttonMacro.state = buttonMacro.state ? (buttonMacro.state == "On" ? "Off" : "On") : item.active == true ? "Off" : "On";	
	}	
	item.isPrepareMacro = true;
	return true;
}

var colors = [
	"violet",
	"indigo",
	"blue",
	"turquoise",
	"lightgreen",
	"green",
	"lightyellow",
	"yellow",
	"lightorange",
	"orange",
	"lightred",
	"red",
	"lightpink",
	"pink",
	"brown",
	"black",
	"none"
];


