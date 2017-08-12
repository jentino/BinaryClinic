/////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){
	var str_return;
	
	if (amount > 0) {
		playSoundCustom(20);
		countwins++;
		rescue = 0;
		//GetStatement();
		str_return = amount.bold().fontcolor("Green");
	}
	else{
		playSoundCustom(22);
		countlosses++;
		rescue++;
		///GetStatement();
		str_return = amount.bold().fontcolor("Red");
	}
	return str_return;
}


//////////////////////////////////////////////////////////////////  AUTO TRADINNG
function tradeOption(direction, currentMinutes) {
    if(direction=="CALL") Buyit(tradeamount[rescue]);
    else if (direction=="PUT") Sellit(tradeamount[rescue]);
    document.getElementById("d3inside").innerHTML = currentMinutes;
    document.getElementById("tradeaction").innerHTML = direction;
    showRescueAmount();
} 
 
 // if(i != -1 && currentSeconds == 0) {
