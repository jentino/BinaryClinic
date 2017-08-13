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
		
function writeTimeToScreen(thetime) {
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(thetime);
	document.getElementById("theseconds").innerHTML = d.getSeconds();
	var seconds = d.getSeconds();
	var minutes = d.getMinutes();
	dot_update("d1",seconds,minutes);
	dot_update("d3",seconds,minutes);
	dot_update("sig",seconds,minutes);
	dot_update("cur",seconds,minutes);
	dot_update("nxt",seconds,minutes);
}	
		
function returnTime(thetime) {
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(thetime);
	return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();					
}

function writeBalanceToDash(thebalance) {
	document.getElementById("realbalance").innerHTML = thebalance.bold();
	showProfit(thebalance);		
}
		
function writeSellItToScreen(thebalance) {
	showProfit(thebalance);			
}

function writeWinLossToScreen() {
	var winlossresult = countwins - countlosses;
	document.getElementById("winlossDash").innerHTML = winlossresult;	
}