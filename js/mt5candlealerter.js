
function dot_update(dbgindex, minutes){

  	if (dbgindex == "d3") {
  		
	    var display_div_id = "showdot3";
	    var data = "candle_id=dot3";
	    var green = "greendot";
	    var red = "reddot";
  	}
  	else if (dbgindex == "d1") {
	    var display_div_id = "showdot1";
	    var data = "candle_id=dot1";
	    var green = "greendot";
	    var red = "reddot";
  	}
  	else if (dbgindex == "sig") {
	    var display_div_id = "showsignalcandle";
	    var data = "candle_id=candle6";
	    var green = "greencandle";
	    var red = "redcandle";
  	}
  	else if (dbgindex == "cur") {
	    var display_div_id = "showcurrentcandle";
	    var data = "candle_id=candle1";
	    var green = "greencandle";
	    var red = "redcandle";
  	}
  	else if (dbgindex == "nxt") {
	    var display_div_id = "shownextcandle";
	    var data = "candle_id=candle5";
	    var green = "greencandle";
	    var red = "redcandle";
  	}

 	var xhr;

 	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    	xhr = new XMLHttpRequest();
  	} 
   
    else if (window.ActiveXObject) { // IE 8 and older
      	xhr = new ActiveXObject("Microsoft.XMLHTTP");
  	}

  	xhr.open("POST", "../includes/dot_dblist.php", true); 
  	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
  	xhr.send(data);         
	
  	xhr.onreadystatechange = display_data;
	
	function display_data() {
		
	    if (xhr.readyState == 4) {
	      	if (xhr.status == 200) {
	      		document.querySelector('#showtradeLock').innerHTML = tradeLock;
	      		document.querySelector('#showportfolioLock').innerHTML = portfolioLock;
	      		document.querySelector('#showstatementLock').innerHTML = statementLock;
	      		document.querySelector('#showconnectLock').innerHTML = connectLock;
	      		
	      		var searchMinute = Intervals.indexOf(minutes);
	      			      		
		        if(xhr.responseText == "1"){
		        	
		        	document.getElementById(display_div_id).innerHTML = "<img src=../img/"+green+".png>";
		          	
		          	if (data == "candle_id=candle6") {
		          		signalCandle = "UP";
					}
					
					if(data == "candle_id=dot3") {
	           			
						if(tockSeconds == 59 && searchMinute == -1){
							
							tradeLock = "On";
							tradeOption("CALL",globalMinutes);
							playSoundCustom("2");	
						}
						
						else if(tockSeconds == 3 && searchMinute != -1) {
							
							portfolioLock = "On";
							statementLock = "Off";
							GetPortfolio();
							playSoundCustom("18");
							
						} 
						
						else if(tockSeconds == 4 && tradeLock == "On" && statementLock == "Off" && searchMinute == -1){
							GetProfitTable();
							tradeLock = "Off";
							portfolioLock = "Off";
							statementLock = "On";
							playSoundCustom("20");
						}
						
						
	           		}
		          	
		        }
	       		else if(xhr.responseText == "2"){
	        		
	          		document.getElementById(display_div_id).innerHTML = "<img src=../img/"+red+".png>";
	           		
	           		if (data == "candle_id=candle6") {
		          		signalCandle = "DOWN";
					}
					
					if(data == "candle_id=dot3") {
	           			
						if(tockSeconds == 59 && searchMinute == -1){
							
							tradeLock = "On";
							tradeOption("PUT",globalMinutes);
							playSoundCustom("2");	
						}
						
						else if(tockSeconds == 3 && searchMinute != -1) {
							
							portfolioLock = "On";
							statementLock = "Off";
							GetPortfolio();
							playSoundCustom("18");
							
						} 
						
						else if(tockSeconds == 4 && tradeLock == "On" && statementLock == "Off" && searchMinute == -1){
							GetProfitTable();
							tradeLock = "Off";
							portfolioLock = "Off";
							statementLock = "On";
							playSoundCustom("20");
						}
						
	           		}
	           		
	        	}
		        else {
		        	
					document.getElementById(display_div_id).innerHTML = "!";
				}
		    }
		}
	}
}