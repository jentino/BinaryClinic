function Connect(token, appid) {
    
            output = document.getElementById("debug");
            document.getElementById("debug").innerHTML = "Connecting ... " ;
             //document.getElementById("currentappid").innerHTML = tokenidlive;
            // document.getElementById("tradeDirectionqq").innerHTML = tradeDirection;
            // outputemail = document.getElementById("welcomeuser");
            appid_temp = appid;
            playSoundCustom(16);
            
            if (token == '') {
                writeToScreen("Invalid API Token");
                return;
            } 
                
            else { 

                ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id='+appid); 
                
                //////////////////////////////////////////////////////////Event listeners
            
                //listen to request to open websocket
                ws.onopen = function(evt) {
                    onOpen(evt,token);
                };
                
                //listen to request to write to console
                ws.onmessage = function(evt) {
                    onMessage(evt);
                };
            }
}
                
           