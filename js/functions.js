//////////////////////////////////////////////////// GET ASSET
// function getAsset(assetval) {
//     //var obj = document.getElementById("myAssets");
//     document.getElementById("assetlist").innerHTML = assetval.bold();
// 	assetvalue = assetval;
// 	playSoundCustom(16);
// }

function showtock() {
	return tockSeconds;
  }

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

function mypb(ticks){
	$(function() {
		var current_progress = 0;
			current_progress = (ticks/60 * 100).toFixed();
			$("#dynamic")
			.css("width", current_progress + "%")
			.attr("aria-valuenow", current_progress)
			.text(current_progress + "% Profit");
			if (current_progress >= 100)
				current_progress = 0;
	  });
}