function $(id)
{
	return document.getElementById(id);
}
function MapMidiValueTo100(value)
{
	return value * 100 / 127;
}
function GetDomIndex (target) {
	return [].slice.call(target.parentNode.children).indexOf(target)
}
function InsertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function MapValueLFOToMidi(value)
{
	return parseInt(((value + 100) / 2 ) * 127 / 100);
}
function Map(valeur, minEntree, maxEntree, minSortie, maxSortie) {
	var sub = (maxEntree - minEntree);
	if(sub == 0 )return 0;
	return (valeur - minEntree) * (maxSortie - minSortie) / sub + minSortie;
}
function BpmToMs(bpm) {
	// Calcul de la durée en millisecondes pour un quart de note
	var quarterNoteMs = 60000 / bpm;
  
	// Calcul de la durée en millisecondes pour un message d'horloge MIDI
	var clockMsgMs = quarterNoteMs / 24; // 24 pulsations par quart de note
  
	return clockMsgMs;
  }
function Console(value, value0)
{
	
	ConsolePrivate(value, value0);
}
function ConsolePrivate(value, value0)
{	
	if($("checkbox-logs").checked == false) return;
	console.log("==========================");
	console.log(value);	
	if(value0)
	{
		ConsolePrivate(value0);
	}
	if($("checkbox-logs").checked == false) return;
	AddLogs(value);
}
function LogError(value, value0)
{
	//console.log(value);
	AddLogs(value);
	if(value0)
	{
		LogError(value0);
	}
}
function Debug(value, value0)
{
	console.log(value);
	if(value0)
	{
		Debug(value0);
	}
}
var nbLogs = 0;
function AddLogs(value)
{
	var html = $("logs").innerHTML.substring(0, 50000);

	$("logs").innerHTML = new Date().toLocaleTimeString() +  " : " + value + "<br/>" + html;
	nbLogs++;	
	$("logs-count").innerHTML = nbLogs;
	ShowElement($("logs-count"));
}
function CreateElement(type, className)
{
	var e = document.createElement(type);
	e.className = className;
	return e;
}
function SaveData()
{
	var fileContent = JSON.stringify(AppProfiles);
	var bb = new Blob([fileContent ], { type: 'text/plain' });
	var a = document.createElement('a');
	a.download = 'MidiXXX_Save.json';
	a.href = window.URL.createObjectURL(bb);
	a.click();
}
navigator.getBattery().then((battery) => {
	function updateAllBatteryInfo() {
	  //updateChargeInfo();
	  updateLevelInfo();
	  //updateChargingInfo();
	  //updateDischargingInfo();
	}
	updateAllBatteryInfo();
  
	battery.addEventListener("chargingchange", () => {
	  updateChargeInfo();
	});
	function updateChargeInfo() {
	  console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
	}
  
	battery.addEventListener("levelchange", () => {
	  updateLevelInfo();
	});
	function updateLevelInfo() {
		var level = battery.level * 100;
	  var div = $("level-battery");
	  if(div)
	  {
		div.style.width = (level) + "%";
		if(level > 60 )
		{
			div.style.backgroundColor = "#00ff00";
		}
		else if(level < 20 )
		{
			div.style.backgroundColor = "#ff0000";
		}
		else
		{
			div.style.backgroundColor = "#ff9100"
		}
		}
	}
  
	battery.addEventListener("chargingtimechange", () => {
	  updateChargingInfo();
	});
	function updateChargingInfo() {
	  console.log(`Battery charging time: ${battery.chargingTime} seconds`);
	}
  
	battery.addEventListener("dischargingtimechange", () => {
	  updateDischargingInfo();
	});
	function updateDischargingInfo() {
	  console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
	}
  });