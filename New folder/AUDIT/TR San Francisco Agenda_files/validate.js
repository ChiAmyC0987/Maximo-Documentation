
function Validate_Index_Form(theForm)
{
	
   if (theForm.First_Name.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.First_Name.focus();
    return (false);
  }
 
  
  if (theForm.Last_Name.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.Last_Name.focus();
    return (false);
  }  
    if (theForm.Title.value == "")
  {
    alert("Please enter a value for the \"Title\" field.");
    theForm.Title.focus();
    return (false);
  }
  if (theForm.Office1.value == "")
  {
    alert("Please enter a value for the \"Organization/Agency\" field.");
    theForm.Office1.focus();
    return (false);
  }
  
  if (theForm.Ship_Address1.value == "")
  {
    alert("Please enter a value for the \"Street Address\" field.");
    theForm.Ship_Address1.focus();
    return (false);
  }
   if (theForm.Ship_City.value == "")
  {
    alert("Please enter a value for the \"City\" field.");
    theForm.Ship_City.focus();
    return (false);
  }
  if (theForm.Ship_State.selectedIndex == 0)
  {
    alert("Please enter a value for the \"State\" field.");
    theForm.Ship_State.focus();
    return (false);
  }
   if (theForm.Ship_Postal_Code.value == "")
  {
    alert("Please enter a value for the \"Zip\" field.");
    theForm.Ship_Postal_Code.focus();
    return (false);
  }
    if (theForm.Primary_Phone.value == "")
  {
    alert("Please enter a value for the \"Telephone Number\" field.");
    theForm.Primary_Phone.focus();
    return (false);
  }
    if (theForm.Primary_Mobile.value == "")
  {
    alert("Please enter a value for the \"Mobile Number\" field.");
    theForm.Primary_Mobile.focus();
    return (false);
  }
  if (theForm.Primary_Email_Address.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
     
  if (echeck(theForm.Primary_Email_Address.value) == false) {
	alert("Please enter a valid Email id");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  
   if (theForm.email_check.value == true)
  {
    alert("Please enter a valid \"Email Id\".");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
 
 if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false) 
  {
	alert("Please select meeting");
    theForm.meeting[0].focus();
    return (false);
  }
  
  for(i=0;i<theForm.meeting.length;i++)
   {
	  if(theForm.meeting[i].checked)
	  {
	  	if(theForm.sel_meeting.value=="")
	  	{
		  theForm.sel_meeting.value=theForm.meeting[i].value;
	  	}
  	  	else
     	{
	  		 theForm.sel_meeting.value=theForm.sel_meeting.value+",";
	 	 	theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
     	}
	  }
   }
  
return true;

}
  

function Validate_TrAMS_Form(theForm)
{
	
   if (theForm.First_Name.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.First_Name.focus();
    return (false);
  }
 
  
  if (theForm.Last_Name.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.Last_Name.focus();
    return (false);
  }  
  if (theForm.Office1.value == "")
  {
    alert("Please enter a value for the \"Organization/Agency\" field.");
    theForm.Office1.focus();
    return (false);
  }
  
  if (theForm.Ship_Address1.value == "")
  {
    alert("Please enter a value for the \"Street Address\" field.");
    theForm.Ship_Address1.focus();
    return (false);
  }
   if (theForm.Ship_City.value == "")
  {
    alert("Please enter a value for the \"City\" field.");
    theForm.Ship_City.focus();
    return (false);
  }
  if (theForm.Ship_State.selectedIndex == 0)
  {
    alert("Please enter a value for the \"State\" field.");
    theForm.Ship_State.focus();
    return (false);
  }
   if (theForm.Ship_Postal_Code.value == "")
  {
    alert("Please enter a value for the \"Zip\" field.");
    theForm.Ship_Postal_Code.focus();
    return (false);
  }
    if (theForm.Primary_Phone.value == "")
  {
    alert("Please enter a value for the \"Telephone Number\" field.");
    theForm.Primary_Phone.focus();
    return (false);
  }
  if (theForm.Primary_Email_Address.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
     
  if (theForm.AttDay.selectedIndex == 0)
  {
    alert("Please enter a value for the \"Which Day will you Attend\" field.");
    theForm.AttDay.focus();
    return (false);
  }
     
  if (echeck(theForm.Primary_Email_Address.value) == false) {
	alert("Please enter a valid Email id");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  
   if (theForm.email_check.value == true)
  {
    alert("Please enter a valid \"Email Id\".");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
 
 if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false) 
  {
	alert("Please select meeting");
    theForm.meeting[0].focus();
    return (false);
  }
  
  for(i=0;i<theForm.meeting.length;i++)
   {
	  if(theForm.meeting[i].checked)
	  {
	  	if(theForm.sel_meeting.value=="")
	  	{
		  theForm.sel_meeting.value=theForm.meeting[i].value;
	  	}
  	  	else
     	{
	  		 theForm.sel_meeting.value=theForm.sel_meeting.value+",";
	 	 	theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
     	}
	  }
   }
  
return true;

}
  

function Validate_FTAOversight_Form(theForm)
{
	
   if (theForm.First_Name.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.First_Name.focus();
    return (false);
  }
   
  if (theForm.Last_Name.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.Last_Name.focus();
    return (false);
  }  
  
  if (theForm.Ship_Address1.value == "")
  {
    alert("Please enter a value for the \"Street Address\" field.");
    theForm.Ship_Address1.focus();
    return (false);
  }
   if (theForm.Ship_City.value == "")
  {
    alert("Please enter a value for the \"City\" field.");
    theForm.Ship_City.focus();
    return (false);
  }
  if (theForm.Ship_State.selectedIndex == 0)
  {
    alert("Please enter a value for the \"State\" field.");
    theForm.Ship_State.focus();
    return (false);
  }
   if (theForm.Ship_Postal_Code.value == "")
  {
    alert("Please enter a value for the \"Zip\" field.");
    theForm.Ship_Postal_Code.focus();
    return (false);
  }
    if (theForm.Primary_Phone.value == "")
  {
    alert("Please enter a value for the \"Telephone Number\" field.");
    theForm.Primary_Phone.focus();
    return (false);
  }
  if (theForm.Primary_Email_Address.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
     
  if (echeck(theForm.Primary_Email_Address.value) == false) {
	alert("Please enter a valid Email id");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  
   if (theForm.email_check.value == true)
  {
    alert("Please enter a valid \"Email Id\".");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
 
  if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false) 
  {
	alert("Please select meeting");
    theForm.meeting[0].focus();
    return (false);
  }
  
  for(i=0;i<theForm.meeting.length;i++)
   {
	  if(theForm.meeting[i].checked)
	  {
	  	if(theForm.sel_meeting.value=="")
	  	{
		  theForm.sel_meeting.value=theForm.meeting[i].value;
	  	}
  	  	else
     	{
	  		theForm.sel_meeting.value=theForm.sel_meeting.value+",";
	 	 	theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
     	}
	  }
   }
  
return true;

}
  

function Validate_FTA_FY18_TCW_Form(theForm)
{
	
   if (theForm.First_Name.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.First_Name.focus();
    return (false);
  }
   
  if (theForm.Last_Name.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.Last_Name.focus();
    return (false);
  }  
  if (theForm.Office1.value == "" && theForm.Region.value == "0")  	
  {
    alert("Please enter a value for either the \"Project Sponsor or FTA Office\" field.");
    theForm.Region.focus();
    return (false);
  }
    if (theForm.Ship_Address1.value == "")
  {
    alert("Please enter a value for the \"Street Address\" field.");
    theForm.Ship_Address1.focus();
    return (false);
  }
   if (theForm.Ship_City.value == "")
  {
    alert("Please enter a value for the \"City\" field.");
    theForm.Ship_City.focus();
    return (false);
  }
  if (theForm.Ship_State.selectedIndex == 0)
  {
    alert("Please enter a value for the \"State\" field.");
    theForm.Ship_State.focus();
    return (false);
  }
   if (theForm.Ship_Postal_Code.value == "")
  {
    alert("Please enter a value for the \"Zip\" field.");
    theForm.Ship_Postal_Code.focus();
    return (false);
  }
  if (theForm.Primary_Phone.value == "")
  {
    alert("Please enter a value for the \"Telephone Number\" field.");
    theForm.Primary_Phone.focus();
    return (false);
  }
  if (theForm.Primary_Email_Address.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
     
  if (echeck(theForm.Primary_Email_Address.value) == false) {
	alert("Please enter a valid Email id");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  
  if (theForm.email_check.value == true)
  {
    alert("Please enter a valid \"Email Id\".");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  if (theForm.custom1_boolean.value == "0")
  {
    alert("Please enter a value for the \"Will you be attending the Tuesday night Dinner?\" field.");
    theForm.custom1_boolean.focus();
    return (false);
  }
 
 if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false) 
  {
	alert("Please select meeting");
    theForm.meeting[0].focus();
    return (false);
  }
  
  for(i=0;i<theForm.meeting.length;i++)
   {
	  if(theForm.meeting[i].checked)
	  {
	  	if(theForm.sel_meeting.value=="")
	  	{
		  theForm.sel_meeting.value=theForm.meeting[i].value;
	  	}
  	  	else
     	{
	  		theForm.sel_meeting.value=theForm.sel_meeting.value+",";
	 	 	theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
     	}
	  }
   }
  
return true;

}
  

function Validate_Triennial_Form(theForm)
{
	
   if (theForm.First_Name.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.First_Name.focus();
    return (false);
  }
   
  if (theForm.Last_Name.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.Last_Name.focus();
    return (false);
  }  
  if (theForm.Office1.value == "")
  {
    alert("Please enter a value for the \"Organization/Agency\" field.");
    theForm.Office1.focus();
    return (false);
  }
  
  if (theForm.Ship_Address1.value == "")
  {
    alert("Please enter a value for the \"Street Address\" field.");
    theForm.Ship_Address1.focus();
    return (false);
  }
   if (theForm.Ship_City.value == "")
  {
    alert("Please enter a value for the \"City\" field.");
    theForm.Ship_City.focus();
    return (false);
  }
  if (theForm.Ship_State.selectedIndex == 0)
  {
    alert("Please enter a value for the \"State\" field.");
    theForm.Ship_State.focus();
    return (false);
  }
   if (theForm.Ship_Postal_Code.value == "")
  {
    alert("Please enter a value for the \"Zip\" field.");
    theForm.Ship_Postal_Code.focus();
    return (false);
  }
    if (theForm.Primary_Phone.value == "")
  {
    alert("Please enter a value for the \"Telephone Number\" field.");
    theForm.Primary_Phone.focus();
    return (false);
  }
  if (theForm.Primary_Email_Address.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
     
  if (echeck(theForm.Primary_Email_Address.value) == false) {
	alert("Please enter a valid Email id");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  
   if (theForm.email_check.value == true)
  {
    alert("Please enter a valid \"Email Id\".");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
 
  if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false) 
  {
	alert("Please select meeting");
    theForm.meeting[0].focus();
    return (false);
  }
  
  for(i=0;i<theForm.meeting.length;i++)
   {
	  if(theForm.meeting[i].checked)
	  {
	  	if(theForm.sel_meeting.value=="")
	  	{
		  theForm.sel_meeting.value=theForm.meeting[i].value;
	  	}
  	  	else
     	{
	  		theForm.sel_meeting.value=theForm.sel_meeting.value+",";
	 	 	theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
     	}
	  }
   }
  
return true;

}
  
  
function Validate_SSO_RTA_Form(theForm)
{
	
	if (theForm.First_Name.value == "")
	{
		alert("Please enter a value for the \"First Name\" field.");
		theForm.First_Name.focus();
		return (false);
	}
 
  
	if (theForm.Last_Name.value == "")
	{
		alert("Please enter a value for the \"Last Name\" field.");
		theForm.Last_Name.focus();
		return (false);
	}

	if (theForm.Region.value == 0 || (theForm.Region.value != "FTA" && theForm.Region.value != "U.S. DOT" && theForm.Region.value != "U.S. Government"
									 && theForm.Region.value != "State Safety Oversight Agency" && theForm.Region.value != "Rail Transit Agency" 
									 && theForm.Region.value != "Contractor" && theForm.Region.value != "Other") )
	{
		alert("Please select a value for the \"Organization Type\" field.");
		theForm.Region.focus();
		return (false);
	}

	if (theForm.Office1.value == "")
	{
		alert("Please enter a value for the \"Organization Name\" field.");
		theForm.Office1.focus();
		return (false);
	}

	if (theForm.Ship_Address1.value == "")
	{
		alert("Please enter a value for the \"Street Address\" field.");
		theForm.Ship_Address1.focus();
		return (false);
	}

	if (theForm.Ship_City.value == "")
	{
		alert("Please enter a value for the \"City\" field.");
		theForm.Ship_City.focus();
		return (false);
	}

	if (theForm.Ship_State.selectedIndex == 0)
	{
		alert("Please select a value for the \"State\" field.");
		theForm.Ship_State.focus();
		return (false);
	}

	if (theForm.Ship_Postal_Code.value == "")
	{
		alert("Please enter a value for the \"Zip\" field.");
		theForm.Ship_Postal_Code.focus();
		return (false);
	}

	if (theForm.Primary_Phone.value == "")
	{
		alert("Please enter a value for the \"Telephone Number\" field.");
		theForm.Primary_Phone.focus();
		return (false);
	}

	if (theForm.Primary_Email_Address.value == "")
	{
		alert("Please enter a value for the \"Email\" field.");
		theForm.Primary_Email_Address.focus();
		return (false);
	}

	if (theForm.Handout_Version.selectedIndex == 0 || theForm.Handout_Version.selectedIndex == "")
	{
		alert("Please select a value for the \"Handout Version\" field.");
		theForm.Handout_Version.focus();
		return (false);
	}

	if (echeck(theForm.Primary_Email_Address.value) == false)
	{
		alert("Please enter a valid Email id");
		theForm.Primary_Email_Address.focus();
		return (false);
	}

	if (theForm.email_check.value == true)
	{
		alert("Please enter a valid \"Email Id\".");
		theForm.Primary_Email_Address.focus();
		return (false);
	}
 
	if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false)
	{
		alert("Please select meeting");
		theForm.meeting[0].focus();
		return (false);
	}

	for(i=0;i<theForm.meeting.length;i++)
	{
		if(theForm.meeting[i].checked)
		{
			if(theForm.sel_meeting.value=="")
			{
				theForm.sel_meeting.value=theForm.meeting[i].value;
			}
			else
			{
				theForm.sel_meeting.value=theForm.sel_meeting.value+",";
				theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
			}
		}
	}

	return true;

}


function Validate_FY17_TRI_Form(theForm)
{
	
   if (theForm.First_Name.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.First_Name.focus();
    return (false);
  }
 
  
  if (theForm.Last_Name.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.Last_Name.focus();
    return (false);
  }  
  
  if (theForm.Region.value == 0 || (theForm.Region.value != "Instructor" && theForm.Region.value != "Attendee" && theForm.Region.value != "FTA Staff") )
  {
    alert("Please select a value for the \"The Registration Category\" field.");
    theForm.Region.focus();
    return (false);
  }
  
  if (theForm.Office1.value == "")
  {
    alert("Please enter a value for the \"Organization Name\" field.");
    theForm.Office1.focus();
    return (false);
  }
  if (theForm.Ship_Address1.value == "")
  {
    alert("Please enter a value for the \"Street Address\" field.");
    theForm.Ship_Address1.focus();
    return (false);
  }
   if (theForm.Ship_City.value == "")
  {
    alert("Please enter a value for the \"City\" field.");
    theForm.Ship_City.focus();
    return (false);
  }
  if (theForm.Ship_State.selectedIndex == 0)
  {
    alert("Please select a value for the \"State\" field.");
    theForm.Ship_State.focus();
    return (false);
  }
   if (theForm.Ship_Postal_Code.value == "")
  {
    alert("Please enter a value for the \"Zip\" field.");
    theForm.Ship_Postal_Code.focus();
    return (false);
  }
    if (theForm.Primary_Phone.value == "")
  {
    alert("Please enter a value for the \"Telephone Number\" field.");
    theForm.Primary_Phone.focus();
    return (false);
  }
  if (theForm.Primary_Email_Address.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
     
  if (theForm.Handout_Version.selectedIndex == 0 || theForm.Handout_Version.selectedIndex == "")
  {
    alert("Please select a value for the \"Handout Version\" field.");
    theForm.Handout_Version.focus();
    return (false);
  }
     
  if (echeck(theForm.Primary_Email_Address.value) == false) {
	alert("Please enter a valid Email id");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  
   if (theForm.email_check.value == true)
  {
    alert("Please enter a valid \"Email Id\".");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
 
 if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false) 
  {
	alert("Please select meeting");
    theForm.meeting[0].focus();
    return (false);
  }
  
  for(i=0;i<theForm.meeting.length;i++)
   {
	  if(theForm.meeting[i].checked)
	  {
	  	if(theForm.sel_meeting.value=="")
	  	{
		  theForm.sel_meeting.value=theForm.meeting[i].value;
	  	}
  	  	else
     	{
	  		 theForm.sel_meeting.value=theForm.sel_meeting.value+",";
	 	 	theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
     	}
	  }
   }
  
return true;

}
  

function Validate_Closed_Form(theForm)
{
	
   if (theForm.First_Name.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.First_Name.focus();
    return (false);
  }
 
  
  if (theForm.Last_Name.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.Last_Name.focus();
    return (false);
  }  
  if (theForm.Primary_Email_Address.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
     
  if (echeck(theForm.Primary_Email_Address.value) == false) {
	alert("Please enter a valid Email id");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
  
   if (theForm.email_check.value == true)
  {
    alert("Please enter a valid \"Email Id\".");
    theForm.Primary_Email_Address.focus();
    return (false);
  }
 
 if(theForm.meeting[0].checked == false  && theForm.meeting[1].checked == false && theForm.meeting[2].checked == false) 
  {
	alert("Please select meeting");
    theForm.meeting[0].focus();
    return (false);
  }
  
  for(i=0;i<theForm.meeting.length;i++)
   {
	  if(theForm.meeting[i].checked)
	  {
	  	if(theForm.sel_meeting.value=="")
	  	{
		  theForm.sel_meeting.value=theForm.meeting[i].value;
	  	}
  	  	else
     	{
	  		 theForm.sel_meeting.value=theForm.sel_meeting.value+",";
	 	 	theForm.sel_meeting.value=theForm.sel_meeting.value+theForm.meeting[i].value;
     	}
	  }
   }
  
return true;

}
  
  
  var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 10;

function formatPhone(num)
{ 
  var _return=false;
  /*
   * 7181238748 to 1(718)123-8748
   */ 

  if(num.length != 10)
  { 
    /* 
     * if user did not enter 10 digit phone number then simply print whatever user entered 
     */ 
	_return=_OUTPUT?num:false;
  } 
  else
  { 
    /* formating phone number here */ 
	_return="(";
	var ini = num.substring(0,3);
	_return+=ini+")";
	var st = num.substring(3,6);
	_return+=st+"-";
	var end = num.substring(6,10);
	_return+=end;
 }
  return _return; 
} 


function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function validate_phonenum(theForm){

    var s;

	s=stripCharsInBag(theForm.Primary_Phone.value,validWorldPhoneChars);

	ret = isInteger(s) && (s.length > 4 && s.length < 16);

	if (ret == false) {
		return false;
	}

	if (theForm.Primary_Phone.value.charAt(0) != "+") {
	    if (s.length == 10) {
	        theForm.Primary_Phone.value = formatPhone(s); 
        }
    }

	return true;
}

/* Validate Email address */

function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    return false
		 }

 		 return true					
	}
