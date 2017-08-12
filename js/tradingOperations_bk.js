/////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){

	var str_return;
	
	if (amount > 0) {
		countwins++;
		rescue = 0;
		str_return = amount.bold().fontcolor("Green");
	}
	else{
		countlosses++;
		rescue++;
		str_return = amount.bold().fontcolor("Red");
	}

	return str_return;
}


//////////////////////////////////////////////////////////////////  AUTO TRADINNG
var rescue 	= 0;
var delayCount = -5;
var minuteCounter = -4;

function calcTradeTime(newTime) {
 	showRescue();
 	var dt = new Date(0); // The 0 there is the key, which sets the date to the epoch
 	dt.setUTCSeconds(newTime);
 	var minutes = dt.getMinutes();
 	//var seconds = dt.getSeconds(); 
	
	if(delayCount  === -5){
		delayTrade(minutes); //delay counttcount for 1 minute
	}
	
	document.getElementById("showminutes").innerHTML = minutes;
	document.getElementById("showdelaycount").innerHTML = delayCount;
	
 	var i = Intervals.indexOf(minutes);
 	
 	if(i != -1 && delayCount != -5) {
 		if(minuteCounter != minutes){
 		
 			if(DOT3 === "red" && Sig === "red") {
 				setColor(Sellit,tradeamount[rescue],9);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "rr_PUT";
 			} 
 			else if (DOT3 === "green" && Sig === "green") {
 				setColor(Sellit,tradeamount[rescue],9);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "gg_PUT";
 			} 
 			else if (DOT3 === "red" && Sig === "green") {
 				setColor(Buyit,tradeamount[rescue],1);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "rg_CALL";
 			} 
 			else if (DOT3 === "green" && Sig === "red") {
 				setColor(Buyit,tradeamount[rescue],1);
 				minuteCounter = minutes;
 				document.getElementById("tradeaction").innerHTML = "gr_CALL";
 			}  
 			else {
 				//document.getElementById("tradeaction").innerHTML = "No Trade"; 				
 			}
 		}
 	}
 	else {
 		document.getElementById("tradeaction").innerHTML = "No Trade"; 				
 	}
 } 
 
 
//////////////////////////////////////////////////////////////////  PING SERVER
function delayTrade(minutes) {
    setTimeout(function(){ delayCount = minutes; }, 60000);
}

// var tcount = 0;
// //////////////////////////////////////////////////////////////////  AUTO TRADINNG
// function calcTradeTime(newTime) {
// 	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
// 	d.setUTCSeconds(newTime);
// 	dm = d.getMinutes();
//     //tsec = d.getSeconds();
// 	var i = Intervals.indexOf(dm);
// 	if(i > -1) {
// 		if(tcount!=dm){
// 			if(DOT3 == "red" && Sig == "red")
// 				setColor(Buyit,tradeamount[0],1);
// 			tcount = dm;
// 		}
// 	}
// } 