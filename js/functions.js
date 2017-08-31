//////////////////////////////////////////////////// GET ASSET
function getAsset(assetval) {
    //var obj = document.getElementById("myAssets");
    document.getElementById("assetlist").innerHTML = assetval.bold();
	assetvalue = assetval;
	playSoundCustom(16);
}

//////////////////////////////////////////////////// SHOW BALANCE
function showBalance(balance) {
	
	document.getElementById("realbalance").innerHTML = balance.bold().fontcolor("Green");
}

//////////////////////////////////////////////////// SHOW PROFIT
function showProfit(updatedbalance) {
	var NewBalance = updatedbalance - OriginalBalance;
	var shownewprofit = NewBalance.toFixed(2);
	if(shownewprofit <= 0)
	  	document.getElementById("profitupdate").innerHTML = shownewprofit.bold().fontcolor("Red");
	else
		document.getElementById("profitupdate").innerHTML = shownewprofit.bold().fontcolor("Green");
}

function showRescueAmount() {
	document.getElementById("showrescueamount").innerHTML = tradeamount[rescue];
}

function returnTime(thetime) {
	//getTimer();
	var xd = new Date(0); // The 0 there is the key, which sets the date to the epoch
	xd.setUTCSeconds(thetime);
	//expiry_seconds = xd.getSeconds();
	//document.getElementById("expirySeconds").innerHTML = expiry_seconds;
	return  xd.getHours() + ":" + xd.getMinutes() + ":" + xd.getSeconds();
}