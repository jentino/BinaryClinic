//////////////////////////////////////////////////// GET ASSET
// function getAsset(assetval) {
//     //var obj = document.getElementById("myAssets");
//     document.getElementById("assetlist").innerHTML = assetval.bold();
// 	assetvalue = assetval;
// 	playSoundCustom(16);
// }

//////////////////////////////////////////////////// SHOW BALANCE
function showBalance(balance) {
	
	document.getElementById("realbalance").innerHTML = balance.bold().fontcolor("Green");
}

function showRescueAmount() {
	document.getElementById("showrescueamount").innerHTML = tradeamount[rescue];
}

function returnTime(thetime) {
	
	var xd = new Date(0); // The 0 there is the key, which sets the date to the epoch
	xd.setUTCSeconds(thetime);
	return  xd.getMinutes() + ":" + xd.getSeconds();
}