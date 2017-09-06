<?php
session_start();
if(!isset($_SESSION['username'])){
 echo "<script>location.href='login.php'</script>";
}

include_once 'includes/config.php';
 
$config = new dbConfig();
$db = $config->getConnection();
  
if($_POST){
  
 include_once 'includes/login.inc.php';
 $login = new Login($db);
 
 $login->userid = $_POST['username'];
 $login->passid = md5($_POST['password']);
  
 if($login->login()){
	
		 echo "<script>location.href='index.php'</script>";
 }
  
 else{
  echo "<script>alert('Access Denied')</script>";
 }
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
  <style>
		
	</style>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
 
    <title>Welcome</title>
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
  </head>
 
  <body>
 

	
<p><br>

<div id="login-overlay" class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
          <img class="ribbon" src="img/ribbon.png">
              <h4 class="modal-title" id="myModalLabel"><b>Binary<font color="#59E817">Haven</font>&trade;</b> TradePortal </h4>
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

                                <div class="col-xs-6 col-xs-6-main-profilepic">
                                    <img class="propic" src=img/jentinopic.jpg>
                                </div>

                                <div class="col-xs-6 col-xs-4-main-profiledash-above">
                                    <div><h4>Jenty Mepa</h4></div>
                                    <div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xs-4 col-xs-4-main-profiledash-under">
                                                    <h6><small>COUNTRY<br><img src="img/saflagicontiny.jpg"></small></h6>
                                                </div>
                                                <div class="col-xs-4 col-xs-4-main-profiledash-under">
                                                    <h6><small>CREDITS <br><b>2</b></small></h6>
                                                </div>
                                                <div class="col-xs-4 col-xs-4-main-profiledash-under">
                                                    <h6><small>LEVEL <br>1</small></h6>
                                                </div>                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="realbalance">
                                        $
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-xs-4 col-xs-4-main-profiledash-under-1">
                                    <h6><small>PROFIT <br><b>$</b></small></h6>
                                </div>
                                
                                <div class="col-xs-4 col-xs-4-main-profiledash-under-1">
                                    <h6><small>ORIGINAL BALANCE <br><b>$</b></small></h6>
                                </div>
                                
                                <div class="col-xs-4 col-xs-4-main-profiledash-under-1">
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
                                    <h6><small>SG <img  class="statusdots"  src="img/tinygreendot.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>CR <img  class="statusdots"  src="img/tinygreendot.png"></small></h6>
                                </div>
                                
                                <div class="col-xs-2 col-xs-4-main-profiledash-under-1-dots">
                                    <h6><small>NX <img  class="statusdots"  src="img/tinyreddot.png"></small></h6>
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
                <br>
        <footer class="footer">
      <div class="container">
        <span class="text-muted">
            <p> <span class="glyphicon glyphicon-copyright-mark"></span> Copyright, 2017, BinaryHaven  
        <span class="glyphicon glyphicon-envelope"></span> </p></span>
      </div>
    </footer></center>
  </body>
</html>