//////////////////////////////////////////////////// WRITE TO SCREEN FUNCTIONS ////////////////////////////////////////////////
function writeToScreen(message) {
	var div = document.createElement("p");
	div.style.wordWrap = "break-word";
	div.innerHTML = message;    
	output.appendChild(div);    
	div.scrollIntoView(); 	       
}
		
function writeToScreenEmail(email) {
	document.getElementById("welcomeuser").innerHTML = trader_name.bold();
}

var setTimerOnce = 1;	
function writeTimeToScreen(thetime) {
	
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(thetime);
	
	globalMinutes = d.getMinutes();
	
	if(d.getSeconds() == 0  && setTimerOnce == 1) {
		startTockClock();
		setTimerOnce = 10000;
	}
	document.getElementById("showTheminute").innerHTML = d.getMinutes();

}	

function pollCandles(){
	
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
		
function writeWinLossToScreen() {	
	var winlossresult = countwins - countlosses;
	
	document.getElementById("winlossDash").innerHTML = totalwins + " / " + winlossresult;

	document.getElementById("profitupdate").innerHTML = (tradeProfit - tradeLoss).toFixed(2).bold(); 
	
	if(winlossresult == -2 && connectLock == "Off" && appid == 6490) {    /*appid == 10122*/
		winlossLock = "On";
		connectLock = "DEMO";
		reConnect("xwzTFS9BwGxjPZZ");
	}
	else if (connectLock == "On" && appid == 10122) {
		
		winlossLock = "Off";
		countlosses = 0;
		connectLock = "Live";
		//reConnect("nBvBHHOe84bgXMK"); //Jenty Live
		reConnect("kS7A68xssbTVpkE"); //Carline live
	}
}

