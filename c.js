<html>
<head>
function Connect() {
	
	var token = "kS7A68xssbTVpkE";
	var appid = 6490;
	
	var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id='+appid);
	
	ws.onopen = function(evt) {
        onOpen(evt,token)
    };	
        
    onOpen = function(evt,tk) {
		var token = tk;
        ws.send(JSON.stringify({
            authorize: token
        }));
	}
	
	ws.onmessage = function(evt) {
        onMessage(evt)
    };
    
    onMessage = function(msg) {
	
        var js = JSON.parse(msg.data);
		
        if (js.error) { 
            console.log("Error: " + js.error.message);
            return;
        }
        
		if (js.msg_type == 'authorize') {
			console.log("Connected!")
		}
	}	
		        
}
</head>
<body onLoad="Connect()">
</body>
</html>