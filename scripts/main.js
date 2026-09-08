function InitApp() {
	try
	{		
		InitButtonConfigurationBoard();
		InitAllButtonsBoard();
		
		(IsNetworkMirror() ? Promise.resolve() : WebMidi.enable())
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
				InitializeNetwork();
				
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
					GotoPage(0);
					//init hybrid beam master
					SendMidi(new MidiXMessage("Sweetlight", 16, "CC", 65, 20));
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
		LogError(e);
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
function GetButtonByIdentifier(identifier, id) {
	var button = AllButtons.find((item) => { return item.identifier == identifier; });
	if (button) {
		var b = Object.assign({}, button);
		if (id != undefined) {
			b.id = id;
		}
		return b;
	}
	LogError(`Boutton non trouvé : ${identifier}`);
}
function AddButtonToPage(page, id, identifier, color) {
	var button = GetButtonByIdentifier(identifier, id);
	button.color = color;
	button.id = id;
	page.items.push(button);
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
		LogError(e);
	}
};
