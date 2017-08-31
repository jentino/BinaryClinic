var tradeLock = 333;
function dot_update(dbgindex){

  	if (dbgindex == "d3") {
  		
	    var display_div_id = "showdot3";
	    var data = "candle_id=dot3";
	    var green = "greendot";
	    var red = "reddot";
  	}
  	else if (dbgindex == "d2") {
	    var display_div_id = "showdot2";
	    var data = "candle_id=dot2";
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
	      		
	      		var searchMinute = Intervals.indexOf(globalMinutes);
	      			      		
		        if(xhr.responseText == "1"){
		        	
		        	document.getElementById(display_div_id).innerHTML = "<img src=../img/"+green+".png>";
		          	
		          	if (data == "candle_id=candle5") {
		          		signalCandle = "UP";
					}
					
					if(data == "candle_id=dot2") {
	           			
						if(tockSeconds == 59 && searchMinute == -1 && tradeLock == 333){
							tradeLock = 111;
							tradeOption("CALL",globalMinutes);
							//playSoundCustom("2");	
						}
						
						else if(tockSeconds == 4 && searchMinute !== -1 && tradeLock == 111) {
							tradeLock = 222;
							GetPortfolio();
							//playSoundCustom("18");
						} 
						
						else if(tockSeconds == 5 && searchMinute == -1 && tradeLock == 222){
							tradeLock = 333;
							GetProfitTable();
							//playSoundCustom("20");
						}
						
	           		}
		          	
		        }
	       		else if(xhr.responseText == "2"){
	        		
	          		document.getElementById(display_div_id).innerHTML = "<img src=../img/"+red+".png>";
	           		
	           		if (data == "candle_id=candle5") {
		          		signalCandle = "DOWN";
					}
					
					if(data == "candle_id=dot2") {
	           			
						if(tockSeconds == 59 && searchMinute == -1 && tradeLock == 333){
							tradeLock = 111;
							tradeOption("PUT",globalMinutes);
							//playSoundCustom("2");	
						}
						
						else if(tockSeconds == 4 && searchMinute !== -1 && tradeLock == 111) {
							tradeLock = 222;
							GetPortfolio();
							//playSoundCustom("18");
						} 
						
						else if(tockSeconds == 5 && searchMinute == -1 && tradeLock == 222){
							tradeLock = 333;
							GetProfitTable();
							//playSoundCustom("20");
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