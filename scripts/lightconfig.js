
function GetPageMidiToSweetlight(profile) {
	var index = 0;
	var page = new MidiXPage(profile.Pages.length, (profile.Pages.length) + " - Buttons Live", false, [],
		//actions
		[]);
    
    page.items.push(
    {
        id: 0,
        name: "Release HybridRVB",
        type: "Momentary",
        color : "red",
        actions: [
            new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 0, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "Hybrid RVB - Full - Rouge",
        type: "Momentary",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 1, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "Hybrid RVB - Full - Bleu",
        type: "Momentary",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 2, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "Hybrid RVB - Full - Blanc",
        type: "Momentary",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 3, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "Hybrid RVB - Full - Cyan",
        type: "Momentary",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 4, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "Hybrid RVB - Full - Mauve",
        type: "Momentary",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 5, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 6, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 7, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 8, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 9, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 10, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 11, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 12, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 13, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 14, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 15, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 16, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 17, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 18, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 19, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 20, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 21, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 22, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 23, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 24, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 25, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 26, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 27, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 28, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 29, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 30, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 31, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 32, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 33, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 34, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 35, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 36, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 37, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 38, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 39, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 40, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Rouge - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 41, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 42, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 43, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 44, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 45, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 46, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 47, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 48, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 49, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 50, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 51, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 52, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 53, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 54, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 55, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 56, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 57, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 58, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 59, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 60, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 61, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 62, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 63, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 64, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 65, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 66, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 67, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 68, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 69, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 70, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 71, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 72, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 73, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 74, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 75, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 76, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Rouge - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 77, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 78, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 79, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 80, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 81, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 82, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 83, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 84, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 85, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 86, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 87, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 88, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 89, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 90, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 91, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 92, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 93, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 94, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 95, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 96, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 97, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 98, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 99, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 100, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 101, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 102, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 103, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 104, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 105, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 106, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 107, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 108, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 109, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 110, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 111, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 112, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Rouge - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 113, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 114, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 115, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 116, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 117, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 118, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 119, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 120, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 121, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 122, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 123, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 124, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 125, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 126, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 2, "NoteOn", 127, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 0, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 1, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 2, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 3, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 4, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 5, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 6, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 7, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 8, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 9, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 10, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 11, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 12, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 13, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 14, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 15, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 16, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 17, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 18, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 19, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 20, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Bleu - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 21, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 22, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 23, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 24, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 25, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 26, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 27, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 28, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 29, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 30, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 31, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 32, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 33, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 34, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 35, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 36, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 37, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 38, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 39, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 40, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 41, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 42, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 43, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 44, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 45, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 46, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 47, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 48, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 49, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 50, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 51, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 52, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 53, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 54, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 55, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 56, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Bleu - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 57, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 58, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 59, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 60, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 61, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 62, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 63, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 64, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 65, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 66, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 67, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 68, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 69, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 70, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 71, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 72, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 73, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 74, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 75, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 76, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 77, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 78, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 79, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 80, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 81, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 82, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 83, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 84, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 85, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 86, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 87, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 88, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 89, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 90, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 91, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 92, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Bleu - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 93, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 94, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 95, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 96, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 97, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 98, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 99, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 100, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 101, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 102, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 103, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 104, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 105, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 106, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 107, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 108, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 109, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 110, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 111, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 112, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 113, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 114, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 115, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 116, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 117, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 118, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 119, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 120, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 121, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 122, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 123, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 124, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 125, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 126, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 3, "NoteOn", 127, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 0, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Blanc - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 1, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 2, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 3, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 4, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 5, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 6, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 7, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 8, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 9, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 10, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 11, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 12, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 13, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 14, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 15, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 16, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 17, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 18, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 19, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 20, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 21, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 22, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 23, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 24, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 25, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 26, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 27, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 28, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 29, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 30, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 31, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 32, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 33, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 34, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 35, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 36, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Blanc - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 37, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 38, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 39, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 40, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 41, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 42, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 43, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 44, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 45, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 46, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 47, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 48, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 49, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 50, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 51, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 52, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 53, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 54, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 55, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 56, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 57, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 58, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 59, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 60, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 61, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 62, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 63, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 64, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 65, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 66, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 67, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 68, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 69, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 70, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 71, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 72, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Blanc - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 73, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 74, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 75, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 76, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 77, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 78, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 79, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 80, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 81, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 82, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 83, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 84, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 85, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 86, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 87, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 88, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 89, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 90, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 91, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 92, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 93, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 94, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 95, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 96, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 97, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 98, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 99, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 100, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 101, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 102, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 103, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 104, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 105, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 106, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 107, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 108, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Cyan - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 109, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 110, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 111, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 112, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 113, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 114, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 115, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 116, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 117, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 118, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 119, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 120, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 121, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 122, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 123, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 124, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 125, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 126, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 4, "NoteOn", 127, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 0, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 1, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 2, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 3, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 4, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 5, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 6, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 7, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 8, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 9, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 10, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 11, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 12, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 13, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 14, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 15, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 16, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Cyan - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 17, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 18, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 19, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 20, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 21, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 22, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 23, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 24, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 25, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 26, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 27, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 28, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 29, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 30, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 31, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 32, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 33, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 34, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 35, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 36, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 37, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 38, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 39, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 40, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 41, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 42, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 43, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 44, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 45, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 46, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 47, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 48, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 49, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 50, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 51, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 52, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Cyan - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 53, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 54, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 55, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 56, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 57, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 58, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 59, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 60, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 61, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 62, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 63, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 64, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 65, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 66, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 67, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 68, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 69, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 70, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 71, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 72, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 73, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 74, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 75, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 76, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 77, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 78, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 79, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 80, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 81, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 82, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 83, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 84, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 85, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 86, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 87, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 88, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Down Mauve - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 89, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 90, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 91, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 92, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 93, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 94, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 95, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 96, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 97, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 98, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 99, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 100, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 101, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 102, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 103, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 104, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 105, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 106, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 107, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 108, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 109, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 110, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 111, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 112, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 113, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 114, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 115, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 116, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 117, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 118, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 119, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 120, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 121, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 122, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 123, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 124, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Up Mauve - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 125, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 126, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 5, "NoteOn", 127, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 0, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 1, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 2, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 3, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 4, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 5, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 6, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 7, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 8, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 9, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 10, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 11, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 12, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 13, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 14, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 15, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 16, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 17, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 18, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 19, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 20, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 21, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 22, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 23, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 24, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 25, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 26, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 27, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 28, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 29, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 30, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 31, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 32, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridRVB - Vertical Ping Pong Mauve - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridRVB",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 33, 127))
        ]
    });

    page.items.push(
    {
        id: 540,
        name: "Release HybridBeam",
        type: "Momentary",
        color : "red",
        actions: [
            new MidiXAction(0, "", "Any", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 34, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 35, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 36, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 37, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 38, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 39, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 40, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 41, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 42, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 43, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 44, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 45, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 46, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 47, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 48, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 49, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 50, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 51, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 52, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 53, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 54, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 55, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 56, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 57, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 58, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 59, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 60, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 61, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 62, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 63, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 64, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 65, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 66, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 67, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 68, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 69, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Down - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 70, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 71, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 72, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 73, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 74, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 75, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 76, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 77, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 78, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 79, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 80, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 81, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 82, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 83, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 84, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 85, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 86, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 87, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 88, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 89, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 90, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 91, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 92, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 93, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 94, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 95, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 96, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 97, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 98, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 99, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 100, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 101, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 102, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 103, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 104, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 105, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Up - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 106, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 107, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 108, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Full Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 109, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 110, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 111, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Fade Offset0 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 112, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 113, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 114, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Full Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 115, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 116, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 117, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Fade Offset2 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 118, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 119, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 120, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Full Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 121, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 122, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 123, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Fade Offset7 virtual14",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 124, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 125, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 126, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Full Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 6, "NoteOn", 127, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 0, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 1, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Fade Offset0 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 2, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 3, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 4, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Full Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 5, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 6, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 7, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Fade Offset2 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 8, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 9, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 10, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Full Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 11, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size1 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 12, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size4 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 13, 127))
        ]
    });

    page.items.push(
    {
        id: index++,
        name: "HybridBeam - Vertical Ping Pong - Size7 Fade Offset7 virtual28",
        type: "Momentary",
        group : "LiveHybridBeam",
        color : "red",
        actions: [
            new MidiXAction(0, "", "OnPress", "Midi", new MidiXMessage("Sweetlight", 7, "NoteOn", 14, 127))
        ]
    });

    return page;
}
