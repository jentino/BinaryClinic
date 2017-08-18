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
	document.getElementById("theseconds").innerHTML = d.getSeconds();
	var seconds = d.getSeconds();
	var minutes = d.getMinutes();

	if(seconds == 0  && setTimerOnce == 1) {
		startTimer2();
		setTimerOnce = 10000;
	}

	dot_update("sig", minutes);
	dot_update("d3", minutes);
	dot_update("d1", minutes);
	dot_update("cur", minutes);
	dot_update("nxt", minutes);

}	

function writeBalanceToDash(updatedbalance) {
	document.getElementById("realbalance").innerHTML = updatedbalance.bold();
	showProfit(updatedbalance);		
}
		
function writeWinLossToScreen() {
	var winlossresult = countwins - countlosses;
	document.getElementById("winlossDash").innerHTML = totalwins + " / " + winlossresult;
	var totalresult = (((totalwins * (tradeamount[0])*0.94) + winlossresult*0.31).toFixed(2)).bold();
	
	document.getElementById("profitupdate1").innerHTML = (((totalwins * (tradeamount[0])*0.94) + winlossresult*0.31).toFixed(2)).bold(); //show totalwins*
		
	if(winlossresult == -2 && connectLock == "Off" && appid == 6841) {
		connectLock == "Onified";
		reConnect("kS7A68xssbTVpkE");
	}
	else if (connectLock == "On" && appid == 6490) {
		connectLock == "Onified";
		reConnect("COQz3VcylK89JoT");
	}
}

/*function returnTimer(thetime) {
	getTimer();
	var xd = new Date(0); // The 0 there is the key, which sets the date to the epoch
	xd.setUTCSeconds(thetime);
	//expiry_seconds = xd.getSeconds();
	//document.getElementById("expirySeconds").innerHTML = expiry_seconds;
	return  xd.getHours() + ":" + xd.getMinutes() + ":" + xd.getSeconds();
}*/