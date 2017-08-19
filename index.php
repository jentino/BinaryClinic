<?php 
	if($tokenid == '')
		$tokenid = "xwzTFS9BwGxjPZZ";
	else	
		$tokenid = $_GET['token_id'];
	
	if($assetid ==  '')
		$assetid = "R_100";
	else	
		$assetid = $_GET['asset_id'];
?>


<html>
<head>
    <meta charset="utf-8" />
    <title>Binary Clinic</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link href="//cdn.rawgit.com/cornflourblue/angular-registration-login-example/master/app-content/app.css" rel="stylesheet" />
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<script type="text/javascript" src="js/inputvariables.js"></script>
	<script type="text/javascript" src="js/splitwebstring.js"></script>
	<script type="text/javascript" src="js/connect.js"></script>
	<script type="text/javascript" src="js/onOpen.js"></script>
	<script type="text/javascript" src="js/jsonresponses.js"></script>
	<script type="text/javascript" src="js/jsoncalls.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>
	<script type="text/javascript" src="js/buttonswitch.js"></script>
	<script type="text/javascript" src="js/playsound.js"></script>
	<script type="text/javascript" src="js/timers.js"></script>
	<script type="text/javascript" src="js/writetoscreen.js"></script>
	<script type="text/javascript" src="js/mt5candlealerter.js"></script>
	<script type="text/javascript" src="js/tradingOperations.js"></script>
	<script type="text/javascript" src="js/tock.js"></script>
	<script type="text/javascript" src="js/reconnect.js"></script>
</head>


<body onLoad="Connect('<?php echo $tokenid ?>'); getAsset('<?php echo $assetid ?>');">

<!-------------------------------------- AUDIO ------------------------------------------------- -->

<audio id="audio" src="sounds/beep.wav" autostart="false" ></audio>
<audio id="audio1" src="sounds/pokerchip1.wav" autostart="false" ></audio>
<audio id="audio2" src="sounds/pokerchip2.wav" autostart="false" ></audio>
<audio id="audio3" src="sounds/pokerchip3.wav" autostart="false" ></audio>
<audio id="audio4" src="sounds/pokerchip4.wav" autostart="false" ></audio>
<audio id="audio5" src="sounds/pokerchip5.wav" autostart="false" ></audio>

<audio id="audio9" src="sounds/pokerchip1.wav" autostart="false" ></audio>
<audio id="audio10" src="sounds/pokerchip2.wav" autostart="false" ></audio>
<audio id="audio11" src="sounds/pokerchip3.wav" autostart="false" ></audio>
<audio id="audio12" src="sounds/pokerchip4.wav" autostart="false" ></audio>
<audio id="audio13" src="sounds/pokerchip5.wav" autostart="false" ></audio>

<audio id="audio14" src="sounds/loggedin.wav" autostart="false" ></audio>
<audio id="audio15" src="sounds/beepbeep.wav" autostart="false" ></audio>
<audio id="audio16" src="sounds/flip.wav" autostart="false" ></audio>
<audio id="audio17" src="sounds/shortping.wav" autostart="false" ></audio>
<audio id="audio18" src="sounds/lowping.wav" autostart="false" ></audio>
<audio id="audio19" src="sounds/highpop.wav" autostart="false" ></audio>
<audio id="audio20" src="sounds/woncoins.wav" autostart="false" ></audio>
<audio id="audio21" src="sounds/woncoin.wav" autostart="false" ></audio>
<audio id="audio22" src="sounds/lost1.wav" autostart="false" ></audio>
<audio id="audio23" src="sounds/lost2.wav" autostart="false" ></audio>


    <div id="login-overlay" class="modal-dialog">
      	<div class="modal-content">
          	<div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
              		<span aria-hidden="true"><div id="showappid"></div></span>
              		<span class="sr-only">Close</span>
              	</button>
              		
<!-------------------------------------  HEADER ---------------------------------------------->	
              	
              	<div id="row">
	  				<center>
					    <div id="left1">
					        <h4>Server</h4>
					          <p>
					          <div id="theseconds"></div>
					        </p>
					    </div>
					      
					    <div id="middle1">
					    	
						    <div id="timer2">
						      <h4>Timer</h4>
						       <span class="field2 time"></span>
						        
						    </div>
					    </div>
					    
					    <div id="right1">
					      <h4>Other</h4>
					        <p>
					        <div id="showServerSeconds"></div>
					      </p>
					    </div>

					    <div id="right1">
					      <h4>W/L</h4>
					        <p>
					        <div id="winlossDash"></div>
					      </p>
					    </div>
					    
					    <div id="right">
					      <h4>Next</h4>
					        <p>
					        <div id="shownextcandle"></div>
					      </p>
					    </div>
					    
					    <div id="right">
						  		<div>MT5</div>
						  	</div>
						  	<div id="right">
						  		<div id="showMT5seconds"></div>
						  	</div>
						  	
						  	
					</center>  
				</div> 
			
		</div>
		
<!-------------------------------------  BODY ---------------------------------------------->

          	<div class="modal-body">
              	<div class="row">
                  	<div class="col-xs-6">
                  	
			        	<div id="row" class="lightsConsole">
							
							<div id="left">
						  		<div>D3</div>
						  	</div>
						  	<div id="right">
						  		<div id="showdot3"></div>
						  	</div>
						  	
						  	<div id="left">
						  		<div>D1</div>
						  	</div>
						  	<div id="middle">
						  		<div id="showdot1"></div>
						  	</div>

						  	<div id="middle">
						  		<div >Sig</div>
						  	</div>
						  	<div id="right">
						  		<div id="showsignalcandle"></div>
						  	</div>

						  	<div id="right">
						  		<div>Cur</div>
						  	</div>
						  	<div id="right">
						  		<div id="showcurrentcandle"></div>
						  	</div>
						  	
						  	
						  	
						  	
						  	
						</div>
<!-------------------------------------  MAIN CONSOLE  ---------------------------------------------->
                      	                     	
	          			<div id="mainConsole">
							<div class="innerConsole" id="debug" onscroll="myStopFunction()"></div>
						</div>
                      	
                      	
                  	</div>
                  	
                  	<div class="col-xs-6">
                     	<div id="welcomeuser" class="lead"></div> 
	                     	
	                     		<span >
	                     			<div id=row>
	                     					<div id="left2" class="realbalance">$</div>
	                     					<div id="left2">
	                     						<div id="realbalance" class="realbalance"></div>
	                     					</div>
	                     					
	                     			</div>
	                     		</span>
	                     
                      
                     		<div id="row">
	                          	<div id="left2">Profit: <b>$</b></div> 
	                          	<div id="profitupdate1"></div>
	                          </div>
	                          <br>
	                          <div id="row">
	                          	<div id="left2">Original Balance:<b>$</b></div> 
	                          	<div id="originalbalance"></div>
	                          </div>
	                          <!--<br>
	                            <div id="row">
	                          	<div id="left2">Realtime Balance:</div> 
	                          	<div id="realbalance"></div>
	                          </div>-->
	                          <br>
	                           <div id="row">
	                          	<div id="left2">Rescue Amount:<b>$</b></div> 
	                          	<div id="showrescueamount" class="rescueamount"></div>
	                          </div>
	                                <br>                    
	                          <div id="row">
	                          	<div id="left2">Selected Asset:</div> 
	                          	<div id="assetlist"></div>
	                          </div>
	                          <br>
	                          
	                          <!--<br>
	                          <div id="row">
	                          	<div id="left">Minute:</div> 
	                          	<div id="currentMinutes"></div>
                          </div>
                          
                          <li><a href="/read-more/"><u>Read more</u></a></li>-->
                      </ul>
                      <p><a href="/new-customer/" class="btn btn-info btn-block">Invite someone now!</a></p>
                  </div>
              </div>
          </div>
          
          <center>
          		
         <div id="row">
	
		<div id="right">
	  		<div> trade <img src="img/icon_lock.png">: </div>
	  	</div>
	  	<div id="right">
	  		<div id="showtradeLock"></div>
	  	</div>
	  	
	  	<div id="right">
	  		<div> portfolio <img src="img/icon_lock.png">: </div>
	  	</div>
	  	<div id="right">
	  		<div id="showportfolioLock"></div>
	  	</div>

	  	<div id="left">
	  		<div > statement <img src="img/icon_lock.png">: </div>
	  	</div>
	  	<div id="right">
	  		<div id="showstatementLock"></div>
	  	</div>
	  	
	  	<div id="left">
	  		<div > connect <img src="img/icon_lock.png">: </div>
	  	</div>
	  	<div id="right">
	  		<div id="showconnectLock"></div>
	  	</div>
	  	</div> 	 
		<br>
	
	 </center>
      </div>
  </div>
  
  
  
  <script type="text/javascript">
	var timer2 = new Tock({
    interval: 1000,
    
    onTick: function() {
        
        tockSeconds = (timer2.lap('{S}'))%60;
	    document.querySelector('#timer2 .field2').innerHTML = tockSeconds;
	    //document.getElementById('showServerSeconds').innerHTML = serverSeconds%60;
	    /*if(timer2.lap('{S}') > 59) {
	    	timer2.reset();
	        startTimer2();
	    }  */      
	}
});

document.querySelector('#timer2 .field2').innerHTML = timer2.lap('{S}');	
</script>



  </body>