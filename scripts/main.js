function InitApp() {
	try
	{		
		InitButtonConfiguration();
		InitAllButtons();
		WebMidi
			.enable()
			.then(onEnabled)
			.catch(err => alert(err));
		function onEnabled() {
			try
			{				
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
						GotoPage(1);
					}
				}
				else
				{
					GotoPage(3)
				}
			}
			catch(e)
			{
				console.log(e);
			}
		}
	}
	catch(e)
	{
		console.log(e);
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
var pagesConfigurations = [];
function InitButtonConfiguration()
{
	//Page Stomp 1	
	var idPage = 1;
	var page = new MidiXPage(idPage++, "Stomp 1", true, [new MidiXMessage("Chocolate", 1, "PC", 1)]);
	pagesConfigurations.push(page);
	var index = -1;
	AddButtonConfiguration(page, "GoPageAmp"				,++index , colors[index]);
	AddButtonConfiguration(page, "TremoloSoft"				,++index , colors[index]);		
	AddButtonConfiguration(page, "Shimmer"					,++index , colors[index]);
	AddButtonConfiguration(page, "ReverbVahala"				,++index , colors[index]);
	AddButtonConfiguration(page, "WowGojira"				,++index , "red");
	AddButtonConfiguration(page, "OctaverGojira"			,++index , "orange");
	AddButtonConfiguration(page, "Raw"						,++index , "red");
	AddButtonConfiguration(page, "DelayGojira"				,++index , "green");	

	//Page Stomp 2
	page = new MidiXPage(idPage++, "Stomp 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "Portal"					,++index , colors[index]);
	AddButtonConfiguration(page, "RingArp"					,++index , colors[index]);	
	AddButtonConfiguration(page, "Reverse"					,++index , colors[index]);
	AddButtonConfiguration(page, "Samples64-128"					,++index , colors[index]);
	AddButtonConfiguration(page, "FuzzGojira"				,++index , colors[index]);
	AddButtonConfiguration(page, "RatGojira"				,++index , colors[index]);
	AddButtonConfiguration(page, "Tremolo"					,++index , colors[index]);
	AddButtonConfiguration(page, "Filter"					,++index , colors[index]);

	//Page Stomp 3
	page = new MidiXPage(idPage++, "Stomp 3");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "DelayRabae"				,++index , colors[index]);
	AddButtonConfiguration(page, "ReverbClear"				,++index , colors[index]);	
	AddButtonConfiguration(page, "FreezeRabae"				,++index , colors[index]);
	AddButtonConfiguration(page, "ReverbRabae"				,++index , colors[index]);
	AddButtonConfiguration(page, "Gate"						,++index , colors[index]);
	AddButtonConfiguration(page, "OctaverRabae"				,++index , colors[index]);
	AddButtonConfiguration(page, "FuzzRabae"				,++index , colors[index]);
	AddButtonConfiguration(page, "OverdriveRabae"			,++index , colors[index]);

	//Page Routing
	page = new MidiXPage(idPage++, "Routing");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "RoutingQuadCortex"		,++index , colors[index]);
	AddButtonConfiguration(page, "RoutingGojira"			,++index , colors[index]);	
	AddButtonConfiguration(page, "RoutingRabae"				,++index , colors[index]);
	AddButtonConfiguration(page, "RoutingMidi"				,++index , colors[index]);
	AddButtonConfiguration(page, "GoPagePresetRabae"		,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1VolumeGojiraOut3/4"	,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1VolumeRabaeOut3/4"	,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1VolumeMidiOut1/2"		,++index , colors[index]);

	//Page Expression 1
	page = new MidiXPage(idPage++, "Expression 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "Exp1Oct+1"				,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1Oct+2"				,++index , colors[index]);	
	AddButtonConfiguration(page, "Exp2ReverbMix"			,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1ReverbTime"			,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1Wha"					,++index , colors[index]);
	AddButtonConfiguration(page, "Exp2Volume"				,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1Filter"				,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1DelayFeedback"		,++index , colors[index]);

	//Page FX 1
	page = new MidiXPage(idPage++, "FX 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "ChipFlair"				,++index , colors[index]);
	AddButtonConfiguration(page, "DrumPad"					,++index , colors[index]);	
	AddButtonConfiguration(page, "Glisten"					,++index , colors[index]);
	AddButtonConfiguration(page, "ShinyRoads"				,++index , colors[index]);
	AddButtonConfiguration(page, "GrainDelay"				,++index , colors[index]);
	AddButtonConfiguration(page, "Gramophone"				,++index , colors[index]);
	AddButtonConfiguration(page, "SynthPre"					,++index , colors[index]);
	AddButtonConfiguration(page, "Love"						,++index , colors[index]);

	//Page FX 2
	page = new MidiXPage(idPage++, "FX 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "Fracture"					,++index , colors[index]);
	AddButtonConfiguration(page, "WuwChaCha"				,++index , colors[index]);	
	AddButtonConfiguration(page, "Vinyl"					,++index , colors[index]);
	AddButtonConfiguration(page, "VinylSpindown"			,++index , colors[index]);
	AddButtonConfiguration(page, "Guillotine"				,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "DelayMod"					,++index , colors[index]);

	//Page Looper
	page = new MidiXPage(idPage++, "Looper");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "LooperRec1"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperRec2"				,++index , colors[index]);	
	AddButtonConfiguration(page, "LooperRec3"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperRec4"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperPlay1"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperPlay2"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperPlay3"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperPlay4"				,++index , colors[index]);

	//Page Looper 2
	page = new MidiXPage(idPage++, "Looper Tools");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "LooperDouble"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperStop"				,++index , colors[index]);	
	AddButtonConfiguration(page, "LooperReleaseAllButtons"	,++index , colors[index]);
	AddButtonConfiguration(page, "LooperVolume"				,++index , colors[index]);
	AddButtonConfiguration(page, "LooperVolume1"			,++index , colors[index]);
	AddButtonConfiguration(page, "LooperVolume2"			,++index , colors[index]);
	AddButtonConfiguration(page, "LooperVolume3"			,++index , colors[index]);
	AddButtonConfiguration(page, "LooperVolume4"			,++index , colors[index]);

	//Page Stomp Gojira
	page = new MidiXPage(idPage++, "Gojira Stomp");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "//GojiraPhaser"			,++index , colors[index]);
	AddButtonConfiguration(page, "//GojiraChorus"			,++index , colors[index]);	
	AddButtonConfiguration(page, "//GojiraDelay"			,++index , colors[index]);
	AddButtonConfiguration(page, "//GojiraReverb"			,++index , colors[index]);
	AddButtonConfiguration(page, "//GojiraWOW"				,++index , colors[index]);
	AddButtonConfiguration(page, "//GojiraOctaver"			,++index , colors[index]);
	AddButtonConfiguration(page, "//GojiraRat"				,++index , colors[index]);
	AddButtonConfiguration(page, "//GojiraFuzz"				,++index , colors[index]);

	//Page QC Scene
	page = new MidiXPage(idPage++, "QC Scene");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "QCSceneA"					,++index , colors[index]);
	AddButtonConfiguration(page, "QCSceneB"					,++index , colors[index]);	
	AddButtonConfiguration(page, "QCSceneC"					,++index , colors[index]);
	AddButtonConfiguration(page, "QCSceneD"					,++index , colors[index]);
	AddButtonConfiguration(page, "QCSceneE"					,++index , colors[index]);
	AddButtonConfiguration(page, "QCSceneF"					,++index , colors[index]);
	AddButtonConfiguration(page, "QCSceneG"					,++index , colors[index]);
	AddButtonConfiguration(page, "QCSceneH"					,++index , colors[index]);

	//Page Note
	page = new MidiXPage(idPage++, "Note");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "NoteC"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteC#"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteD"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteD#"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteE"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteF"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteF#"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteG"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteG#"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteA"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteA#"					,++index , colors[2]);
	AddButtonConfiguration(page, "NoteB"					,++index , colors[2]);


	//Page Expression 2
	page = new MidiXPage(idPage++, "Expression 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "Exp1TremoloMix"			,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1TremoloSoftMix"		,++index , colors[index]);	
	AddButtonConfiguration(page, "Exp1TremoloRate"			,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1TremoloSoftRate"		,++index , colors[index]);
	AddButtonConfiguration(page, "TremoloSync"				,++index , colors[index]);
	AddButtonConfiguration(page, "TremoloSoftSync"			,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);

	//Page Offline1
	page = new MidiXPage(idPage++, "Offline 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "OfflinePreGuitarRig"		,++index , colors[index]);
	AddButtonConfiguration(page, "OfflinePreGojira"			,++index , colors[index]);	
	AddButtonConfiguration(page, "OfflinePreRabae"			,++index , colors[index]);
	AddButtonConfiguration(page, "Offline//Rabae"			,++index , colors[index]);
	AddButtonConfiguration(page, "Offline//Gojira"			,++index , colors[index]);
	AddButtonConfiguration(page, "OfflineFullGuitarRig"		,++index , colors[index]);
	AddButtonConfiguration(page, "OfflineMixGuitarRig"		,++index , colors[index]);
	AddButtonConfiguration(page, "OfflineMixGojira"			,++index , colors[index]);

	//Page Offline2
	page = new MidiXPage(idPage++, "Offline 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "OfflineMixRabae"			,++index , colors[index]);
	AddButtonConfiguration(page, "OfflineMixPortal"			,++index , colors[index]);	
	AddButtonConfiguration(page, "OfflineMaschine"			,++index , colors[index]);
	AddButtonConfiguration(page, "OfflineCab"				,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);

	//Page Stereo
	page = new MidiXPage(idPage++, "Stéréo");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "StrereoAll"				,++index , colors[index]);
	AddButtonConfiguration(page, "StereoGojiraDelay"		,++index , colors[index]);	
	AddButtonConfiguration(page, "StereoTremoloSoft"		,++index , colors[index]);
	AddButtonConfiguration(page, "StereoReverse"			,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);

	//Page Expression 3
	page = new MidiXPage(idPage++, "Expression 3");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "Exp1VolumePostGuitarRig"	,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1VolumePostGojira"		,++index , colors[index]);	
	AddButtonConfiguration(page, "Exp1VolumePostRabae"		,++index , colors[index]);
	AddButtonConfiguration(page, "Exp1VolumePostPortal"		,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);
	AddButtonConfiguration(page, "Empty"					,++index , colors[index]);

	//Rabae Arp 1
	page = new MidiXPage(idPage++, "Rabae - Arp 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "RabaePreset1" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset2" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "RabaePreset3" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset4" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset5" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset5" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset7" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset8" 			,++index , colors[index]);

	//Rabae Arp 2
	page = new MidiXPage(idPage++, "Rabae Arp 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "RabaePreset9" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset10" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "RabaePreset11" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset12" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset13" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset14" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset15" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset16" 			,++index , colors[index]);

	//Rabae Fuzz 1
	page = new MidiXPage(idPage++, "Rabae Fuzz 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "RabaePreset17"			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset18" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "RabaePreset19" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset20" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset21" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset22" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset23" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset24" 			,++index , colors[index]);

	//Rabae Fuzz 2
	page = new MidiXPage(idPage++, "Rabae Fuzz 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "RabaePreset25"			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset26" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "RabaePreset27" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset28" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset29" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset30" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset31" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset32" 			,++index , colors[index]);

	//Rabae Synth 1
	page = new MidiXPage(idPage++, "Rabae Synth 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "RabaePreset33"			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset34" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "RabaePreset35" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset36" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset37" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset38" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset39" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset40" 			,++index , colors[index]);

	//Rabae Synth 2
	page = new MidiXPage(idPage++, "Rabae Synth 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "RabaePreset41"			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset42" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "RabaePreset43" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset44" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset45" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset46" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset47" 			,++index , colors[index]);
	AddButtonConfiguration(page, "RabaePreset48" 			,++index , colors[index]);

	//Rabae Stomp
	page = new MidiXPage(idPage++, "Rabae Stomp");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "//RabaeSynth"				,++index , colors[index]);
	AddButtonConfiguration(page, "//RabaeDelay" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "//RabaeFreeze" 			,++index , colors[index]);
	AddButtonConfiguration(page, "//RabaeReverb" 			,++index , colors[index]);
	AddButtonConfiguration(page, "//RabaeComp" 				,++index , colors[index]);
	AddButtonConfiguration(page, "//RabaeOctaver" 			,++index , colors[index]);
	AddButtonConfiguration(page, "//RabaeFuzz" 				,++index , colors[index]);
	AddButtonConfiguration(page, "//RabaeOverdrive" 		,++index , colors[index]);

	//Portal 1
	page = new MidiXPage(idPage++, "Preset Portal 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "PortalPreset1" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset2" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "PortalPreset3" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset4" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset5" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset5" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset7" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset8" 			,++index , colors[index]);

	//Portal 2
	page = new MidiXPage(idPage++, "Presets Portal 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "PortalPreset9" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset10" 			,++index , colors[index]);	
	AddButtonConfiguration(page, "PortalPreset11" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset12" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset13" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset14" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset15" 			,++index , colors[index]);
	AddButtonConfiguration(page, "PortalPreset16" 			,++index , colors[index]);

	//Love
	page = new MidiXPage(idPage++, "Presets Love");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "LovePreset1" 				,++index , colors[index]);
	AddButtonConfiguration(page, "LovePreset2" 				,++index , colors[index]);	
	AddButtonConfiguration(page, "LovePreset3" 				,++index , colors[index]);
	AddButtonConfiguration(page, "LovePreset4" 				,++index , colors[index]);
	AddButtonConfiguration(page, "LovePreset5" 				,++index , colors[index]);
	AddButtonConfiguration(page, "LovePreset5" 				,++index , colors[index]);
	AddButtonConfiguration(page, "LovePreset7" 				,++index , colors[index]);
	AddButtonConfiguration(page, "LovePreset8" 				,++index , colors[index]);

	//Amp 1
	page = new MidiXPage(idPage++, "Amp 1");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "AmpJazzChorus"	 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpC15"			 		,++index , colors[index]);	
	AddButtonConfiguration(page, "AmpTweed"		 			,++index , colors[index]);
	AddButtonConfiguration(page, "AmpPrince"		 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpSquid1"		 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpSquid2"		 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpEVH6L6"		 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpLaboga"		 		,++index , colors[index]);

	//Amp 2
	page = new MidiXPage(idPage++, "Amp 2");
	pagesConfigurations.push(page);
	index = -1;
	AddButtonConfiguration(page, "AmpFXLoop"		 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpBassman"		 		,++index , colors[index]);	
	AddButtonConfiguration(page, "AmpJCM800"		 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpPlexi"		 			,++index , colors[index]);
	AddButtonConfiguration(page, "AmpFriedmann"	 			,++index , colors[index]);
	AddButtonConfiguration(page, "AmpSLO100"		 		,++index , colors[index]);
	AddButtonConfiguration(page, "AmpRectifier"	 			,++index , colors[index]);
	AddButtonConfiguration(page, "AmpDiezelVH4"	 			,++index , colors[index]);

}
function AddButtonConfiguration(page, identifier, index, color)
{
	page.buttonsConfiguration.push(new ButtonConfig(identifier, color, index, page.id));
}
function GetPageButtonConfiguration(configPage)
{
	try{
		var page = new MidiXPage(configPage.id, (configPage.id) + " - " + configPage.name, false, [],
			//actions
			[
				new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("Resync", "Toggle")) //Resync
			]);
		if(configPage.actions != undefined)
		{
			for(var i = 0; i < configPage.actions.length; i++)
			{
				page.actions[page.actions.length] = configPage.action[i];
			}
		}
		
		if(configPage.triggers != undefined)
		{
			for(var i = 0; i < configPage.triggers.length; i++)
			{
				page.triggers[page.triggers.length] = configPage.triggers[i];
			}
		}
		configPage.buttonsConfiguration.forEach((b) =>{
			AddButtonToPage(page, b.index, b.identifier, b.color);
		})
		return page;
	}
	catch(e)
	{
		console.log(e);
	}
}
var AllButtons = [];
function InitAllButtons()
{
	var index = 0;
	AllButtons.push(new MidiXItem("GoPageAmp",index, "Amp", "Momentary", null, "", 
		[
			{
				id : 0,
				name : "",
				event : "OnPress", 
				action : "GoPage",
				idPage : 28
			}
		], colors[index++]));
	
	AllButtons.push(GetSimpleFxButton("TremoloSoft", index++, 21, "Tremolo Soft<br/>.. Exp<div class='info-mix'>Full</div>", null, null, 
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
	AllButtons.push(GetSimpleFxButton("Shimmer", index++, 26, "Shimmer", GetMidiXActionsForPostMixGojira(3), null, 
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
	AllButtons.push(GetSimpleFxButton("ReverbVahala", index++, 8, "Reverb<br/>.. Exp", GetMidiXActionsForPostMixReverb(3), null, 
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
	AllButtons.push({identifier : "WowGojira",
			id: index++,
			name: "Wow",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Wow Type", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 15, 127)), // Wow Type
				new MidiXAction(1, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("Wow", "On")), // Wow
				new MidiXAction(2, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("Wow", "Off")), // Wow
				new MidiXAction(3, "Wow Postition", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 14, 127)), // Wow Position
				GetMidiXActionSetRouting(4)],
			color: "red",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 1, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 1, 0, "StateOff")
			]
		});
	AllButtons.push(GetSimpleFxButton("OctaverGojira", index++, 2, "Octaver" , null, "orange"));	
	var indexRaw = 0;
	AllButtons.push({identifier : "Raw",
			id: index++,
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
				new MidiXAction(indexRaw++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("Resync", "On"), null, null, null, null, null, 100), //Resync
				new MidiXAction(indexRaw++, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("Resync", "On"), null, null, null, null, null, 100), //Resync
			],
			color: "brown"
		});
	AllButtons.push(GetSimpleFxButton("DelayGojira", index++, 7, "Delay<br/>.. Exp", GetMidiXActionsForPostMixGojira(3), "green", 
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
	AllButtons.push(GetSimpleFxButton("Portal", index++, 3, "Portal<br/>..Presets<div class='info-mix'>Mix</div>", null, null, [
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
		GetSimpleFxButton("", 101, 109, "Offline", null, "red")
	] ));	
	AllButtons.push(GetSimpleFxButton("RingArp", index++, 31, "Ring Arp<div class='info-mix'>Full</div>" ));
	AllButtons.push(GetSimpleFxButton("Reverse", index++, 12, "Reverse<div class='info-mix'>Mix</div>", GetMidiXActionsForPostMixGuitarRig(3), null, 
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
	AllButtons.push({identifier : "Tap",
			id: index++,
			name: "Tap",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Tap", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 29, 127))],
			color: "lightgreen"
		});
	AllButtons.push(GetSimpleFxButton("FuzzGojira", index++, 24, "Fuzz" ));	
	AllButtons.push(GetSimpleFxButton("RatGojira", index++, 25, "Rat" ));	
	AllButtons.push(GetSimpleFxButton("Tremolo", index++, 22, "Tremolo<br/>.. Exp<div class='info-mix'>Full</div>", null, null, 
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
	AllButtons.push(GetSimpleFxButton("Filter", index++, 39, "Filter<div class='info-mix'>Full</div>", null, null, 
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
	AllButtons.push(GetSimpleFxButton("DelayRabae", index++, 47, "Delay Rabae", GetMidiXActionsForPostMixRabae(3), null, 
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
	AllButtons.push({ identifier:"ReverbClear",
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
	AllButtons.push(GetSimpleFxButton("FreezeRabae", index++, 49, "Freeze Rabae", null, null, 
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
	AllButtons.push(GetSimpleFxButton("ReverbRabae", index++, 48, "Reverb Rabae", GetMidiXActionsForPostMixRabae(3), null, 
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
	AllButtons.push(GetSimpleFxButton("Gate", index++, 23, "Gate"));	
	AllButtons.push(GetSimpleFxButton("OctaverRabae", index++, 4, "Octaver Rabae"));	
	AllButtons.push(GetSimpleFxButton("FuzzRabae", index++, 5, "Fuzz Rabae"));	
	AllButtons.push(GetSimpleFxButton("OverdriveRabae", index++, 6, "Overdrive Rabae"));
	var indexAction = -1;
	AllButtons.push(new MidiXItem("Exp1Oct+1", ++index, "Oct +1", "Preset", false, "EXP1", [
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByIdentifier("Exp1Oct+2", "Off") // Oct +2
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Wow", "Off")
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByIdentifier("ExpWowEngaged", "On") // ExpWowEngaged
		},
		{
			id: ++indexAction,
			event: "OnRelease",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByIdentifier("ExpWowEngaged", "Off") // ExpWowEngaged
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Wow", "Off") // Wow 
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Wow", "On") // Wow 
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Resync", "Toggle") // Sync
		},
		GetMidiXActionSetRouting(indexAction)
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 14, null, "Expression")], excludeToLast));
	indexAction = -1;
	AllButtons.push(new MidiXItem("Exp1Oct+2", ++index, "Oct +2", "Preset", false, "EXP1", [
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByIdentifier("Exp1Oct+1", "Off") // Oct +1
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
			linkedButton:  GetMidiXLinkButtonByIdentifier("Wow", "Off") // Wow 
		},
		{
			id: ++indexAction,
			event: "OnPress",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByIdentifier("ExpWowEngaged", "On") // ExpWowEngaged
		},
		{
			id: ++indexAction,
			event: "OnRelease",
			action: "LinkButton",
			linkedButton: GetMidiXLinkButtonByIdentifier("ExpWowEngaged", "Off") // ExpWowEngaged
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Wow", "Off") // Wow 
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Wow", "On") // Wow 
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Resync", "Toggle") // Sync
		},
		GetMidiXActionSetRouting(indexAction)
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 14, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp2ReverbMix", ++index, "Reverb Mix<br/>EXP 2", "Preset", false, "EXP2", [
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
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 18, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1ReverbTime", ++index, "Reverb Time<br/>EXP 1", "Preset", false, "EXP1", [
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Reverb Clear", "Toggle") // Reverb Clear
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 17, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1Wha", ++index, "Wha", "Preset", false, "EXP1", [
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Wha", "Off") // WHA 
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
			linkedButton: GetMidiXLinkButtonByIdentifier("Wha", "On") // WHA 
		}
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 16, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp2Volume", ++index, "Volume<br/>EXP 2", "Preset", false, "EXP2", [
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
	], colors[index], [], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1Filter", ++index, "Filter", "Preset", false, "EXP1", [
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
				linkedButton: GetMidiXLinkButtonByIdentifier("Filter", "On") // Filter
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
				linkedButton: GetMidiXLinkButtonByIdentifier("Filter", "Off") // Filter 
			}
		], colors[index], [], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1DelayFeedback", ++index, "Delay<br/>Feedback", "Preset", false, "EXP1", [
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
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 13, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1TremoloMix", ++index, "Exp Tremolo Mix", "Preset", false, "EXP1", [
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
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 98, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1TremoloSoftMix",++index, "Exp Tremolo Soft Mix", "Preset", false, "EXP1", [
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
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 99, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1TremoloRate", ++index, "Exp Tremolo Rate", "Preset", false, "EXP1", [
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
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 96, null, "Expression")], excludeToLast));
	AllButtons.push(new MidiXItem("Exp1TremoloSoftRate",++index, "Exp Tremolo Soft Rate", "Preset", false, "EXP1", [
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
	], colors[index], [new MidiXMessage("FromReaper", 1, "CC", 97, null, "Expression")], excludeToLast));
	AllButtons.push({ identifier : "TremoloSync",
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
			],
			excludeToLast : true
		});		
	AllButtons.push({ identifier : "TremoloSoftSync",
			id: ++index,
			name: "Tremolo Soft Sync",
			type: "Preset",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 95, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 95, 0))
			],
			color: colors[index],
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 95, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 95, 0, "StateOff")
			],
			excludeToLast : true
		});		
	AllButtons.push({ identifier : "Empty", 
		id: ++index, 
		type: "Preset", 
		active : false,
		actions: [],
		triggers : [],
		group: "", 
		color: colors[index], 
		name: "-",
		excludeToLast:excludeToLast });
	AllButtons.push(new MidiXItem("Exp1VolumePostGuitarRig", ++index, "Exp Volume Post Guitar Rig", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("Exp1VolumePostGojira", ++index, "Exp Volume Post Gojira", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("Exp1VolumePostRabae", ++index, "Exp Volume Post Rabae", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("Exp1VolumePostPortal", ++index, "Exp Volume Post Portal", "Preset", false, "EXP1", [
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
	AllButtons.push(GetSimpleFxButton("ChipFlair", ++index, 33, "Chip Flair<div class='info-mix'>Mix</div>", GetMidiXActionsForPostMixGuitarRig(3)));
	AllButtons.push(GetSimpleFxButton("DrumPad", ++index, 34, "Drum Pad<div class='info-mix'>Full</div>"));
	AllButtons.push(GetSimpleFxButton("Glisten", ++index, 35, "Glisten<div class='info-mix'>Full</div>"));
	AllButtons.push(GetSimpleFxButton("ShinyRoads", ++index, 36, "Shiny Roads<div class='info-mix'>Full</div>"));
	AllButtons.push(GetSimpleFxButton("GrainDelay", ++index, 37, "Grain Delay<div class='info-mix'>Mix</div>", GetMidiXActionsForPostMixGuitarRig(3), null, 
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
	AllButtons.push(GetSimpleFxButton("Gramophone", ++index, 38, "Gramophone<div class='info-mix'>Full</div>"));
	AllButtons.push(GetSimpleFxButton("SynthPre", ++index, 54, "Synth Pre"));
	AllButtons.push(GetSimpleFxButton("Love", ++index, 92, "Love<br/>.. Presets<div class='info-mix'>Full</div>", null, null, [
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
	AllButtons.push(GetSimpleFxButton("Fracture", ++index, 56, "Fracture<div class='info-mix'>Full</div>"));
	AllButtons.push(GetSimpleFxButton("WuwChaCha", ++index, 57, "Wuw Cha Cha<div class='info-mix'>Full</div>", null, null, 
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
	AllButtons.push(GetSimpleFxButton("Vinyl", ++index, 58, "Vinyl<div class='info-mix'>Full</div>", null, null, 
	[
		new MidiXAction(3, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("VinylSpindown", "Off")),
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
	AllButtons.push(GetSimpleFxButton("VinylSpindown", ++index, 59, "Vinyl Spindown", false));
	AllButtons.push(GetSimpleFxButton("Guillotine", ++index, 55, "Guillotine<div class='info-mix'>Full</div>"));
	AllButtons.push(GetSimpleFxButton("DelayMod", ++index, 40, "Delay Mod", null, null, 
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
	AllButtons.push({identifier : "RoutingQuadCortex",
		id: ++index,
		active : true,
		name: "Quad<br/>Cortex",
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
		],
		excludeToLast : true
	});	
	AllButtons.push({identifier : "RoutingGojira",
		id: ++index,
		name: "Parallele</br>Gojira",
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
			GetSimpleFxButton("", 0, 104, "Online", null, "red"),
			new MidiXItem( "",1, "Pan Center", "Momentary", true, "", [new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Reaper", 1, "CC", 69, 64))], "blue") // PAN Gojira
		]
	});	
	AllButtons.push({identifier : "RoutingRabae",
		id: ++index,
		name: "Parallele</br>Rabea",
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
			GetSimpleFxButton("", 0, 103, "Online", null, "red"),
			new MidiXItem( "",1, "Pan Center", "Momentary", true, "", [new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Reaper", 1, "CC", 79, 64))], "blue") // PAN Rabae

		]
	});	
	AllButtons.push({identifier : "RoutingMidi",
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
			GetSimpleFxButton("", 103, 110, "Online", null, "red"),
			new MidiXItem( "",1, "Pan Center", "Momentary", true, "", [new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Reaper", 2, "CC", 33, 64))], "blue") // PAN MIDI

		]
	});
	AllButtons.push({identifier : "GoPagePresetRabae",
		id: ++index,
		name: "Presets",
		type: "Momentary",
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
	AllButtons.push({identifier : "Exp1VolumeGojiraOut3/4",
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
	AllButtons.push({identifier : "Exp1VolumeRabaeOut3/4",
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
	AllButtons.push({identifier : "Exp1VolumeMidiOut1/2",
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
	AllButtons.push(GetSimpleFxButton("//GojiraPhaser", ++index, 64, "Phaser"));
	AllButtons.push(GetSimpleFxButton("//GojiraChorus", ++index, 65, "Chorus"));
	AllButtons.push(GetSimpleFxButton("//GojiraDelay", ++index, 66, "Delay"));
	AllButtons.push(GetSimpleFxButton("//GojiraReverb", ++index, 67, "Reverb"));
	AllButtons.push(GetSimpleFxButton("//GojiraWOW", ++index, 60, "WOW"));
	AllButtons.push(GetSimpleFxButton("//GojiraOctaver", ++index, 61, "Octaver"));
	AllButtons.push(GetSimpleFxButton("//GojiraRat", ++index, 62, "Rat"));
	AllButtons.push(GetSimpleFxButton("//GojiraFuzz", ++index, 63, "Fuzz"));
	AllButtons.push(GetSimpleFxButton("//RabaeSynth", ++index, 74, "Synth"));	
	AllButtons.push(GetSimpleFxButton("//RabaeDelay", ++index, 75, "Delay"));
	AllButtons.push(GetSimpleFxButton("//RabaeFreeze", ++index, 76, "Freeze"));
	AllButtons.push(GetSimpleFxButton("//RabaeReverb", ++index, 77, "Reverb"));
	AllButtons.push(GetSimpleFxButton("//RabaeComp", ++index, 70, "Comp"));
	AllButtons.push(GetSimpleFxButton("//RabaeOctaver", ++index, 71, "Octaver"));
	AllButtons.push(GetSimpleFxButton("//RabaeFuzz", ++index, 72, "Fuzz"));
	AllButtons.push(GetSimpleFxButton("//RabaeOverdrive", ++index, 73 , "Overdrive"));
	AllButtons.push(new MidiXItem("QCSceneA", ++index, "Scene A", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 0))], colors[index]));
	AllButtons.push(new MidiXItem("QCSceneB", ++index, "Scene B", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 1))], colors[index]));
	AllButtons.push(new MidiXItem("QCSceneC", ++index, "Scene C", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 2))], colors[index]));
	AllButtons.push(new MidiXItem("QCSceneD", ++index, "Scene D", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 3))], colors[index]));
	AllButtons.push(new MidiXItem("QCSceneE", ++index, "Scene E", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 4))], colors[index]));
	AllButtons.push(new MidiXItem("QCSceneF", ++index, "Scene F", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 5))], colors[index]));
	AllButtons.push(new MidiXItem("QCSceneG", ++index, "Scene G", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 6))], colors[index]));
	AllButtons.push(new MidiXItem("QCSceneH", ++index, "Scene H", "Preset", false, "SceneQC", [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "CC", 43, 7))], colors[index]));
	AllButtons.push(GetSimpleFxButton("OfflinePreGuitarRig", ++index, 100, "Offline<br/>Pre Guitar Rig", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflinePreGojira", ++index, 101, "Offline<br/>Pre Gojira", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflinePreRabae", ++index, 102, "Offline<br/>Pre Rabae", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("Offline//Rabae", ++index, 103, "Offline<br/>// Rabae", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("Offline//Gojira", ++index, 104, "Offline<br/>// Gojira", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflineFullGuitarRig", ++index, 105, "Offline<br/>Full Guitar Rig", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflineMixGuitarRig", ++index, 106, "Offline<br/>Mix Guitar Rig", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflineMixGojira", ++index, 107, "Offline<br/>Mix Gojira", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflineMixRabae", index++, 108, "Offline<br/>Mix Rabae", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflineMixPortal", index++, 109, "Offline<br/>Mix Portal", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflineMaschine", index++, 110, "Offline<br/>Maschine", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("OfflineCab", index++, 111, "Offline<br/>Cab", null, null, null, null, null, null, true));
	AllButtons.push({ identifier : "StrereoAll",
		id: ++index,
		name: "Stereo All",
		type: "Preset",
		actions: [
			new MidiXAction(0, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("StereoGojiraDelay", 	"On")),
			new MidiXAction(1, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("StereoTremoloSoft", 	"On")),
			new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("StereoReverse", 		"On")),
			new MidiXAction(3, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("StereoGojiraDelay", 	"Off")),
			new MidiXAction(4, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("StereoTremoloSoft", 	"Off")),
			new MidiXAction(5, "", "OnRelease", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("StereoReverse", 		"Off"))

		],
		color: colors[index],
		triggers: [
		], 
		excludeToLast : true
	});	
	AllButtons.push(GetSimpleFxButton("StereoGojiraDelay", index++, 82, "Stereo Gojira Delay", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("StereoTremoloSoft", index++, 83, "Stereo Tremolo Soft", null, null, null, null, null, null, true));
	AllButtons.push(GetSimpleFxButton("StereoReverse", index++, 84, "Stereo Reverse", null, null, null, null, null, null, true));
	AllButtons.push({identifier : "RabaePreset1", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 1, 127))], group: "PresetRabea", color: colors[index], name: "80's Dream Transition - no cab" });
	AllButtons.push({identifier : "RabaePreset2", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 2, 127))], group: "PresetRabea", color: colors[index], name: "aMUSEd - no cab" });
	AllButtons.push({identifier : "RabaePreset3", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 3, 127))], group: "PresetRabea", color: colors[index], name: "Astroboy" });
	AllButtons.push({identifier : "RabaePreset4", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 4, 127))], group: "PresetRabea", color: colors[index], name: "Behold, Retro Sounds - no cab" });
	AllButtons.push({identifier : "RabaePreset5", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 5, 127))], group: "PresetRabea", color: colors[index], name: "Crazy Arpeggio" });
	AllButtons.push({identifier : "RabaePreset5", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 6, 127))], group: "PresetRabea", color: colors[index], name: "Dancing Fifths Synth - no cab" });
	AllButtons.push({identifier : "RabaePreset7", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 7, 127))], group: "PresetRabea", color: colors[index], name: "Descending Droplets (C Minor)" });
	AllButtons.push({identifier : "RabaePreset8", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 8, 127))], group: "PresetRabea", color: colors[index], name: "Distant Particles" });
	AllButtons.push({identifier : "RabaePreset9", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC",  9, 127))], group: "PresetRabea", color: colors[index], name: "Final Fantasy Arpeggio" });
	AllButtons.push({identifier : "RabaePreset10", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 10, 127))], group: "PresetRabea", color: colors[index], name: "Let there be Auto Tapping" });
	AllButtons.push({identifier : "RabaePreset11", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 11, 127))], group: "PresetRabea", color: colors[index], name: "Plucked Saw (DeadRat style) - Synth - no cab" });
	AllButtons.push({identifier : "RabaePreset12", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 12, 127))], group: "PresetRabea", color: colors[index], name: "Select Key For Fun - no cab" });
	AllButtons.push({identifier : "RabaePreset13", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 13, 127))], group: "PresetRabea", color: colors[index], name: "Why is it always Stranger Things - no cab" });
	AllButtons.push({identifier : "RabaePreset14", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 14, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset15", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 15, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset16", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 16, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset17", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 17, 127))], group: "PresetRabea", color: colors[index], name: "GliTcHEd Riff$" });
	AllButtons.push({identifier : "RabaePreset18", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 18, 127))], group: "PresetRabea", color: colors[index], name: "Gnarly AF Riffs" });
	AllButtons.push({identifier : "RabaePreset19", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 19, 127))], group: "PresetRabea", color: colors[index], name: "LeoFrog Fuzz" });
	AllButtons.push({identifier : "RabaePreset20", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 20, 127))], group: "PresetRabea", color: colors[index], name: "Mon then" });
	AllButtons.push({identifier : "RabaePreset21", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 21, 127))], group: "PresetRabea", color: colors[index], name: "Offer Organs - no cab" });
	AllButtons.push({identifier : "RabaePreset22", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 22, 127))], group: "PresetRabea", color: colors[index], name: "Thasss Nasssty" });
	AllButtons.push({identifier : "RabaePreset23", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 23, 127))], group: "PresetRabea", color: colors[index], name: "The Gainsaw" });
	AllButtons.push({identifier : "RabaePreset24", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 24, 127))], group: "PresetRabea", color: colors[index], name: "The Gates Of Hell - no cab" });
	AllButtons.push({identifier : "RabaePreset25", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 25, 127))], group: "PresetRabea", color: colors[index], name: "The Hypnotoad - no cab" });
	AllButtons.push({identifier : "RabaePreset26", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 26, 127))], group: "PresetRabea", color: colors[index], name: "Angry Brit" });
	AllButtons.push({identifier : "RabaePreset27", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 27, 127))], group: "PresetRabea", color: colors[index], name: "Oct-Sub" });
	AllButtons.push({identifier : "RabaePreset28", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 28, 127))], group: "PresetRabea", color: colors[index], name: "Pushed Brit Lead" });
	AllButtons.push({identifier : "RabaePreset29", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 29, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset30", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 30, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset31", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 31, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset32", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 32, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset33", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 33, 127))], group: "PresetRabea", color: colors[index], name: "Black Gummy - Synth Bass - no cab" });
	AllButtons.push({identifier : "RabaePreset34", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 34, 127))], group: "PresetRabea", color: colors[index], name: "Bone Grinder Synth" });
	AllButtons.push({identifier : "RabaePreset35", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 35, 127))], group: "PresetRabea", color: colors[index], name: "Cone Buster 2  Synth" });
	AllButtons.push({identifier : "RabaePreset36", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 36, 127))], group: "PresetRabea", color: colors[index], name: "Cone Destroyer Synth" });
	AllButtons.push({identifier : "RabaePreset37", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 37, 127))], group: "PresetRabea", color: colors[index], name: "Distorted Resonance - Synth - no cab" });
	AllButtons.push({identifier : "RabaePreset38", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 38, 127))], group: "PresetRabea", color: colors[index], name: "Fuzzy Organ Vibes - no cab" });
	AllButtons.push({identifier : "RabaePreset39", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 39, 127))], group: "PresetRabea", color: colors[index], name: "If I only had a Bandmate" });
	AllButtons.push({identifier : "RabaePreset40", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 40, 127))], group: "PresetRabea", color: colors[index], name: "Mega Man - Lead - no cab" });
	AllButtons.push({identifier : "RabaePreset41", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 41, 127))], group: "PresetRabea", color: colors[index], name: "Numb Fade Bass Synth 1" });
	AllButtons.push({identifier : "RabaePreset42", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 42, 127))], group: "PresetRabea", color: colors[index], name: "Smelly Pig" });
	AllButtons.push({identifier : "RabaePreset43", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 43, 127))], group: "PresetRabea", color: colors[index], name: "Synth Lead" });
	AllButtons.push({identifier : "RabaePreset44", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 44, 127))], group: "PresetRabea", color: colors[index], name: "When Floyd Freezes Over - no cab" });
	AllButtons.push({identifier : "RabaePreset45", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 45, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset46", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 46, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset47", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 47, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "RabaePreset48", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 3, "CC", 48, 127))], group: "PresetRabea", color: colors[index], name: "" });
	AllButtons.push({identifier : "PortalPreset1", id: ++index, type: "Preset", actions: 
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
	AllButtons.push({identifier : "PortalPreset2", id: ++index, type: "Preset", actions: 
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
	AllButtons.push({identifier : "PortalPreset3", id: ++index, type: "Preset", actions: [
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
	AllButtons.push({identifier : "PortalPreset4", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 4))], group: "PresetPortal", color: colors[index], name: "SKIPPING BASS" });
	AllButtons.push({identifier : "PortalPreset5", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 5))], group: "PresetPortal", color: colors[index], name: "WARRBLE GLITCH" });
	AllButtons.push({identifier : "PortalPreset6", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 6))], group: "PresetPortal", color: colors[index], name: "MIN RED SEA" });
	AllButtons.push({identifier : "PortalPreset7", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 7))], group: "PresetPortal", color: colors[index], name: "ARP O MATIC" });
	AllButtons.push({identifier : "PortalPreset8", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 8))], group: "PresetPortal", color: colors[index], name: "RETURN TO THE SOURCE" });
	AllButtons.push({identifier : "PortalPreset9", id: ++index, type: "Preset", actions: [
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
	AllButtons.push({identifier : "PortalPreset10", id: ++index, type: "Preset", actions: [
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
	AllButtons.push({identifier : "PortalPreset11", id: ++index, type: "Preset", actions: [
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
	AllButtons.push({identifier : "PortalPreset12", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, 12))], group: "PresetPortal", color: colors[index], name:"POCKET CALCULATOR"});
	AllButtons.push({identifier : "PortalPreset13", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	AllButtons.push({identifier : "PortalPreset14", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	AllButtons.push({identifier : "PortalPreset15", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	AllButtons.push({identifier : "PortalPreset16", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 9, ))], group: "PresetPortal", color: colors[index], name: ""});
	AllButtons.push(new MidiXItem("LovePreset1" ,++index, " EXP Love Mix", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("LovePreset2" ,++index, " EXP Love Wet", "Preset", false, "EXP1", [
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
	AllButtons.push({identifier : "LovePreset3", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 1))], group: "PresetLove", color: colors[index], name:  "LOVELY" });
	AllButtons.push({identifier : "LovePreset4", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 2))], group: "PresetLove", color: colors[index], name:  "PADIFY" });
	AllButtons.push({identifier : "LovePreset5", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 3))], group: "PresetLove", color: colors[index], name:  "RUSTIC CHARM" });
	AllButtons.push({identifier : "LovePreset6", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 4))], group: "PresetLove", color: colors[index], name:  "TENDER GRUNGE ECHOES" });
	AllButtons.push({identifier : "LovePreset7", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 5))], group: "PresetLove", color: colors[index], name:  "ANGEL DUST" });
	AllButtons.push({identifier : "LovePreset8", id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 2, "CC", 4, 6))], group: "PresetLove", color: colors[index], name:  "CINEMATIC FLAVOUR" });
	
	var indexPresetAmp = 48;
	AllButtons.push({identifier : "AmpJazzChorus"	, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Jazz Chorus" });
	AllButtons.push({identifier : "AmpC15"			, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "C15" });
	AllButtons.push({identifier : "AmpTweed"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Tweed" });
	AllButtons.push({identifier : "AmpPrince"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Prince" });
	AllButtons.push({identifier : "AmpSquid1"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Squid 1" });
	AllButtons.push({identifier : "AmpSquid2"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Squid 2" });
	AllButtons.push({identifier : "AmpEVH6L6"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "EVH 6L6" });
	AllButtons.push({identifier : "AmpLaboga"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Laboga" });
	AllButtons.push({identifier : "AmpFXLoop"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "FX Loop" });
	AllButtons.push({identifier : "AmpBassman"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Bassman" });
	AllButtons.push({identifier : "AmpJCM800"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "JCM 800" });
	AllButtons.push({identifier : "AmpPlexi"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Plexi" });
	AllButtons.push({identifier : "AmpFriedmann"	, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Friedmann" });
	AllButtons.push({identifier : "AmpSLO100"		, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "SLO 100" });
	AllButtons.push({identifier : "AmpRectifier"	, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Rectifier" });
	AllButtons.push({identifier : "AmpDiezelVH4"	, id: ++index, type: "Preset", actions: [new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Quad Cortex", 1, "PC", indexPresetAmp++))], group: "QCAmp", color: colors[index], name:  "Diezel VH4" });
	AllButtons.push(new MidiXItem("NoteC", ++index, "C", "Preset", false, "Note",
	[
		new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 36, 127)),
		new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 36, 127))
	], "blue"

	));
	AllButtons.push(new MidiXItem("NoteC#", ++index, "C#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 37, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 37, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteD", ++index, "D", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 38, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 38, 127))
		], "blue"
	));
	AllButtons.push(new MidiXItem("NoteD#", ++index, "D#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 39, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 39, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteE", ++index, "E", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 40, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 40, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteF", ++index, "F", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 41, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 41, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteF#", ++index, "F#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 42, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 42, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteG", ++index, "G", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 43, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 43, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteG#", ++index, "G#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 44, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 44, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteA", ++index, "A", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 45, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 45, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteA#", ++index, "A#", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 46, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 46, 127))
		], "blue"

	));
	AllButtons.push(new MidiXItem("NoteB", ++index, "B", "Preset", false, "Note",
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "NoteOn", 47, 127)),
			new MidiXAction(0, "", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "NoteOff", 47, 127))
		], "blue"

	));
	
	var idPageLoop = 8;
	AllButtons.push(new MidiXItem("LooperRec1", ++index, "Rec 1", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 116, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 4, "StateOff"))], colors[index]));
	AllButtons.push(new MidiXItem("LooperRec2", ++index, "Rec 2", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 117, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 5, "StateOff"))], colors[index]));
	AllButtons.push(new MidiXItem("LooperRec3", ++index, "Rec 3", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 118, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 6, "StateOff"))], colors[index]));
	AllButtons.push(new MidiXItem("LooperRec4", ++index, "Rec 4", 	"Preset", 		false, "", 				[new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 119, 127)),GetMidiXActionSetRouting(1), new MidiXAction(2, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, 7, "StateOff"))], colors[index]));
	AllButtons.push(new MidiXItem("LooperPlay1", ++index, "Play 1", 	"Preset", 		false, "", 				[
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
	AllButtons.push(new MidiXItem("LooperPlay2", ++index, "Play 2", 	"Preset", 		false, "", 				[
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
	AllButtons.push(new MidiXItem("LooperPlay3", ++index, "Play 3", 	"Preset", 		false, "", 				[
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
	AllButtons.push(new MidiXItem("LooperPlay4", ++index, "Play 4", 	"Preset", 		false, "", 				[
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
	var indexButton = 0;
	var indexAction = 0;
	AllButtons.push(new MidiXItem("LooperDouble", ++index, "Double", 		"Momentary", 	false, "", 		
		[
			new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 19, 127)), 
		], colors[index]));
	AllButtons.push(new MidiXItem("LooperStop", ++index, "Stop / Kill", 		"Momentary", 	false, "", 		
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
	
	AllButtons.push(new MidiXItem("LooperReleaseAllButtons",++index, "Release Loop Button","Momentary", 		false, "", [
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff")),
		new MidiXAction(indexAction++, "", "OnPress", "LinkButton", null, null, null, new MidiXLinkButton(idPageLoop, indexButton++, "StateOff"))
	]		, colors[index]));
	AllButtons.push(new MidiXItem("LooperVolume", ++index, "Volume Looper", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("LooperVolume1", ++index, "Volume Looper 1", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("LooperVolume2", ++index, "Volume Looper 2", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("LooperVolume3",++index, "Volume Looper 3", "Preset", false, "EXP1", [
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
	AllButtons.push(new MidiXItem("LooperVolume4", ++index, "Volume Looper 4", "Preset", false, "EXP1", [
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
	AllButtons.push({ identifier : "Samples64",
			id: index++,
			name: "Samples 64",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Samples 64", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 90, 127))
			],
			excludeToLast : true
		});
	AllButtons.push({identifier : "Samples128",
			id: index++,
			name: "Samples 128",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Samples 64", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 91, 127))
			],
			excludeToLast : true
		});
	AllButtons.push({ identifier : "Samples64-128",
			id: index++,
			name: "Samples 64",
			type: "Preset",
			actions: [
				new MidiXAction(0, "Samples 64", "OnRelease", "Midi", new MidiXMessage("Reaper", 1, "CC", 90, 127)),
				new MidiXAction(0, "Samples 128", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 91, 127))
			],
			excludeToLast : true
		});
}
function GetButtonByIdentifier(identifier, id)
{
	var button = AllButtons.find((item)=> {return item.identifier == identifier;});
	if(button)
	{
		var b = Object.assign({}, button);
		if(id != undefined ){
			b.id = id;
		}
		return b;
	}
	LogError(`Boutton non trouvé : ${identifier}`);
}
var excludeToLast = true;
function GetMidiXLinkButtonByIdentifier(identifier, action, state, conditionnalOperator)
{
  	if (identifier == "Reverb Clear")
		return new MidiXLinkButton(0, 0, action, state, conditionnalOperator);
  	if (identifier == "Resync")
		return new MidiXLinkButton(0, 1, action, state, conditionnalOperator);
  	if (identifier == "Wha")
		return new MidiXLinkButton(0, 26, action, state, conditionnalOperator);
  	if (identifier == "Wow")
		return new MidiXLinkButton(0, 22, action, state, conditionnalOperator);
  	if (identifier == "ExpWowEngaged")
		return new MidiXLinkButton(0, 23, action, state, conditionnalOperator);
  	var allItems = [];
  	for(var i = 0; i < pagesConfigurations.length; i++)
	{
		var page = pagesConfigurations[i];
		for(var y = 0; y < page.buttonsConfiguration.length; y++)
		{
			allItems.push(page.buttonsConfiguration[y]);
		}
	}
	var item = allItems.filter((button) => {  return button ?  button.identifier == identifier : false;})[0];
	if(item)
	{
		return new MidiXLinkButton(item.idPage, item.index, action, state, conditionnalOperator);
	}
	//console.log(allItems);
	console.log("not found " + identifier);
	const stack = new Error().stack;
	//console.log(stack);
}
function GetPageTool(profile) {
	var index = 0;
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Tools", false, [],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, GetMidiXLinkButtonByIdentifier("Resync", "Toggle")) // Resync
		], false);
    page.nbButtonsByLine = 6;
	//page.visible = false;
	//0
	page.items.push(
		{
			identifier:"ReverbClear",
			id: index++,
			name: "Reverb Clear",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Reverb Clear", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 127)),
				new MidiXAction(1, "Reverb Clear", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 32, 0))
			],

			color: "brown",
			excludeToLast : true
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
			color: "brown",
			excludeToLast : true
		});
	//2
	page.items.push(GetButtonByIdentifier("Samples64", index++));
	//3
	page.items.push(GetButtonByIdentifier("Samples128", index++));
	//4
	page.items.push(
		{
			id: index++,
			name: "Pan<br/>Center",
			type: "Momentary",
			actions: [
				new MidiXAction(0, "Pan Center", "OnPress", "Midi", new MidiXMessage("Reaper", 1, "CC", 41, 127))
			],

			color: "orange",
			excludeToLast : true
		});
	//5
	page.items.push(new MidiXItem( "",index++, "Previous Page", "Momentary", false, null,
		[
			new MidiXAction(0, "", "OnPress", "PreviousPage")
		], "blue",
		[
			new MidiXMessage("Chocolate", 1, "PC", 0),
			new MidiXMessage("Chocolate", 1, "PC", 4),
			{ device : "Keyboard", keyboardKey : "ArrowLeft"}
		], 
	 excludeToLast));
	//6
	page.items.push(new MidiXItem( "",index++, "Next Page", "Momentary", false, null,
		[
			new MidiXAction(0, "", "OnPress", "NextPage")
		], "blue",
		[
			new MidiXMessage("Chocolate", 1, "PC", 3),
			new MidiXMessage("Chocolate", 1, "PC", 7),
			{ device : "Keyboard", keyboardKey : "ArrowRight"}
		], excludeToLast
	));
	//7
	page.items.push(new MidiXItem( "",index++, "Wha Exp2", "Preset", false, "EXP2", [
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
	], "orange", [], excludeToLast));
	//8
	page.items.push(new MidiXItem( "",index++, "Set Routing  step1 (step pre)", "Momentary", true, "", [
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
	], excludeToLast));
	//9
	page.items.push(new MidiXItem( "",index++, "Set NO PRE - FULL|MIX", "Momentary", true, "", [
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
	], "red", [], excludeToLast));
	//10
	page.items.push(new MidiXItem( "",index++, "Set PRE - FULL|MIX", "Momentary", true, "", [
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
	], "red", [], excludeToLast));
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
			color: "brown",
			excludeToLast : true
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
				color: "brown",
				excludeToLast : true
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
			color: "brown",
			excludeToLast : true
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
				color: "brown",
				excludeToLast : true
			});
	//15
	page.items.push(new MidiXItem( "",index++, "Post Mix Mute", "Preset", true, "", [
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
	], excludeToLast));
	//16
	page.items.push(new MidiXItem( "",index++, "Post Mix Mute GuitarRig", "Preset", true, "", [
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
	], excludeToLast));
	//17
	page.items.push(new MidiXItem( "",index++, "Post Mix Mute Gojira", "Preset", true, "", [
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
	], excludeToLast));
	//18
	page.items.push(new MidiXItem( "",index++, "Post Mix Mute Rabae", "Preset", true, "", [
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
	], excludeToLast));
	//19
	page.items.push(new MidiXItem( "",index++, "Post Mix Mute Reverb", "Preset", true, "", [
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
	], excludeToLast));
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
			triggers : [new MidiXMessage("Chocolate", 1, "PC", 5)],
			excludeToLast : true
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
			triggers : [new MidiXMessage("Chocolate", 1, "PC", 6)],
			excludeToLast : true
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
				GetMidiXActionSetRouting(2)
			],
			color: "red",
			triggers: [
				new MidiXMessage("FromReaper", 1, "CC", 1, 127, "StateOn"),
				new MidiXMessage("FromReaper", 1, "CC", 1, 0, "StateOff")
			],
			excludeToLast : true
		});
	//23
	page.items.push(
		{
			id: index++,
			name: "ExpWowEngaged",
			type: "Preset",
			color: "blue",
			actions : [],
			excludeToLast : true
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
					conditionnalLinkButtons : [GetMidiXLinkButtonByIdentifier("DelayMod", null, "On", "MustBe")]
				}/*,
				{
					id : 1,
					name : "Unmute Usb 3 to Full for Delay Mod",
					description : "Unmute USB3 if Delay Mod",
					event : "Any",
					action : "Midi",
					message : new MidiXMessage("Reaper", 1, "CC", 45, 0),	//POST Mute Full Input USB3
					conditionnalLinkButtons : [GetMidiXLinkButtonByIdentifier("Delay Mod", null, "Off", "MustBe")]
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
			],
			excludeToLast : true
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
			],
			excludeToLast : true
		});
	//26
	page.items.push(new MidiXItem( "",index++, "Pan", "Preset", false, "EXP1", [
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
	], "orange", [new MidiXMessage("FromReaper", 1, "CC", 40, null, "Expression")], excludeToLast));
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
			],
			excludeToLast : true
		});
	page.items.push(GetButtonByIdentifier("Tap", index++));
	page.nbButtons = index;
	return page;
}
function GetButtonForMixGuitarRig(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByIdentifier("Reverse", 		null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("GrainDelay", 	null, state, operator));
	list.push(GetMidiXLinkButtonByIdentifier("ChipFlair", 	null, state, operator)); 
	return list;
}
function GetButtonForMixGojira(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByIdentifier("DelayGojira", 	null, state, operator)); //Delay Gojira
	list.push(GetMidiXLinkButtonByIdentifier("Shimmer", 	null, state, operator)); //Reverb Gojira (Shimmer)
	return list;
}
function GetButtonForMixRabae(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByIdentifier("DelayRabae", 	null, state, operator)); //Delay Rabea
	list.push(GetMidiXLinkButtonByIdentifier("ReverbRabae", null, state, operator)); //Reverb Rabae (Freeze)
	return list;
}
function GetButtonForMixReverb(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByIdentifier("ReverbVahala", null, state, operator)); //Reverb
	return list;
}
function GetButtonForMix(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByIdentifier("Shimmer", null, state, operator)); //Reverb Gojira (Shimmer)
	list.push(GetMidiXLinkButtonByIdentifier("ReverbVahala", null, state, operator)); //Reverb	
	list.push(GetMidiXLinkButtonByIdentifier("DelayGojira", null, state, operator)); //Delay Gojira
	list.push(GetMidiXLinkButtonByIdentifier("Portal", null, state, operator)); //Portal
	list.push(GetMidiXLinkButtonByIdentifier("Reverse", null, state, operator)); //Reverse
	list.push(GetMidiXLinkButtonByIdentifier("DelayRabae", null, state, operator)); //Delay Rabea
	list.push(GetMidiXLinkButtonByIdentifier("ReverbRabae", null, state, operator)); //Reverb Rabae (Freeze)
	list.push(GetMidiXLinkButtonByIdentifier("GrainDelay", null, state, operator)); //Grain Delay
	list.push(GetMidiXLinkButtonByIdentifier("ChipFlair", null, state, operator)); //Chip Flair
	
	return list;
}
function GetButtonForFullMix(state, operator)
{
	var list = [];
	list.push(GetMidiXLinkButtonByIdentifier("Tremolo", null, state, operator)); // Tremolo
	list.push(GetMidiXLinkButtonByIdentifier("TremoloSoft", null, state, operator)); // Tremolo Soft
	list.push(GetMidiXLinkButtonByIdentifier("RingArp", null, state, operator)); // Ring Arp
	list.push(GetMidiXLinkButtonByIdentifier("Filter", null, state, operator)); // Filter
	list.push(GetMidiXLinkButtonByIdentifier("DrumPad", null, state, operator)); // Drum Pad
	list.push(GetMidiXLinkButtonByIdentifier("Glisten", null, state, operator)); // Glisten
	list.push(GetMidiXLinkButtonByIdentifier("ShinyRoads", null, state, operator)); // Shiny Roads
	list.push(GetMidiXLinkButtonByIdentifier("Gramophone", null, state, operator)); // Gramophone	
	list.push(GetMidiXLinkButtonByIdentifier("Guillotine", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("Fracture", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("WuwChaCha", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("Vinyl", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("LooperRec1", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("LooperRec2", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("LooperRec3", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("LooperRec4", null, state, operator)); 
	list.push(GetMidiXLinkButtonByIdentifier("Love", null, state, operator)); 
	return list;
}
function GetButtonForPre(state, operator)
{
	var list = [];	
	list.push(GetMidiXLinkButtonByIdentifier("Wha", null, state, operator)); //Wha On/Off
	list.push(GetMidiXLinkButtonByIdentifier("WowGojira", null, state, operator)); //Wow
	list.push(GetMidiXLinkButtonByIdentifier("ExpWowEngaged", null, state, operator)); //ExpWowEngaged
	list.push(GetMidiXLinkButtonByIdentifier("OctaverGojira", null, state, operator)); //Octaver	
	list.push(GetMidiXLinkButtonByIdentifier("FuzzGojira", null, state, operator)); //Fuzz
	list.push(GetMidiXLinkButtonByIdentifier("RatGojira", null, state, operator)); //Rat
	//list.push(GetMidiXLinkButtonByIdentifier("Comp", null, state, operator)); //Comp
	list.push(GetMidiXLinkButtonByIdentifier("OctaverRabae", null, state, operator)); //Octaver Rabae
	list.push(GetMidiXLinkButtonByIdentifier("FuzzRabae", null, state, operator)); //Fuzz Rabae
	list.push(GetMidiXLinkButtonByIdentifier("OverdriveRabae", null, state, operator)); //Overdrive Rabae
	list.push(GetMidiXLinkButtonByIdentifier("SynthPre", null, state, operator)); //Synth Pre
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
function AddButtonToPage(page, id, identifier, color)
{	
	var button = GetButtonByIdentifier(identifier, id);	
	button.color = color;
	button.id = id;
	page.items.push(button);
}
function GetSimpleFxButton(identifier, index, cc, name, addRouting, color, addActions, addTriggers, addbuttonsInside, midiChannel, excludeToLastParam)
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
		identifier : identifier,
		id: index,
		name: name,
		type: "Preset",
		actions: actions,
		color: color!=undefined ? color : colors[index++],
		triggers: triggers,
		buttonsInside : addbuttonsInside != undefined ? addbuttonsInside : [],
		excludeToLast : excludeToLastParam != undefined ? excludeToLastParam : false
	};
}
function GetMineProfile() {
	
	var profile = new Profile(0, "Mine");
	profile.Pages.push(GetPageTool(profile));	

	pagesConfigurations.forEach((page) =>{
		profile.Pages.push(GetPageButtonConfiguration(page));
	});

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
	try{

	
		InitApp();	
	}
	catch(e)
	{
		console.log(e);
	}
};