//////////////////////////////////////////////////// PARSE JSON RESPONSES (WRITETOSCREEN)////////////////////////////////////////////////
onMessage = function(msg) {
	
        js = JSON.parse(msg.data);
		
		//Just for check for error
        if (js.error) { 
            writeToScreen("Error: " + js.error.message);
            return;
        }

        //Display response from authorization
		if (js.msg_type == 'authorize') {
			connectLock = "SDFSDF";
			playSoundCustom(14);
			var get = parseGetVars();            
            writeToScreen("Authorized OK -------------------------------------------------------------------------".bold().fontcolor("Green") + "<br>  Email: " + (js.authorize.email).bold() + "  Account: " + (js.authorize.loginid).bold() + " Amount = " + "$ ".bold() + (js.authorize.balance).bold());
			writeToScreenEmail((js.authorize.email).bold());
			OriginalBalance = js.authorize.balance;
			document.getElementById("originalbalance").innerHTML = OriginalBalance.bold();
			document.getElementById("showappid").innerHTML = appid;
		    onPinger(); //poll server ping for 24 hours
	        onSecTimer(); //poll time for 24 hours	
	        rescue = 0;        
	        //onCandleTimer();
	        subscribeTransactions();
			showBalance(OriginalBalance);
			writeWinLossToScreen();
        }

		if (js.msg_type == 'time') {
            writeTimeToScreen(js.time);
        }
		
		if (js.msg_type == 'transaction') {
            writeBalanceToDash(js.transaction.balance);
		}
		
		if (js.msg_type == 'profit_table') {
            writeToScreen(js.profit_table.count);
        }
		
		
		if (js.msg_type == 'statement') {
			
			//writeToScreen("> ----------------------- Trade Finished ------------------------ <");
		
			for(var i in js.statement.transactions)
				writeToScreen("> " + checkWinOrLoss(js.statement.transactions[i].amount));
				writeWinLossToScreen();
				
        }
		
		
		if (js.msg_type == 'portfolio') {
			
			//writeToScreen("> ----------------------- Trade Entered ------------------------ <");
        
			for(var g in js.portfolio.contracts)
				writeToScreen("> $" + js.portfolio.contracts[g].buy_price + " Action : ".bold()  +  js.portfolio.contracts[g].contract_type);
				
        }
		
}