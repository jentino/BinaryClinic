/////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(buyprice,amount){
	var str_return;
	
	if (amount > 0) {
		connectLock = "On";
		if(winlossLock == "Off"){
			tradeProfit = tradeProfit + parseFloat(buyprice)*0.89;
			totalwins++;
			countlosses = 0;
			rescue = 0;
			//reConnect("COQz3VcylK89JoT");
		}
		
		str_return = "Win".bold().fontcolor("Green");
		//playSoundCustom(21);
	}
	else {
		connectLock = "Off";

		if(winlossLock == "Off"){
			tradeLoss = tradeLoss + parseFloat(buyprice);
			countlosses++;
			rescue++;
		}
		str_return = "Loss".bold().fontcolor("Red");
		//playSoundCustom(22);
	}
	return str_return;
}


//////////////////////////////////////////////////////////////////  AUTO TRADINNG
function tradeOption(direction, currentMinutes) {
	
	if(temp_minute != currentMinutes) {
		if(direction == "RED") {
			if(signalCandle == "UP")
				Buyit(tradeamount[rescue]);
			else if(signalCandle == "DOWN")
				Sellit(tradeamount[rescue]);
		}	
    	else if (direction=="GREEN") {
    		if(signalCandle == "UP")
				Sellit(tradeamount[rescue]);
			else if(signalCandle == "DOWN")
				Buyit(tradeamount[rescue]);
		}
    	//document.getElementById("currentMinutes").innerHTML = currentMinutes;
    	//document.getElementById("tradeaction").innerHTML = direction;
    	showRescueAmount();
    	temp_minute = currentMinutes;
    	
	}
	else
		return 0;
		
	PingBinServer();
    
} 