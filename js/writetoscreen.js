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
	
<<<<<<< HEAD
	//dot_update("sig");
	//dot_update("d3");
	dot_update("d2");
	/*dot_update("d1");
	dot_update("cur");*/
	dot_update("nxt");
=======
	dot_update("sig", globalMinutes);
	dot_update("d3", globalMinutes);
	dot_update("d1", globalMinutes);
	dot_update("cur", globalMinutes);
	dot_update("nxt", globalMinutes);
>>>>>>> d271453551015127415b73ae7cbe4893f4043038
	
}

function writeBalanceToDash(updatedbalance) {
	document.getElementById("realbalance").innerHTML = updatedbalance.bold();
	showProfit(updatedbalance);		
}
		
function writeWinLossToScreen() {	
	var winlossresult = countwins - countlosses;
	document.getElementById("winlossDash").innerHTML = totalwins + " / " + winlossresult;
	
	var calcResult = totalwins*0.31 - countlosses*0.35;
	document.getElementById("profitupdate1").innerHTML = ((calcResult).toFixed(2)).bold(); 
	
<<<<<<< HEAD
	if(winlossresult == -3 && connectLock == "Off" && appid == 10122 /*appid == 10123*/) {
=======
	if(winlossresult == -1 && connectLock == "Off" && appid == 10122) {
>>>>>>> d271453551015127415b73ae7cbe4893f4043038
		winlossLock = "On";
		connectLock = "DEMO";
		reConnect("kS7A68xssbTVpkE");
	}
	else if (connectLock == "On" && appid == 6490) {
<<<<<<< HEAD
		rescue++;
=======
>>>>>>> d271453551015127415b73ae7cbe4893f4043038
		winlossLock = "Off";
		countlosses = 0;
		masterLock = "On";
		connectLock = "Live";
<<<<<<< HEAD
		//reConnect("nBvBHHOe84bgXMK"); //Jenty Live
		reConnect("xwzTFS9BwGxjPZZ"); //Carline demo
=======
		reConnect("xwzTFS9BwGxjPZZ");
>>>>>>> d271453551015127415b73ae7cbe4893f4043038
	}
}

