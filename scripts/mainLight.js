function GetLightProfile()
{
	var profile = new Profile(1, "Light");
	
	profile.Pages.push(GetPageLightAPC1(profile));
	profile.Pages.push(GetPageLightAPC2(profile));
	var p = GetPageMidiToSweetlight(profile);
	p.visible = false;
	profile.Pages.push(p);
	profile.Pages.push(GetPageLightAPC3(profile));
	profile.Pages.forEach((page)=>
	{
		page.ExpToHide = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
	});

	profile.ButtonsTrigger.push(new MidiXButton(0 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 56)]));
    profile.ButtonsTrigger.push(new MidiXButton(1 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 57)]));
    profile.ButtonsTrigger.push(new MidiXButton(2 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 58)]));
    profile.ButtonsTrigger.push(new MidiXButton(3 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 59)]));
    profile.ButtonsTrigger.push(new MidiXButton(4 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 60)]));
    profile.ButtonsTrigger.push(new MidiXButton(5 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 61)]));
    profile.ButtonsTrigger.push(new MidiXButton(6 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 62)]));
    profile.ButtonsTrigger.push(new MidiXButton(7 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 63)]));
    profile.ButtonsTrigger.push(new MidiXButton(8 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 112)]));
    profile.ButtonsTrigger.push(new MidiXButton(9 , [new MidiXMessage("APC Buttons", 1, "NoteOn", 48)]));
    profile.ButtonsTrigger.push(new MidiXButton(10, [new MidiXMessage("APC Buttons", 1, "NoteOn", 49)]));
    profile.ButtonsTrigger.push(new MidiXButton(11, [new MidiXMessage("APC Buttons", 1, "NoteOn", 50)]));
    profile.ButtonsTrigger.push(new MidiXButton(12, [new MidiXMessage("APC Buttons", 1, "NoteOn", 51)]));
    profile.ButtonsTrigger.push(new MidiXButton(13, [new MidiXMessage("APC Buttons", 1, "NoteOn", 52)]));
    profile.ButtonsTrigger.push(new MidiXButton(14, [new MidiXMessage("APC Buttons", 1, "NoteOn", 53)]));
    profile.ButtonsTrigger.push(new MidiXButton(15, [new MidiXMessage("APC Buttons", 1, "NoteOn", 54)]));
    profile.ButtonsTrigger.push(new MidiXButton(16, [new MidiXMessage("APC Buttons", 1, "NoteOn", 55)]));
    profile.ButtonsTrigger.push(new MidiXButton(17, [new MidiXMessage("APC Buttons", 1, "NoteOn", 113)]));
    profile.ButtonsTrigger.push(new MidiXButton(18, [new MidiXMessage("APC Buttons", 1, "NoteOn", 40)]));
    profile.ButtonsTrigger.push(new MidiXButton(19, [new MidiXMessage("APC Buttons", 1, "NoteOn", 41)]));
    profile.ButtonsTrigger.push(new MidiXButton(20, [new MidiXMessage("APC Buttons", 1, "NoteOn", 42)]));
    profile.ButtonsTrigger.push(new MidiXButton(21, [new MidiXMessage("APC Buttons", 1, "NoteOn", 43)]));
    profile.ButtonsTrigger.push(new MidiXButton(22, [new MidiXMessage("APC Buttons", 1, "NoteOn", 44)]));
    profile.ButtonsTrigger.push(new MidiXButton(23, [new MidiXMessage("APC Buttons", 1, "NoteOn", 45)]));
    profile.ButtonsTrigger.push(new MidiXButton(24, [new MidiXMessage("APC Buttons", 1, "NoteOn", 46)]));
    profile.ButtonsTrigger.push(new MidiXButton(25, [new MidiXMessage("APC Buttons", 1, "NoteOn", 47)]));
    profile.ButtonsTrigger.push(new MidiXButton(26, [new MidiXMessage("APC Buttons", 1, "NoteOn", 114)]));
    profile.ButtonsTrigger.push(new MidiXButton(27, [new MidiXMessage("APC Buttons", 1, "NoteOn", 32)]));
    profile.ButtonsTrigger.push(new MidiXButton(28, [new MidiXMessage("APC Buttons", 1, "NoteOn", 33)]));
    profile.ButtonsTrigger.push(new MidiXButton(29, [new MidiXMessage("APC Buttons", 1, "NoteOn", 34)]));
    profile.ButtonsTrigger.push(new MidiXButton(30, [new MidiXMessage("APC Buttons", 1, "NoteOn", 35)]));
    profile.ButtonsTrigger.push(new MidiXButton(31, [new MidiXMessage("APC Buttons", 1, "NoteOn", 36)]));
    profile.ButtonsTrigger.push(new MidiXButton(32, [new MidiXMessage("APC Buttons", 1, "NoteOn", 37)]));
    profile.ButtonsTrigger.push(new MidiXButton(33, [new MidiXMessage("APC Buttons", 1, "NoteOn", 38)]));
    profile.ButtonsTrigger.push(new MidiXButton(34, [new MidiXMessage("APC Buttons", 1, "NoteOn", 39)]));
    profile.ButtonsTrigger.push(new MidiXButton(35, [new MidiXMessage("APC Buttons", 1, "NoteOn", 115)]));
    profile.ButtonsTrigger.push(new MidiXButton(36, [new MidiXMessage("APC Buttons", 1, "NoteOn", 24)]));
    profile.ButtonsTrigger.push(new MidiXButton(37, [new MidiXMessage("APC Buttons", 1, "NoteOn", 25)]));
    profile.ButtonsTrigger.push(new MidiXButton(38, [new MidiXMessage("APC Buttons", 1, "NoteOn", 26)]));
    profile.ButtonsTrigger.push(new MidiXButton(39, [new MidiXMessage("APC Buttons", 1, "NoteOn", 27)]));
    profile.ButtonsTrigger.push(new MidiXButton(40, [new MidiXMessage("APC Buttons", 1, "NoteOn", 28)]));
    profile.ButtonsTrigger.push(new MidiXButton(41, [new MidiXMessage("APC Buttons", 1, "NoteOn", 29)]));
    profile.ButtonsTrigger.push(new MidiXButton(42, [new MidiXMessage("APC Buttons", 1, "NoteOn", 30)]));
    profile.ButtonsTrigger.push(new MidiXButton(43, [new MidiXMessage("APC Buttons", 1, "NoteOn", 31)]));
    profile.ButtonsTrigger.push(new MidiXButton(44, [new MidiXMessage("APC Buttons", 1, "NoteOn", 116)]));
    profile.ButtonsTrigger.push(new MidiXButton(45, [new MidiXMessage("APC Buttons", 1, "NoteOn", 16)]));
    profile.ButtonsTrigger.push(new MidiXButton(46, [new MidiXMessage("APC Buttons", 1, "NoteOn", 17)]));
    profile.ButtonsTrigger.push(new MidiXButton(47, [new MidiXMessage("APC Buttons", 1, "NoteOn", 18)]));
    profile.ButtonsTrigger.push(new MidiXButton(48, [new MidiXMessage("APC Buttons", 1, "NoteOn", 19)]));
    profile.ButtonsTrigger.push(new MidiXButton(49, [new MidiXMessage("APC Buttons", 1, "NoteOn", 20)]));
    profile.ButtonsTrigger.push(new MidiXButton(50, [new MidiXMessage("APC Buttons", 1, "NoteOn", 21)]));
    profile.ButtonsTrigger.push(new MidiXButton(51, [new MidiXMessage("APC Buttons", 1, "NoteOn", 22)]));
    profile.ButtonsTrigger.push(new MidiXButton(52, [new MidiXMessage("APC Buttons", 1, "NoteOn", 23)]));
    profile.ButtonsTrigger.push(new MidiXButton(53, [new MidiXMessage("APC Buttons", 1, "NoteOn", 117)]));
    profile.ButtonsTrigger.push(new MidiXButton(54, [new MidiXMessage("APC Buttons", 1, "NoteOn", 8)]));
    profile.ButtonsTrigger.push(new MidiXButton(55, [new MidiXMessage("APC Buttons", 1, "NoteOn", 9)]));
    profile.ButtonsTrigger.push(new MidiXButton(56, [new MidiXMessage("APC Buttons", 1, "NoteOn", 10)]));
    profile.ButtonsTrigger.push(new MidiXButton(57, [new MidiXMessage("APC Buttons", 1, "NoteOn", 11)]));
    profile.ButtonsTrigger.push(new MidiXButton(58, [new MidiXMessage("APC Buttons", 1, "NoteOn", 12)]));
    profile.ButtonsTrigger.push(new MidiXButton(59, [new MidiXMessage("APC Buttons", 1, "NoteOn", 13)]));
    profile.ButtonsTrigger.push(new MidiXButton(60, [new MidiXMessage("APC Buttons", 1, "NoteOn", 14)]));
    profile.ButtonsTrigger.push(new MidiXButton(61, [new MidiXMessage("APC Buttons", 1, "NoteOn", 15)]));
    profile.ButtonsTrigger.push(new MidiXButton(62, [new MidiXMessage("APC Buttons", 1, "NoteOn", 118)]));
    profile.ButtonsTrigger.push(new MidiXButton(63, [new MidiXMessage("APC Buttons", 1, "NoteOn", 0)]));
    profile.ButtonsTrigger.push(new MidiXButton(64, [new MidiXMessage("APC Buttons", 1, "NoteOn", 1)]));
    profile.ButtonsTrigger.push(new MidiXButton(65, [new MidiXMessage("APC Buttons", 1, "NoteOn", 2)]));
    profile.ButtonsTrigger.push(new MidiXButton(66, [new MidiXMessage("APC Buttons", 1, "NoteOn", 3)]));
    profile.ButtonsTrigger.push(new MidiXButton(67, [new MidiXMessage("APC Buttons", 1, "NoteOn", 4)]));
    profile.ButtonsTrigger.push(new MidiXButton(68, [new MidiXMessage("APC Buttons", 1, "NoteOn", 5)]));
    profile.ButtonsTrigger.push(new MidiXButton(69, [new MidiXMessage("APC Buttons", 1, "NoteOn", 6)]));
    profile.ButtonsTrigger.push(new MidiXButton(70, [new MidiXMessage("APC Buttons", 1, "NoteOn", 7)]));
    profile.ButtonsTrigger.push(new MidiXButton(71, [new MidiXMessage("APC Buttons", 1, "NoteOn", 119)]));
    profile.ButtonsTrigger.push(new MidiXButton(72, [new MidiXMessage("APC Buttons", 1, "NoteOn", 100)]));
    profile.ButtonsTrigger.push(new MidiXButton(73, [new MidiXMessage("APC Buttons", 1, "NoteOn", 101)]));
    profile.ButtonsTrigger.push(new MidiXButton(74, [new MidiXMessage("APC Buttons", 1, "NoteOn", 102)]));
    profile.ButtonsTrigger.push(new MidiXButton(75, [new MidiXMessage("APC Buttons", 1, "NoteOn", 103)]));
    profile.ButtonsTrigger.push(new MidiXButton(76, [new MidiXMessage("APC Buttons", 1, "NoteOn", 104)]));
    profile.ButtonsTrigger.push(new MidiXButton(77, [new MidiXMessage("APC Buttons", 1, "NoteOn", 105)]));
    profile.ButtonsTrigger.push(new MidiXButton(78, [new MidiXMessage("APC Buttons", 1, "NoteOn", 106)]));
    profile.ButtonsTrigger.push(new MidiXButton(79, [new MidiXMessage("APC Buttons", 1, "NoteOn", 107)]));
    profile.ButtonsTrigger.push(new MidiXButton(80, [new MidiXMessage("APC Buttons", 1, "NoteOn", 122)]));

	//profile.Devices.push(new MidiXDevice(0, "Sweetlight", "", "\\\\?\\SWD#MMDEVAPI#MIDII_F507CB26.P_0000#{6dc23320-ab33-4ce4-80d4-bbb3ebbf2814}"));//, "MidiXXXSweetlight", "MidiXXXSweetlight"));
	profile.Devices.push(new MidiXDevice(0, "Sweetlight", "input-2", "output-3"));//, "MidiXXXSweetlight", "MidiXXXSweetlight"));
	profile.Devices.push(new MidiXDevice(1, "APC Buttons", "input-0", "output-1"));//, "APC mini mk2 Control", "PC mini mk2 Control"));
	profile.Devices.push(new MidiXDevice(2, "APC Controls", "", "", "APC mini mk2 Notes", "APC mini mk2 Notes"));

	profile.Expressions = [
		new MidiXExpression(0, "EXP 1", new MidiXMessage("APC Buttons", 1, "CC", 48)),
		new MidiXExpression(1, "EXP 2", new MidiXMessage("APC Buttons", 1, "CC", 49)),
		new MidiXExpression(2, "EXP 3", new MidiXMessage("APC Buttons", 1, "CC", 50)),
		new MidiXExpression(3, "EXP 4", new MidiXMessage("APC Buttons", 1, "CC", 51)),
		new MidiXExpression(4, "EXP 5", new MidiXMessage("APC Buttons", 1, "CC", 52)),
		new MidiXExpression(5, "EXP 6", new MidiXMessage("APC Buttons", 1, "CC", 53)),
		new MidiXExpression(6, "EXP 7", new MidiXMessage("APC Buttons", 1, "CC", 54)),
		new MidiXExpression(7, "EXP 8", new MidiXMessage("APC Buttons", 1, "CC", 55)),
		new MidiXExpression(8, "EXP 9", new MidiXMessage("APC Buttons", 1, "CC", 56))

	];

	//SetPagesSummary(profile);

	profile.Groups = [""];
	return profile;
}
function GetPageLightAPC1(profile) {
	idPage = profile.Pages.length;
	var page = new MidiXPage(idPage, (profile.Pages.length) + " - Controls", true,
		[],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, new MidiXLinkButton(idPage, 74, "Toggle"))
		]);
	page.nbButtonsByLine = 9;
	
	
	var index = -1;
	// Ligne 1 Blinder
	var indexNoteMidi = 1;
	{
	page.items.push(
		{
			id: ++index,
			name: "Blinder Snake Hard",
			type: "Preset",
			group: "Blinder",
			color: "lightorange",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]


		});
	page.items.push(
		{
			id: ++index,
			name: "Blinder Snake Soft",
			type: "Preset",
			group: "Blinder",
			color: "lightorange",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Blinder Random",
			type: "Preset",
			group: "Blinder",
			color: "lightorange",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Blinder Random Soft",
			type: "Preset",
			group: "Blinder",
			color: "lightorange",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Blinder Random Light",
			type: "Preset",
			group: "Blinder",
			color: "lightorange",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Big Flash",
			type: "Momentary",
			group: "",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Flash",
			type: "Momentary",
			group: "",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Mute",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	}
	// Ligne 2 SPOT
	{
		var indexNoteMidiSpotSlow = 110;
		var buttonSpotSlow = 18;
	page.items.push(
		{
			id: ++index,
			name: "Spot",
			type: "Preset",
			group: "SPOT",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				//new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				new MidiXAction(2, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 127),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")]),
				//new MidiXAction(3, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 0),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")])
			]
		});indexNoteMidi++;indexNoteMidiSpotSlow++;
	page.items.push(
		{
			id: ++index,
			name: "Spot",
			type: "Preset",
			group: "SPOT",
			color: "red",
			actions: [
				new MidiXAction(0, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				//new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				new MidiXAction(2, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 127),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")]),
				//new MidiXAction(3, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 0),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")])
			]
		});indexNoteMidi++;indexNoteMidiSpotSlow++;
	page.items.push(
		{
			id: ++index,
			name: "Spot",
			type: "Preset",
			group: "SPOT",
			color: "violet",
			actions: [
				new MidiXAction(0, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				//new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				new MidiXAction(2, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 127),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")]),
				//new MidiXAction(3, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 0),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")])
			]
		});indexNoteMidi++;indexNoteMidiSpotSlow++;
	page.items.push(
		{
			id: ++index,
			name: "Spot",
			type: "Preset",
			group: "SPOT",
			color: "turquoise",
			actions: [
				new MidiXAction(0, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				//new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				new MidiXAction(2, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 127),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")]),
				//new MidiXAction(3, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 0),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")])
			]
		});indexNoteMidi++;indexNoteMidiSpotSlow++;
	page.items.push(
		{
			id: ++index,
			name: "Spot",
			type: "Preset",
			group: "SPOT",
			color: "blue",
			actions: [
				new MidiXAction(0, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				//new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				new MidiXAction(2, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 127),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")]),
				//new MidiXAction(3, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 0),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")])
			]
		});indexNoteMidi++;indexNoteMidiSpotSlow++;
	page.items.push(
		{
			id: ++index,
			name: "Spot",
			type: "Preset",
			group: "SPOT",
			color: "lightorange",
			actions: [
				new MidiXAction(0, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				//new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				new MidiXAction(2, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 127),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")]),
				//new MidiXAction(3, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 0),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")])
			]
		});indexNoteMidi++;indexNoteMidiSpotSlow++;
	page.items.push(
		{
			id: ++index,
			name: "Spot",
			type: "Preset",
			group: "SPOT",
			color: "green",
			actions: [
				new MidiXAction(0, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				//new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0),			null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "Off", "MustBe")]),
				new MidiXAction(2, "", "OnPress", 	"Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 127),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")]),
				//new MidiXAction(3, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidiSpotSlow, 0),	null, null, null, null, null, null, null, null, null, [new MidiXLinkButton(0, buttonSpotSlow, null, "On", "MustBe")])
			]
		});indexNoteMidi++;indexNoteMidiSpotSlow++;
	
	page.items.push(
		{
			id: ++index,
			name: "Strob Spot",
			type: "Momentary",
			group: "",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Mute",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	
	}
	// Ligne 3 SPOT Mouvement
	{
	page.items.push(
		{
			id: ++index,
			name: "Hard/Smooth",
			type: "Preset",
			group: "",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Back",
			type: "Preset",
			group: "SpotMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Front",
			type: "Preset",
			group: "SpotMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Rotate Simple",
			type: "Preset",
			group: "SpotMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Rotate Snake",
			type: "Preset",
			group: "SpotMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Hard",
			type: "Preset",
			group: "SpotMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Smooth",
			type: "Preset",
			group: "SpotMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});	
	
	page.items.push(
		{
			id: ++index,
			name: "Strob Hybrid Beam",
			type: "Momentary",
			group: "",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Momentary",
			group: "",
			color: "",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	}
	// Ligne 4 Hybrid Couleur
	{
		page.items.push(
			{
				id: ++index,
				name: "HybridRVB",
				type: "Preset",
				group: "HybridRVB",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Blanc"
			});indexNoteMidi++;			
		page.items.push(
			{
				id: ++index,
				name: "HybridRVB",
				type: "Preset",
				group: "HybridRVB",
				color: "red",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Rouge"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "HybridRVB",
				type: "Preset",
				group: "HybridRVB",
				color: "violet",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Mauve"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "HybridRVB",
				type: "Preset",
				group: "HybridRVB",
				color: "turquoise",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Cyan"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "HybridRVB",
				type: "Preset",
				group: "HybridRVB",
				color: "blue",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Bleu"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "HybridRVB Release",
				type: "Preset",
				group: "HybridRVB",
				color: "black",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Full",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Full"
			});indexNoteMidi++;
		
		page.items.push(
			{
				id: ++index,
				name: "Strob Hybrid RVB",
				type: "Momentary",
				group: "",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Mute",
				type: "Momentary",
				group: "",
				color: "black",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		
	}
	// Ligne 5 Hybrid Couleur mouvement
	{
		page.items.push(
			{
				id: ++index,
				name: "Down",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Vertical Down"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Up",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Vertical Up"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Ping Pong",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				],
				description : "Vertical Ping Pong"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Stack",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Mirror",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Deploy",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Swipe",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});	
		page.items.push(
			{
				id: ++index,
				name: "Swipe Ping Pong",
				type: "Preset",
				group: "HybridRVBMouvement",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Momentary",
				group: "",
				color: "",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		
	}
	// Ligne 6 Hybrid Beam mouvement
	{
		page.items.push(
			{
				id: ++index,
				name: "Down",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				],
				description : "Vertical Down"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Up",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				],
				description : "Vertical Up"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Ping Pong",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				],
				description : "Vertical Ping Pong"
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Stack",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				],
				description : ""
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Mirror",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				],
				description : ""
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Deploy",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				],
				description : ""
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Swipe",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0))
				],
				description : ""
			});	indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Swipe Ping Pong",
				type: "Preset",
				group: "HybridBeamMouvement",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 0))
				],
				description : ""
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Mute",
				type: "Momentary",
				group: "",
				color: "black",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		
	}
	// Ligne 7  Lyre Couleur
	{
	page.items.push(
		{
			id: ++index,
			name: "Lyre",
			type: "Preset",
			group: "Lyre",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Lyre",
			type: "Preset",
			group: "Lyre",
			color: "red",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Lyre",
			type: "Preset",
			group: "Lyre",
			color: "violet",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Lyre",
			type: "Preset",
			group: "Lyre",
			color: "lightorange",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Lyre",
			type: "Preset",
			group: "Lyre",
			color: "green",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Lyre",
			type: "Preset",
			group: "Lyre",
			color: "turquoise",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Lyre",
			type: "Preset",
			group: "Lyre",
			color: "blue",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Strob Lyre",
			type: "Momentary",
			group: "",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Mute",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	}
	// Ligne 8 Lyre Mouvement
	{
	page.items.push(
		{
			id: ++index,
			name: "Droit",
			type: "Preset",
			group: "LyreMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Front",
			type: "Preset",
			group: "LyreMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Waves",
			type: "Preset",
			group: "LyreMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Loop",
			type: "Preset",
			group: "LyreMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Random",
			type: "Preset",
			group: "LyreMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Spin",
			type: "Preset",
			group: "LyreMouvement",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Shutter Hard",
			type: "Preset",
			group: "LyreShutter",
			color: "turquoise",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Shutter Smooth",
			type: "Preset",
			group: "LyreShutter",
			color: "turquoise",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Freeze",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	}
	// Ligne 9 Functions
	{
	page.items.push(
		{
			id: ++index,
			name: "Rec",
			type: "Momentary",
			group: "",
			color: "red",
			actions: [
				new MidiXAction(0, "", "OnPress", "PrepareMacro")
			]
		});indexNoteMidi++;
	page.items.push(
		{
			id: ++index,
			name: "Play",
			type: "Momentary",
			group: "",
			color: "green",
			actions: [
				new MidiXAction(0, "", "OnPress", "PlayMacro")
			]
		});indexNoteMidi++;
		var indexAction = 0;
	page.items.push(
		{
			id: ++index,
			name: "Init color",
			type: "Preset",
			group: "",
			color: "",
			excludeRegisterInMacro : true,
			actions: [
				//ligne 8
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(0 , "white", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(1 , "white", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(2 , "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(3 , "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(4 , "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(5 , "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(6 , "cyan", 			"blink")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(7 , "cyan", 			"pulse")),
				//ligne 7
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(8 , "white",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(9 , "red", 	 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(10, "violet", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(11, "cyan",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(12, "blue",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(13, "yellow", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(14, "green",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(15, "white",  			"blinkfast")),
				//ligne 6
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(16, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(17, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(18, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(19, "black", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(20, "black", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(21, "black", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(22, "white", 			"blink")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(23, "white", 			"blink")),
				//ligne 5
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(24, "cyan", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(25, "cyan", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(26, "cyan", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(27, "black", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(28, "black", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(29, "black", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(30, "cyan", 			"blink")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(31, "cyan", 			"blink")),
				//ligne 4
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(32, "white",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(33, "red", 	 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(34, "violet", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(35, "cyan",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(36, "blue",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(37, "black", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(38, "white",  			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(39, "white",  			"blinkfast")),
				//ligne 3
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(40, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(41, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(42, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(43, "white", 			"blink")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(44, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(45, "white", 			"blink")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(46, "white", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(47, "white", 			"blinkfast")),
				//ligne 2
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(48, "white", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(49, "red", 				"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(50, "violet", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(51, "cyan", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(52, "blue", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(53, "yellow", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(54, "green", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(55, "white", 			"blinkfast")),
				//ligne 1
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(56, "yellow", 			"blink")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(57, "yellow", 			"pulse")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(58, "yellow", 			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(59, "yellow", 			"pulsefast")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(60, "yellow", 			"pulsefast")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(61, "black",			"full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(62, "yellow", 			"blink")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(63, "yellow", 			"blink")),

				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 100, 3)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 101, 3)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 102, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 103, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 104, 3)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 105, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 106, 3)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 107, 3)),

				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 112, 127)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 113, 127)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 114, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 115, 127)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 116, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 117, 127)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 118, 127)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 119, 127))

			]
		});indexNoteMidi++;
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Smoke",
			type: "Momentary",
			group: "",
			color: "red",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "<=",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(0, "", "OnPress", "PreviousPage" )
			]
		});indexNoteMidi++;
	page.items.push(
		{
			id: ++index,
			name: "=>",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [new MidiXAction(0, "", "OnPress", "NextPage" )]
		});indexNoteMidi++;

	var indexActionMute = 0;
	page.items.push(
		{
			id: ++index,
			name: "Mute All",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(indexActionMute++, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(indexActionMute++, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0)),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 0, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 1, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 2, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 3, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 4, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 9, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 10, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 11, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 12, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 13, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 14, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 15, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 18, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 19, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 20, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 21, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 22, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 23, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 24, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 27, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 28, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 29, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 30, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 31, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 32, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 33, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 36, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 37, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 38, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 39, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 40, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 41, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 42, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 45, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 46, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 47, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 48, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 49, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 50, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 51, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 52, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 54, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 55, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 56, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 57, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 58, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 59, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 60, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 61, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 63, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 64, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 65, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 66, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 67, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 68, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 69, "StateOff")),
				new MidiXAction(indexActionMute++, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 70, "StateOff"))

			]
		});
	}
	// Ligne 10 Faders Infos
	{
		var minExp = 28;
	page.items.push(
		{
			id: ++index,
			name: "Speed Blinder",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "Speed Blinder",
					event: "OnPress",
					action: "EXP",
					idExp: 0,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 1),
					expMin: minExp,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Spot",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "Speed Speed Spot",
					event: "OnPress",
					action: "EXP",
					idExp: 1,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 2),
					expMin: minExp,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Hybrid RGB",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "Speed Hybrid RGB",
					event: "OnPress",
					action: "EXP",
					idExp: 2,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 3),
					expMin: minExp,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Hybrid Beam",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "Speed Hybrid Beam",
					event: "OnPress",
					action: "EXP",
					idExp: 3,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 4),
					expMin: minExp,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Pan Lyre",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "-",
					event: "OnPress",
					action: "EXP",
					idExp: 4,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 5),
					expMin: 0,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Light Lyre",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "-",
					event: "OnPress",
					action: "EXP",
					idExp: 5,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 6),
					expMin: minExp,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Lyre Rotate",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "Speed Light Lyre",
					event: "OnPress",
					action: "EXP",
					idExp: 6,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 7),
					expMin: 0,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Move Lyre",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "Speed Lyre Rotate",
					event: "OnPress",
					action: "EXP",
					idExp: 7,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 8),
					expMin: minExp,
					expMax: 127		
				}
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Master Dimmer",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				{
					id: 0,
					name: "Speed Move Lyre",
					event: "OnPress",
					action: "EXP",
					idExp: 8,
					valueExp: 0,
					message: new MidiXMessage("Sweetlight", 16, "CC", 9),
					expMin: 0,
					expMax: 70		
				}
			]
		});
	}
	//#endregion
	return page;
}
function GetPageLightAPC2(profile) {
	var idPage = profile.Pages.length;
	var page = new MidiXPage(idPage, (profile.Pages.length) + " - Options 2", true,
		[],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, new MidiXLinkButton(idPage, 74, "Toggle"))
		]);
	page.nbButtonsByLine = 9;
	
	var index = -1;
	// Ligne 1 Blinder
	{
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: [
				
			]
		});
	}
	// Ligne 2 SPOT
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		}
	// Ligne 3 SPOT Mouvement
	{
		page.items.push(
			{
				id: ++index,
				name: "Hybrid Rainbow",
				type: "Preset",
				group: "HybridRVBScene",
				color: "White",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Hybrid Red Violet",
				type: "Preset",
				group: "HybridRVBScene",
				color: "red",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 0))
				]
			});
		
		page.items.push(
			{
				id: ++index,
				name: "Hybrid Cyan Violet",
				type: "Preset",
				group: "HybridRVBScene",
				color: "turquoise",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Hybrid Blue Cyan",
				type: "Preset",
				group: "HybridRVBScene",
				color: "blue",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Hybrid Equalizer",
				type: "Preset",
				group: "HybridRVBScene",
				color: "white",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Hybrid Waves",
				type: "Preset",
				group: "HybridRVBScene",
				color: "turquoise",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", index, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		}
	// Ligne 4 Hybrid Couleur
	{
		page.items.push(
			{
				id: ++index,
				name: "Offset 0",
				type: "Preset",
				group: "HybridRVBOffset",
				color: "blue",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Offset 2",
				type: "Preset",
				group: "HybridRVBOffset",
				color: "blue",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Offset 7",
				type: "Preset",
				group: "HybridRVBOffset",
				color: "blue",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Size 1",
				type: "Preset",
				group: "HybridRVBSize",
				color: "turquoise",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Size 4",
				type: "Preset",
				group: "HybridRVBSize",
				color: "turquoise",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Size 7",
				type: "Preset",
				group: "HybridRVBSize",
				color: "turquoise",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Fade",
				type: "Preset",
				group: "HybridRVBFade",
				color: "violet",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Overflow",
				type: "Preset",
				group: "HybridRVBOverflow",
				color: "red",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridRVB();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		}
	// Ligne 5 Hybrid Couleur mouvement
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
	}
	// Ligne 6 Hybrid Beam mouvement
	{
		page.items.push(
			{
				id: ++index,
				name: "Offset 0",
				type: "Preset",
				group: "HybridBeamOffset",
				color: "red",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Offset 2",
				type: "Preset",
				group: "HybridBeamOffset",
				color: "red",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Offset 7",
				type: "Preset",
				group: "HybridBeamOffset",
				color: "red",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Size 1",
				type: "Preset",
				group: "HybridBeamSize",
				color: "orange",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Size 4",
				type: "Preset",
				group: "HybridBeamSize",
				color: "orange",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Size 7",
				type: "Preset",
				group: "HybridBeamSize",
				color: "orange",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Fade",
				type: "Preset",
				group: "HybridBeamFade",
				color: "pink",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Overflow",
				type: "Preset",
				group: "HybridBeamOverflow",
				color: "violet",
				actions: [
					{
						id:0,
						event :"OnPress",
						conditionnalScript : "HandleHybridBeam();return true;"
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		}
	// Ligne 7  Lyre Couleur
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		}
	// Ligne 8 Lyre Mouvement
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					
				]
			});
		}
	// Ligne 9 Functions
	{
	page.items.push(
		{
			id: ++index,
			name: "",
			type: "Preset",
			group: "",
			color: "",
			excludeRegisterInMacro : true,
			actions: [
				//new MidiXAction(0, "", "Any", "LinkButton", "")
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "",
			type: "Preset",
			group: "",
			color: "",
			excludeRegisterInMacro : true,
			actions: []
		});
		var indexAction = 0;
	page.items.push(
		{
			id: ++index,
			name: "Init color",
			type: "Preset",
			group: "",
			color: "",
			excludeRegisterInMacro : true,
			actions: [
				//ligne 8
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(0 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(1 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(2 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(3 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(4 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(5 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(6 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(7 , "black", "off")),
				//ligne 7
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(8 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(9 , "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(10, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(11, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(12, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(13, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(14, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(15, "black", "off")),
				//ligne 6
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(16, "red", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(17, "red", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(18, "red", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(19, "orange", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(20, "orange", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(21, "orange", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(22, "pink", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(23, "red", "full")),
				//ligne 5
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(24, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(25, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(26, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(27, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(28, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(29, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(30, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(31, "black", "off")),
				//ligne 4				
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(32, "blue", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(33, "blue", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(34, "blue", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(35, "cyan", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(36, "cyan", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(37, "cyan", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(38, "violet", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(39, "red", "full")),
				//ligne 3
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(40,"white", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(41,"red", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(42,"cyan", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(43,"blue", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(44,"white", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(45,"blue", "full")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(46,"black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(47,"black", "off")),
				//ligne 2
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(48, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(49, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(50, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(51, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(52, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(53, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(54, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(55, "black", "off")),
				//ligne 1
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(56, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(57, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(58, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(59, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(60, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(61, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(62, "black", "off")),
				new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(63, "black", "off")),

				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 100, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 101, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 102, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 103, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 104, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 105, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 106, 127)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 107, 127)),

				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 112, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 113, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 114, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 115, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 116, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 117, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 118, 0)),
				new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 119, 0))

			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: []
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: []
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "",
			color: "",
			actions: []
		});
	page.items.push(
		{
			id: ++index,
			name: "<=",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(0, "", "OnPress", "PreviousPage" )
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "=>",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [new MidiXAction(0, "", "OnPress", "NextPage" )]
		});
	page.items.push(
		{
			id: ++index,
			name: "Mute All",
			type: "Momentary",
			group: "",
			color: "black",
			actions: [
				new MidiXAction(0, "", "Any", "LinkButton", null, null, null, new MidiXLinkButton(0, 80, "Toggle"))
			]
		});
	}
	// Ligne 10 Faders Infos
	{
	page.items.push(
		{
			id: ++index,
			name: "Speed Blinder",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Spot",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Hybrid RGB",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Hybrid Beam",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Pan Lyre",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Light Lyre",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Lyre Rotate",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Speed Move Lyre",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "Master Dimmer",
			type: "Preset",
			group: "",
			color: "black",
			active : true,
			actions: [
				
			]
		});
	}
	//#endregion
	return page;
}
function HandleHybridBeam()
{	
	ClickButton(AppData.Pages[2].items.filter((x) =>{return x.name == "Release HybridBeam";})[0]);
	var mouvement = "";
	var butMouv = AppData.Pages[0].items.filter((x) => {return x.group == "HybridBeamMouvement" && x.active === true})[0];
	if(butMouv)
	{
		mouvement = butMouv.description;
	}
	var size = "Size1";
	var fade = AppData.Pages[1].items[51].active === true ? "Fade" : "Full";
	var offset = "Offset0";
	var butOffset = AppData.Pages[1].items.filter((x) => {return x.group == "HybridBeamOffset" && x.active === true;})[0];
	if(butOffset)
	{
		offset = butOffset.name.replace(" ", "");
	}
	var butSize = AppData.Pages[1].items.filter((x) => {return x.group == "HybridBeamSize" && x.active === true;})[0];
	if(butSize)
	{
		size = butSize.name.replace(" ", "");
	}
	var butOverflow = AppData.Pages[1].items.filter((x) => {return x.group == "HybridBeamOverflow" && x.active === true;})[0];
	var overflow = butOverflow ? "virtual28" : "virtual14"
	var name = `HybridBeam - ${mouvement} - ${size} ${fade} ${offset} ${overflow}`;
	var button = AppData.Pages[2].items.filter((x) => {return x.name == name;})[0];
	if(button)
	{
		ClickButton(button);
	}
}
function GetPageLightAPC3(profile) {
	var idPage = profile.Pages.length;
	var page = new MidiXPage(idPage, (profile.Pages.length) + " - Scene", true,
		[],
		//actions
		[
			new MidiXAction(0, "", "OnLoad", "LinkButton", null, null, null, new MidiXLinkButton(idPage, 74, "Toggle"))
		]);
	page.nbButtonsByLine = 9;
	var indexNoteMidi = 1;
	var index = -1;
	// Ligne 1
	{
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "violet",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "violet",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "violet",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "violet",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	page.items.push(
		{
			id: ++index,
			name: "-",
			type: "Preset",
			group: "GlobalScene",
			color: "white",
			actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
				
			]
		});
	}
	// Ligne 2
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "indigo",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "indigo",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "indigo",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "indigo",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
			
	}
	// Ligne 3
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "blue",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "blue",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "blue",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "blue",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
	}
	// Ligne 4
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "turquoise",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "turquoise",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "turquoise",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "turquoise",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
	}
	// Ligne 5
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "green",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "green",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "green",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "green",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
	}
	// Ligne 6
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "orange",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "orange",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "orange",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "orange",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
	}
	// Ligne 7
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "red",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "red",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "red",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "red",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
	}
	// Ligne 8
	{
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "pink",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0)),
				new MidiXAction(2, "", "OnPress", "Midi", GetMidiMessageForColorAPC(0 , "white", 			"full")),
				new MidiXAction(3, "", "OnRelease", "Midi", GetMidiMessageForColorAPC(0 , "white", 			"dimmed"))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "pink",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "pink",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "pink",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "GlobalScene",
				color: "white",
				actions: [
				new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi, 127)),
				new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 11, "NoteOn", indexNoteMidi++, 0))
					
				]
			});
	}
	// Ligne 9 Functions
	{
		page.items.push(
			{
				id: ++index,
				name: "Rec",
				type: "Momentary",
				group: "",
				color: "red",
				actions: [
					new MidiXAction(0, "", "OnPress", "PrepareMacro")
				]
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Play",
				type: "Momentary",
				group: "",
				color: "green",
				actions: [
					new MidiXAction(0, "", "OnPress", "PlayMacro")
				]
			});indexNoteMidi++;
			var indexAction = 0;
		page.items.push(
			{
				id: ++index,
				name: "Init color",
				type: "Preset",
				group: "",
				color: "",
				excludeRegisterInMacro : true,
				actions: [
					//ligne 8
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(0 , "white", 			"dimmed")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(1 , "white", 			"dimmed")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(2 , "white", 			"dimmed")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(3 , "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(4 , "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(5 , "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(6 , "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(7 , "white", 			"full")),
					//ligne 7
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(8 , "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(9 , "white", 	 		"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(10, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(11, "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(12, "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(13, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(14, "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(15, "white",  			"full")),
					//ligne 6
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(16, "white", 			"pulse")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(17, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(18, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(19, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(20, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(21, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(22, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(23, "white", 			"full")),
					//ligne 5
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(24, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(25, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(26, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(27, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(28, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(29, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(30, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(31, "white", 			"full")),
					//ligne 4
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(32, "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(33, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(34, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(35, "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(36, "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(37, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(38, "white",  			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(39, "white",  			"full")),
					//ligne 3
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(40, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(41, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(42, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(43, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(44, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(45, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(46, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(47, "white", 			"full")),
					//ligne 2
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(48, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(49, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(50, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(51, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(52, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(53, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(54, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(55, "white", 			"full")),
					//ligne 1
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(56, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(57, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(58, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(59, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(60, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(61, "white",			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(62, "white", 			"full")),
					new MidiXAction(indexAction++, "", "Any", "Midi", GetMidiMessageForColorAPC(63, "white", 			"full")),
	
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 100, 3)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 101, 3)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 102, 0)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 103, 0)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 104, 3)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 105, 0)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 106, 3)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 107, 3)),
	
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 112, 127)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 113, 127)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 114, 0)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 115, 127)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 116, 0)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 117, 127)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 118, 127)),
					new MidiXAction(indexAction++, "", "Any", "Midi", new MidiXMessage("APC Buttons",1, "NoteOn", 119, 127))
	
				]
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Smoke",
				type: "Momentary",
				group: "",
				color: "red",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "-",
				type: "Preset",
				group: "",
				color: "",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "<=",
				type: "Momentary",
				group: "",
				color: "black",
				actions: [
					new MidiXAction(0, "", "OnPress", "PreviousPage" )
				]
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "=>",
				type: "Momentary",
				group: "",
				color: "black",
				actions: [new MidiXAction(0, "", "OnPress", "NextPage" )]
			});indexNoteMidi++;
		page.items.push(
			{
				id: ++index,
				name: "Mute All",
				type: "Momentary",
				group: "",
				color: "black",
				actions: [
					new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi, 127)),
					new MidiXAction(1, "", "OnRelease", "Midi", new MidiXMessage("Sweetlight", 10, "NoteOn", indexNoteMidi++, 0))
				]
			});
		}
		// Ligne 10 Faders Infos
		{
			var minExp = 28;
		page.items.push(
			{
				id: ++index,
				name: "Speed Blinder",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "Speed Blinder",
						event: "OnPress",
						action: "EXP",
						idExp: 0,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 1),
						expMin: minExp,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Speed Spot",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "Speed Speed Spot",
						event: "OnPress",
						action: "EXP",
						idExp: 1,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 2),
						expMin: minExp,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Speed Hybrid RGB",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "Speed Hybrid RGB",
						event: "OnPress",
						action: "EXP",
						idExp: 2,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 3),
						expMin: minExp,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Speed Hybrid Beam",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "Speed Hybrid Beam",
						event: "OnPress",
						action: "EXP",
						idExp: 3,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 4),
						expMin: minExp,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Pan Lyre",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "-",
						event: "OnPress",
						action: "EXP",
						idExp: 4,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 5),
						expMin: 0,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Speed Light Lyre",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "-",
						event: "OnPress",
						action: "EXP",
						idExp: 5,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 6),
						expMin: minExp,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Speed Lyre Rotate",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "Speed Light Lyre",
						event: "OnPress",
						action: "EXP",
						idExp: 6,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 7),
						expMin: 0,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Speed Move Lyre",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "Speed Lyre Rotate",
						event: "OnPress",
						action: "EXP",
						idExp: 7,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 8),
						expMin: minExp,
						expMax: 127		
					}
				]
			});
		page.items.push(
			{
				id: ++index,
				name: "Master Dimmer",
				type: "Preset",
				group: "",
				color: "black",
				active : true,
				actions: [
					{
						id: 0,
						name: "Speed Move Lyre",
						event: "OnPress",
						action: "EXP",
						idExp: 8,
						valueExp: 0,
						message: new MidiXMessage("Sweetlight", 16, "CC", 9),
						expMin: 0,
						expMax: 70		
					}
				]
			});
		}
	//#endregion
	return page;
}
function HandleHybridRVB()
{	
	ClickButton(AppData.Pages[2].items.filter((x) =>{return x.name == "Release HybridRVB";})[0]);
	var mouvement = "";
	var butMouv = AppData.Pages[0].items.filter((x) => {return x.group == "HybridRVBMouvement" && x.active === true})[0];
	if(butMouv)
	{
		mouvement = butMouv.description;
	}
	
	var color = "";
	var butColor = AppData.Pages[0].items.filter((x) => {return x.group == "HybridRVB" && x.active === true})[0];
	if(butColor)
	{
		color = butColor.description;
	}	
	var size = "Size1";
	var fade = AppData.Pages[1].items[33].active === true ? "Fade" : "Full";
	var offset = "Offset0";
	var butOffset = AppData.Pages[1].items.filter((x) => {return x.group == "HybridRVBOffset" && x.active === true;})[0];
	if(butOffset)
	{
		offset = butOffset.name.replace(" ", "");
	}
	var butSize = AppData.Pages[1].items.filter((x) => {return x.group == "HybridRVBSize" && x.active === true;})[0];
	if(butSize)
	{
		size = butSize.name.replace(" ", "");
	}
	var butOverflow = AppData.Pages[1].items.filter((x) => {return x.group == "HybridRVBOverflow" && x.active === true;})[0];
	var overflow = butOverflow ? "virtual28" : "virtual14"
	var name = `HybridRVB - ${mouvement} ${color} - ${size} ${fade} ${offset} ${overflow}`;
	if(mouvement == "Full")
	{
		name = `Hybrid RVB - Full - ${color}`;
	}
	
	var button = AppData.Pages[2].items.filter((x) => {return x.name == name;})[0];
	
	if(button)
	{
		ClickButton(button);
	}
}