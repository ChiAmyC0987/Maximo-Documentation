// JavaScript Document
var xmlHttp;

function showCustomer(email)
{
	xmlHttp=GetXmlHttpObject()
	
	if (xmlHttp==null) 
	{
  	   alert ("Your browser does not support AJAX!");
  	   return;
  	} 
	
	if (email != "") 
	    var url="myphp.php?email="+email;
	else 
	    return;
		
	
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=stateChanged;	
	xmlHttp.send(null);
}


function stateChanged() 
{ 
	if(xmlHttp.readyState==0) 
  {
	  document.getElementById("txtHint").innerHTML="<span class=span_green> Not Initialized</span>";
  }
  else if(xmlHttp.readyState==1) 
  {
	  document.getElementById("txtHint").innerHTML="<span class=span_green> Loading..</span>";
  }
  else if(xmlHttp.readyState==2) 
  {
	  document.getElementById("txtHint").innerHTML="<span class=span_green> Loading..</span>";
  }
  else if (xmlHttp.readyState==3)
  { 
	document.getElementById("txtHint").innerHTML="<span class=span_green> Loading..</span>";
  }
  else if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
  {
	 
			
		var xmlDoc=xmlHttp.responseXML;	
		
		if(xmlDoc.getElementsByTagName("spanval")[0].childNodes[0].nodeValue=="0")
		{
			
			document.getElementById("txtHint").className="span_red";				
			document.getElementById("txtHint").innerHTML="Invalid Email-ID.";
			document.getElementById("email_check").value="true";	
			
		}
		else
		{
			document.getElementById("txtHint").className="span_borders";
			document.getElementById("txtHint").innerHTML="";
			document.getElementById("email_check").value="false";
		}	
  	}
}


function GetXmlHttpObject()
{

var xmlHttp=null;
try
  {
  	  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  	 try
    	{
		    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    	}
	catch (e)
    	{
		    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    	}
  }
return xmlHttp;
}
