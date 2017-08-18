<?php 
	if($tokenid == '')
		$tokenid = "COQz3VcylK89JoT";
	else	
		$tokenid = $_GET['token_id'];
	
	if($assetid ==  '')
		$assetid = "R_100";
	else	
		$assetid = $_GET['asset_id'];
?>

<script type="text/javascript" src="http://js.partnershipsprogram.com/javascript.php?prefix=iGtgKNpBy3-6tyDIijdDK2Nd7ZgqdRLk&amp;media=2187&amp;campaign=1"></script>

<head>
<!--<style>
	body {padding-top: 40px; padding-left: 25%}
</style>
-->
<link rel="stylesheet" id="main-css" href="css/main.css" type="text/css" media="all">

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


<!-------------------------------------- SELECTION HEADER ------------------------------------ -->

<div id="getTradeOpDash">
	<div id="row">
	  	<div id="left">
	  		
	  		<h4>Assets</h4>
	  		<p>
	  			<div>
	  				<form>
						<!--<select id="myAssets" onchange="getAsset(this.value);">
						 	<option value=""> </option>
						  	<option value="R_100">Volatility 100</option>
						  	<option value="R_75">Volatility 75</option>
						  	<option value="R_50">Volatility 50</option>
						  	<option value="R_25">Volatility 25</option>
						  	<option value="R_10">Volatility 10</option>
						</select>-->
					</form>
				</div>
			</p>
			
			
	  	</div>

	  	<div id="left">
	    	<h4>API token</h4>
	    	<p>
				<div>
					<form>
						<!--<select id="myTokens" onchange="Connect(this.value);">
						  	<option value=""> </option>
						    <option value="kS7A68xssbTVpkE">Jenty Demo Account</option>
						    <option value="nBvBHHOe84bgXMK">Jenty Real Account</option>
						  	<option value="COQz3VcylK89JoT"> Carline Real Account</option>
						  	<option value="xwzTFS9BwGxjPZZ"> Carline Demo Account</option>
						</select>	-->
					</form>
				</div>
			</p>
	  	</div>

    <div id="middle">
        <h4>Server</h4>
          <p>
          <div id="theseconds"></div>
        </p>
      </div>
      
    <div id="middle">
    	
	    <div id="timer2">
	      <h4>Timer</h4>
	       <span class="field2 time"></span>
	        
	    </div>
    </div>

    <div id="right">
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

	</div> 	 
</div>
<br>
<!-------------------------------------- ACCOUNTING HEADER (BUTTONS) ------------------------------------ -->


<div id="getTradeOpDash">
	<div id="row">
	
		<div id="right">
	  		<div>D3</div>
	  	</div>
	  	<div id="right">
	  		<div id="showdot3"></div>
	  	</div>
	  	
	  	<div id="right">
	  		<div>D1</div>
	  	</div>
	  	<div id="right">
	  		<div id="showdot1"></div>
	  	</div>

	  	<div id="left">
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
</div>
<br>
<div id="getTradeOpDash">
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
</div>


<!-------------------------------------- ACCOUNTING HEADER (BUTTONS) ------------------------------------ -->

<table id="tblgetbuttonsDash">
	<td>	
		<div id="ash" class="pad" contenteditable="true">
		 	<div id="a" class="alignDivs"><b>MIN</b>  = </div><div id="currentMinutes" class="alignDivs"></div>
		 	<!--<div id="a" class="alignDivs"><b>EXP</b>  = </div><div id="expirySeconds" class="alignDivs"></div>-->
			<div id="a" class="alignDivs"><b>ACTION</b> =    </div><div id="tradeaction" class="alignDivs"></div>
			<div id="a" class="alignDivs"><b>RESCUE</b> =   </div><div id="rescueamount" class="alignDivs"></div>
			<div id="a" class="alignDivs"><b>BAL 1</b> =   </div><div id="originalbalance" class="alignDivs"></div>
			<div id="a" class="alignDivs"><b>APPID</b> =   </div><div id="showappid" class="alignDivs"></div>
		</div>
	</td>
</table>

<!-------------------------------------- USER DETAILS DASHBOARD ------------------------------------ -->
<div id="getUserInfoDash" class="pad" contenteditable="true">
  <div id="a" class="alignDivs">User              : </div><div id="welcomeuser" class="alignDivs"></div>
  <div id="a" class="alignDivs">Asset             : </div><div id="assetlist" class="alignDivs"></div>
  <div id="a" class="alignDivs">Balance           : </div><div id="realbalance" class="alignDivs"></div>
  <div id="a" class="alignDivs">Profit               : </div><div id="profitupdate1" class="alignDivs"></div>
</div>

<!-------------------------------------- MESSAGE CONSOLE  ------------------------------------ -->
<hr align="left" style="width:600px">
<div id="mainConsole">
		<div class="innerConsole" id="debug" onscroll="myStopFunction()"></div>
	</div>
	
<script type="text/javascript">
	var timer2 = new Tock({
    interval: 1000,
    onTick: function() {
            
	    document.querySelector('#timer2 .field2').innerHTML = timer2.lap('{S}');
	    if(timer2.lap('{S}') == 60) {
	        timer2.reset();
	        startTimer2();
	    }
            //if(timer2.lap('{S}') > 15) restart();              
	}
});

document.querySelector('#timer2 .field2').innerHTML = timer2.lap('{S}');	
</script>

</body>
</html>