function InitApp() {
	WebMidi
		.enable()
		.then(onEnabled)
		.catch(err => alert(err));
	function onEnabled() {
		RetrieveProfile();
		BuildProfiles();
		BuildUi();
		SubscribeToMidiEvents();
		SusbcribeToKeyboardEvents();
		SetInputMidiMessageToHandle();
		OpenMainPage();
		
		if(IsModeLight() == false)
		{
			if(IsModePage())
			{
				const queryString = window.location.search;

				// Créez une instance de URLSearchParams avec la chaîne de requête
				const urlParams = new URLSearchParams(queryString);

				// Récupérez la valeur du paramètre "param1"
				const page = urlParams.get('page');
				GotoPage(page);
			}
			else
			{				
				ClickButton(AppData.Pages[5].items[3]);
				ClickButton(AppData.Pages[5].items[5]);
				GotoPage(4);
			}

		}
		else
		{
			GotoPage(3)
		}
	}
}
function IsModePage()
{
	return window.location.href.indexOf("page") > -1
}
function IsModeLight()
{
	return window.location.href.indexOf("light") > -1
}
var colors = [
	"violet", 	
	"indigo", 	
	"blue", 	
	"turquoise",
	"orange", 	
	"red", 	
	"pink", 	
	"brown", 	
	"white"
]
var AllButtons = [];
/*function InitAllButtons()
{
	var index = 0;
	AllButtons.push(new MidiXItem(index, "Amp", "Momentary", null, "", 
		[
			{
				id : 0,
				name : "",
				event : "OnPress", 
				action : "GoPage",
				idPage : 28
			}
		], colors[index++]));
	
	page.items.push(GetSimpleFxButton(index++, 21, "Tremolo Soft<br/>.. Exp", null, null, 
	[
		{id:3, event : "DoublePress", action : "GoPage", idPage : 13},
		{
			id: 4,
			name: "Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 99),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Rate",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 97),
			expMin: 0,
			expMax: 127
		}
	] , 
	[
		new MidiXMessage("FromReaper", 1, "CC", 99, null, "Expression0"),
		new MidiXMessage("FromReaper", 1, "CC", 97, null, "Expression1"),
	]
	));
	page.items.push(GetSimpleFxButton(index++, 26, "Shimmer", GetMidiXActionsForPostMixGojira(3), null, 
	[
		{
			id: 4,
			name: "High Cut",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 6),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Time",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 7),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 2, "CC", 6, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 7, null, "Expression1")
	] ));
	page.items.push(GetSimpleFxButton(index++, 8, "Reverb<br/>.. Exp", GetMidiXActionsForPostMixReverb(3), null, 
		[
			{id:4, event : "DoublePress", action : "GoPage", idPage : 5},
			{
				id: 4,
				name: "Mix",
				event: "OnPress",
				action: "EXP",
				idExp: 2,
				valueExp: 50,
				message: new MidiXMessage("Reaper", 1, "CC", 18),
				expMin: 0,
				expMax: 127
			},
			{
				id: 5,
				name: "Feedback",
				event: "OnPress",
				action: "EXP",
				idExp: 3,
				valueExp: 50,
				message: new MidiXMessage("Reaper", 1, "CC", 17),
				expMin: 0,
				expMax: 127
			}
		], 
		[
			new MidiXMessage("FromReaper", 1, "CC", 18, null, "Expression0"),
			new MidiXMessage("FromReaper", 1, "CC", 17, null, "Expression1"),
		] ));
	page.items.push(
		{
			id: index++,
			name: "Wow",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Wow Type", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 15, 127)), // Wow Type
				new MidiXAction(1, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Wow", "On")), // Wow
				new MidiXAction(2, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Wow", "Off")), // Wow
				new MidiXAction(3, "Wow Postition", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 14, 127)), // Wow Position
				GetMidiXActionSetRouting(4)],
			color: "red",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 1, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 1, 0, "StateOff")
			]
		});
	page.items.push(GetSimpleFxButton(index++, 2, "Octaver" , null, "orange"));
	
	var indexRaw = 0;
	page.items.push(
		{
			id: 6,
			name: "Raw",
			type: "Momentary",
			actions: [				
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 2)), 	//Scene QC 3
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 127)),		//Mute Reaper Post Full
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 46, 127)),		//Mute Reaper Post Mix
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 44, 127)),		//Unmute QC
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 10, 127)), 		//Gain
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 2, 127)),	//Volume			
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 2, 0)),			//Octaver
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 7, 0)),			//Delay
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 22, 0)),			//Tremolo
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 21, 0)),			//Rotary		
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 26, 0)),			//Shimmer
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 8, 0)),			//Reverb
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 31, 0)),			//Ring Modulator
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 12, 0)),			//Reverse
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 39, 0)),			//Filter
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 24, 0)),			//Fuzz
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 25, 0)),			//Rat
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 28, 0)),			//Comp
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 1, 0)),			//Wow
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 33, 0)),			//Chip Flair
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 34, 0)),			//Drum Pad
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 35, 0)),			//Glisten
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 36, 0)),			//Shiny Roads
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 37, 0)),			//Grain Delay
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 20, 0)),			//Wha
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 38, 0)),			//Gramophone
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 47, 0)),			//Delay Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 48, 0)),			//Reverb Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 49, 0)),			//Reverb Freeze Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 4, 0)),			//Octaver Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 5, 0)),			//Fuzz Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 6, 0)),			//Overdrive Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 42, 0)),			//Parralle Gojira
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 43, 0)),			//Parallele Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 3, 0)),			//Portal
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 50, 127)),		//Post Mix Guitar Rig
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 51, 127)),		//Post Mix Gojira
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 52, 127)),		//Post Mix Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 53, 127)),		//Post Mix Reverb
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 54, 0)),			//Synth Pre
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 55, 0)),			//Guillotine
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 56, 0)),			//Fracture
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 57, 0)),			//Wuw Cha chaa
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 58, 0)),			//Vinyl
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 59, 0)),			//Vynil SpinDown
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 40, 0)),			//Delay Mod
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 92, 0)),			//Love
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 41, 127)),		//Pan Center
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0)),			//Reverb Clear
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),		//Reverb Clear
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 127, 127)),		//Resync
				new MidiXAction(indexRaw++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "On"), null, null, null, null, null, 100), //Resync
				new MidiXAction(indexRaw++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "On"), null, null, null, null, null, 100), //Resync
			],
			color: "brown"
		});
	index++;
	page.items.push(GetSimpleFxButton(index++, 7, "Delay<br/>.. Exp", GetMidiXActionsForPostMixGojira(3), "green", 
	[
		{id:4, event : "DoublePress", action : "GoPage", idPage : 5},
		{
			id: 4,
			name: "Tone",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 8),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Feedback",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 13),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 2, "CC", 8, null, "Expression0"),
		new MidiXMessage("FromReaper", 1, "CC", 13, null, "Expression1"),
	] ));
}*/
function GetMidiXLinkButtonByName(buttonName, action, state, conditionnalOperator)
{
  if (buttonName == "Reverb Clear")
	return new MidiXLinkButton(0, 0, action, state, conditionnalOperator);
  if (buttonName == "Resync")
	return new MidiXLinkButton(0, 1, action, state, conditionnalOperator);
  if (buttonName == "Wha")
	return new MidiXLinkButton(0, 26, action, state, conditionnalOperator);
  if (buttonName == "Wow")
	return new MidiXLinkButton(0, 22, action, state, conditionnalOperator);
  if (buttonName == "ExpWowEngaged")
	return new MidiXLinkButton(0, 23, action, state, conditionnalOperator);
  if (buttonName == "Tremolo")
    return new MidiXLinkButton(2, 6, action, state, conditionnalOperator);
  if (buttonName == "Tremolo Soft")
	return new MidiXLinkButton(1, 1, action, state, conditionnalOperator);
  if (buttonName == "Shimmer")
	return new MidiXLinkButton(1, 2, action, state, conditionnalOperator);
  if (buttonName == "Reverb")
	return new MidiXLinkButton(1, 3, action, state, conditionnalOperator);
  if (buttonName == "Wow")
	return new MidiXLinkButton(1, 4, action, state, conditionnalOperator);
  if (buttonName == "Octaver")
	return new MidiXLinkButton(1, 5, action, state, conditionnalOperator);
  if (buttonName == "Delay")
	return new MidiXLinkButton(1, 7, action, state, conditionnalOperator);
  if (buttonName == "Portal")
	return new MidiXLinkButton(2, 0, action, state, conditionnalOperator);
  if (buttonName == "Ring Arp")
	return new MidiXLinkButton(2, 1, action, state, conditionnalOperator);
  if (buttonName == "Reverse")
	return new MidiXLinkButton(2, 2, action, state, conditionnalOperator);
  if (buttonName == "Fuzz")
	return new MidiXLinkButton(2, 4, action, state, conditionnalOperator);
  if (buttonName == "Rat")
	return new MidiXLinkButton(2, 5, action, state, conditionnalOperator);
  if (buttonName == "Comp")
	return new MidiXLinkButton(2, 6, action, state, conditionnalOperator);
  if (buttonName == "Filter")
	return new MidiXLinkButton(2, 7, action, state, conditionnalOperator);
  if (buttonName == "Delay Rabae")
	return new MidiXLinkButton(3, 0, action, state, conditionnalOperator);
  if (buttonName == "Reverb Rabae")
	return new MidiXLinkButton(3, 3, action, state, conditionnalOperator);
  if (buttonName == "Gate")
	return new MidiXLinkButton(3, 4, action, state, conditionnalOperator);
  if (buttonName == "Octaver Rabae")
	return new MidiXLinkButton(3, 5, action, state, conditionnalOperator);
  if (buttonName == "Fuzz Rabae")
	return new MidiXLinkButton(3, 6, action, state, conditionnalOperator);
  if (buttonName == "Overdrive Rabae")
	return new MidiXLinkButton(3, 7, action, state, conditionnalOperator);
    if (buttonName == "Oct +1")
	return new MidiXLinkButton(5, 0, action, state, conditionnalOperator);
  if (buttonName == "Oct +2")
	return new MidiXLinkButton(5, 1, action, state, conditionnalOperator);
  if (buttonName == "Chip Flair")
	return new MidiXLinkButton(6, 0, action, state, conditionnalOperator);
  if (buttonName == "Drum Pad")
	return new MidiXLinkButton(6, 1, action, state, conditionnalOperator);
  if (buttonName == "Glisten")
	return new MidiXLinkButton(6, 2, action, state, conditionnalOperator);
  if (buttonName == "Shiny Roads")
	return new MidiXLinkButton(6, 3, action, state, conditionnalOperator);
  if (buttonName == "Grain Delay")
	return new MidiXLinkButton(6, 4, action, state, conditionnalOperator);
  if (buttonName == "Gramophone")
	return new MidiXLinkButton(6, 5, action, state, conditionnalOperator);
  if (buttonName == "Synth Pre")
	return new MidiXLinkButton(6, 6, action, state, conditionnalOperator);
  if (buttonName == "Love")
	return new MidiXLinkButton(6, 7, action, state, conditionnalOperator);
  if (buttonName == "Fracture")
	return new MidiXLinkButton(7, 0, action, state, conditionnalOperator);
  if (buttonName == "Wuw Cha chaa")
	return new MidiXLinkButton(7, 1, action, state, conditionnalOperator);
  if (buttonName == "Vinyl")
	return new MidiXLinkButton(7, 2, action, state, conditionnalOperator);
  if (buttonName == "Vinyl Spindown")
	return new MidiXLinkButton(7, 3, action, state, conditionnalOperator);
  if (buttonName == "Guillotine")
	return new MidiXLinkButton(7, 4, action, state, conditionnalOperator);
  if (buttonName == "Delay Mod")
	return new MidiXLinkButton(7, 7, action, state, conditionnalOperator);
  if (buttonName == "Rec1")
	return new MidiXLinkButton(8, 0, action, state, conditionnalOperator);
  if (buttonName == "Rec2")
	return new MidiXLinkButton(8, 1, action, state, conditionnalOperator);
  if (buttonName == "Rec3")
	return new MidiXLinkButton(8, 2, action, state, conditionnalOperator);
  if (buttonName == "Rec4")
	return new MidiXLinkButton(8, 3, action, state, conditionnalOperator);  
  if (buttonName == "Stereo Gojira Delay")
	return new MidiXLinkButton(16, 1, action, state, conditionnalOperator);
  if (buttonName == "Stereo Tremolo Soft")
	return new MidiXLinkButton(16, 2, action, state, conditionnalOperator);
  if (buttonName == "Stereo Reverse")
	return new MidiXLinkButton(16, 3, action, state, conditionnalOperator);
	console.log("not found " + buttonName);
	const stack = new Error().stack;
  	console.log(stack);
}
function GetPageTool(profile) {
	var index = 0;
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Tools", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) // Resync
		]);
    page.nbButtonsByLine = 6;
	//page.visible = false;
	//0
	page.items.push(
		{
			id: index++,
			name: "Reverb Clear",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Reverb Clear", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),
				new MidiXAction(1, "Reverb Clear", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0))
			],

			color: "brown"
		});
	//1
	page.items.push(
		{
			id: index++,
			name: "Resync",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Resync", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 127, 127))
			],
			color: "brown"
		});
	//2
	page.items.push(
		{
			id: index++,
			name: "Samples 64",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Samples 64", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 90, 127))
			],
			color: "violet"
		});
	//3
	page.items.push(
		{
			id: index++,
			name: "Samples 128",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Samples 64", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 91, 127))
			],
			color: "violet"
		});
	//4
	page.items.push(
		{
			id: index++,
			name: "Pan<br/>Center",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Pan Center", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 41, 127))
			],

			color: "orange"
		});
	//5
	page.items.push(new MidiXItem(index++, "Previous Page", "Momentary", false, null,
		[
			new MidiXAction(0, "", "OnPress", "PreviousPage")
		], "blue",
		[
			new MidiXMessage("Chocolate", 1, "PC", 0),
			new MidiXMessage("Chocolate", 1, "PC", 4),
			{ device : "Keyboard", keyboardKey : "ArrowLeft"}
		]
	));
	//6
	page.items.push(new MidiXItem(index++, "Next Page", "Momentary", false, null,
		[
			new MidiXAction(0, "", "OnPress", "NextPage")
		], "blue",
		[
			new MidiXMessage("Chocolate", 1, "PC", 3),
			new MidiXMessage("Chocolate", 1, "PC", 7),
			{ device : "Keyboard", keyboardKey : "ArrowRight"}
		]
	));
	//7
	page.items.push(new MidiXItem(index++, "Wha Exp2", "Preset", false, "EXP2", [
		{
			id: 0,
			name: "Wha EXP 2 ",
			event: "OnPress",
			action: "EXP",
			idExp: 1,
			valueExp: 0,
			message: new MidiXMessage("Quad Cortex", 1, "CC", 2),
			expMin: 0,
			expMax: 127

		}
	], "orange"));
	//8
	page.items.push(new MidiXItem(index++, "Set Routing  step1 (step pre)", "Momentary", true, "", [
		{
			id : 0,
			description : "set no pre when no pre effects",
			event : "OnPress",
			action : "LinkButton",
			conditionnalLinkButtons : GetButtonForPre("Off", "AND"),
			linkedButton : new MidiXLinkButton(0, 9, "Toggle")	//Set NO PRE-FULL/MIX
		},
		{
			id : 1,
			description : "set pre when at least on pre effet",
			event : "OnPress",
			action : "LinkButton",
			conditionnalLinkButtons : GetButtonForPre("On", "OR"),
			linkedButton : new MidiXLinkButton(0, 10, "Toggle") //Set PRE-FULL/MIX
		},
		{
			id : 2,
			description : "set post mix",
			event : "OnPress",
			action : "LinkButton",
			linkedButton : new MidiXLinkButton(0, 15, "Toggle")	//Post Mix Mute
		},
		{
			id : 3,
			description : "set routing for mod delay",
			event : "OnPress",
			action : "LinkButton",
			linkedButton : new MidiXLinkButton(0, 24, "Toggle")	//Routing Delay Mod
		}
	], "red", 
	[
		new MidiXMessage("Quad Cortex", 1, "CC", 11)
	]));
	//9
	page.items.push(new MidiXItem(index++, "Set NO PRE - FULL|MIX", "Momentary", true, "", [
		{
			id : 0,
			description : "set mix when no full effects",
			event : "OnPress",
			action : "LinkButton",
			conditionnalLinkButtons : GetButtonForFullMix("Off", "AND"),
			linkedButton : new MidiXLinkButton(0, 11, "Toggle")	//SET NO PRE/MIX
		},
		{
			id : 1,
			description : "set full when at leat on full effet",
			event : "OnPress",
			action : "LinkButton",
			conditionnalLinkButtons : GetButtonForFullMix("On", "OR", "delayMod"),
			linkedButton : new MidiXLinkButton(0, 12, "Toggle")	//SET NO PRE/FULL
		}
	], "red"));
	//10
	page.items.push(new MidiXItem(index++, "Set PRE - FULL|MIX", "Momentary", true, "", [
		{
			id : 0,
			description : "set mix when no full effects",
			event : "OnPress",
			action : "LinkButton",
			conditionnalLinkButtons : GetButtonForFullMix("Off", "AND"),
			linkedButton : new MidiXLinkButton(0, 13, "Toggle") //SET PRE/MIX
		},
		{
			id : 1,
			description : "set full when at leat on full effet",
			event : "OnPress",
			action : "LinkButton",
			conditionnalLinkButtons : GetButtonForFullMix("On", "OR", "delayMod"),
			linkedButton : new MidiXLinkButton(0, 14, "Toggle")	//SET PRE/FULL
		}
	], "red"));
	//11
	page.items.push(
		{
			id: index++,
			name: "SET NO PRE/MIX QC Scene 3",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Scene QC 3", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 2)), //
				new MidiXAction(1, "Mute Post Full", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 127)),	// Mute Reaper Post Full
			],
			color: "brown"
		});
	//12
	page.items.push(
			{
				id: index++,
				name: "SET NO PRE/FULL QC Scene 2",
				type: "Momentary",
				actions: [
					new MidiXAction(0, "Scene QC 2", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 1)), // Scene QC 2
					new MidiXAction(1, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 0))	// UnMute Reaper Post Full
				],
				color: "brown"
			});
	//13
	page.items.push(
		{
			id: index++,
			name: "SET PRE/MIX QC Scene 7",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Scene QC 7", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 6)), // Scene QC 7
				new MidiXAction(1, "Mute Reaper Post Full", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 127)),	// Mute Reaper Post Full
			],
			color: "brown"
		});
	//14
	page.items.push(
			{
				id: index++,
				name: "SET PRE/FULL QC Scene 3",
				type: "Momentary",
				actions: [
					new MidiXAction(0, "Scene QC 6", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 5)), // Scene QC 6
					new MidiXAction(1, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 0))	// UnMute Reaper Post Full
					],
				color: "brown"
			});
	//15
	page.items.push(new MidiXItem(index++, "Post Mix Mute", "Preset", true, "", [
		{
			id : 0,
			name : "Unmute Mix",
			description : "unmute mix when at least a post mix fx",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 46, 0), //Post Mix  Mute
			conditionnalLinkButtons : GetButtonForMix("On", "OR")
		},
		{
			id : 1,
			name : "Mute Mix",
			description : "mute mix when no post mix fx",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 46, 127), //Post Mix  Mute
			conditionnalLinkButtons : GetButtonForMix("Off", "AND"),
		}
	], "red", [
		new MidiXMessage("FromReaper", 1, "CC", 46, 0, "StateOn"),
		new MidiXMessage("FromReaper", 1, "CC", 46, 127, "StateOff")
	]));
	//16
	page.items.push(new MidiXItem(index++, "Post Mix Mute GuitarRig", "Preset", true, "", [
		{
			id : 0,
			name : "Unmute Mix GuitarRig",
			description : "unmute mix when at least a post mix fx Guitar rig",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 50, 0), 	//Post Mix Guitar Rig
			conditionnalLinkButtons : GetButtonForMixGuitarRig("On", "OR")
		},
		{
			id : 1,
			name : "Mute Mix Guitar Rig",
			description : "mute mix when no post mix fx Guitar rig",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 50, 127),  //Post Mix Guitar Rig
			conditionnalLinkButtons : GetButtonForMixGuitarRig("Off", "AND"),
		}
	], "red", [
		new MidiXMessage("FromReaper", 1, "CC", 50, 0, "StateOn"),
		new MidiXMessage("FromReaper", 1, "CC", 50, 127, "StateOff")
	]));
	//17
	page.items.push(new MidiXItem(index++, "Post Mix Mute Gojira", "Preset", true, "", [
		{
			id : 0,
			name : "Unmute Mix Gojira",
			description : "unmute mix when at least a post mix fx Gojira",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 51, 0),	//Post Mix Gojira
			conditionnalLinkButtons : GetButtonForMixGojira("On", "OR")
		},
		{
			id : 1,
			name : "Mute Mix Gojira",
			description : "mute mix when no post mix fx Gojira",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 51, 127),	//Post Mix Gojira
			conditionnalLinkButtons : GetButtonForMixGojira("Off", "AND"),
		}
	], "red", [
		new MidiXMessage("FromReaper", 1, "CC", 51, 0, "StateOn"),
		new MidiXMessage("FromReaper", 1, "CC", 51, 127, "StateOff")
	]));
	//18
	page.items.push(new MidiXItem(index++, "Post Mix Mute Rabae", "Preset", true, "", [
		{
			id : 0,
			name : "Unmute Mix Rabae",
			description : "unmute mix when at least a post mix fx Rabae",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 52, 0),	//Post Mix Rabae
			conditionnalLinkButtons : GetButtonForMixRabae("On", "OR")
		},
		{
			id : 1,
			name : "Mute Mix Rabae",
			description : "mute mix when no post mix fx Rabae",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 52, 127),	//Post Mix Rabae
			conditionnalLinkButtons : GetButtonForMixRabae("Off", "AND"),
		}
	], "red", [
		new MidiXMessage("FromReaper", 1, "CC", 52, 0, "StateOn"),
		new MidiXMessage("FromReaper", 1, "CC", 52, 127, "StateOff")
	]));
	//19
	page.items.push(new MidiXItem(index++, "Post Mix Mute Reverb", "Preset", true, "", [
		{
			id : 0,
			name : "Unmute Mix Reverb",
			description : "unmute mix when at least a post mix fx Reverb",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 53, 0),	//Post Mix Reverb
			conditionnalLinkButtons : GetButtonForMixReverb("On", "OR")
		},
		{
			id : 1,
			name : "Mute Mix Reverb",
			description : "mute mix when no post mix fx Reverb",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 53, 127),	//Post Mix Reverb
			conditionnalLinkButtons : GetButtonForMixReverb("Off", "AND"),
		}
	], "red", [
		new MidiXMessage("FromReaper", 1, "CC", 53, 0, "StateOn"),
		new MidiXMessage("FromReaper", 1, "CC", 53, 127, "StateOff")
	]));
	//20
	page.items.push(
		{
			id: index++,
			name: "Prepare Macro",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "Any", "PrepareMacro")
			],
			color: "blue",
			triggers : [new MidiXMessage("Chocolate", 1, "PC", 5)]
		});
	//21
	page.items.push(
		{
			id: index++,
			name: "Play Macro",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "Any", "PlayMacro")
			],
			color: "blue",
			triggers : [new MidiXMessage("Chocolate", 1, "PC", 6)]
		});
	//22
	page.items.push(
		{
			id: index++,
			name: "Wow",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Wow On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 1, 127)),
				new MidiXAction(1, "Wow Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 1, 0)),
				GetMidiXActionSetRouting(2)],
			color: "red",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 1, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 1, 0, "StateOff")
			]
		});
	//23
	page.items.push(
		{
			id: index++,
			name: "ExpWowEngaged",
			type: "Preset",
			color: "blue",
			actions : []
		});
	//24
	page.items.push(
		{
			id: index++,
			name: "Set FULL For Delay Mod",
			type: "Momentary",
			color: "red",
			actions : [
				{
					id : 0,
					name : "Mute Usb 3 to Full for Delay Mod",
					description : "Mute USB3 if Delay Mod",
					event : "Any",
					action : "LinkButton",
					linkedButton: new MidiXLinkButton(0, 27, "Toggle"),
					conditionnalLinkButtons : [GetMidiXLinkButtonByName("Delay Mod", null, "On", "MustBe")]
				}/*,
				{
					id : 1,
					name : "Unmute Usb 3 to Full for Delay Mod",
					description : "Unmute USB3 if Delay Mod",
					event : "Any",
					action : "Midi",
					message : new MidiXMessage("Reaper", 1, "CC", 45, 0),	//POST Mute Full Input USB3
					conditionnalLinkButtons : [GetMidiXLinkButtonByName("Delay Mod", null, "Off", "MustBe")]
				}*//*,
				{
					id: 2,
					description : "Pre",
					event: "OnPress",
					action: "LinkButton",
					conditionnalLinkButtons : GetButtonForPre("On", "OR"), // Scene 7
					linkedButton : new MidiXLinkButton(0, 13, "Toggle")
				},
				{
					id: 3,
					description : "Not Pre",
					event: "OnPress",
					action: "LinkButton",
					conditionnalLinkButtons : GetButtonForPre("Off", "AND"), // Scene 2
					linkedButton : new MidiXLinkButton(0, 11, "Toggle")
				}*/
			]
		});
	//25
	page.items.push(
		{
			id: index++,
			name: "Wha",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Wha On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 20, 127)),
				new MidiXAction(1, "Wha Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 20, 0)),
				GetMidiXActionSetRouting(2)
			],

			color: "brown",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 20, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 20, 0, "StateOff")
			]
		});
	//26
	page.items.push(new MidiXItem(index++, "Pan", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Pan",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 64,
			message: new MidiXMessage("Reaper", 1, "CC", 40),
			expMin: 0,
			expMax: 127

		}
	], "orange", [new MidiXMessage("FromReaper", 1, "CC", 40, null, "Expression")]));
	//27
	page.items.push(
		{
			id: index++,
			name: "Set Routing Scene for Delay Mod",
			type: "Momentary",
			color: "red",
			actions : [
				{
					id : 0,
					name : "Mute Usb 3 to Full for Delay Mod",
					description : "Mute USB3 if Delay Mod",
					event : "Any",
					action : "Midi",
					message : new MidiXMessage("Reaper", 1, "CC", 45, 127),	//POST Mute Full Input USB3
				},
				{
					id: 1,
					name : "Scene 7 for Delay Mod",
					description : "Pre",
					event: "Any",
					action: "LinkButton",
					conditionnalLinkButtons : GetButtonForPre("On", "OR"), 
					linkedButton : new MidiXLinkButton(0, 13, "Toggle") // Scene 7
				},
				{
					id: 2,
					name : "Scene 3 For Delay Mod",
					description : "Not Pre",
					event: "Any",
					action: "LinkButton",
					conditionnalLinkButtons : GetButtonForPre("Off", "AND"), 
					linkedButton : new MidiXLinkButton(0, 11, "Toggle") // Scene 3
				}
			]
		});
	page.nbButtons = index;
	return page;
}
function GetButtonForMixGuitarRig(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByName("Reverse", 		null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Grain Delay", 	null, state, operator));
	list.push(GetMidiXLinkButtonByName("Chip Flair", 	null, state, operator)); 
	return list;
}
function GetButtonForMixGojira(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByName("Delay", 	null, state, operator)); //Delay Gojira
	list.push(GetMidiXLinkButtonByName("Shimmer", 	null, state, operator)); //Reverb Gojira (Shimmer)
	return list;
}
function GetButtonForMixRabae(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByName("Delay Rabae", 	null, state, operator)); //Delay Rabea
	list.push(GetMidiXLinkButtonByName("Reverb Rabae", null, state, operator)); //Reverb Rabae (Freeze)
	return list;
}
function GetButtonForMixReverb(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByName("Reverb", null, state, operator)); //Reverb
	return list;
}
function GetButtonForMix(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByName("Shimmer", null, state, operator)); //Reverb Gojira (Shimmer)
	list.push(GetMidiXLinkButtonByName("Reverb", null, state, operator)); //Reverb	
	list.push(GetMidiXLinkButtonByName("Delay", null, state, operator)); //Delay Gojira
	list.push(GetMidiXLinkButtonByName("Portal", null, state, operator)); //Portal
	list.push(GetMidiXLinkButtonByName("Reverse", null, state, operator)); //Reverse
	list.push(GetMidiXLinkButtonByName("Delay Rabae", null, state, operator)); //Delay Rabea
	list.push(GetMidiXLinkButtonByName("Reverb Rabae", null, state, operator)); //Reverb Rabae (Freeze)
	list.push(GetMidiXLinkButtonByName("Grain Delay", null, state, operator)); //Grain Delay
	list.push(GetMidiXLinkButtonByName("Chip Flair", null, state, operator)); //Chip Flair
	
	return list;
}
function GetButtonForFullMix(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByName("Tremolo", null, state, operator)); // Tremolo
	list.push(GetMidiXLinkButtonByName("Tremolo Soft", null, state, operator)); // Tremolo Soft
	list.push(GetMidiXLinkButtonByName("Ring Arp", null, state, operator)); // Ring Arp
	list.push(GetMidiXLinkButtonByName("Filter", null, state, operator)); // Filter
	list.push(GetMidiXLinkButtonByName("Drum Pad", null, state, operator)); // Drum Pad
	list.push(GetMidiXLinkButtonByName("Glisten", null, state, operator)); // Glisten
	list.push(GetMidiXLinkButtonByName("Shiny Roads", null, state, operator)); // Shiny Roads
	list.push(GetMidiXLinkButtonByName("Gramophone", null, state, operator)); // Gramophone	
	list.push(GetMidiXLinkButtonByName("Guillotine", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Fracture", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Wuw Cha chaa", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Vinyl", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Rec1", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Rec2", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Rec3", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Rec4", null, state, operator)); 
	list.push(GetMidiXLinkButtonByName("Love", null, state, operator)); 
	return list;
}
function GetButtonForPre(state, operator)
{
	var list = [];	
	list.push(GetMidiXLinkButtonByName("Wha", null, state, operator)); //Wha On/Off
	list.push(GetMidiXLinkButtonByName("Wow", null, state, operator)); //Wow
	list.push(GetMidiXLinkButtonByName("ExpWowEngaged", null, state, operator)); //ExpWowEngaged
	list.push(GetMidiXLinkButtonByName("Octaver", null, state, operator)); //Octaver	
	list.push(GetMidiXLinkButtonByName("Fuzz", null, state, operator)); //Fuzz
	list.push(GetMidiXLinkButtonByName("Rat", null, state, operator)); //Rat
	list.push(GetMidiXLinkButtonByName("Comp", null, state, operator)); //Comp
	list.push(GetMidiXLinkButtonByName("Octaver Rabae", null, state, operator)); //Octaver Rabae
	list.push(GetMidiXLinkButtonByName("Fuzz Rabae", null, state, operator)); //Fuzz Rabae
	list.push(GetMidiXLinkButtonByName("Overdrive Rabae", null, state, operator)); //Overdrive Rabae
	list.push(GetMidiXLinkButtonByName("Synth Pre", null, state, operator)); //Synth Pre
	return list;
}
function GetMidiXActionSetRouting(id)
{
	return 	{
		id : id,
		description : "Set routing",
		event : "Any",
		action : "LinkButton",
		linkedButton : new MidiXLinkButton(0, 8, "Toggle")	//Set Routing
	}
}
function GetMidiXActionsForPostMixGuitarRig(id)
{
	return 	{
		id : id,
		description : "Post Mix Guitar Rig",
		event : "Any",
		action : "LinkButton",
		linkedButton : new MidiXLinkButton(0, 16, "Toggle") //Post Mix Mute GuitarRig
	}
}
function GetMidiXActionsForPostMixGojira(id)
{
	return 	{
		id : id,
		description : "Post Mix Gojira",
		event : "Any",
		action : "LinkButton",
		linkedButton : new MidiXLinkButton(0, 17, "Toggle") //Post Mix Mute Gojira
	}
}
function GetMidiXActionsForPostMixRabae(id)
{
	return 	{
		id : id,
		description : "Post Mix Rabae",
		event : "Any",
		action : "LinkButton",
		linkedButton : new MidiXLinkButton(0, 18, "Toggle") //Post Mix Mute Rabae
	}
}
function GetMidiXActionsForPostMixReverb(id)
{
	return 	{
		id : id,
		description : "Post Mix Reverb",
		event : "Any",
		action : "LinkButton",
		linkedButton : new MidiXLinkButton(0, 19, "Toggle") //Post Mix Mute Reverb
	}
}
function SetPagesSummary(profile) {

	var nbPages = profile.Pages.length;
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Page 1", false, 
	[
		new MidiXMessage("Chocolate", 1, "PC", 2)
	]);
	profile.Pages.push(page);
	
	var indexPage = 2;
	var idButton = 0;
	for(var i = 1; i < nbPages; i++)
	{
		var idPage = profile.Pages.length;
		idButton = (i - 1) % 8;
		var pageProfile = profile.Pages[i];
		if( i > 1 && idButton == 0)
		{
			page = new MidiXPage(idPage, (idPage) + " - Page " + indexPage++, false);
			profile.Pages.push(page);
		}
		page.items.push({ id: idButton, type: "Momentary", actions: [{id : 0, event : "Any", action : "GoPage", idPage : pageProfile.id}], color: colors[idButton], name: pageProfile.name });
	}
	for(var i = idButton ; i < 7; i++)
	{
		page.items.push({id : i + 1, actions : [], type:"Momentary", name : "", color: colors[i+1]});
	}
	
	//page.items.push({ id: 1, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "indigo", 	name: "Stomp 2" });
	//page.items.push({ id: 2, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "blue", 		name: "Expression" });
	//page.items.push({ id: 3, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "turquoise",	name: "FX" });
	//page.items.push({ id: 4, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "orange", 	name: "Note" });
	//page.items.push({ id: 5, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "red", 		name: "Routing" });
	//page.items.push({ id: 6, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "pink", 		name: "Rabae Arp 1" });
	//page.items.push({ id: 7, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "brown", 	name: "Rabae Arp 2" });
}
function GetItemButtonForLight(index, label, keyboard, channel, note, color)
{
	return 	{
		id: index,
		name: label,
		type: "Preset",
		actions: [
				new MidiXAction(0, "On", "OnPress", "Midi", new MidiXMessage("Sweetlight", channel, "NoteOn", note)),
				new MidiXAction(1, "Off", "OnRelease", "Midi", new MidiXMessage("Sweetlight", channel, "NoteOff", note))				
		],
		color: color,
		triggers: [
			{
				device : "Keyboard",
				keyboardKey : keyboard
			},	
			{
				device : "Sweetlight", midiType : "NoteOn", channel : channel, value : note, triggerAction : "StateOn"
			},
			{
				device : "Sweetlight", midiType : "NoteOff", channel : channel, value : note, triggerAction : "StateOff"
			}
		]
	};
}
function GetMidiMessageForColorAPC(note, color, action)
{
	var channel = 13;
	var velocity = 3;
	if(action== "off")	{ channel = 1;	}
	else if(action == "full"){channel = 7;}
	else if(action == "dimmed") {channel = 2;}
	else if(action == "blink"){channel = 15;}
	else if(action == "blinkfast") {channel = 12;}
	else if(action == "pulse"){channel = 11;}
	else if(action == "pulsefast") {channel = 8;}
	if(color == "white")	{ velocity = 3;}
	else if(color == "black"){channel = 1 ; }
	else if(color == "red")	{ velocity = 5; }
	else if(color == "violet"){velocity = 82;}
	else if(color == "cyan"){velocity = 32;}
	else if(color == "blue"){velocity = 45 ;}
	else if(color == "yellow"){velocity = 9;}
	else if(color == "green"){velocity = 88;}
	else if(color == "pink"){velocity = 56;}
	else if(color == "orange"){ velocity = 96;}
	return new MidiXMessage("APC Buttons",channel, "NoteOn", note, velocity);
}
function GetPageStomp1(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Stomp", true,
		[
			new MidiXMessage("Chocolate", 1, "PC", 1)
		],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = 0;
	page.items.push(new MidiXItem(index, "Amp", "Momentary", null, "", 
		[
			{
				id : 0,
				name : "",
				event : "OnPress", 
				action : "GoPage",
				idPage : 28
			}
		], colors[index++]));
	
	page.items.push(GetSimpleFxButton(index++, 21, "Tremolo Soft<br/>.. Exp", null, null, 
	[
		{id:3, event : "DoublePress", action : "GoPage", idPage : 13},
		{
			id: 4,
			name: "Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 99),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Rate",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 97),
			expMin: 0,
			expMax: 127
		}
	] , 
	[
		new MidiXMessage("FromReaper", 1, "CC", 99, null, "Expression0"),
		new MidiXMessage("FromReaper", 1, "CC", 97, null, "Expression1"),
	]
	));
	page.items.push(GetSimpleFxButton(index++, 26, "Shimmer", GetMidiXActionsForPostMixGojira(3), null, 
	[
		{
			id: 4,
			name: "High Cut",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 6),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Time",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 7),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 2, "CC", 6, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 7, null, "Expression1")
	] ));
	page.items.push(GetSimpleFxButton(index++, 8, "Reverb<br/>.. Exp", GetMidiXActionsForPostMixReverb(3), null, 
		[
			{id:4, event : "DoublePress", action : "GoPage", idPage : 5},
			{
				id: 4,
				name: "Mix",
				event: "OnPress",
				action: "EXP",
				idExp: 2,
				valueExp: 50,
				message: new MidiXMessage("Reaper", 1, "CC", 18),
				expMin: 0,
				expMax: 127
			},
			{
				id: 5,
				name: "Feedback",
				event: "OnPress",
				action: "EXP",
				idExp: 3,
				valueExp: 50,
				message: new MidiXMessage("Reaper", 1, "CC", 17),
				expMin: 0,
				expMax: 127
			}
		], 
		[
			new MidiXMessage("FromReaper", 1, "CC", 18, null, "Expression0"),
			new MidiXMessage("FromReaper", 1, "CC", 17, null, "Expression1"),
		] ));
	page.items.push(
		{
			id: index++,
			name: "Wow",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Wow Type", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 15, 127)), // Wow Type
				new MidiXAction(1, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Wow", "On")), // Wow
				new MidiXAction(2, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Wow", "Off")), // Wow
				new MidiXAction(3, "Wow Postition", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 14, 127)), // Wow Position
				GetMidiXActionSetRouting(4)],
			color: "red",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 1, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 1, 0, "StateOff")
			]
		});
	page.items.push(GetSimpleFxButton(index++, 2, "Octaver" , null, "orange"));
	
	var indexRaw = 0;
	page.items.push(
		{
			id: 6,
			name: "Raw",
			type: "Momentary",
			actions: [				
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 2)), 	//Scene QC 3
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 127)),		//Mute Reaper Post Full
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 46, 127)),		//Mute Reaper Post Mix
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 44, 127)),		//Unmute QC
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 10, 127)), 		//Gain
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 2, 127)),	//Volume			
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 2, 0)),			//Octaver
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 7, 0)),			//Delay
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 22, 0)),			//Tremolo
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 21, 0)),			//Rotary		
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 26, 0)),			//Shimmer
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 8, 0)),			//Reverb
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 31, 0)),			//Ring Modulator
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 12, 0)),			//Reverse
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 39, 0)),			//Filter
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 24, 0)),			//Fuzz
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 25, 0)),			//Rat
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 28, 0)),			//Comp
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 1, 0)),			//Wow
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 33, 0)),			//Chip Flair
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 34, 0)),			//Drum Pad
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 35, 0)),			//Glisten
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 36, 0)),			//Shiny Roads
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 37, 0)),			//Grain Delay
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 20, 0)),			//Wha
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 38, 0)),			//Gramophone
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 47, 0)),			//Delay Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 48, 0)),			//Reverb Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 49, 0)),			//Reverb Freeze Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 4, 0)),			//Octaver Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 5, 0)),			//Fuzz Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 6, 0)),			//Overdrive Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 42, 0)),			//Parralle Gojira
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 43, 0)),			//Parallele Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 3, 0)),			//Portal
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 50, 127)),		//Post Mix Guitar Rig
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 51, 127)),		//Post Mix Gojira
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 52, 127)),		//Post Mix Rabae
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 53, 127)),		//Post Mix Reverb
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 54, 0)),			//Synth Pre
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 55, 0)),			//Guillotine
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 56, 0)),			//Fracture
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 57, 0)),			//Wuw Cha chaa
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 58, 0)),			//Vinyl
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 59, 0)),			//Vynil SpinDown
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 40, 0)),			//Delay Mod
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 92, 0)),			//Love
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 41, 127)),		//Pan Center
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0)),			//Reverb Clear
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),		//Reverb Clear
				new MidiXAction(indexRaw++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 127, 127)),		//Resync
				new MidiXAction(indexRaw++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "On"), null, null, null, null, null, 100), //Resync
				new MidiXAction(indexRaw++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "On"), null, null, null, null, null, 100), //Resync
			],
			color: "brown"
		});
	index++;
	page.items.push(GetSimpleFxButton(index++, 7, "Delay<br/>.. Exp", GetMidiXActionsForPostMixGojira(3), "green", 
	[
		{id:4, event : "DoublePress", action : "GoPage", idPage : 5},
		{
			id: 4,
			name: "Tone",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 8),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Feedback",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 13),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 2, "CC", 8, null, "Expression0"),
		new MidiXMessage("FromReaper", 1, "CC", 13, null, "Expression1"),
	] ));
	return page;
}
function GetPageStomp2(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Stomp 2", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = 0;
	page.items.push(GetSimpleFxButton(index++, 3, "Portal<br/>..Presets", null, null, [
		{id:3, event : "DoublePress", action : "GoPage", idPage : 25},
		{
			id: 4,
			name: "Param 0",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 11),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Param 1",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 12),
			expMin: 0,
			expMax: 127
		}
	],
	[
		new MidiXMessage("FromReaper", 2, "CC", 11, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 12, null, "Expression1"),
	],
	[
		GetSimpleFxButton(101, 109, "Offline", null, "red")
	] ));	
	page.items.push(GetSimpleFxButton(index++, 31, "Ring Arp" ));
	page.items.push(GetSimpleFxButton(index++, 12, "Reverse", GetMidiXActionsForPostMixGuitarRig(3), null, 
	[
		{
			id: 4,
			name: "Time",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 9),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Feedback",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 10),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 2, "CC", 9, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 10, null, "Expression1"),
	]));		
	page.items.push(
		{
			id: index++,
			name: "Tap",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Tap", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 29, 127))],
			color: "lightgreen"
		});
	page.items.push(GetSimpleFxButton(index++, 24, "Fuzz" ));	
	page.items.push(GetSimpleFxButton(index++, 25, "Rat" ));	
	//page.items.push(GetSimpleFxButton(index++, 28, "Comp" ));		
	page.items.push(GetSimpleFxButton(index++, 22, "Tremolo<br/>.. Exp", null, null, 
	[
		{id:3, event : "DoublePress", action : "GoPage", idPage : 13},
		{
			id: 4,
			name: "Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 98),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Rate",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 96),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 1, "CC", 98, null, "Expression0"),
		new MidiXMessage("FromReaper", 1, "CC", 96, null, "Expression1"),
	] ));
	page.items.push(GetSimpleFxButton(index++, 39, "Filter", null, null, 
	[
		{
			id: 2,
			name: "Filter",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 30),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 1, "CC", 30, null, "Expression0")
	]));
	return page;
}
function GetPageStomp3(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Stomp 3", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = 0;
	page.items.push(GetSimpleFxButton(index++, 47, "Delay Rabae", GetMidiXActionsForPostMixRabae(3), null, 
	[
		{
			id: 4,
			name: "Hi Cut",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 18),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Feedback",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 19),
			expMin: 0,
			expMax: 127
		}
	],
	[
		new MidiXMessage("FromReaper", 2, "CC", 18, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 19, null, "Expression1")
	]));	
	page.items.push(
		{
			id: index++,
			name: "Reverb Clear",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index]
		});
	page.items.push(GetSimpleFxButton(index++, 49, "Freeze Rabae", null, null, 
	[
		{
			id: 3,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 22),
			expMin: 0,
			expMax: 127
		}
	] ,
	[
		new MidiXMessage("FromReaper", 2, "CC", 22, null, "Expression0")
	]));	
	page.items.push(GetSimpleFxButton(index++, 48, "Reverb Rabae", GetMidiXActionsForPostMixRabae(3), null, 
	[
		{
			id: 4,
			name: "Hi Cut",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 20),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Feedback",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 21),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 2, "CC", 20, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 21, null, "Expression1")
	]));	
	page.items.push(GetSimpleFxButton(index++, 23, "Gate"));	
	page.items.push(GetSimpleFxButton(index++, 4, "Octaver Rabae"));	
	page.items.push(GetSimpleFxButton(index++, 5, "Fuzz Rabae"));	
	page.items.push(GetSimpleFxButton(index++, 6, "Overdrive Rabae"));	
	return page;
}
function GetPageExpression(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Expression", false,[] ,
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = -1;
	var indexAction = -1;
	page.items.push(new MidiXItem(++index, "Oct +1", "Preset", false, "EXP1", [
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("Oct +2", "Off") // Oct +2
		},
		{
			id: ++indexAction,
			name: "Oct +1",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 14), // EXP WOW
			expMin: 0,
			expMax: 127
		},
		{
			id: ++indexAction,
			name: "",
			event: "OnPress",
			action: "Midi",
			message: new MidiXMessage("Reaper", 1, "CC", 14, 0) // WOW Position
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("Wow", "Off")
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("ExpWowEngaged", "On") // ExpWowEngaged
		},
		{
			id: ++indexAction,
			event: "OnRelease",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("ExpWowEngaged", "Off") // ExpWowEngaged
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "EXPTrigger",
			idExp: 0,
			expTrigger:
			{
				value: 0,
				comparator: "Equals"
			},
			linkedButton: GetMidiXLinkButtonByName("Wow", "Off") // Wow 
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "EXPTrigger",
			idExp: 0,
			expTrigger:
			{
				value: 1,
				comparator: "GreaterOrEquals"
			},
			linkedButton: GetMidiXLinkButtonByName("Wow", "On") // Wow 
		},
		{
			id: ++indexAction,
			name: "",
			event: "OnPress",
			action: "Midi",
			message: new MidiXMessage("Reaper", 1, "CC", 15, 64) // WOW Type
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("Resync", "Toggle") // Sync
		},
		GetMidiXActionSetRouting(indexAction)
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 14, null, "Expression")]));
	indexAction = -1;
	page.items.push(new MidiXItem(++index, "Oct +2", "Preset", false, "EXP1", [
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("Oct +1", "Off") // Oct +1
		},
		{
			id: ++indexAction,
			name: "Oct +2",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 14), // EXP WOW
			expMin: 0,
			expMax: 127
		},
		{
			id: ++indexAction,
			name: "",
			event: "OnPress",
			action: "Midi",
			message: new MidiXMessage("Reaper", 1, "CC", 14, 0) // WOW Position
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton:  GetMidiXLinkButtonByName("Wow", "Off") // Wow 
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("ExpWowEngaged", "On") // ExpWowEngaged
		},
		{
			id: ++indexAction,
			event: "OnRelease",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("ExpWowEngaged", "Off") // ExpWowEngaged
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "EXPTrigger",
			idExp: 0,
			expTrigger:
			{
				value: 0,
				comparator: "Equals"
			},
			linkedButton: GetMidiXLinkButtonByName("Wow", "Off") // Wow 
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "EXPTrigger",
			idExp: 0,
			expTrigger:
			{
				value: 1,
				comparator: "GreaterOrEquals"
			},
			linkedButton: GetMidiXLinkButtonByName("Wow", "On") // Wow 
		},
		{
			id: ++indexAction,
			name: "",
			event: "OnPress",
			action: "Midi",
			message: new MidiXMessage("Reaper", 1, "CC", 15, 0) // WOW Type
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByName("Resync", "Toggle") // Sync
		},
		GetMidiXActionSetRouting(indexAction)
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 14, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Reverb Mix<br/>EXP 2", "Preset", false, "EXP2", [
		{
			id: 0,
			name: "Reverb Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 1,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 18),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 18, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Reverb Time<br/>EXP 1", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Reverb Time",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 17),
			expMin: 0,
			expMax: 127
		},
		{
			id: 1,
			event: "OnPress",
			action: "EXPTrigger",
			idExp: 0,
			expTrigger:
			{
				value: 0,
				comparator: "Equals"
			},
			linkedButton: GetMidiXLinkButtonByName("Reverb Clear", "Toggle") // Reverb Clear
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 17, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Wha", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Wha",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 16),	// WHA
			expMin: 0,
			expMax: 127
		},
		{
			id: 1,
			event: "OnPress",
			action: "EXPTrigger",
			idExp: 0,
			expTrigger:
			{
				value: 0,
				comparator: "Equals"
			},
			linkedButton: GetMidiXLinkButtonByName("Wha", "Off") // WHA 
		},
		{
			id: 2,
			event: "OnPress",
			action: "EXPTrigger",
			idExp: 0,
			expTrigger:
			{
				value: 1,
				comparator: "GreaterOrEquals"
			},
			linkedButton: GetMidiXLinkButtonByName("Wha", "On") // WHA 
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 16, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Volume<br/>EXP 2", "Preset", false, "EXP2", [
		{
			id: 0,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 1,
			valueExp: 127,
			message: new MidiXMessage("Quad Cortex", 1, "CC", 2),
			expMin: 0,
			expMax: 127
		}
	], colors[index]));
	page.items.push(
		new MidiXItem(++index, "Filter", "Preset", false, "EXP1", [
			{
				id: 0,
				name: "Filter",
				event: "OnPress",
				action: "EXP",
				idExp: 0,
				valueExp: 0,
				message: new MidiXMessage("Reaper", 1, "CC", 30),
				expMin: 0,
				expMax: 127
			},
			{
				id: 1,
				event: "OnPress",
				action: "EXPTrigger",
				idExp: 0,
				expTrigger:
				{
					value: 120,
					comparator: "LessOrEquals"
				},
				linkedButton: GetMidiXLinkButtonByName("Filter", "On") // Filter
			},
			{
				id: 2,
				event: "OnPress",
				action: "EXPTrigger",
				idExp: 0,
				expTrigger:
				{
					value: 121,
					comparator: "GreaterOrEquals"
				},
				linkedButton: GetMidiXLinkButtonByName("Filter", "Off") // Filter 
			}
		], colors[index], null));
	page.items.push(new MidiXItem(++index, "Delay<br/>Feedback", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Delay Feedback",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 13),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 13, null, "Expression")]));
	return page;
}
function GetPageExpression2(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Expression 2", false,[] ,
		//actions 
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = -1;
	
	page.items.push(new MidiXItem(++index, "Exp Tremolo Mix", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Tremolo Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 98),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 98, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Exp Tremolo Soft Mix", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Tremolo Soft Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 99),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 99, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Exp Tremolo Rate", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Tremolo Rate",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 96),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 96, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Exp Tremolo Soft Rate", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Tremolo Soft Rate",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 97),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 97, null, "Expression")]));
	page.items.push(
		{
			id: ++index,
			name: "Tremolo Sync",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 94, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 94, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 94, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 94, 0, "StateOff")
			]
		});		
	page.items.push(
		{
			id: ++index,
			name: "Tremolo Mix Sync",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 95, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 95, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 95, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 95, 0, "StateOff")
			]
		});		
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 666, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 666, 127))], group: "PresetRabea", color: colors[index], name: "" });

	return page;
}
function GetPageExpression3(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Volumes", false,[] ,
		//actions 
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = -1;
	
	page.items.push(new MidiXItem(++index, "Exp Volume Post Guitar Rig", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Volume Post Guitar Rig",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 86),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 86, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Exp Volume Post Gojira", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Volume Post Gojira",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 87),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 87, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Exp Volume Post Rabae", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Volume Post Rabae",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 88),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 88, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Exp Volume Post Portal", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Volume Post Rabae",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 89),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 89, null, "Expression")]));
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 666, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 666, 127))], group: "PresetRabea", color: colors[index], name: "" });	
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 666, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 666, 127))], group: "PresetRabea", color: colors[index], name: "" });

	return page;
}
function GetPageFX(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - FX", false,
	[
		//new MidiXMessage("Chocolate", 1, "PC", 6)
	],
	//actions
	[
		new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) // Resync
	]);
	var index = 0;
	page.items.push(GetSimpleFxButton(index++, 33, "Chip Flair", GetMidiXActionsForPostMixGuitarRig(3)));
	page.items.push(GetSimpleFxButton(index++, 34, "Drum Pad"));
	page.items.push(GetSimpleFxButton(index++, 35, "Glisten"));
	page.items.push(GetSimpleFxButton(index++, 36, "Shiny Roads"));
	page.items.push(GetSimpleFxButton(index++, 37, "Grain Delay", GetMidiXActionsForPostMixGuitarRig(3), null, 
	[
		{
			id: 4,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 17),
			expMin: 0,
			expMax: 127
		}
	],
	[
		new MidiXMessage("FromReaper", 2, "CC", 17, null, "Expression0")
	]
	));
	page.items.push(GetSimpleFxButton(index++, 38, "Gramophone"));
	page.items.push(GetSimpleFxButton(index++, 54, "Synth Pre"));
	page.items.push(GetSimpleFxButton(index++, 92, "Love<br/>.. Presets", null, null, [
		{id:3, event : "DoublePress", action : "GoPage", idPage : 27},
		{
			id: 4,
			name: "Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 3),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Wet",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 5),
			expMin: 0,
			expMax: 127
		}
	],
	[
		new MidiXMessage("FromReaper", 2, "CC", 3, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 5, null, "Expression1")
	] ));
	return page;
}
function GetSimpleFxButton(index, cc, name, addRouting, color, addActions, addTriggers, addbuttonsInside, midiChannel)
{
	if(!midiChannel)
	{
		midiChannel = 1;
	}
	var actions = 
	[
		new MidiXAction(0, name + " On", "OnPress", "Midi", new MidiXMessage("Reaper", midiChannel, "CC", cc, 127)),
		new MidiXAction(1, name + " Off", "OnRelease", "Midi", new MidiXMessage("Reaper", midiChannel, "CC", cc, 0)),
		GetMidiXActionSetRouting(2)
	];
	var triggers = [
		new MidiXMessage("FromReaper", midiChannel, "CC", cc, 127, "StateOn"),
		new MidiXMessage("FromReaper", midiChannel, "CC", cc, 0, "StateOff")
	];
	if(addRouting != undefined)
	{
		actions[actions.length] = addRouting
	}
	if(addActions)
	{
		for(var i=0;i<addActions.length;i++)
		{
			actions[actions.length] = addActions[i];
		}
	}
	if(addTriggers)
	{
		for(var i=0;i<addTriggers.length;i++)
		{
			triggers[triggers.length] = addTriggers[i];
		}
	}
	return  {
		id: index,
		name: name,
		type: "Preset",
		actions: actions,
		color: color!=undefined ? color : colors[index++],
		triggers: triggers,
		buttonsInside : addbuttonsInside != undefined ? addbuttonsInside : []
	};
}
function GetPageFX2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - FX 2", false,
	[
		//new MidiXMessage("Chocolate", 1, "PC", 6)
	],
	//actions
	[
		new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) // Resync
	]);
	var index = 0;	
	page.items.push(GetSimpleFxButton(index++, 56, "Fracture"));
	page.items.push(GetSimpleFxButton(index++, 57, "Wuw Cha chaa", null, null, 
	[
		{
			id: 3,
			name: "Speed",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 25),
			expMin: 0,
			expMax: 127
		}
	],
	[
		new MidiXMessage("FromReaper", 2, "CC", 25, null, "Expression0")
	]));
	page.items.push(GetSimpleFxButton(index++, 58, "Vinyl", null, null, 
	[
		new MidiXAction(3, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Vinyl Spindown", "Off")),
		{
			id: 4,
			name: "Dust",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 23),
			expMin: 0,
			expMax: 127
		},
		{
			id: 5,
			name: "Warp",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 24),
			expMin: 0,
			expMax: 127
		}
	], 
	[
		new MidiXMessage("FromReaper", 2, "CC", 23, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 24, null, "Expression1")
	]));
	page.items.push(GetSimpleFxButton(index++, 59, "Vinyl Spindown", false));
	page.items.push(GetSimpleFxButton(index++, 55, "Guillotine"));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	page.items.push(GetSimpleFxButton(index++, 40, "Delay Mod", null, null, 
	[
		{
			id: 3,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 26),
			expMin: 0,
			expMax: 127
		},
		{
			id: 4,
			name: "Feedback",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 27),
			expMin: 0,
			expMax: 127
		},
		
	],
	[
		new MidiXMessage("FromReaper", 2, "CC", 26, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 27, null, "Expression1")
	]
	));
	return page;
}
function GetPageNote(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Note", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) // Resync
		]);
	page.nbButtons = 12;
	page.items.push(new MidiXItem(0, "C", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 36, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 36, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(1, "C#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 37, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 37, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(2, "D", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 38, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 38, 127))
		], "blue"
	));
	page.items.push(new MidiXItem(3, "D#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 39, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 39, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(4, "E", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 40, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 40, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(5, "F", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 41, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 41, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(6, "F#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 42, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 42, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(7, "G", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 43, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 43, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(8, "G#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 44, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 44, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(9, "A", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 45, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 45, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(10, "A#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 46, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 46, 127))
		], "blue"

	));
	page.items.push(new MidiXItem(11, "B", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 47, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 47, 127))
		], "blue"

	));
	return page;
}
function GetPageRouting(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Routing", false, null, 
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) // Resync
		]
	);
	var index = -1
	page.items.push(
	{
		id: ++index,
		active : true,
		name: "Quad Cortex",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 44, 127)), //USB 5 Input QC
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 44, 0)), //USB 5 Input QC
			new MidiXAction(2, "", "OnRelease", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 3)), //QC Scene 3
			new MidiXAction(3, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(0, 8, "Toggle")) //SetRouting
		],

		color: colors[index],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 44, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 44, 0, "StateOff")
		]
	});
	
	page.items.push(
	{
		id: ++index,
		name: "Parallele Gojira",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 42, 127)), 	//Parallele Gojira
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 42, 0)),  	//Parallele Gojira
			{
				id: 3,
				name: "Pan",
				event: "OnPress",
				action: "EXP",
				idExp: 2,
				valueExp: 50,
				message: new MidiXMessage("Reaper", 1, "CC", 69),
				expMin: 0,
				expMax: 127
			}
		],

		color: colors[index],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 42, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 42, 0, "StateOff"),
			new MidiXMessage("FromReaper", 1, "CC", 69, null, "Expression0")
		],
		buttonsInside : [
			GetSimpleFxButton(0, 104, "Online", null, "red"),
			new MidiXItem(1, "Pan Center", "Momentary", true, "", [new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Reaper", 1, "CC", 69, 64))], "blue") // PAN Gojira
		]
	});	
	page.items.push(
	{
		id: ++index,
		name: "Parallele Rabea",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 43, 127)), 	//Parralele Rabae		
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 43, 0)),  	//Parralele Rabae
			{
				id: 3,
				name: "Pan",
				event: "OnPress",
				action: "EXP",
				idExp: 2,
				valueExp: 50,
				message: new MidiXMessage("Reaper", 1, "CC", 79),
				expMin: 0,
				expMax: 127
			}
		],

		color: colors[index],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 43, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 43, 0, "StateOff"),
			new MidiXMessage("FromReaper", 1, "CC", 79, null, "Expression0")
		],
		buttonsInside : [
			GetSimpleFxButton(0, 103, "Online", null, "red"),
			new MidiXItem(1, "Pan Center", "Momentary", true, "", [new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Reaper", 1, "CC", 79, 64))], "blue") // PAN Rabae

		]
	});	
	page.items.push(
	{
		id: ++index,
		name: "Midi",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 30, 127)), //Active MIDI
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 2, "CC", 30, 0)),  //Active MIDI
		{
			id: 3,
			name: "Pan",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 33),
			expMin: 0,
			expMax: 127
		}
		],				
		color: colors[index],
		triggers: [
			new MidiXMessage("FromReaper", 2, "CC", 30, 127, "StateOn"),
			new MidiXMessage("FromReaper", 2, "CC", 30, 0, "StateOff"),
			new MidiXMessage("FromReaper", 2, "CC", 33, null, "Expression0")
		],
		buttonsInside : [
			GetSimpleFxButton(103, 110, "Online", null, "red"),
			new MidiXItem(1, "Pan Center", "Momentary", true, "", [new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Reaper", 2, "CC", 33, 64))], "blue") // PAN MIDI

		]
	});
	page.items.push(
	{
		id: ++index,
		name: "Presets",
		type: "Preset",
		actions: [
			{
				id : 0,
				name : "Preset Rabae",
				idPage : 18,
				action : "GoPage"
			}
		],
		color: colors[index],
		triggers : [
		]
	});	
	page.items.push(
	{
		id: ++index,
		name: "Exp1<br/>Volume Gojira<br />To Out 3/4",
		type: "Preset",
		actions: [
			new MidiXAction(0, "Volume Gojira 3/4", "OnPress", "EXP", new MidiXMessage("Reaper", 1, "CC", 81), 0), // Out 3/4  
			new MidiXAction(1, "Gojira Out 1/2 ", "OnPress", "EXP", new MidiXMessage("Reaper", 2, "CC", 28), 3), // Out 1/2
		],
		group : "EXP1",
		color: colors[index],
		triggers : [
			new MidiXMessage("FromReaper", 1, "CC", 81, null, "Expression0"),
			new MidiXMessage("FromReaper", 2, "CC", 28, null, "Expression1")
		]
	});	
	page.items.push(
	{
		id: ++index,
		name: "Exp1<br/>Volume Rabae<br />To Out 3/4",
		type: "Preset",
		actions: [
			new MidiXAction(0, "Volume Rabae 3/4", "OnPress", "EXP", new MidiXMessage("Reaper", 1, "CC", 80), 0),	//Rabae Out 3/4  
			new MidiXAction(1, "Rabae Out 1/2", "OnPress", "EXP", new MidiXMessage("Reaper", 2, "CC", 29), 3),	//Rabae Out 1/2 
		],
		group : "EXP1",
		color: colors[index],
		triggers : [
			new MidiXMessage("FromReaper", 1, "CC", 80, null, "Expression0"),
			new MidiXMessage("FromReaper", 2, "CC", 29, null, "Expression1")
		]
	});
	page.items.push(
	{
		id: ++index,
		name: "Exp1<br/>Volume Midi<br />To Out 1/2",
		type: "Preset",
		actions: [
			new MidiXAction(0, "Volume Midi 1/2", "OnPress", "EXP", new MidiXMessage("Reaper", 2, "CC", 31), 0),	//Rabae Out 3/4  
			new MidiXAction(1, "Volume Midi 3/4", "OnPress", "EXP", new MidiXMessage("Reaper", 2, "CC", 32), 3),	//Rabae Out 1/2 
		],
		group : "EXP1",
		color: colors[index],
		triggers : [
			new MidiXMessage("FromReaper", 2, "CC", 31, null, "Expression0"),
			new MidiXMessage("FromReaper", 2, "CC", 32, null, "Expression1")
		]
	});
	return page;
}
function GetPageSceneQC(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Scene QC", false);
	var index = -1;
	page.items.push(new MidiXItem(++index, "Scene A", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Scene B", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 1))], colors[index]));
	page.items.push(new MidiXItem(++index, "Scene C", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 2))], colors[index]));
	page.items.push(new MidiXItem(++index, "Scene D", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 3))], colors[index]));
	page.items.push(new MidiXItem(++index, "Scene E", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 4))], colors[index]));
	page.items.push(new MidiXItem(++index, "Scene F", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 5))], colors[index]));
	page.items.push(new MidiXItem(++index, "Scene G", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 6))], colors[index]));
	page.items.push(new MidiXItem(++index, "Scene H", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 7))], colors[index]));
	return page;
}
function GetPageRabeaArp1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Arp 1 ", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 1, 127))], group: "PresetRabea", color: colors[index], name: "80's Dream Transition - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 2, 127))], group: "PresetRabea", color: colors[index], name: "aMUSEd - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 3, 127))], group: "PresetRabea", color: colors[index], name: "Astroboy" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 4, 127))], group: "PresetRabea", color: colors[index], name: "Behold, Retro Sounds - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 5, 127))], group: "PresetRabea", color: colors[index], name: "Crazy Arpeggio" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 6, 127))], group: "PresetRabea", color: colors[index], name: "Dancing Fifths Synth - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 7, 127))], group: "PresetRabea", color: colors[index], name: "Descending Droplets (C Minor)" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 8, 127))], group: "PresetRabea", color: colors[index], name: "Distant Particles" });
	return page;
}
function GetPageRabeaArp2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Arp 2 ", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC",  9, 127))], group: "PresetRabea", color: colors[index], name: "Final Fantasy Arpeggio" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 10, 127))], group: "PresetRabea", color: colors[index], name: "Let there be Auto Tapping" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 11, 127))], group: "PresetRabea", color: colors[index], name: "Plucked Saw (DeadRat style) - Synth - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 12, 127))], group: "PresetRabea", color: colors[index], name: "Select Key For Fun - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 13, 127))], group: "PresetRabea", color: colors[index], name: "Why is it always Stranger Things - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 14, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 15, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 16, 127))], group: "PresetRabea", color: colors[index], name: "" });
	return page;
}
function GetPageRabeaFuzz1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Fuzz 1", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 17, 127))], group: "PresetRabea", color: colors[index], name: "GliTcHEd Riff$" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 18, 127))], group: "PresetRabea", color: colors[index], name: "Gnarly AF Riffs" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 19, 127))], group: "PresetRabea", color: colors[index], name: "LeoFrog Fuzz" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 20, 127))], group: "PresetRabea", color: colors[index], name: "Mon then" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 21, 127))], group: "PresetRabea", color: colors[index], name: "Offer Organs - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 22, 127))], group: "PresetRabea", color: colors[index], name: "Thasss Nasssty" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 23, 127))], group: "PresetRabea", color: colors[index], name: "The Gainsaw" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 24, 127))], group: "PresetRabea", color: colors[index], name: "The Gates Of Hell - no cab" });
	return page;
}
function GetPageRabaeFuzz2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Fuzz 2", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 25, 127))], group: "PresetRabea", color: colors[index], name: "The Hypnotoad - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 26, 127))], group: "PresetRabea", color: colors[index], name: "Angry Brit" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 27, 127))], group: "PresetRabea", color: colors[index], name: "Oct-Sub" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 28, 127))], group: "PresetRabea", color: colors[index], name: "Pushed Brit Lead" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 29, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 30, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 31, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 32, 127))], group: "PresetRabea", color: colors[index], name: "" });
	return page;
}
function GetPageRabaeSynth1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Synth 1", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 33, 127))], group: "PresetRabea", color: colors[index], name: "Black Gummy - Synth Bass - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 34, 127))], group: "PresetRabea", color: colors[index], name: "Bone Grinder Synth" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 35, 127))], group: "PresetRabea", color: colors[index], name: "Cone Buster 2  Synth" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 36, 127))], group: "PresetRabea", color: colors[index], name: "Cone Destroyer Synth" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 37, 127))], group: "PresetRabea", color: colors[index], name: "Distorted Resonance - Synth - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 38, 127))], group: "PresetRabea", color: colors[index], name: "Fuzzy Organ Vibes - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 39, 127))], group: "PresetRabea", color: colors[index], name: "If I only had a Bandmate" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 40, 127))], group: "PresetRabea", color: colors[index], name: "Mega Man - Lead - no cab" });
	return page;
}
function GetPageRabaeSynth2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Synth 2", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 41, 127))], group: "PresetRabea", color: colors[index], name: "Numb Fade Bass Synth 1" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 42, 127))], group: "PresetRabea", color: colors[index], name: "Smelly Pig" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 43, 127))], group: "PresetRabea", color: colors[index], name: "Synth Lead" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 44, 127))], group: "PresetRabea", color: colors[index], name: "When Floyd Freezes Over - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 45, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 46, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 47, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 48, 127))], group: "PresetRabea", color: colors[index], name: "" });
	return page;
}
function GetPagePortal1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Portal 1", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: 
	[
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 1)),
		{
			id: 1,
			name: "Macro 1",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 11),
			expMin: 0,
			expMax: 127
		}
	], 
		triggers : [new MidiXMessage("FromReaper", 2, "CC", 11, null, "Expression0")],
		group: "PresetPortal", color: colors[index], name: "PITCH JUMPER" });
	page.items.push({ id: ++index, type: "Preset", actions: 
	[
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 2)),
		{
			id: 1,
			name: "Macro 2",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 12),
			expMin: 0,
			expMax: 127
		}
	],
		triggers : [new MidiXMessage("FromReaper", 2, "CC", 12, null, "Expression0")],
	 	group: "PresetPortal", color: colors[index], name: "DIGITAL TAPE TOYS" });
	page.items.push({ id: ++index, type: "Preset", actions: [
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 3)),
		{
			id: 1,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 89),
			expMin: 0,
			expMax: 127
		}
	], triggers : [new MidiXMessage("FromReaper", 1, "CC", 89, null, "Expression0")],
	group: "PresetPortal", color: colors[index], name: "EXPONENTIAL SPACE" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 4))], group: "PresetPortal", color: colors[index], name: "SKIPPING BASS" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 5))], group: "PresetPortal", color: colors[index], name: "WARRBLE GLITCH" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 6))], group: "PresetPortal", color: colors[index], name: "MIN RED SEA" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 7))], group: "PresetPortal", color: colors[index], name: "ARP O MATIC" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 8))], group: "PresetPortal", color: colors[index], name: "RETURN TO THE SOURCE" });
	return page;
}
function GetPagePortal2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Portal 2", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 9)),
		{
			id: 1,
			name: "Macro 1",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 11),
			expMin: 0,
			expMax: 127
		}],
		triggers : [new MidiXMessage("FromReaper", 2, "CC", 11, null, "Expression0")],
		group: "PresetPortal", color: colors[index], name: "FOREVER DELAY"});
	page.items.push({ id: ++index, type: "Preset", actions: [
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 10)),
		{
			id: 1,
			name: "Macro 2",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 12),
			expMin: 0,
			expMax: 127
		}], 
		triggers : [new MidiXMessage("FromReaper", 2, "CC", 12, null, "Expression0")],
		group: "PresetPortal", color: colors[index], name:"SWING AND DESTROY"});
	page.items.push({ id: ++index, type: "Preset", actions: [
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 11)),
		{
			id: 1,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 89),
			expMin: 0,
			expMax: 127
		}], 
		triggers : [new MidiXMessage("FromReaper", 1, "CC", 89, null, "Expression0")],
		group: "PresetPortal", color: colors[index], name:"DATA EXTENSION"});
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 12))], group: "PresetPortal", color: colors[index], name:"POCKET CALCULATOR"});
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	return page;
}
function GetPageLove1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Love 1", false);
	var index = -1;
	page.items.push(new MidiXItem(++index, " EXP Love Mix", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Love Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 2, "CC", 3),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 2, "CC", 5, null, "Expression")]));
	page.items.push(new MidiXItem(++index, " EXP Love Wet", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Love Mix",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 2, "CC", 5),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 2, "CC", 3, null, "Expression")]));
	page.items.push({ id: ++index, type: "Preset", actions: [
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 1))], group: "PresetLove", color: colors[index], name:  "LOVELY" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 2))], group: "PresetLove", color: colors[index], name:  "PADIFY" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 3))], group: "PresetLove", color: colors[index], name:  "RUSTIC CHARM" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 4))], group: "PresetLove", color: colors[index], name:  "TENDER GRUNGE ECHOES" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 5))], group: "PresetLove", color: colors[index], name:  "ANGEL DUST" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 6))], group: "PresetLove", color: colors[index], name:  "CINEMATIC FLAVOUR" });
	return page;
}
function GetPageAmp1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Amp 1", false);
	var index = -1;
	var indexPresetAmp = 48;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Jazz Chorus" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "C15" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Tweed" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Prince" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Squid 1" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Squid 2" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "EVH 6L6" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Laboga" });
	return page;
}
function GetPageAmp2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Amp 2", false);
	var index = -1;
	var indexPresetAmp = 56;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "FX Loop" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Bassman" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "JCM 800" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Plexi" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Friedmann" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "SLO 100" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Rectifier" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Diezel VH4" });
	return page;
}
function GetPageRabae1(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabae 1", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) // Resync
		]);
	var index = 0;
	page.items.push(GetSimpleFxButton(index++, 74, "Synth"));	
	page.items.push(GetSimpleFxButton(index++, 75, "Delay"));
	page.items.push(GetSimpleFxButton(index++, 76, "Freeze"));
	page.items.push(GetSimpleFxButton(index++, 77, "Reverb"));
	page.items.push(GetSimpleFxButton(index++, 70, "Comp"));
	page.items.push(GetSimpleFxButton(index++, 71, "Octaver"));
	page.items.push(GetSimpleFxButton(index++, 72, "Fuzz"));
	page.items.push(GetSimpleFxButton(index++, 73 , "Overdrive"));
	return page;
}
function GetPageGojira1(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Gojira 1", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle"))	// Resync
		]);
	var index = 0;
	page.items.push(GetSimpleFxButton(index++, 64, "Phaser"));
	page.items.push(GetSimpleFxButton(index++, 65, "Chorus"));
	page.items.push(GetSimpleFxButton(index++, 66, "Delay"));
	page.items.push(GetSimpleFxButton(index++, 67, "Reverb"));
	page.items.push(GetSimpleFxButton(index++, 60, "WOW"));
	page.items.push(GetSimpleFxButton(index++, 61, "Octaver"));
	page.items.push(GetSimpleFxButton(index++, 62, "Rat"));
	page.items.push(GetSimpleFxButton(index++, 63, "Fuzz"));
	return page;
}
function GetPageOffline1(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Offline 1", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle"))	// Resync
		]);
	var index = 0;
	page.items.push(GetSimpleFxButton(index++, 100, "Offline<br/>Pre Guitar Rig"));
	page.items.push(GetSimpleFxButton(index++, 101, "Offline<br/>Pre Gojira"));
	page.items.push(GetSimpleFxButton(index++, 102, "Offline<br/>Pre Rabae"));
	page.items.push(GetSimpleFxButton(index++, 103, "Offline<br/>// Rabae"));
	page.items.push(GetSimpleFxButton(index++, 104, "Offline<br/>// Gojira"));
	page.items.push(GetSimpleFxButton(index++, 105, "Offline<br/>Full Guitar Rig"));
	page.items.push(GetSimpleFxButton(index++, 106, "Offline<br/>Mix Guitar Rig"));
	page.items.push(GetSimpleFxButton(index++, 107, "Offline<br/>Mix Gojira"));
	return page;
}
function GetPageOffline2(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Offline 2", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle"))	// Resync
		]);
	var index = 0;
	page.items.push(GetSimpleFxButton(index++, 108, "Offline<br/>Mix Rabae"));
	page.items.push(GetSimpleFxButton(index++, 109, "Offline<br/>Mix Portal"));
	page.items.push(GetSimpleFxButton(index++, 110, "Offline<br/>Maschine"));
	page.items.push(GetSimpleFxButton(index++, 111, "Offline<br/>Cab"));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	return page;
}
function GetPageStereo(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Stereo", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = 0;
	var index2 = 0;
	page.items.push(
		{
			id: index++,
			name: "Stereo All",
			type: "Preset",
			actions: [
				new MidiXAction(index2++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Stereo Gojira Delay", 	"On")),
				new MidiXAction(index2++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Stereo Tremolo Soft", 	"On")),
				new MidiXAction(index2++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Stereo Reverse", 		"On")),
				new MidiXAction(index2++, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Stereo Gojira Delay", 	"Off")),
				new MidiXAction(index2++, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Stereo Tremolo Soft", 	"Off")),
				new MidiXAction(index2++, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Stereo Reverse", 		"Off"))

			],
			color: colors[index],
			triggers: [
			]
		});	
		page.items.push(GetSimpleFxButton(index++, 82, "Stereo Gojira Delay"));
		page.items.push(GetSimpleFxButton(index++, 83, "Stereo Tremolo Soft"));
		page.items.push(GetSimpleFxButton(index++, 84, "Stereo Reverse"));
		page.items.push(GetSimpleFxButton(index++, 666, ""));
		page.items.push(GetSimpleFxButton(index++, 666, ""));
		page.items.push(GetSimpleFxButton(index++, 666, ""));
		page.items.push(GetSimpleFxButton(index++, 666, ""));
	return page;
}
function GetPageLooper(profile)
{
	var idPageLoop = profile.Pages.length;
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Looper", false);
	var index = -1;
	page.items.push(new MidiXItem(++index, "Rec 1", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 116, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 4, "StateOff"))], colors[index]));
	page.items.push(new MidiXItem(++index, "Rec 2", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 117, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 5, "StateOff"))], colors[index]));
	page.items.push(new MidiXItem(++index, "Rec 3", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 118, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 6, "StateOff"))], colors[index]));
	page.items.push(new MidiXItem(++index, "Rec 4", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 119, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 7, "StateOff"))], colors[index]));
	page.items.push(new MidiXItem(++index, "Play 1", 	"Preset", 		false, "", 				[
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 112, 127)),
		new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 112, 127)), 
		new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 0, "StateOff")),
		{
			id: 3,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 123),
			expMin: 0,
			expMax: 127
		},
		{
			id: 4,
			name: "Pan",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 13),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [
		new MidiXMessage("FromReaper", 1, "CC", 123, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 13, null, "Expression1")
		]));
	page.items.push(new MidiXItem(++index, "Play 2", 	"Preset", 		false, "", 				[
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 113, 127)),
		new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 113, 127)), 
		new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 1, "StateOff")),
		{
			id: 3,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 124),
			expMin: 0,
			expMax: 127
		},
		{
			id: 4,
			name: "Pan",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 14),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [
		new MidiXMessage("FromReaper", 1, "CC", 124, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 14, null, "Expression1")
	]));
	page.items.push(new MidiXItem(++index, "Play 3", 	"Preset", 		false, "", 				[
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 114, 127)),
		new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 114, 127)), 
		new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 2, "StateOff")),
		{
			id: 3,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 125),
			expMin: 0,
			expMax: 127
		},
		{
			id: 4,
			name: "Pan",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 15),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [
		new MidiXMessage("FromReaper", 1, "CC", 125, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 15, null, "Expression1")
	]));
	page.items.push(new MidiXItem(++index, "Play 4", 	"Preset", 		false, "", 				[
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 115, 127)),
		new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 115, 127)), 
		new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 3, "StateOff")),
		{
			id: 3,
			name: "Volume",
			event: "OnPress",
			action: "EXP",
			idExp: 2,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 1, "CC", 126),
			expMin: 0,
			expMax: 127
		},
		{
			id: 4,
			name: "Pan",
			event: "OnPress",
			action: "EXP",
			idExp: 3,
			valueExp: 50,
			message: new MidiXMessage("Reaper", 2, "CC", 16),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [
		new MidiXMessage("FromReaper", 1, "CC", 126, null, "Expression0"),
		new MidiXMessage("FromReaper", 2, "CC", 16, null, "Expression1")
	]));
	return page;
}
function GetPageLooper2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Looper", false);
	var index = -1;
	var idPageLoop = 8;
	var indexButton = 0;
	var indexAction = 0;
	page.items.push(new MidiXItem(++index, "Double", 		"Momentary", 	false, "", 		
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 19, 127)), 
		], colors[index]));
	page.items.push(new MidiXItem(++index, "Stop / Kill", 		"Momentary", 	false, "", 		
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 121, 127)),
			GetMidiXActionSetRouting(1), 
			new MidiXAction(2, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(9, 7, "Toggle")),
			new MidiXAction(3, "", "DoublePress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 120, 127)), 
			new MidiXAction(4, "", "DoublePress", "Midi", new MidiXMessage("Reaper", 2, "CC", 13, 64)), 
			new MidiXAction(5, "", "DoublePress", "Midi", new MidiXMessage("Reaper", 2, "CC", 14, 64)), 
			new MidiXAction(6, "", "DoublePress", "Midi", new MidiXMessage("Reaper", 2, "CC", 15, 64)), 
			new MidiXAction(7, "", "DoublePress", "Midi", new MidiXMessage("Reaper", 2, "CC", 16, 64))
		], colors[index]));
	
	page.items.push(new MidiXItem(++index, "Release Loop Button","Momentary", 		false, "", [
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff"))
	]		, colors[index]));
	page.items.push(new MidiXItem(++index, "Volume Looper", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Looper",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 127,
			message: new MidiXMessage("Reaper", 1, "CC", 122),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 122, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Volume Looper 1", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Looper 1",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 123),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 123, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Volume Looper 2", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Looper 2",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 124),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 124, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Volume Looper 3", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Looper 3",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 125),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 125, null, "Expression")]));
	page.items.push(new MidiXItem(++index, "Volume Looper 4", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Looper 4",
			event: "OnPress",
			action: "EXP",
			idExp: 0,
			valueExp: 0,
			message: new MidiXMessage("Reaper", 1, "CC", 126),
			expMin: 0,
			expMax: 127
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 126, null, "Expression")]));
	return page;
}
function GetMineProfile() {
	
	var profile = new Profile(0, "Mine");
	profile.Pages.push(GetPageTool(profile));	

	profile.Pages.push(GetPageStomp1(profile));
	profile.Pages.push(GetPageStomp2(profile));
	profile.Pages.push(GetPageStomp3(profile));
	profile.Pages.push(GetPageRouting(profile));
	profile.Pages.push(GetPageExpression(profile));	
	profile.Pages.push(GetPageFX(profile));
	profile.Pages.push(GetPageFX2(profile));
	profile.Pages.push(GetPageLooper(profile));

	profile.Pages.push(GetPageLooper2(profile));	
	profile.Pages.push(GetPageGojira1(profile));
	profile.Pages.push(GetPageSceneQC(profile));	
	profile.Pages.push(GetPageNote(profile));
	profile.Pages.push(GetPageExpression2(profile));	
	profile.Pages.push(GetPageOffline1(profile));
	profile.Pages.push(GetPageOffline2(profile));
	profile.Pages.push(GetPageStereo(profile));	
			
	profile.Pages.push(GetPageExpression3(profile));
	profile.Pages.push(GetPageRabeaArp1(profile));
	profile.Pages.push(GetPageRabeaArp2(profile));
	profile.Pages.push(GetPageRabeaFuzz1(profile));
	profile.Pages.push(GetPageRabaeFuzz2(profile));
	profile.Pages.push(GetPageRabaeSynth1(profile));
	profile.Pages.push(GetPageRabaeSynth2(profile));	
	profile.Pages.push(GetPageRabae1(profile));		

	profile.Pages.push(GetPagePortal1(profile));
	profile.Pages.push(GetPagePortal2(profile));
	profile.Pages.push(GetPageLove1(profile));
	profile.Pages.push(GetPageAmp1(profile));
	profile.Pages.push(GetPageAmp2(profile));

	SetPagesSummary(profile);

	profile.Pages[0].active = true;
	profile.Expressions = [
		new MidiXExpression(0, "EXP 1", new MidiXMessage("Quad Cortex", 1, "CC", 10)),
		new MidiXExpression(1, "EXP 2", new MidiXMessage("Chocolate", 1, "CC", 0)),
		new MidiXExpression(2, "EXP 3", new MidiXMessage("", 0, "CC", 0), true),
		new MidiXExpression(3, "EXP 4", new MidiXMessage("", 0, "CC", 0), true),
	];

	profile.ButtonsTrigger.push(new MidiXButton(0, [new MidiXMessage("Quad Cortex", 1, "CC", 1)]));
	profile.ButtonsTrigger.push(new MidiXButton(1, [new MidiXMessage("Quad Cortex", 1, "CC", 2)]));
	profile.ButtonsTrigger.push(new MidiXButton(2, [new MidiXMessage("Quad Cortex", 1, "CC", 3)]));
	profile.ButtonsTrigger.push(new MidiXButton(3, [new MidiXMessage("Quad Cortex", 1, "CC", 4)]));
	profile.ButtonsTrigger.push(new MidiXButton(4, [new MidiXMessage("Quad Cortex", 1, "CC", 5)]));
	profile.ButtonsTrigger.push(new MidiXButton(5, [new MidiXMessage("Quad Cortex", 1, "CC", 6)]));
	profile.ButtonsTrigger.push(new MidiXButton(6, [new MidiXMessage("Quad Cortex", 1, "CC", 7)]));
	profile.ButtonsTrigger.push(new MidiXButton(7, [new MidiXMessage("Quad Cortex", 1, "CC", 8)]));

	profile.ButtonsTrigger.push(new MidiXButton(8, [new MidiXMessage("APC Buttons", 1, "NoteOn", 56)]));

	profile.Devices.push(new MidiXDevice(0, "Quad Cortex", "", "", "Quad Cortex MIDI IN", "Quad Cortex MIDI OUT"));
	profile.Devices.push(new MidiXDevice(1, "Reaper", "", "", "", "MidiXXXToReaper"));
	profile.Devices.push(new MidiXDevice(2, "FromReaper", "", "", "ReaperToMidiXXX", ""));
	profile.Devices.push(new MidiXDevice(3, "Chocolate", "", "", "USB-Midi", ""));
	//profile.Devices.push(new MidiXDevice(3, "Chocolate", "", "", "ChocolateToMidiXXX", ""));
	//profile.Devices.push(new MidiXDevice(4, "Chocolate2", "", "", "Chocolate2ToMidiXXX", ""));
	profile.Groups = ["None", "EXP1", "EXP2", "Preset", "Note", "SceneQC", "PresetRabea"];
	return profile;
}

function GetDefaultProfiles() {
	var profiles = [];
	if(IsModeLight())
	{		
		profiles = [GetLightProfile()];
	}
	else
	{
		profiles = [GetMineProfile()];
	}
	profiles[0].active = true;
	return profiles;
}
window.onload = function () {
	
		InitApp();	
};