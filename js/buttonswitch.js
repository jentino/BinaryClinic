//////////////////////////////////////////////////////////////////  TRADE BUTTONS COLOR SWITCH
var btn_temp = 0;

function setColor(trade,amount,btn) {

	document.getElementById("showreport").innerHTML = trade;
	document.getElementById("showtradeamount").innerHTML = amount;
    trade(amount);
    
    
		    
	var propertrry = document.getElementById("trade_buttons"+btn);
		    
	if(btn_temp > 0) 
		{
		var property_temp = document.getElementById("trade_buttons"+btn_temp);
		property_temp.style.backgroundColor = "";		
		}

	if((btn > 1 && btn < 9) || (btn > 9 && btn < 17)){
		
		countlosses--;	
	}
    propertrry.style.backgroundColor = "Lime";
    if(btn == 1 || btn == 9) playSoundCustom(13);
	else if(btn == 2 || btn == 10) playSoundCustom(13);
	else if(btn == 3 || btn == 11) playSoundCustom(13);
	else if(btn == 4 || btn == 12) playSoundCustom(13);
	else playSoundCustom(13);
	btn_temp = btn;    
            					
      
}