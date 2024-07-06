function Notif(message)
{
    alert(message);
}
function CheckNotEmpty(obj)
{
    if(obj.tagName == "INPUT")
    {
        var parent = obj.parentNode;
        parent.classList.remove("not-valid");
        if(!obj.value)
        {
            SetElementNotValid(parent);
            return false;
        }
        return true;     
    }
    obj.classList.remove("not-valid");
    if(!obj.value)
    {
        SetElementNotValid(obj);
        return false;
    }
    return true;
}
function SetElementNotValid(obj)
{
    obj.classList.add("not-valid");
    obj.focus();
    obj.scrollIntoView();
}
function GetValidationForPage(page)
{
    var name = $("txt-page-name");
	var nbButtons = $("select-nb-buttons");
    var visible = $("select-page-visible");
	var nbButtonsByLine = $("select-nb-buttons-by-line");

    if(!CheckNotEmpty(name)) return new Validation(false);
    if(!CheckNotEmpty(nbButtons)) return new Validation(false);
    if(!CheckNotEmpty(nbButtonsByLine)) return new Validation(false);
    var validActions = GetValidationForActions($("ul-edit-page-midi-actions")); 
    if(!validActions.isValid) return new Validation(false);
    var validTriggers = GetValidationForTriggers($("ul-edit-page-trigger"));
    if(!validTriggers.isValid) return new Validation(false);
    page.name = name.value;
    page.visible = visible.value === "true";
    page.nbButtons = nbButtons.value;
    page.nbButtonsByLine = nbButtonsByLine.value;
    page.actions = validActions.obj;
    page.triggers = validTriggers.obj;
    SetPageButtons(page);
    if(page.id == -1)
    {
        page.id = AppData.Pages.length;
        AppData.Pages.push(page);
    }
    page.ExpToHide = GetExpressionToHide();
    return new Validation(true, page);
}
function GetExpressionToHide()
{
    var exps = [];
    var expressions = Array.from(document.getElementsByClassName("checkbox-exp-to-display"));
    expressions.forEach((exp) =>
    {
        if(exp.checked == false)
            exps.push(exp.value);
    });
    return exps
}
function GetValidatorForExpressionsSettingPage()
{
	var expressions = [];
    var isValid = true;
	$("ul-global-expression").childNodes.forEach((li, index) =>
	{
		var expression = new MidiXExpression(index);
        var inputName = li.querySelector(".expression-name");
        if(!CheckNotEmpty(inputName)) isValid = false;
		expression.name = inputName.value;		
        var validationForMidiMessage = GetValidationForMidiMessage(li, false, true);
        if(!validationForMidiMessage.isValid) isValid = false;
        expression.trigger = GetMidiMessage(li);
		expressions.push(expression);
	});
    if(!isValid) return new Validation(false);
	return new Validation(true, expressions);
}
function GetValidatorForButton(id)
{
    var item = new MidiXItem( "",id);
    selectType = $("select-item-type");
    if(!CheckNotEmpty(selectType)) return new Validation(false);
	inputName = $("txt-button-name");
	if(!CheckNotEmpty(inputName)) return new Validation(false);
	var validActions = GetValidationForActions($("ul-edit-button-midi-actions"));
	if(!validActions.isValid) return new Validation(false);
    var validTriggers = GetValidationForTriggers($("ul-edit-button-custom-trigger"));
    if(!validTriggers.isValid) return new Validation(false);
    item.type = selectType.value;
    item.name = inputName.value;
    item.actions = validActions.obj;
    item.triggers = validTriggers.obj;
    item.color = document.querySelector('input[name="color-picker"]:checked').value;
    item.group = $("select-edit-button-group").value;
    return new Validation(true, item);
}
function GetValidatorForGlobalTrigger(id)
{
    var validTriggers = GetValidationForTriggers($("ul-edit-button-global-trigger"));
    if(!validTriggers.isValid) return new Validation(false);
    return new Validation(true, new MidiXButton(id, validTriggers.obj));
}
function GetValidatorForDevicesSettingPage()
{
	var devices = [];
    var isValid = true;
	$("ul-my-devices").childNodes.forEach((li, index) =>
	{
		var device = new MidiXDevice(index);
        selectName = li.querySelector(".txt-device-name");
        if(!CheckNotEmpty(selectName))
        { 
            isValid = false;
        }
        else
        {
		    device.name = selectName.value;
		    device.deviceInputId = li.querySelector(".select-midi-message-device-input").value;
		    device.deviceOutputId = li.querySelector(".select-midi-message-device-output").value;
		    devices.push(device);
        }
	});
	return new Validation(isValid, devices);
}
function GetValidationForActions(ul)
{
	var actions = [];
    var isValid = true;
	ul.childNodes.forEach((li, index) =>
	{
        var validationForAction = GetValidationForAction(li, index);
        if(validationForAction.isValid)
        {
            actions.push(validationForAction.obj);
        }
        else
        {
            isValid = false;
        }		
	});
    return new Validation(isValid, actions);
}
function GetValidationForTriggers(ul)
{
	var triggers = [];
    var isValid = true;
    if(ul.childNodes)
    {
        ul.childNodes.forEach((li, index) =>
        {
            var validationMidiMessage = GetValidationForMidiMessage(li, true, false);
            if(validationMidiMessage.isValid)
            {
                triggers.push(validationMidiMessage.obj);
            }
            else
            {
                isValid = false;
            }		
        });
    }
    return new Validation(isValid, triggers);
}
function GetValidatorForMisc()
{
    var doublePressTime = GetValidatorForNumber($("txt-double-press-time"), false, 0, 10000);
    if(!doublePressTime.isValid) return new Validation(false);
    var profile = new Profile();
    profile.DoublePressTime = doublePressTime.obj;
    return new Validation(true, profile);
}
function GetValidationForMidiMessage(li, isInput, isExp)
{
	var device = li.querySelector(".select-midi-message-device");
	var midiType = li.querySelector(".select-midi-message-type");
	var channel = li.querySelector(".select-midi-message-channel");
	var value = li.querySelector(".select-midi-message-value");
	var ccValue = li.querySelector(".select-midi-message-ccValue");
	var bpm = li.querySelector(".select-midi-message-bpm");
    
    var message = new MidiXMessage();
    message.device = device.value;
    message.midiType = midiType.value;
    message.channel = channel.value;
    message.value = value.value;
    message.ccValue = ccValue.value;
    message.bpm = bpm.value;

    if(message.midiType == "PC" || message.midiType == "CC" || message.midiType == "NoteOn" || message.midiType == "NoteOff")
    {    
        if(!CheckNotEmpty(device)) return new Validation(false);
        if(!CheckNotEmpty(midiType)) return new Validation(false);
        if(!CheckNotEmpty(channel)) return new Validation(false);
        if(!CheckNotEmpty(value)) return new Validation(false);
    }
    
    if(message.midiType == "CC" && !isInput && !isExp)
    {
        if(!CheckNotEmpty(ccValue)) return new Validation(false);
    }
    if(message.midiType == "Clock")
    {
        if(!CheckNotEmpty(bpm)) return new Validation(false);
    }
    
	return new Validation(true, message);
}
function GetValidationForAction(li, index)
{	
    var action = new MidiXAction(index);
	var inputName = li.querySelector(".txt-action-name");	
    var inputDescription = li.querySelector(".txt-action-description");
    var inputTime = li.querySelector(".txt-action-time");
	var selectActionEvent = li.querySelector(".select-action-event");	
	var selectAction = li.querySelector(".select-action-action");
	var selectPage = li.querySelector(".select-page");
	var selectExp = li.querySelector(".select-exp");
	var selectExpMin = li.querySelector(".select-exp-min");
	var selectExpMax = li.querySelector(".select-exp-max");
	var selectStep = li.querySelector(".select-step");
    var selectlinkedButton = li.querySelector(".select-linked-button");
	var selectLinkedButtonAction = li.querySelector(".select-linked-button-action");
	var linkedButton = GetLinkedButton(li, selectlinkedButton, selectLinkedButtonAction);
	var selectColor = li.querySelector(".select-color");
    var selectLfoType = li.querySelector(".select-action-lfo-type");
	var inputLfoMin = li.querySelector(".txt-lfo-min");
	var inputLfoMax = li.querySelector(".txt-lfo-max"); 
	var inputLfoFrequency = li.querySelector(".txt-lfo-frequency"); 
	var inputLfoRefreshTime = li.querySelector(".txt-lfo-refresh-time"); 
    var selectExpTriggerComparator = li.querySelector(".select-exp-trigger-comparator");
    var selectExpTriggerValue = li.querySelector(".select-exp-trigger-value");
    var inputConditionnalScript = li.querySelector(".txt-conditionnal-script");
    var message = null;
    var timeValue = GetValidatorForNumber(inputTime, false, 0);
    if(!timeValue.isValid) return new Validation(false);
    if(!CheckNotEmpty(selectActionEvent)) return new Validation(false);
    if(!CheckNotEmpty(selectAction)) return new Validation(false);

    var a = selectAction.value;
    if(a == "LinkButton")
    {        
        if(!CheckNotEmpty(selectlinkedButton)) return new Validation(false);
        if(!CheckNotEmpty(selectLinkedButtonAction)) return new Validation(false);
        //TODO check not same button
    }
    else if(a == "EXP")
    {
        if(!CheckNotEmpty(selectExp)) return new Validation(false);
        if(!CheckNotEmpty(selectExpMin)) return new Validation(false);
        if(!CheckNotEmpty(selectExpMax)) return new Validation(false);
        var validationForMidiMessage = GetValidationForMidiMessage(li, false, true);      
        if(!validationForMidiMessage.isValid) return new Validation(false);
        message = validationForMidiMessage.obj;
    }
    else if(a == "EXPTrigger")
    {
        if(!CheckNotEmpty(selectlinkedButton)) return new Validation(false);
        if(!CheckNotEmpty(selectLinkedButtonAction)) return new Validation(false);

        if(!CheckNotEmpty(selectExp)) return new Validation(false);
        if(!CheckNotEmpty(selectExpTriggerComparator)) return new Validation(false);
        if(!CheckNotEmpty(selectExpTriggerValue)) return new Validation(false);
        action.expTrigger = new MidiXExpTrigger(selectExpTriggerValue.value, selectExpTriggerComparator.value);
    }
    else if(a == "Midi")
    {
        var validationForMidiMessage = GetValidationForMidiMessage(li);      
        if(!validationForMidiMessage.isValid) return new Validation(false);
        message = validationForMidiMessage.obj;
    }
    else if(a == "NextPage")
    { }
    else if(a == "PreviousPage")
    { }
    else if(a == "LastPage")
    { }
    else if(a == "GoPage")
    { 
        if(!CheckNotEmpty(selectPage)) return new Validation(false);
    }
    else if(a=="LFO")
    {
        var validationForMidiMessage = GetValidationForMidiMessage(li);      
        if(!validationForMidiMessage.isValid) return new Validation(false);
        message = validationForMidiMessage.obj;
        if(!CheckNotEmpty(selectLfoType)) return new Validation(false);
        if(!CheckNotEmpty(inputLfoMin)) return new Validation(false);
        if(!CheckNotEmpty(inputLfoMax)) return new Validation(false);
        if(!CheckNotEmpty(inputLfoFrequency)) return new Validation(false);
        if(!CheckNotEmpty(inputLfoRefreshTime)) return new Validation(false);
        var min = GetValidatorForNumber(inputLfoMin, false, -100, 100);
        if(!min.isValid) return new Validation(false);
        var max = GetValidatorForNumber(inputLfoMax, false, -100, 100);
        if(!max.isValid) return new Validation(false);
        var frequency = GetValidatorForNumber(inputLfoFrequency, true, 0.1, 10);
        if(!frequency.isValid) return new Validation(false);
        var refreshTime = GetValidatorForNumber(inputLfoRefreshTime, false, 10, 10000);
        if(!refreshTime.isValid) return new Validation(false);
        var lfo = new MidiXLFO(selectLfoType.value, frequency.obj, min.obj, max.obj);
        lfo.refreshTime = refreshTime.obj;
        action.LFO = lfo;
    }
    var validationForConditionnalLinkButton = GetValidationForConditionnalLinkButton(li);
    if(!validationForConditionnalLinkButton.isValid) return new Validation(false);

    action.name = inputName.value;
    action.description = inputDescription.value;
    action.timeToWait = timeValue.obj;
    action.event = selectActionEvent.value;
    action.action = selectAction.value;
    action.idPage = selectPage.value;
    action.idExp = selectExp.value;
    action.expMin = selectExpMin.value;
    action.expMax = selectExpMax.value;
    action.step = selectStep.value;
    action.linkedButton = linkedButton;
    action.color = selectColor.value;
    action.message = message;
    action.conditionnalScript = inputConditionnalScript.value;
    action.conditionnalLinkButtons = validationForConditionnalLinkButton.obj;
	return new Validation(true, action);
}
function GetValidationForConditionnalLinkButton(html)
{
    var list = [];
    var ul = html.querySelector(".ul-list-conditionnal-link-button");
    if(ul.childNodes)
    {
        ul.childNodes.forEach((li, index) =>
        {
            var selectLinkButton = li.querySelector(".select-conditionnal-link-button");
            var selectLinkButtonOperator = li.querySelector(".select-conditionnal-link-button-operator");
            var selectLinkButtonState = li.querySelector(".select-conditionnal-link-button-state");
            var data = selectLinkButton.value.split("-");        
            list.push(new MidiXLinkButton(data[0], data[1], null, selectLinkButtonState.value, selectLinkButtonOperator.value));
        });
    }
    return new Validation(true, list);
}
function GetValidatorForNumber(input, isFloat, min, max)
{
    var value = input.value;
    var number = 0;
    var valid = true;
    if(isFloat)
    {
        if(isNaN(parseFloat(value))) valid = false;
        number = parseFloat(value);
    }
    else
    {
        if(isNaN(parseInt(value))) valid = false;
        number = parseInt(value);
    }
    if(min != undefined && number < min) valid =  false;
    if(max != undefined && number > max) valid = false;
    if(valid == false){SetElementNotValid(input)};
    return new Validation(valid, number);
}