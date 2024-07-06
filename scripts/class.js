// Class 
class ButtonConfig
{
	constructor(identifier, color, index, idPage)
	{
		this.identifier = identifier;
		this.color = color;
		this.index = index;
		this.idPage = idPage;
	}
}
class MidiXPage
{
	constructor(id, name, active, triggers, actions, visible)
	{
		this.id = id;
		this.name = name;			// Nom de la page
		this.active = active; 		// Page active
		this.items = [];			// Buttons (MidiXItem)
		this.triggers = triggers;	// [] MidiXMessage
		this.actions = actions;		// [] MidiXMessage
		this.idLastPage;			// Id Previous Page
		this.nbButtons = 8;			// Nombre de boutton par page
		this.nbButtonsByLine = 4;	// Nombre de boutton par ligne
		this.ExpToHide = [];		// Id des exp à cacher
		this.visible = visible != undefined ? visible : true;		// Défini si une page est visible
		this.buttonsConfiguration = []; //Configuration des boutons lors de l'initialisation
	}
}
class MidiXItem
{
	constructor(identifier, id, name, type, active, group, actions, color, triggers, excludeToLast)
	{
		this.identifier = identifier;			// identification du bouton
		this.id  = id;							// id du bouton
		this.name = name;						// Nom du bouton		
		this.type  = type;						// Type de bouton (Momentary, Preset)
		this.active = active;					// Active
		this.group = group;						// Groupe du bouton
		this.actions = actions;					// List de MidiXAction
		this.color = color;
		this.triggers = triggers;				// [] MidiXMessage
		this.currentStep = 0;
		this.Interval = null;					// setInterval for LFO
		this.doublePressTime = null;
		this.isPrepareMacro = false;			// use for update ui when prepare a macro
		this.excludeRegisterInMacro = false;	// permet de ne pas enregistrer une action dans une macro 
		this.buttonsInside = [];				// [] MidiXItem Bouton à l'interieur
		this.excludeToLast = excludeToLast != undefined ? excludeToLast : false;				// Permet d'exclure pour les last buttons
	}
}
class MidiXAction
{
	constructor(id, name, ev, action, message, idExp, step, linkedButton, color, LFO, expTrigger, expMin, expMax, timeToWait, conditionnalLinkButtons, conditionnalScript, description)
	{
		this.id = id;
		this.name = name;						// Name Action for rename button
		this.event = ev;						// Any|OnPress|OnRelease|DoublePress|DoubleRelease|LongPress
		this.action = action;					// (Midi|GoPage|PreviousPage|NextPage|LastPage|EXP|EXPTrigger|ExpSetValue|LinkButton|LFO|Pause|PrepareMacro|CancelMacro|PlayMacro)
		this.idExp = idExp;						// Id de l'expression pedal
		this.resendExpValueOnActivate  = false;	// renvoi la valeur stocker si activation d'une exp
		this.idPage = -1;						// Id de la page pour le GoPage
		this.valueExp = 0;						//
		this.message = message;					// Message Midi (MidiXMessage)
		this.step = step;						// Step 
		this.linkedButton = linkedButton;		// MidiXLinkButton
		this.color = color;						// color
		this.LFO = LFO;							// LFO
		this.expTrigger = expTrigger;			// MidiXExpTrigger
		this.timeToWait = timeToWait;			//Time in ms before executeNextAction;
		this.expMin = expMin;
		this.expMax = expMax;
		this.conditionnalLinkButtons =  conditionnalLinkButtons	// MidiXLinkButton[]
		this.conditionnalScript = conditionnalScript;			// conditionnal script for this action, must return boolean
		this.description = description;			// description of the action
		
	}
}

class MidiXLFO
{
	constructor(type, frequency, min, max, bypassType)
	{
		this.type = type;
		this.frequency = frequency;
		this.min = min;
		this.max = max;
		this.refreshTime = 20;
		this.bypassType = bypassType;		// Reset|Thru|Pause
	}
}
class MidiXMessage
{
	constructor(device, channel, midiType, value, ccValue, triggerAction, bpm, triggerActionStepNumber)
	{
		this.device = device;					// Nom du Device midi
		this.midiType = midiType;				// (PC|CC|Clock|NoteOn|NoteOff|NoteOnOff)
		this.channel = channel;					// Numéro de channel
		this.value = value;						// Numéro de PC ou de CC
		this.ccValue = ccValue;					// Value if CC#
		this.triggerAction  = triggerAction		// Action (Press|Release|StateOn|StateOff)
		this.bpm = bpm;							// Bpm for clock
		this.clockInterval = null;				// javascript interval for clock
		this.triggerActionStepNumber = triggerActionStepNumber;		// Id Step for custom trigger
		this.keyboardKey = "";
	}
}
class MidiXLinkButton
{
	constructor(idPage, idButton, action, state, conditionnalOperator)
	{
		this.idPage = idPage;
		this.idButton = idButton;
		this.action = action;		// Toggle|On|Off|StepReset|StepPrevious|StepNext|StateOn|StateOff	
		this.state = state;			// state pour le conditionnal step
		this.conditionnalOperator = conditionnalOperator; // AND|OR|MustBe|MustNotBe
	}
}
class MidiXStep
{
	constructor(id, name)
	{
		this.id = id;
		this.name = name;
	}
}
class MidiXExpression
{
	constructor(id, name, trigger, isVirtual)
	{
		this.id = id;
		this.name = name;							// nom de l'exp
		this.trigger = trigger;						// trigger Midi (MidiXMessage)
		this.currentValue = 0;						//
		this.isSync = false;						// Synchronisé avec l'item							
		this.valueToResync = 64;					// valeur de l'action
		this.isExpLowerToResync = false;
		this.expTriggerAction = [];					// MidiXAction ensemble de button trigger 
		this.minValue = 0;
		this.maxValue = 127;
		this.description = "";						// nom du boutton d'expression associé
		this.currentButton = null;					// MidiXLinkButton du bouton en cours d'utilisation
		this.lastButton = null;						// MidiXLinkButton si activation et que actif alors envoi vers l'autre expression
		this.isVirtual = isVirtual;				// Permet de définir pour ne pas afficher en tant qu'expression sur l'interface
	}
}
class MidiXExpTrigger
{
	constructor(value, comparator)
	{
		this.value = value;
		this.comparator  = comparator;			//Equal|LessOrEquals|Less|GreaterOrEquals|Greater
	}
}
class MidiXDevice
{
	constructor(id, name, deviceInputId, deviceOutputId, deviceNameInput, deviceNameOutput)
	{
		this.id = id;
		this.name = name;
		this.deviceNameInput = deviceNameInput;
		this.deviceNameOutput = deviceNameOutput;
		this.deviceInputId = deviceInputId;
		this.deviceOutputId = deviceOutputId;
	}
}
class MidiXButton
{
	constructor(id, triggers)
	{
		this.id = id;
		this.triggers = triggers 		//Message Midi ([] MidiXMessage)	
	}
}
class MidiXMacroButtonToExecute
{
	constructor(idPage, idButton, state, conditionnalOperator)
	{
		this.idPage = idPage;
		this.idButton = idButton;
		this.state = state; 			//On|Off
		
	}
}
class Validation
{
	constructor(isValid, obj)
	{
		this.isValid = isValid;
		this.obj = obj;
	}
}
class Profile
{
	constructor(id, name)
	{
		this.id = id;
		this.active = false;
		this.name = name;
		this.Pages= [];					// MidiXPage
		this.MidiInputs= [];			// MidiXDevice
		this.MidiOutputs = [];			// MidiXDevice
		this.Expressions = [];			// MidiXExpression
		this.ButtonsTrigger = [];		// MidiXButton
		this.MidiInputToHandle = [];	// device-type message-channel-value => [] function déclenchée
		this.Groups = [];				// List des groupes
		this.PreviousPageTriggers = [];	// MidiXMessage
		this.NextPageTriggers = [];		// MidiXMessage
		this.Devices = [];				// MidiXDevices
		this.DoublePressTime = 300;
	}
}
var AppData = new Profile(0,  "Default");
let AppProfiles = 
{
	Profiles : []				// Profiles
}