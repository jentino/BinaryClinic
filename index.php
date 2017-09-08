<?php
session_start();
if(!isset($_SESSION['username'])){    
 echo "<script>location.href='login.php'</script>";
}

include_once 'includes/config.php';
 
$config = new dbConfig();
$db = $config->getConnection();

include_once 'includes/data.inc.php';

$user = new userData($db);

$user->username = $_SESSION['username'];

$user->getUserData();

$assetid = "R_100";

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="BinaryHaven officail website" content="binaryhaven">
    <meta name="author" content="">
 
    <title>BinaryHaven&trade;</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link href="//cdn.rawgit.com/cornflourblue/angular-registration-login-example/master/app-content/app.css" rel="stylesheet" />
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	
    <!-- Bootstrap core CSS 
    <link href="css/bootstrap.min.css" rel="stylesheet">-->
 
    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">
    <link href="css/testimonial.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
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
 
  <body >

  


  
<script>
    alert(connectLock);
</script>
    


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

 

	
<p><br>

<div id="login-overlay" class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
          <img class="ribbon" src="img/ribbon.png">
            <div class="row">
                <div class="col-xs-6">
                  <h4 class="modal-title" id="myModalLabel"><b>Binary<font color="#59E817">Haven</font>&trade;</b> TradePortal </h4>
                </div>
                <div class="col-xs-6 paddown">
                    Token Id: <?php if(!$user->token_id_live) echo "Empty"; else echo $user->token_id_live;?>
                </div>
            </div>
          
            </div>
          <div class="modal-body">
              <div class="row">
<!-- LEFT COLOUMN -->             
                  <div class="col-xs-6">
                      <div class="well">
                            <div id="mainConsole">
							    <div class="innerConsole" id="debug" onscroll="myStopFunction()"></div>
						    </div>
                      </div>
                  </div>
 <!-- RIGHT COLOUMN-->
                  <div class="col-xs-6 "> <!--  -->
                        <div class="container padleft">

                            <div class="row">

                                <div class="col-xs-4 col-xs-6-main-profilepic">


                                <img class="propic" src="img/profilepics/<?php echo $user->picfile; ?>">
                                

                                </div>

                                

                                <div class="col-xs-4 col-xs-4-main-profiledash-above">
                                    <div><h4><?php echo $user->firstname; ?>&nbsp;&nbsp;
                                        <a href="updateuser.php" data-toggle="tooltip" title="Setup your account here to go online!"><button type="button" class="btn btn-default btn-xs extrasmall" >Edit</button><span class="glyphicon glyphicon-cog padup text-success"  style="padding-left: 4px;">
                                        </span></a></h4>
                                    </div>
                                    <div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xs-4 col-xs-4-main-profiledash-under">
                                                    <h6><small>COUNTRY<br><img src="img/saflagicontiny.jpg"></small></h6>
                                                </div>
                                                <div class="col-xs-4 col-xs-4-main-profiledash-under ">
                                                    <h6 ><small>STATUS <br><p class="Offline paddown"><b >Offline</b></p></small></h6>
                                                </div>
                                                <div class="col-xs-4 col-xs-4-main-profiledash-under">
                                                    <h6><small>LEVEL <br><b>1</b></small></h6>
                                                </div>                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div  class="col-xs-4 realbalance">
                                        $
                                </div>
                                
                                <div id="realbalance" class=" col-xs-4 realbalance"> 
                                    
                                </div>
                                <div class="col-xs-4 tockTime" id="timer2">
                                <span class="field2 time"></span>
                                </div>
                            </div>

                            

                            <div class="row">

                                <div class="col-xs-3 padleft">
                                
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style="width:50%">
                                        50%
                                         </div>
                                    </div>
                                
                                        </div>
                                </div>

                                <div class="row padup" >

                                <div class="col-xs-3 col-xs-4-main-profiledash-under-1">
                                    <h6><small>PROFIT <br><b>$</b></small></h6>
                                </div>
                                
                                <div class="col-xs-3 col-xs-4-main-profiledash-under-1">
                                    <h6><small>ORIGINAL BALANCE <br><b>$</b></small></h6>
                                </div>
                                
                                <div class="col-xs-3 col-xs-4-main-profiledash-under-1">
                                    <h6><small>RESCUE AMOUNT <br><b>$</b></small></h6>
                                </div> 
                            </div>
                            


                            <div class="row row_width">                                
                                <div>
                                    
                                        <div id="miniConsole">
                                            <div class="innerConsole" id="debug" onscroll="myStopFunction()"></div>
                                        </div>
                                    
                                </div>
                            </div>

                            <div class="row padleft ">
                            
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>D5 <img  class="statusdots" src="img/tinygreendot.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>D4 <img class="statusdots" src="img/tinyreddot.png"></small></h6>
                                </div>

                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>D3 <img  class="statusdots"  src="img/tinygreendot.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>D2 <img  class="statusdots"  src="img/tinyreddot.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>D1 <img  class="statusdots"  src="img/tinyreddot.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>SG <img  class="statusdots"  src="img/tinyredbox.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>CR <img  class="statusdots"  src="img/tinygreenbox.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>NX <img  class="statusdots"  src="img/tinyredbox.png"></small></h6>
                                </div>
                            
                        </div>

                        <!-- --------------- -------------- ------------------ -->
                    </div>
                </div>                
            </div>
        </div>

  </div><center>
<br> <div><a href="http://127.0.0.1/logout.php" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Logout</a><br>

</div>
<br><br><center>
        <footer class="footer">
      <div class="">
        <span class="text-muted">
            <p> <span class="glyphicon glyphicon-copyright-mark"></span> Copyright, 2017, BinaryHaven  
        <span class="glyphicon glyphicon-envelope"></span> </p></span>
      </div>
    </footer></center>
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <script src="js/progressbar.js"></script>

    <script>
    $("input[type='image']").click(function() {
    $("input[id='my_file']").click();
});


</script>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
</script>


<script type="text/javascript">
        var timer2 = new Tock({
        interval: 1000,
        
        onTick: function() {
            
            tockSeconds = (timer2.lap('{S}'))%60;
            document.querySelector('#timer2 .field2').innerHTML = tockSeconds;
            pollCandles();  
            }
        });

        document.querySelector('#timer2 .field2').innerHTML = timer2.lap('{S}');	
    </script>


  </body>
</html>