/////////////////////////////////////////////////////////////////  DISPLAY SERVER TIME SECONDS ON DASHBOARD
ii = 86400;
function onSecTimer() {
		  
		  ii--;
		  if (ws) {
			  ws.send(JSON.stringify({
	                time: 1
	            }));
	          }
		  if (ii < 0) {
			writeToScreen("Time is Up")
		  }
		  else {
			setTimeout(onSecTimer, 1000);
		  }
		  
}


//////////////////////////////////////////////////////////////////  PING SERVER
k = 86400;
function onPinger() {
  k--;
	if (ws) {
		    
            ws.send(JSON.stringify({
                ping: 1
            }));
            
        }
    setTimeout(onPinger, 1000);
	
}


       
stx = 0;

function startTimer2() {
	
    stx++;
    if(stx > 0)
        timer2.start();
    else
        setTimeout(startTimer2, 1000);
}




