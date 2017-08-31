/////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){
	var str_return;
	
	if (amount > 0) {
		connectLock = "On";
		if(winlossLock == "Off"){
			totalwins++;
			countlosses = 0;
<<<<<<< HEAD
			rescue = 0;
		}
		
=======
		}
		rescue = 0;
>>>>>>> d271453551015127415b73ae7cbe4893f4043038
		str_return = "win".bold().fontcolor("Green");
		//playSoundCustom(21);
	}
	else{
		connectLock = "Off";
<<<<<<< HEAD
		
		
=======
		rescue++;
		
>>>>>>> d271453551015127415b73ae7cbe4893f4043038
		if(winlossLock == "Off"){
			countlosses++;
		}
		str_return = "loss".bold().fontcolor("Red");
<<<<<<< HEAD
		//playSoundCustom(22);
=======
		playSoundCustom(22);
>>>>>>> d271453551015127415b73ae7cbe4893f4043038
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
		
	PingBinServer();
    
} 