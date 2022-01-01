const fetch = require('node-fetch');

var userID;
var sessionID;
var formID;
var dateID;
var classes = [];


userID = '***REMOVED***';
dateID = 'UDuhlijeAW9NYDr';


fetch("https://chccs.az1.qualtrics.com/jfe3/form/SV_eK89xVQNCjgx90V?Q_DL="+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"&Q_CHL=email", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,la;q=0.8",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "cookie": "QSI_HistorySession=https%3A%2F%2Fchccs.az1.qualtrics.com%2Fjfe%2Fform%2FSV_di2IT2pwv2IVnh3%3FQ_DL%3DPglOfVbFvTQP3Lo_di2IT2pwv2IVnh3_CGC_Nw21WaXSOgXshOX%26Q_CHL%3Demail~1604719811205; QST=SV_eK89xVQNCjgx90V%2CSV_8u1nzd0mFsMpAmp%2CSV_di2IT2pwv2IVnh3; rDWVafICeqZ%2FdfyASHJEMOojXXuf7JkcYi2469%2FE%2BKI%3D=FS_3rSfpDlvtodfNhA~jfe7"
  },
  "referrer": "https://chccs.az1.qualtrics.com/jfe/form/SV_eK89xVQNCjgx90V?Q_DL="+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"&Q_CHL=email",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
})   .then(res => res.text())
    .then(body => setKeys(body));

function setKeys (parseStuff) {
	sessionID = parseStuff.split('SessionID":')[1].split(',')[0].split('"')[1];
	formID = parseStuff.split('XSRFToken":')[1].split(',')[0].split('"')[1];

	for (let cls = 0; cls < 7; cls++) {
		classes.push(parseStuff.split('Present for Period')[cls + 8].split(';')[1].split('"')[0])
	}

	console.log('User ID: ', userID, '\nSession ID: ', sessionID, '\nXSRF ID: ', formID, '\nClasses: ', classes);




	fetch("https://chccs.az1.qualtrics.com/jfe3/form/SV_eK89xVQNCjgx90V/next?rand=126668152&tid=4&t=1606258520965", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9,la;q=0.8",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "xsrftoken": formID,
    "cookie": "QSI_HistorySession=https%3A%2F%2Fchccs.az1.qualtrics.com%2Fjfe%2Fform%2FSV_di2IT2pwv2IVnh3%3FQ_DL%3DPglOfVbFvTQP3Lo_di2IT2pwv2IVnh3_CGC_Nw21WaXSOgXshOX%26Q_CHL%3Demail~1604719811205; QST=SV_eK89xVQNCjgx90V%2CSV_8u1nzd0mFsMpAmp%2CSV_di2IT2pwv2IVnh3; rDWVafICeqZ%2FdfyASHJEMOojXXuf7JkcYi2469%2FE%2BKI%3D=FS_3rSfpDlvtodfNhA~jfe7; %2BOt5XPtNDOsOogN5qv2lP1pM%2Fg3w3tbvml2JPlwxsfw%3D="+sessionID+"~jfe3"
  },
  "referrer": "https://chccs.az1.qualtrics.com/jfe/form/SV_eK89xVQNCjgx90V?Q_DL="+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"&Q_CHL=email",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"SM\":{\"Resolution\":\"1920x1080\",\"FlashVersion\":-1,\"BaseServiceURL\":\"https://chccs.az1.qualtrics.com\",\"BrandDataCenterURL\":\"https://sjc1.qualtrics.com\",\"EmailDistributionID\":\"EMD_"+dateID+"\",\"RecipientID\":\"CGC_"+userID+"\",\"XSRFToken\":\"formID\",\"StartDate\":\"2020-11-24 22:28:20\",\"StartDateRaw\":1606256900267,\"BrandID\":\"chccs\",\"BrowserName\":\"Chrome\",\"BrowserVersion\":\"86.0.4240.198\",\"OS\":\"Windows NT 10.0\",\"UserAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36\",\"LastUserAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36\",\"QueryString\":\"Q_DL="+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"&Q_CHL=email\",\"IP\":\"107.15.49.206\",\"URL\":\"https://chccs.az1.qualtrics.com/jfe/form/SV_eK89xVQNCjgx90V?Q_DL="+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"&Q_CHL=email\",\"BaseHostURL\":\"https://chccs.az1.qualtrics.com\",\"ProxyURL\":\"https://chccs.az1.qualtrics.com/jfe/form/SV_eK89xVQNCjgx90V?Q_DL="+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"&Q_CHL=email\",\"JFEDataCenter\":\"jfe3\",\"dataCenterPath\":\"jfe3\",\"ContactID\":\"CID_2lDOedW9Z3E7y3b\",\"SurveyVersionID\":\"9223370434997891425\",\"JFEVersionID\":\"4d766f346d5a63666c0fdc0ba76bd3a35877427d\",\"FormSessionID\":\""+sessionID+"\",\"SurveyID\":\"SV_eK89xVQNCjgx90V\",\"EndDate\":\"2020-11-24 22:54:03\",\"EndDateRaw\":1606258443518,\"Progress\":0},\"ED\":{\"SID\":\"SV_eK89xVQNCjgx90V\",\"SurveyID\":\"SV_eK89xVQNCjgx90V\",\"Q_CHL\":\"email\",\"Q_DL\":\""+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"\",\"Q_URL\":\"https://chccs.az1.qualtrics.com/jfe/form/SV_eK89xVQNCjgx90V?Q_DL="+dateID+"_eK89xVQNCjgx90V_CGC_"+userID+"&Q_CHL=email\",\"UserAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36\",\"Q_LastModified\":1601856883,\"Q_Language\":\"EN\",\"Q_TotalDuration\":1543},\"EDMETA\":{},\"FormRuntime\":null,\"RuntimePayload\":null,\"FormSessionID\":\""+sessionID+"\",\"Questions\":{\"QID1\":{\"Highlight\":false,\"ID\":\"QID1\",\"Type\":\"DB\",\"Selector\":\"TB\",\"SubSelector\":null,\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"Type\":\"None\"}},\"PDPErrorMsg\":null,\"QuestionText\":\"Welcome to the CHCCS Daily Attendance Check!\\n<div>&nbsp;</div>\\n\\n<div>Mark yourself &quot;Present&quot; under each course name - Click the blue&nbsp;<strong>Submit </strong>button at the end to save your responses.</div>\\n\\n<div>&nbsp;</div>\\n\\n<div>&nbsp;</div>\",\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":1},\"QID9\":{\"Highlight\":false,\"ID\":\"QID9\",\"Type\":\"MC\",\"Selector\":\"SAVR\",\"SubSelector\":\"TX\",\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"ForceResponse\":\"OFF\",\"ForceResponseType\":\"ON\",\"Type\":\"None\"}},\"Choices\":{\"1\":{\"ID\":\"1\",\"RecodeValue\":\"1\",\"VariableName\":\"1\",\"Text\":\"\",\"Display\":\"Present\",\"InputWidth\":null,\"Exclusive\":false,\"Selected\":true,\"Password\":false,\"TextEntry\":false,\"TextEntrySize\":\"Small\",\"TextEntryLength\":null,\"InputHeight\":null,\"Error\":null,\"ErrorMsg\":null,\"PDPErrorMsg\":null,\"Displayed\":true}},\"ChoiceOrder\":[\"1\"],\"ChoiceTextPosition\":\"Left\",\"Selected\":\"1\",\"PDPErrorMsg\":null,\"QuestionText\":\"Present for Period 1 -&nbsp;"+classes[0]+"\",\"ExistingChoices\":{},\"ProcessedDisplayChoiceOrder\":[\"1\"],\"ChoiceOrderSetup\":true,\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":null},\"QID10\":{\"Highlight\":false,\"ID\":\"QID10\",\"Type\":\"MC\",\"Selector\":\"SAVR\",\"SubSelector\":\"TX\",\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"ForceResponse\":\"OFF\",\"ForceResponseType\":\"ON\",\"Type\":\"None\"}},\"Choices\":{\"1\":{\"ID\":\"1\",\"RecodeValue\":\"1\",\"VariableName\":\"1\",\"Text\":\"\",\"Display\":\"Present\",\"InputWidth\":null,\"Exclusive\":false,\"Selected\":true,\"Password\":false,\"TextEntry\":false,\"TextEntrySize\":\"Small\",\"TextEntryLength\":null,\"InputHeight\":null,\"Error\":null,\"ErrorMsg\":null,\"PDPErrorMsg\":null,\"Displayed\":true}},\"ChoiceOrder\":[\"1\"],\"ChoiceTextPosition\":\"Left\",\"Selected\":\"1\",\"PDPErrorMsg\":null,\"QuestionText\":\"Present for Period 2 -&nbsp;"+classes[1]+"\",\"ExistingChoices\":{},\"ProcessedDisplayChoiceOrder\":[\"1\"],\"ChoiceOrderSetup\":true,\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":null},\"QID11\":{\"Highlight\":false,\"ID\":\"QID11\",\"Type\":\"MC\",\"Selector\":\"SAVR\",\"SubSelector\":\"TX\",\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"ForceResponse\":\"OFF\",\"ForceResponseType\":\"ON\",\"Type\":\"None\"}},\"Choices\":{\"1\":{\"ID\":\"1\",\"RecodeValue\":\"1\",\"VariableName\":\"1\",\"Text\":\"\",\"Display\":\"Present\",\"InputWidth\":null,\"Exclusive\":false,\"Selected\":true,\"Password\":false,\"TextEntry\":false,\"TextEntrySize\":\"Small\",\"TextEntryLength\":null,\"InputHeight\":null,\"Error\":null,\"ErrorMsg\":null,\"PDPErrorMsg\":null,\"Displayed\":true}},\"ChoiceOrder\":[\"1\"],\"ChoiceTextPosition\":\"Left\",\"Selected\":\"1\",\"PDPErrorMsg\":null,\"QuestionText\":\"Present for Period 3 -&nbsp;"+classes[2]+"\",\"ExistingChoices\":{},\"ProcessedDisplayChoiceOrder\":[\"1\"],\"ChoiceOrderSetup\":true,\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":null},\"QID13\":{\"Highlight\":false,\"ID\":\"QID13\",\"Type\":\"MC\",\"Selector\":\"SAVR\",\"SubSelector\":\"TX\",\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"ForceResponse\":\"OFF\",\"ForceResponseType\":\"ON\",\"Type\":\"None\"}},\"Choices\":{\"1\":{\"ID\":\"1\",\"RecodeValue\":\"1\",\"VariableName\":\"1\",\"Text\":\"\",\"Display\":\"Present\",\"InputWidth\":null,\"Exclusive\":false,\"Selected\":true,\"Password\":false,\"TextEntry\":false,\"TextEntrySize\":\"Small\",\"TextEntryLength\":null,\"InputHeight\":null,\"Error\":null,\"ErrorMsg\":null,\"PDPErrorMsg\":null,\"Displayed\":true}},\"ChoiceOrder\":[\"1\"],\"ChoiceTextPosition\":\"Left\",\"Selected\":\"1\",\"PDPErrorMsg\":null,\"QuestionText\":\"Present for Period 5 -&nbsp;"+classes[4]+"\",\"ExistingChoices\":{},\"ProcessedDisplayChoiceOrder\":[\"1\"],\"ChoiceOrderSetup\":true,\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":null},\"QID12\":{\"Highlight\":false,\"ID\":\"QID12\",\"Type\":\"MC\",\"Selector\":\"SAVR\",\"SubSelector\":\"TX\",\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"ForceResponse\":\"OFF\",\"ForceResponseType\":\"ON\",\"Type\":\"None\"}},\"Choices\":{\"1\":{\"ID\":\"1\",\"RecodeValue\":\"1\",\"VariableName\":\"1\",\"Text\":\"\",\"Display\":\"Present\",\"InputWidth\":null,\"Exclusive\":false,\"Selected\":true,\"Password\":false,\"TextEntry\":false,\"TextEntrySize\":\"Small\",\"TextEntryLength\":null,\"InputHeight\":null,\"Error\":null,\"ErrorMsg\":null,\"PDPErrorMsg\":null,\"Displayed\":true}},\"ChoiceOrder\":[\"1\"],\"ChoiceTextPosition\":\"Left\",\"Selected\":\"1\",\"PDPErrorMsg\":null,\"QuestionText\":\"Present for Period 4 -&nbsp;"+classes[3]+"\",\"ExistingChoices\":{},\"ProcessedDisplayChoiceOrder\":[\"1\"],\"ChoiceOrderSetup\":true,\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":null},\"QID14\":{\"Highlight\":false,\"ID\":\"QID14\",\"Type\":\"MC\",\"Selector\":\"SAVR\",\"SubSelector\":\"TX\",\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"ForceResponse\":\"OFF\",\"ForceResponseType\":\"ON\",\"Type\":\"None\"}},\"Choices\":{\"1\":{\"ID\":\"1\",\"RecodeValue\":\"1\",\"VariableName\":\"1\",\"Text\":\"\",\"Display\":\"Present\",\"InputWidth\":null,\"Exclusive\":false,\"Selected\":true,\"Password\":false,\"TextEntry\":false,\"TextEntrySize\":\"Small\",\"TextEntryLength\":null,\"InputHeight\":null,\"Error\":null,\"ErrorMsg\":null,\"PDPErrorMsg\":null,\"Displayed\":true}},\"ChoiceOrder\":[\"1\"],\"ChoiceTextPosition\":\"Left\",\"Selected\":\"1\",\"PDPErrorMsg\":null,\"QuestionText\":\"Present for Period 6 -&nbsp;"+classes[5]+"\",\"ExistingChoices\":{},\"ProcessedDisplayChoiceOrder\":[\"1\"],\"ChoiceOrderSetup\":true,\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":null},\"QID15\":{\"Highlight\":false,\"ID\":\"QID15\",\"Type\":\"MC\",\"Selector\":\"SAVR\",\"SubSelector\":\"TX\",\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"ForceResponse\":\"OFF\",\"ForceResponseType\":\"ON\",\"Type\":\"None\"}},\"Choices\":{\"1\":{\"ID\":\"1\",\"RecodeValue\":\"1\",\"VariableName\":\"1\",\"Text\":\"\",\"Display\":\"Present\",\"InputWidth\":null,\"Exclusive\":false,\"Selected\":true,\"Password\":false,\"TextEntry\":false,\"TextEntrySize\":\"Small\",\"TextEntryLength\":null,\"InputHeight\":null,\"Error\":null,\"ErrorMsg\":null,\"PDPErrorMsg\":null,\"Displayed\":true}},\"ChoiceOrder\":[\"1\"],\"ChoiceTextPosition\":\"Left\",\"Selected\":\"1\",\"PDPErrorMsg\":null,\"QuestionText\":\"Present for Period 7 -&nbsp;"+classes[6]+"\",\"ExistingChoices\":{},\"ProcessedDisplayChoiceOrder\":[\"1\"],\"ChoiceOrderSetup\":true,\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":null},\"QID3\":{\"Highlight\":false,\"ID\":\"QID3\",\"Type\":\"DB\",\"Selector\":\"TB\",\"SubSelector\":null,\"ErrorMsg\":null,\"Valid\":false,\"MobileFirst\":false,\"Displayed\":true,\"PreValidation\":{\"Settings\":{\"Type\":\"None\"}},\"PDPErrorMsg\":null,\"QuestionText\":\"Thanks for your response!<br>\\n<br>\\nBe sure to click <strong>Submit </strong>below to save your responses.\\n<div><br>\\nRemember that you can contact your teacher for help with academics or your counselor or social worker for other types of support.<br>\\n<a href=\\\"http://chccs.org/Page/9633\\\">Anonymous Tip Line</a></div>\",\"Active\":true,\"IsResponseSummary\":false,\"SeparatorDisplayed\":true,\"Response\":1}},\"TransactionID\":4,\"ProgressState\":[]}",
  "method": "POST",
  "mode": "cors"
});



	console.log('Some random student has been marked present.')



}