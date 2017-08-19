asdfasdfasdfsadf<?php 
	if($tokenid == '')
		$tokenid = "	z3VcylK89JoT";
	else	
		$tokenid = $_GET['token_id'];
	
	if($assetid ==  '')
		$assetid = "R_100";
	else	
		$assetid = $_GET['asset_id'];
?>


<head>

	<style type="text/css">

#row  {
    display: table-row;
}

#left, #right, #middle {  
    display: table-cell;
	padding-left: 25px;
}   

</style> 

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

<div id="row">asdfasdf
	  
	    <div id="left">
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
	
	
    <div id="login-overlay" class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
              	<span aria-hidden="true">×</span>
              	<span class="sr-only">Close</span>
              </button>
              <h4 class="modal-title" id="myModalLabel"></h4>
              	
          </div>
          <div class="modal-body">
              <div class="row">
                  
                  <div class="col-xs-6">
                      <div c]
<p><a href="#!/login" class="btn btn-primary">Logout</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
	
	
</body>