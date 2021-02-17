var ControlToSet;
var f = document.f;
var CalWidth=180;
var StartYear = "";
var EndYear = "";
var FormatAs;
var NN4 = (navigator.appName.indexOf("Netscape")>=0 && !document.getElementById)? true : false;
var NN6 = (document.getElementById && navigator.appName.indexOf("Netscape")>=0 )? true: false;
var TOP;
var LEFT;

if(NN4)document.captureEvents(Event.MOUSEMOVE);

document.onmousemove = LogPosition;

function LogPosition(evt){

    if (NN4||NN6){
    LEFT=evt.screenX;
    TOP=evt.screenY-10;
    }
    else{
    LEFT=event.screenX;
    TOP=event.screenY-10;
    }

}

function getCalendar(CONTROL){
	showCalendar(CONTROL,1950,2050,'mm/dd/yyyy');
}

function showCalendar(CONTROL,START_YEAR,END_YEAR,FORMAT){

	ControlToSet = eval(CONTROL);
	StartYear = START_YEAR;
	EndYear = END_YEAR;
	FormatAs = FORMAT;

	var strFeatures = "width=" + CalWidth + ",height=140" + ",left=" + LEFT + ",top=" + TOP;
	var CalWindow = window.open("/ORSProject3/./jsp/HTMLCalendar.htm","Calendar", strFeatures)
	CalWindow.focus();
} //End Function

function SetDate(DATE){
	if(ControlToSet){
		ControlToSet.value = DATE; 
	}
	ControlToSet = null;
	StartYear = null;
	EndYear = null;
	FormatAs = null;
}