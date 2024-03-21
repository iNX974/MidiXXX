
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
		SetInputMidiMessageToHandle();
		OpenMainPage();
		GotoPage(1); 		
		ClickButton(AppData.Pages[5].items[3]);
		ClickButton(AppData.Pages[5].items[5]);

		//OpenEditButtonPage(AppData.Pages[8].items[5]);
		//GotoPage(9);
	}
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
]
function GetMidiXLinkButtonByName(buttonName, action, state, conditionnalOperator)
{
  if (buttonName == "Reverb Clear")
	return new MidiXLinkButton(0, 0, action, state, conditionnalOperator);
  if (buttonName == "Resync")
	return new MidiXLinkButton(0, 1, action, state, conditionnalOperator);
  if (buttonName == "Wha")
	return new MidiXLinkButton(0, 2, action, state, conditionnalOperator);
  if (buttonName == "Wow")
	return new MidiXLinkButton(0, 22, action, state, conditionnalOperator);
  if (buttonName == "ExpWowEngaged")
	return new MidiXLinkButton(0, 23, action, state, conditionnalOperator);
  if (buttonName == "Tremolo")
	return new MidiXLinkButton(1, 0, action, state, conditionnalOperator);
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
	return new MidiXLinkButton(7, 0, action, state, conditionnalOperator);
  if (buttonName == "Drum Pad")
	return new MidiXLinkButton(7, 1, action, state, conditionnalOperator);
  if (buttonName == "Glisten")
	return new MidiXLinkButton(7, 2, action, state, conditionnalOperator);
  if (buttonName == "Shiny Roads")
	return new MidiXLinkButton(7, 3, action, state, conditionnalOperator);
  if (buttonName == "Grain Delay")
	return new MidiXLinkButton(7, 4, action, state, conditionnalOperator);
  if (buttonName == "Gramophone")
	return new MidiXLinkButton(7, 5, action, state, conditionnalOperator);
  if (buttonName == "Synth Pre")
	return new MidiXLinkButton(7, 6, action, state, conditionnalOperator);
  if (buttonName == "Synth Post")
	return new MidiXLinkButton(7, 7, action, state, conditionnalOperator);
  if (buttonName == "Fracture")
	return new MidiXLinkButton(9, 0, action, state, conditionnalOperator);
  if (buttonName == "Wuw Cha chaa")
	return new MidiXLinkButton(9, 1, action, state, conditionnalOperator);
  if (buttonName == "Vinyl")
	return new MidiXLinkButton(9, 2, action, state, conditionnalOperator);
  if (buttonName == "Guillotine")
	return new MidiXLinkButton(9, 4, action, state, conditionnalOperator);
  if (buttonName == "Delay Mod")
	return new MidiXLinkButton(9, 7, action, state, conditionnalOperator);
  if (buttonName == "Stereo Gojira Delay")
	return new MidiXLinkButton(15, 1, action, state, conditionnalOperator);
  if (buttonName == "Stereo Tremolo Soft")
	return new MidiXLinkButton(15, 2, action, state, conditionnalOperator);
  if (buttonName == "Stereo Reverse")
	return new MidiXLinkButton(15, 3, action, state, conditionnalOperator);

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
	page.items.push(
		{
			id: index++,
			name: "Reverb Clear",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),
				new MidiXAction(1, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0))
			],

			color: "brown"
		});
	page.items.push(
		{
			id: index++,
			name: "Resync",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 127, 127))
			],
			color: "brown"
		});
	page.items.push(
		{
			id: index++,
			name: "Wha",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 20, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 20, 0)),
				GetMidiXActionSetRouting(2)
			],

			color: "brown",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 20, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 20, 0, "StateOff")
			]
		});
	page.items.push(new MidiXItem(3, "Pan", "Preset", false, "EXP1", [
		{
			id: index++,
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
	page.items.push(
		{
			id: index++,
			name: "Pan<br/>Center",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 41, 127))
			],

			color: "orange"
		});
	page.items.push(new MidiXItem(index++, "Previous Page", "Momentary", false, null,
		[
			new MidiXAction(0, "", "OnPress", "PreviousPage")
		], "blue",
		[
			new MidiXMessage("Chocolate", 1, "PC", 0),
			new MidiXMessage("Chocolate", 1, "PC", 4)
		]
	));
	page.items.push(new MidiXItem(index++, "Next Page", "Momentary", false, null,
		[
			new MidiXAction(0, "", "OnPress", "NextPage")
		], "blue",
		[
			new MidiXMessage("Chocolate", 1, "PC", 3),
			new MidiXMessage("Chocolate", 1, "PC", 7)
		]
	));
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
		}
	], "red"));
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
	page.items.push(
		{
			id: index++,
			name: "SET NO PRE/MIX QC Scene 3",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 2)), // Scene QC 3
				new MidiXAction(1, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 127)),	// Mute Reaper Post Full
			],
			color: "brown"
		});
	page.items.push(
			{
				id: index++,
				name: "SET NO PRE/FULL QC Scene 2",
				type: "Momentary",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 1)), // Scene QC 2
					//new MidiXAction(1, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 0)),	// UnMute Reaper Post Full
					new MidiXAction(1, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(0, 24, "Toggle")) // Set Full For Delay Mod
				],
				color: "brown"
			});
	page.items.push(
		{
			id: index++,
			name: "SET PRE/MIX QC Scene 7",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 6)), // Scene QC 7
				new MidiXAction(1, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 127)),	// Mute Reaper Post Full
			],
			color: "brown"
		});
	page.items.push(
			{
				id: index++,
				name: "SET PRE/FULL QC Scene 3",
				type: "Momentary",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 5)), // Scene QC 6
					//new MidiXAction(1, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 0)),	// UnMute Reaper Post Full
					new MidiXAction(1, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(0, 24, "Toggle")) // Set Full For Delay Mod
				],
				color: "brown"
			});
	page.items.push(new MidiXItem(index++, "Post Mix Mute", "Preset", true, "", [
		{
			id : 0,
			description : "unmute mix when at least a post mix fx",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 46, 0), //Post Mix  Mute
			conditionnalLinkButtons : GetButtonForMix("On", "OR")
		},
		{
			id : 1,
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
	page.items.push(new MidiXItem(index++, "Post Mix Mute GuitarRig", "Preset", true, "", [
		{
			id : 0,
			description : "unmute mix when at least a post mix fx Guitar rig",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 50, 0), 	//Post Mix Guitar Rig
			conditionnalLinkButtons : GetButtonForMixGuitarRig("On", "OR")
		},
		{
			id : 1,
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
	page.items.push(new MidiXItem(index++, "Post Mix Mute Gojira", "Preset", true, "", [
		{
			id : 0,
			description : "unmute mix when at least a post mix fx Gojira",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 51, 0),	//Post Mix Gojira
			conditionnalLinkButtons : GetButtonForMixGojira("On", "OR")
		},
		{
			id : 1,
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
	page.items.push(new MidiXItem(index++, "Post Mix Mute Rabae", "Preset", true, "", [
		{
			id : 0,
			description : "unmute mix when at least a post mix fx Rabae",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 52, 0),	//Post Mix Rabae
			conditionnalLinkButtons : GetButtonForMixRabae("On", "OR")
		},
		{
			id : 1,
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
	page.items.push(new MidiXItem(index++, "Post Mix Mute Reverb", "Preset", true, "", [
		{
			id : 0,
			description : "unmute mix when at least a post mix fx Reverb",
			event : "Any",
			action : "Midi",
			message : new MidiXMessage("Reaper", 1, "CC", 53, 0),	//Post Mix Reverb
			conditionnalLinkButtons : GetButtonForMixReverb("On", "OR")
		},
		{
			id : 1,
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
	page.items.push(
		{
			id: index++,
			name: "Wow",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 1, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 1, 0)),
				GetMidiXActionSetRouting(2)],
			color: "red",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 1, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 1, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: index++,
			name: "ExpWowEngaged",
			type: "Preset",
			color: "blue",
			actions : []
		});
	page.items.push(
		{
			id: index++,
			name: "Set FULL For Delay Mod",
			type: "Momentary",
			color: "red",
			actions : [
				{
					id : 0,
					description : "Mute USB3 if Delay Mod",
					event : "Any",
					action : "Midi",
					message : new MidiXMessage("Reaper", 1, "CC", 45, 127),	//POST Mute Full Input USB3
					conditionnalLinkButtons : [GetMidiXLinkButtonByName("Delay Mod", null, "On", "MustBe")]
				},
				{
					id : 0,
					description : "Unmute USB3 if Delay Mod",
					event : "Any",
					action : "Midi",
					message : new MidiXMessage("Reaper", 1, "CC", 45, 0),	//POST Mute Full Input USB3
					conditionnalLinkButtons : [GetMidiXLinkButtonByName("Delay Mod", null, "Off", "MustBe")]
				},
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
		page.items.push({ id: idButton, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage : pageProfile.id}], color: colors[idButton], name: pageProfile.name });
	}
	for(var i = idButton; i < 7; i++)
	{
		page.items.push({id : i + 1, name : "", color: colors[i+1]});
	}
	
	//page.items.push({ id: 1, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "indigo", 	name: "Stomp 2" });
	//page.items.push({ id: 2, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "blue", 		name: "Expression" });
	//page.items.push({ id: 3, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "turquoise",	name: "FX" });
	//page.items.push({ id: 4, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "orange", 	name: "Note" });
	//page.items.push({ id: 5, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "red", 		name: "Routing" });
	//page.items.push({ id: 6, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "pink", 		name: "Rabae Arp 1" });
	//page.items.push({ id: 7, type: "Momentary", actions: [{id : 0, event : "OnPress", action : "GoPage", idPage :  index++}], color: "brown", 	name: "Rabae Arp 2" });
}
function GetPageTest(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Test", true,
		[],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = -1;
	page.items.push(
		{
			id: ++index,
			name: "WOW",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 60, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 60, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 60, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 60, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Octaver",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 61, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 61, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 61, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 61, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Rat",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 62, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 62, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 62, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 62, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Fuzz",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 63, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 63, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 63, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 63, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Phaser",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 64, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 64, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 64, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 64, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Chorus",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 65, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 65, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 65, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 65, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Prepare Macro",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "Any", "PrepareMacro")
			],
			color: colors[index]
		});
	page.items.push(
		{
			id: ++index,
			name: "Play Macro",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "Any", "PlayMacro")
			],
			color: colors[index]
		});
	return page;
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
	page.items.push(GetSimpleFxButton(index++, 22, "Tremolo" ));
	page.items.push(GetSimpleFxButton(index++, 21, "Tremolo Soft" ));
	
	page.items.push(
		{
			id: 2,
			name: "Shimmer",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Shimmer On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 26, 127)),
				new MidiXAction(1, "Shimmer Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 26, 0)),
				GetMidiXActionSetRouting(2),
				GetMidiXActionsForPostMixGojira(3)
			],
			color: "turquoise",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 26, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 26, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: 3,
			name: "Reverb",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Reverb On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 8, 127)),
				new MidiXAction(1, "Reverb Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 8, 0)),
				GetMidiXActionSetRouting(2),
				GetMidiXActionsForPostMixReverb(3)],
				
			color: "blue",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 8, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 8, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: 4,
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
	page.items.push(
		{
			id: 5,
			name: "Octaver",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Octaver On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 2, 127)),
				new MidiXAction(1, "Octaver Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 2, 0)),
				GetMidiXActionSetRouting(2)],
			color: "orange",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 2, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 2, 0, "StateOff")
			]
		});
		var index = 0;
	page.items.push(
		{
			id: 6,
			name: "Raw",
			type: "Momentary",
			actions: [				
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 2)), 		//Scene QC 3
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 45, 127)),			//Mute Reaper Post Full
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 46, 127)),			//Mute Reaper Post Mix
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 44, 127)),			//Unmute QC
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 10, 127)), 			//Gain
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 2, 127)),		//Volume			
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 2, 0)),				//Octaver
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 7, 0)),				//Delay
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 22, 0)),			//Tremolo
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 21, 0)),			//Rotary		
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 26, 0)),			//Shimmer
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 8, 0)),				//Reverb
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 31, 0)),			//Ring Modulator
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 12, 0)),			//Reverse
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 39, 0)),			//Filter
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 24, 0)),			//Fuzz
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 25, 0)),			//Rat
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 28, 0)),			//Comp
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 1, 0)),				//Wow
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 33, 0)),			//Chip Flair
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 34, 0)),			//Drum Pad
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 35, 0)),			//Glisten
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 36, 0)),			//Shiny Roads
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 37, 0)),			//Grain Delay
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 20, 0)),			//Wha
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 38, 0)),			//Gramophone
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 47, 0)),			//Delay Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 48, 0)),			//Reverb Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 49, 0)),			//Reverb Freeze Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 4, 0)),				//Octaver Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 5, 0)),				//Fuzz Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 6, 0)),				//Overdrive Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 42, 0)),			//Parralle Gojira
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 43, 0)),			//Parallele Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 3, 0)),				//Portal
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 50, 127)),			//Post Mix Guitar Rig
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 51, 127)),			//Post Mix Gojira
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 52, 127)),			//Post Mix Rabae
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 53, 127)),			//Post Mix Reverb
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 54, 0)),			//Synth Pre
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 55, 0)),			//Guillotine
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 56, 0)),			//Fracture
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 57, 0)),			//Wuw Cha chaa
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 58, 0)),			//Vinyl
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 59, 0)),			//Vynil SpinDown
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 40, 0)),			//Dealy Mod
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 41, 127)),			//Pan Center
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0)),			//Reverb Clear
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),			//Reverb Clear
				new MidiXAction(index++, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 127, 127)),			//Resync
				new MidiXAction(index++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "On"), null, null, null, null, null, 100), //Resync
				new MidiXAction(index++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "On"), null, null, null, null, null, 100), //Resync
			],
			color: "brown"
		});
	page.items.push(
		{
			id: 7,
			name: "Delay",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Delay On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 7, 127)),
				new MidiXAction(1, "Delay Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 7, 0)),
				GetMidiXActionSetRouting(2),
				GetMidiXActionsForPostMixGojira(3)
			],
			color: "lightgreen",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 7, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 7, 0, "StateOff")
			]
		});
	return page;
}
function GetPageStomp2(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Stomp 2", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = -1;
	page.items.push(
		{
			id: ++index,
			name: "Portal",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Portal On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 3, 127)),
				new MidiXAction(1, "Portal Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 3, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 3, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 3, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Ring Arp",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Ring Arp On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 31, 127)),
				new MidiXAction(1, "Ring Arp Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 31, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 31, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 31, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Reverse",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Reverse On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 12, 127)),
				new MidiXAction(1, "Reverse Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 12, 0)),
				GetMidiXActionSetRouting(2),
				GetMidiXActionsForPostMixGuitarRig(3)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 12, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 12, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Tap",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Tap", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 29, 127))],
			color: "lightgreen"
		});
	page.items.push(
		{
			id: ++index,
			name: "Fuzz",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Fuzz On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 24, 127)),
				new MidiXAction(1, "Fuzz Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 24, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 24, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 24, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Rat",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Rat On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 25, 127)),
				new MidiXAction(1, "Rat Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 25, 0)),
				GetMidiXActionSetRouting(2)],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 25, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 25, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Comp",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Comp On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 28, 127)),
				new MidiXAction(1, "Comp Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 28, 127)),
				GetMidiXActionSetRouting(2)],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 28, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 28, 0, "StateOff")
			]
		});
	page.items.push(GetSimpleFxButton(++index, 39, "Filter"));
	return page;
}
function GetPageStomp3(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Stomp 3", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = -1;
	page.items.push(
		{
			id: ++index,
			name: "Delay Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 47, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 47, 0)),
				GetMidiXActionSetRouting(2),
				GetMidiXActionsForPostMixRabae(3)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 47, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 47, 0, "StateOff")
			]
		});	
	page.items.push(
		{
			id: ++index,
			name: "Reverb Clear",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index]
		});
	page.items.push(
		{
			id: ++index,
			name: "Freeze Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 49, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 49, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 49, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 49, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Reverb Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 48, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 48, 0)),
				GetMidiXActionSetRouting(2),
				GetMidiXActionsForPostMixRabae(3)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 48, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 48, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Gate",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 23, 40)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 23, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 23, null, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 23, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Octaver Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 4, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 4, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 4, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 4, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Fuzz Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 5, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 5, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 5, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 5, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Overdrive Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 6, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 6, 0)),
				GetMidiXActionSetRouting(2)
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 6, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 6, 0, "StateOff")
			]
		});		
	
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
page.items.push(
	{
		id: index,
		name: "Chip Flair",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 33, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 33, 0)),
			GetMidiXActionSetRouting(2),
			GetMidiXActionsForPostMixGuitarRig(3)
		],

		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 33, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 33, 0, "StateOff")
		]
	});
page.items.push(
	{
		id: index,
		name: "Drum Pad",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 34, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 34, 0)),
			GetMidiXActionSetRouting(2)
		],
		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 34, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 34, 0, "StateOff")
		]
	});
page.items.push(
	{
		id: index,
		name: "Glisten",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 35, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 35, 0)),
			GetMidiXActionSetRouting(2)
		],

		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 35, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 35, 0, "StateOff")
		]
	});
page.items.push(
	{
		id: index,
		name: "Shiny Roads",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 36, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 36, 0)),
			GetMidiXActionSetRouting(2)
		],

		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 36, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 36, 0, "StateOff")
		]
	});
page.items.push(
	{
		id: index,
		name: "Grain Delay",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 37, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 37, 0)),
			GetMidiXActionSetRouting(2),
			GetMidiXActionsForPostMixGuitarRig(3)
		],

		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 37, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 37, 0, "StateOff")
		]
	});
page.items.push(
	{
		id: index,
		name: "Gramophone",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 38, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 38, 0)),
			GetMidiXActionSetRouting(2)
		],

		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 38, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 38, 0, "StateOff")
		]
	});
page.items.push(
	{
		id: index,
		name: "Synth Pre",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 54, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 54, 0)),
			GetMidiXActionSetRouting(2)
		],

		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 54, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 54, 0, "StateOff")
		]
	});
page.items.push(
	{
		id: index,
		name: "Synth Post",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 55, 127)),
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 55, 0)),
			GetMidiXActionSetRouting(2)
		],

		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 55, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 55, 0, "StateOff")
		]
	});
	return page;

}
function GetSimpleFxButton(index, cc, name, addRouting)
{
	var actions = 
	[
		new MidiXAction(0, name + " On", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
		new MidiXAction(1, name + "Off", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
	]
	if(addRouting == undefined || addRouting === true)
	{
		actions[2] = GetMidiXActionSetRouting(2)
	}
	return {
		id: index,
		name: name,
		type: "Preset",
		actions: actions,
		color: colors[index++],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
		]
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
	page.items.push(GetSimpleFxButton(index++, 57, "Wuw Cha chaa"));
	page.items.push(GetSimpleFxButton(index++, 58, "Vinyl"));
	page.items.push(GetSimpleFxButton(index++, 59, "Vinyl Spindown", false));
	page.items.push(GetSimpleFxButton(index++, 55, "Guillotine"));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	page.items.push(GetSimpleFxButton(index++, 666, ""));
	page.items.push(GetSimpleFxButton(index++, 40, "Delay Mod"));
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
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 42, 127)), //Parallele Gojira
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 42, 0))  //Parallele Gojira
		],

		color: colors[index],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 42, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 42, 0, "StateOff")
		]
	});
	page.items.push(
		{
			id: ++index,
			name: "Exp1 Volume Gojira",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Volume Gojira", "OnPress", "EXP", new MidiXMessage("Reaper", 1, "CC", 81), 0) // Volume Gojira  
			],
			group : "EXP1",
			color: colors[index],
			triggers : [new MidiXMessage("FromReaper", 1, "CC", 81, null, "Expression")]
		});
	page.items.push(
	{
		id: ++index,
		name: "Exp1 PAN Gojira",
		type: "Preset",
		actions: [
			new MidiXAction(0, "PAN Gojira", "OnPress", "EXP", new MidiXMessage("Reaper", 1, "CC", 69), 0), // PAN Gojira
			new MidiXAction(1, "", "DoublePress", "Midi", new MidiXMessage("Reaper", 1, "CC", 69, 64)) 		// PAN Gojira
		],				
		group : "EXP1",
		color: colors[index],
		triggers : [new MidiXMessage("FromReaper", 1, "CC", 69, null, "Expression")]
	});
	page.items.push(new MidiXItem(++index, "Volume<br/>EXP 2", "Preset", false, "EXP1", [
		{
			id: 0,
			name: "Volume",
			event: "OnPress",
			action: "ExpSetValue",
			idExp: 0,
			valueExp: 127,
			message: new MidiXMessage("Quad Cortex", 1, "CC", 2),
			expMin: 0,
			expMax: 127
		}
	], colors[index]));
	page.items.push(
	{
		id: ++index,
		name: "Parallele Rabea",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 43, 127)), //Parralele Rabae		
			new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 43, 0))  //Parralele Rabae	
		],

		color: colors[index],
		triggers: [
			new MidiXMessage("FromReaper", 1, "CC", 43, 127, "StateOn"),
			new MidiXMessage("FromReaper", 1, "CC", 43, 0, "StateOff")
		]
	});	
	
	page.items.push(
	{
		id: ++index,
		name: "Exp1 Volume Rabae",
		type: "Preset",
		actions: [
			new MidiXAction(0, "Volume Rabae", "OnPress", "EXP", new MidiXMessage("Reaper", 1, "CC", 80), 0)	//Volume Rabae  
		],
		group : "EXP1",
		color: colors[index],
		triggers : [new MidiXMessage("FromReaper", 1, "CC", 80, null, "Expression")]
	});
	page.items.push(
	{
		id: ++index,
		name: "Exp1 PAN Rabae",
		type: "Preset",
		actions: [
			new MidiXAction(0, "PAN Rabae", "OnPress", "EXP", new MidiXMessage("Reaper", 1, "CC", 79), 0),	//PAN Gojira 
			new MidiXAction(1, "", "DoublePress", "Midi", new MidiXMessage("Reaper", 1, "CC", 79, 64))		//PAN Gojira 
		],
		group : "EXP1",
		color: colors[index],
		triggers : [new MidiXMessage("FromReaper", 1, "CC", 79, null, "Expression")]
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
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 1, 127))], group: "PresetRabea", color: colors[index], name: "80's Dream Transition - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 2, 127))], group: "PresetRabea", color: colors[index], name: "aMUSEd - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 3, 127))], group: "PresetRabea", color: colors[index], name: "Astroboy" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 127))], group: "PresetRabea", color: colors[index], name: "Behold, Retro Sounds - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 5, 127))], group: "PresetRabea", color: colors[index], name: "Crazy Arpeggio" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 6, 127))], group: "PresetRabea", color: colors[index], name: "Dancing Fifths Synth - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 7, 127))], group: "PresetRabea", color: colors[index], name: "Descending Droplets (C Minor)" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 8, 127))], group: "PresetRabea", color: colors[index], name: "Distant Particles" });
	return page;
}
function GetPageRabeaArp2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Arp 2 ", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC",  9, 127))], group: "PresetRabea", color: colors[index], name: "Final Fantasy Arpeggio" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 10, 127))], group: "PresetRabea", color: colors[index], name: "Let there be Auto Tapping" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 11, 127))], group: "PresetRabea", color: colors[index], name: "Plucked Saw (DeadRat style) - Synth - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 12, 127))], group: "PresetRabea", color: colors[index], name: "Select Key For Fun - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 13, 127))], group: "PresetRabea", color: colors[index], name: "Why is it always Stranger Things - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 14, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 15, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 16, 127))], group: "PresetRabea", color: colors[index], name: "" });
	return page;
}
function GetPageRabeaFuzz1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Fuzz 1", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 17, 127))], group: "PresetRabea", color: colors[index], name: "GliTcHEd Riff$" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 18, 127))], group: "PresetRabea", color: colors[index], name: "Gnarly AF Riffs" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 19, 127))], group: "PresetRabea", color: colors[index], name: "LeoFrog Fuzz" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 20, 127))], group: "PresetRabea", color: colors[index], name: "Mon then" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 21, 127))], group: "PresetRabea", color: colors[index], name: "Offer Organs - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 22, 127))], group: "PresetRabea", color: colors[index], name: "Thasss Nasssty" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 23, 127))], group: "PresetRabea", color: colors[index], name: "The Gainsaw" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 24, 127))], group: "PresetRabea", color: colors[index], name: "The Gates Of Hell - no cab" });
	return page;
}
function GetPageRabaeFuzz2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Fuzz 2", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 25, 127))], group: "PresetRabea", color: colors[index], name: "The Hypnotoad - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 26, 127))], group: "PresetRabea", color: colors[index], name: "Angry Brit" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 27, 127))], group: "PresetRabea", color: colors[index], name: "Oct-Sub" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 28, 127))], group: "PresetRabea", color: colors[index], name: "Pushed Brit Lead" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 29, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 30, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 31, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 32, 127))], group: "PresetRabea", color: colors[index], name: "" });
	return page;
}
function GetPageRabaeSynth1(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Synth 1", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 33, 127))], group: "PresetRabea", color: colors[index], name: "Black Gummy - Synth Bass - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 34, 127))], group: "PresetRabea", color: colors[index], name: "Bone Grinder Synth" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 35, 127))], group: "PresetRabea", color: colors[index], name: "Cone Buster 2  Synth" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 36, 127))], group: "PresetRabea", color: colors[index], name: "Cone Destroyer Synth" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 37, 127))], group: "PresetRabea", color: colors[index], name: "Distorted Resonance - Synth - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 38, 127))], group: "PresetRabea", color: colors[index], name: "Fuzzy Organ Vibes - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 39, 127))], group: "PresetRabea", color: colors[index], name: "If I only had a Bandmate" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 40, 127))], group: "PresetRabea", color: colors[index], name: "Mega Man - Lead - no cab" });
	return page;
}
function GetPageRabaeSynth2(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabea - Synth 2", false);
	var index = -1;
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 41, 127))], group: "PresetRabea", color: colors[index], name: "Numb Fade Bass Synth 1" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 42, 127))], group: "PresetRabea", color: colors[index], name: "Smelly Pig" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 43, 127))], group: "PresetRabea", color: colors[index], name: "Synth Lead" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 44, 127))], group: "PresetRabea", color: colors[index], name: "When Floyd Freezes Over - no cab" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 45, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 46, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 47, 127))], group: "PresetRabea", color: colors[index], name: "" });
	page.items.push({ id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 48, 127))], group: "PresetRabea", color: colors[index], name: "" });
	return page;
}
function GetPageRabae1(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Rabae 1", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) // Resync
		]);
	var index = -1;
	var cc = 0;
	cc = 74
	page.items.push(
		{
			id: ++index,
			name: "Synth",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 75
	page.items.push(
		{
			id: ++index,
			name: "Delay",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 76
	page.items.push(
		{
			id: ++index,
			name: "Freeze",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 77
	page.items.push(
		{
			id: ++index,
			name: "Reverb",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 70
	page.items.push(
		{
			id: ++index,
			name: "Comp",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 71
	page.items.push(
		{
			id: ++index,
			name: "Octaver",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 72
	page.items.push(
		{
			id: ++index,
			name: "Fuzz",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 73
	page.items.push(
		{
			id: ++index,
			name: "Overdrive",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	return page;
}
function GetPageGojira1(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Gojira 1", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle"))	// Resync
		]);
	var index = -1;
	var cc = 0;
	cc = 64
	page.items.push(
		{
			id: ++index,
			name: "Phaser",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 65
	page.items.push(
		{
			id: ++index,
			name: "Chorus",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 66
	page.items.push(
		{
			id: ++index,
			name: "Delay",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 67
	page.items.push(
		{
			id: ++index,
			name: "Reverb",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 60
	page.items.push(
		{
			id: ++index,
			name: "WOW",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 61
	page.items.push(
		{
			id: ++index,
			name: "Octaver",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 62
	page.items.push(
		{
			id: ++index,
			name: "Rat",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc = 63
	page.items.push(
		{
			id: ++index,
			name: "Fuzz",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	return page;
}
function GetPageOffline1(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Offline 1", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle"))	// Resync
		]);
	var index = -1;
	var cc = 0;
	cc = 100
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Pre Guitar Rig",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Pre Gojira",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Pre Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>// Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>// Gojira",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Full Guitar Rig",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Mix Guitar Rig",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;	
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Mix Gojira",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});	
	return page;
}
function GetPageOffline2(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Offline 2", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle"))	// Resync
		]);
	var index = -1;
	var cc = 0;
	cc = 108
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Mix Rabae",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Mix Portal",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Maschine",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>Cab",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});
	cc++;	
	page.items.push(
		{
			id: ++index,
			name: "Offline<br/>",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", cc, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", cc, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", cc, 0, "StateOff")
			]
		});	
	return page;
}
function GetPageStereo(profile) {
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Stereo", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByName("Resync", "Toggle")) //Resync
		]);
	var index = -1;
	var index2 = 0;
	page.items.push(
		{
			id: ++index,
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
	page.items.push(
		{
			id: ++index,
			name: "Stereo Gojira Delay ",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 82, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 82, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 82, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 82, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Stereo Tremolo Soft",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 83, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 83, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 83, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 83, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Stereo Reverse",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 84, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 84, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 84, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 84, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 6666, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 6666, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 6666, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 6666, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 6666, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 6666, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 6666, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 6666, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 6666, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 6666, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 6666, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 6666, 0, "StateOff")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Preset 1 QC",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", 1))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 6666, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 6666, 0, "StateOff")
			]
		});
	return page;
}
function GetPageLooper(profile)
{
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Looper", false);
	var index = -1;
	page.items.push(new MidiXItem(++index, "Section 1", "Preset", 	false, 	"LooperSection", 	[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 116, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Section 2", "Preset", 	false, 	"LooperSection", 	[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 117, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Undo", 		"Momentary", false, "",	 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 118, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Redo", 		"Momentary", false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 119, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Record", 	"Preset", 	false, "LooperRecord", 		[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 112, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Play", 		"Preset", 	false, "LooperRecord", 		[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 113, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Stop", 		"Preset", 	false, "LooperRecord", 		[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 114, 0))], colors[index]));
	page.items.push(new MidiXItem(++index, "Clear", 	"Momentary", false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 115, 0))], colors[index]));
	return page;
}
function GetMineProfile() {
	var profile = new Profile(2, "Mine");
	profile.Pages.push(GetPageTool(profile));	

	profile.Pages.push(GetPageStomp1(profile));
	profile.Pages.push(GetPageStomp2(profile));
	profile.Pages.push(GetPageStomp3(profile));
	profile.Pages.push(GetPageRouting(profile));
	profile.Pages.push(GetPageExpression(profile));
	profile.Pages.push(GetPageExpression2(profile));
	profile.Pages.push(GetPageFX(profile));
	profile.Pages.push(GetPageLooper(profile));

	profile.Pages.push(GetPageFX2(profile));
	profile.Pages.push(GetPageGojira1(profile));
	profile.Pages.push(GetPageSceneQC(profile));	
	profile.Pages.push(GetPageNote(profile));
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

	
	//profile.Pages.push(GetPageTest(profile));

	SetPagesSummary(profile);

	profile.Pages[0].active = true;
	profile.Expressions = [
		new MidiXExpression(0, "EXP 1", new MidiXMessage("Quad Cortex", 1, "CC", 10)),
		new MidiXExpression(1, "EXP 2", new MidiXMessage("Chocolate", 1, "CC", 0))
	];

	profile.ButtonsTrigger.push(new MidiXButton(0, [new MidiXMessage("Quad Cortex", 1, "CC", 1)]));
	profile.ButtonsTrigger.push(new MidiXButton(1, [new MidiXMessage("Quad Cortex", 1, "CC", 2)]));
	profile.ButtonsTrigger.push(new MidiXButton(2, [new MidiXMessage("Quad Cortex", 1, "CC", 3)]));
	profile.ButtonsTrigger.push(new MidiXButton(3, [new MidiXMessage("Quad Cortex", 1, "CC", 4)]));
	profile.ButtonsTrigger.push(new MidiXButton(4, [new MidiXMessage("Quad Cortex", 1, "CC", 5)]));
	profile.ButtonsTrigger.push(new MidiXButton(5, [new MidiXMessage("Quad Cortex", 1, "CC", 6)]));
	profile.ButtonsTrigger.push(new MidiXButton(6, [new MidiXMessage("Quad Cortex", 1, "CC", 7)]));
	profile.ButtonsTrigger.push(new MidiXButton(7, [new MidiXMessage("Quad Cortex", 1, "CC", 8)]));
	profile.Devices.push(new MidiXDevice(0, "Quad Cortex", "", "", "Quad Cortex MIDI IN", "Quad Cortex MIDI OUT"));
	profile.Devices.push(new MidiXDevice(1, "Reaper", "", "", "", "MidiXXXToReaper"));
	profile.Devices.push(new MidiXDevice(2, "FromReaper", "", "", "ReaperToMidiXXX", ""));
	profile.Devices.push(new MidiXDevice(3, "Chocolate", "", "", "USB-Midi", ""));
	profile.Groups = ["None", "EXP1", "EXP2", "Preset", "Note", "SceneQC", "PresetRabea"];
	return profile;
}
function GetDefaultProfiles() {
	var mineProfile = GetMineProfile();
	var profiles = [mineProfile];
	profiles[0].active = true;
	return profiles;
}
window.onload = function () {
	
		InitApp();	
};