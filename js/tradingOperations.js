/////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){
	var str_return;
	
	if (amount > 0) {
		connectLock = "On";
		if(winlossLock == "Off"){
			totalwins++;
			countlosses = 0;
		}
		rescue = 0;
		str_return = "win".bold().fontcolor("Green");
		playSoundCustom(21);
	}
	else{
		connectLock = "Off";
		rescue++;
		
		if(winlossLock == "Off"){
			countlosses++;
		}
		str_return = "loss".bold().fontcolor("Red");
		playSoundCustom(22);
	}
	return str_return;
}


//////////////////////////////////////////////////////////////////  AUTO TRADINNG
function tradeOption(direction, currentMinutes) {
	
	if(temp_minute != currentMinutes) {
		if(direction == "CALL") {
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
    	//showRescueAmount();
    	temp_minute = currentMinutes;
    	
	}
	else
		return 0;
    
} 