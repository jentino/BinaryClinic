var tradeLock = 333;

function dot_update(dbgindex){
	//alert("sdfsfsfs");
	//document.getElementById("assetvalue").innerHTML = assetvalue;
	
  	var display_div_id = "shownextcandle";
	var data = "candle_id=candle5";
	var green = "tinygreenbox";
	var red = "tinyredbox";
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
					signalCandle = "UP";
					  
		        }
	       		else if(xhr.responseText == "2"){
	        		
	          		document.getElementById(display_div_id).innerHTML = "<img src=../img/"+red+".png>";
					signalCandle = "DOWN";
					   
	        	}
		        else {
					document.getElementById(display_div_id).innerHTML = "!";
				}
				
				if(tockSeconds == 59 && searchMinute == -1 && tradeLock == 333){
						//alert("seeeeeeeeeeeeeeeeeelllllllllllllllllllll");
					tradeLock = 111;
					if(tradeDirection == "RED"){

						tradeDirection = "GREEN";
						//document.getElementById("tradeDirectionqq").innerHTML = tradeDirection;
						tradeOption("RED",globalMinutes);
					}

					else if(tradeDirection == "GREEN") {
						//alert("seeeeeeeeeeeeeeeeeelllllllllllllllllllll");
						tradeDirection = "RED";
						//document.getElementById("tradeDirectionqq").innerHTML = tradeDirection;
						tradeOption("GREEN",globalMinutes);
					}
				}  
						
				else if(tockSeconds == 4 && searchMinute !== -1 && tradeLock == 111) {
						if(newtradeOptionIdLock != oldtradeOptionIdLock){
							//alert("seeeeeeeeeeeeeeeeeelllllllllllllllllllll");
							tradeLock = 222;
							GetPortfolio();
							playSoundCustom("18");
							oldtradeOptionIdLock = newtradeOptionIdLock;
							
						}
						else {
							
							tradeLock = 333;
							return;
						}
							
				} 
						
				else if(tockSeconds == 5 && searchMinute == -1 && tradeLock == 222){

					tradeLock = 333;
					GetProfitTable();
					playSoundCustom("20");
				}
	           	
		    }
		}
	}
}