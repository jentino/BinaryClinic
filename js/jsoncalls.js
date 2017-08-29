///////////////////////////////////////////////// BUY FUNCTION /////////////////
function Buyit(buydollars) {
        if (ws) {
		    
            ws.send(JSON.stringify({
			   "buy": "uw2mk7no3oktoRVVsB4Dz7TQnFfABuFDgO95dlxfMxRuPUsz",
			   "price": 120,
			   "parameters": 
			   {
				   "amount":buydollars,
				   "basis": "stake",
				   "contract_type": "CALL",
				   "currency":"USD",
				   "duration":"60",
				   "duration_unit": "s",
				   "proposal": 1,
					"symbol": assetvalue
				}
				
			}));
			
			countbuys++;
			playSoundCustom(5);
        }
}
	
//////////////////////////////////////////////////// SELL FUNCTION ///////////////////////
function Sellit(selldollars) {
       if (ws) {
		    
            ws.send(JSON.stringify({
			   "buy": "uw2mk7no3oktoRVVsB4Dz7TQnFfABuFDgO95dlxfMxRuPUsz",
			   "price": 121,
			   "parameters": 
			   {
				   "amount":selldollars,
				   "basis": "stake",
				   "contract_type": "PUT",
				   "currency":"USD",
				   "duration":"60",
				   "duration_unit": "s",
				   "proposal": 1,
					"symbol": assetvalue
				}
				
			}));
			
			countsells++;
			playSoundCustom(5);
        }
}
	
//////////////////////////////////////////////////// GET BALANCE

function GetBalance() {
        if (ws) {
            ws.send(JSON.stringify({
                "balance": 1
            }));
			
        }
}
	
//////////////////////////////////////////////////// GET PROFIT
function subscribeTransactions() {
        if (ws) {
		   
            ws.send(JSON.stringify({
				"transaction": 1,
				"subscribe": 1
			}));
        }
}

//////////////////////////////////////////////////// GET STATEMENT

function GetStatement() {
        if (ws) {
              ws.send(JSON.stringify({
				  "statement": 1,
				  "description": 1,
				  "limit": 1
			}));
        }
}
	
//////////////////////////////////////////////////// GET PORTFOLIO
	
function GetPortfolio() {
		// falert("inside jsoncalls.js");
        if (ws) {
		    
            ws.send(JSON.stringify({
				"portfolio": 1
			}));
        }
}


function GetProfitTable() {
        if (ws) {
		    
            ws.send(JSON.stringify({
			  "profit_table": 1,
			  "limit": 1
			}));
        }
}


function GetTimer() {
	if (ws) {
		ws.send(JSON.stringify({
		"time": 1
		}));
	}

}

function PingServer() {
	if (ws) {
		ws.send(JSON.stringify({
		"ping": 1
		}));
	}
}
