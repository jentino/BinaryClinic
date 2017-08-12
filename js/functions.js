//////////////////////////////////////////////////// GET ASSET
function getAsset(assetval) {
    var obj = document.getElementById("myAssets");
    document.getElementById("assetlist").innerHTML = obj.options[obj.selectedIndex].text.bold();
	assetvalue = assetval;
	playSoundCustom(16);
}

//////////////////////////////////////////////////// SHOW BALANCE
function showBalance(balance) {
	
	document.getElementById("realbalance").innerHTML = balance.bold().fontcolor("Green");
}

//////////////////////////////////////////////////// SHOW PROFIT
function showProfit(balance) {
	var NewBalance = balance - OriginalBalance;
	var showprofit = NewBalance.toFixed(2);
	if(showprofit <= 0)
	  	document.getElementById("profitupdate").innerHTML = showprofit.bold().fontcolor("Red");
	else
		document.getElementById("profitupdate").innerHTML = showprofit.bold().fontcolor("Green");
}

function showRescueAmount() {
	document.getElementById("rescueamount").innerHTML = tradeamount[rescue];
}


