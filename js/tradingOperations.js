/////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){
	var str_return;
	
	if (amount > 0) {
		//playSoundCustom(20);
		countwins++;
		rescue = 0;
		//GetStatement();
		str_return = amount.bold().fontcolor("Green");
	}
	else{
		//playSoundCustom(22);
		countlosses++;
		rescue++;
		///GetStatement();
		str_return = amount.bold().fontcolor("Red");
	}
	return str_return;
}

var temp_minute = "";
//////////////////////////////////////////////////////////////////  AUTO TRADINNG
function tradeOption(direction, currentMinutes) {
	
	if(temp_minute != currentMinutes) {
		if(direction=="CALL") {
			if(signalCandle == "UP")
				Sellit(tradeamount[rescue]);
			else if(signalCandle == "DOWN")
				Buyit(tradeamount[rescue]);
		}	
    	else if (direction=="PUT") {
    		if(signalCandle == "UP")
				Buyit(tradeamount[rescue]);
			else if(signalCandle == "DOWN")
				Sellit(tradeamount[rescue]);
		}
    	document.getElementById("currentMinutes").innerHTML = currentMinutes;
    	document.getElementById("tradeaction").innerHTML = direction;
    	showRescueAmount();
    	temp_minute = currentMinutes;
	}
	else
		return 0;
    
} 
 
 // if(i != -1 && currentSeconds == 0) {
