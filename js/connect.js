
///////////////////////////////////////////////////////// Connect to websocket server
 function Connect(token) {
		var appid;
        output = document.getElementById("debug");
		document.getElementById("debug").innerHTML = "Connecting ..."
		outputemail = document.getElementById("welcomeuser");
		playSoundCustom(16);
        if (token == '') {
            writeToScreen("Invalid API Token");
            return;
        } 

		else if (token == "kS7A68xssbTVpkE"){
			appid = 6490;
			trader_name = "Jenty Demo Account";
		}

		else if (token == "nBvBHHOe84bgXMK"){
			appid = 10123;
			trader_name = "Jenty Real Account";
		}

		else if (token =="COQz3VcylK89JoT"){
			appid = 6841;
			trader_name = "Carline Real Account";
		}

		else if(token =="xwzTFS9BwGxjPZZ"){
			appid = 10122;
			trader_name = "Carline Demo Account";
		}
			
		else 
			{ 
			writeToScreen("API token is not authorized");
			return;
			}
			
		ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id='+appid); 
		
			
//////////////////////////////////////////////////////////Event listeners
		
		//listen to request to open websocket
		ws.onopen = function(evt) {
            onOpen(evt,token)
        };
        
		//listen to request to write to console
		ws.onmessage = function(evt) {
            onMessage(evt)
        };
}