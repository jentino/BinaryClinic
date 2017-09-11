//////////////////////////////////////////////////// WRITE TO SCREEN FUNCTIONS ////////////////////////////////////////////////
function writeToScreen(message) {
	var div = document.createElement("p");
	div.style.wordWrap = "break-word";
	div.innerHTML = message;    
	output.appendChild(div);    
	div.scrollIntoView(); 	       
}
		
// function writeToScreenEmail(email) {
// 	document.getElementById("welcomeuser").innerHTML = trader_name.bold();
// }

var setTimerOnce = 1;	
function writeTimeToScreen(thetime) {
	
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(thetime);
	
	globalMinutes = d.getMinutes();
	
	if(d.getSeconds() == 0  && setTimerOnce == 1) {
		startTockClock();
		setTimerOnce = 10000;
	}
	document.getElementById("showTheTime").innerHTML = d.getHours() +  ":" + d.getMinutes();

}	

function pollCandles(){
	//alert("I am in pollCandles function");
	
	//pingServer();
	
	//dot_update("sig");
	//dot_update("d3");
		/*dot_update("d2");
dot_update("d1");
	dot_update("cur");*/
	dot_update("nxt");
	
}

function writeBalanceToDash(updatedbalanceamount) {
	document.getElementById("realbalance").innerHTML = updatedbalanceamount.bold();
}
//var cyclecount = 0;	
function writeWinLossToScreen() {	

	
	var winlossresult = countwins - countlosses;
	
	document.getElementById("winlossDash").innerHTML = totalwins + " / " + winlossresult;

	// if(totalwins > 1) {
	// 	cyclecount++;
	// }

	//document.getElementById("winlossDash").innerHTML = totalwins + "/32";

	document.getElementById("profitupdate").innerHTML = (tradeProfit - tradeLoss).toFixed(2); 
	
	if(winlossresult == -1 && connectLock == "Off" && appid_temp == appidlive) {
		winlossLock = "On";
		connectLock = "DEMO";
		//writeToScreen("Loggedin as" + appiddemo);
		reConnect(tokeniddemo, appiddemo);
	}
	else if (connectLock == "On" && appid_temp == appiddemo) {
		winlossLock = "Off";
		countlosses = 0;
		connectLock = "Live";
		//writeToScreen("Loggedin as" + appidlive);
		reConnect(tokenidlive,appidlive);
	}
}

