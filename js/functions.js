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

function loggin2Account(){
	var xhr;
	var data = "token_id=xwzTFS9BwGxjPZZ&asset_id=R_100";
 	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    	xhr = new XMLHttpRequest();
  	} 
   
    else if (window.ActiveXObject) { // IE 8 and older
      	xhr = new ActiveXObject("Microsoft.XMLHTTP");
  	}

  	xhr.open("POST", ".index.php", true); 
  	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
  	xhr.send(data);
}


