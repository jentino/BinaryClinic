onMessage = function(msg) {


	
	js = JSON.parse(msg.data);
	
			if (js.error) { 
				writeToScreen("Error: " + js.error.message);
				return;
			}
			
			else if (js.msg_type == 'authorize') {
				connectLock = "Switch";
				playSoundCustom(14);
				var get = parseGetVars();            
				writeToScreen(js.authorize.email + "-------------------");
				writeToScreenEmail((js.authorize.email).bold());
				
				if(OriginalBalanceLock == "Off"){
					OriginalBalance = js.authorize.balance;
					document.getElementById("originalbalance").innerHTML = OriginalBalance.bold();
					OriginalBalanceLock = "On";
					writeWinLossToScreen();
				}
					
				onSecTimer();
				showRescueAmount();
				subscribeTransactions();
				showBalance(OriginalBalance);
				
			}
			
			else if (js.msg_type == 'time') {
				writeTimeToScreen(js.time);
			}
			
			else if (js.msg_type == 'portfolio') {
						
				for(var g in js.portfolio.contracts){
	
					writeToScreen("> " + js.portfolio.contracts[g].buy_price + " ," + js.portfolio.contracts[g].contract_type + " ," + js.portfolio.contracts[g].transaction_id + " ," + returnTime(js.portfolio.contracts[g].purchase_time));
	
					tradeOptionIdLock = js.portfolio.contracts[g].transaction_id;
					
				}
					
			}
			
			else if (js.msg_type == 'profit_table') {
				for(var f in js.profit_table.transactions)
					writeToScreen("= " + checkWinOrLoss(js.profit_table.transactions[f].buy_price,js.profit_table.transactions[f].sell_price) + " ," + js.profit_table.transactions[f].transaction_id);
					writeWinLossToScreen();
			}
			
			else if (js.msg_type == 'transaction') 
				writeBalanceToDash(js.transaction.balance);

};