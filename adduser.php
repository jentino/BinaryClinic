
<?php
include_once 'includes/config.php';
 
$database = new dbConfig();
$db = $database->getConnection();
 
include_once 'includes/data.inc.php';
$product = new Data($db);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Data CRUD PDO</title>
 
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
 
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
   
  
  

<?php
if($_POST){
	
 $product->tradedate = $_POST['tradedate'];
 $product->pair = $_POST['pair'];
 $product->trend = $_POST['trend'];
 $product->position = $_POST['position'];
 $product->entry = $_POST['entry'];
 $product->stoploss = $_POST['stoploss'];
 $product->tp1 = $_POST['tp1'];
 $product->tp2 = $_POST['tp2'];
 $product->notes = $_POST['notes'];
 $product->pips = $_POST['pips'];
  
 if($product->create()){

?>
<div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
  <strong>Success!</strong> Trade data entered <?php echo $product->trade_id; ?>, <a href="index.php">View Data</a>.
</div>
<?php
 }else{
?>
<div class="alert alert-danger alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
  <strong>Fail!</strong> Trade data not entered.
</div>
<?php
 }
}
?>

<form class="form-inline" method="post">

  <div class="form-group">
    <label for="tradedate" >Date</label>
    <input type="text" class="form-control" id="tradedate" name="tradedate" placeholder="yyyy-mm-dd">
  </div>
  <p>
  <div class="form-group">
 	<fieldset class="form-group">
    <label for="pair">Pair</label>
    <select class="form-control" id="pair" name="pair">
      <option>EURUSD</option>
      <option>GBPUSD</option>
      <option>GBPJPY</option>
      <option>EURJPY</option>
      <option>USDJPY</option>
	  <option>AUDUSD</option>
	  <option>GOLD</option>
	  <option>USOIL</option>
	  <option>DOW JONES</option> 
	  <option>NIKKEI</option>
    </select>
  </fieldset>
  
  </div>
  
  <div class="form-group">
 <!--   <label for="nm">Trend</label>
    <input type="text" class="form-control" id="trend" name="trend">-->
	
	<fieldset class="form-group">
    <label for="trend">Trend</label>
    <select class="form-control" id="trend" name="trend">
      <option>UP</option>
      <option>DOWN</option>
      <option>RANGE</option>
      <option>UNDEFINED</option>
      <option>FLAT</option>
    </select>
  </fieldset>
  
  </div>
  
  <div class="form-group">
    
	<fieldset class="form-group">
    <label for="position">Position</label>
    <select class="form-control" id="position" name="position">
      <option>BUY</option>
      <option>SELL</option>
      <option>PENDING</option>
      <option>WAITING</option>
      <option>UNDECIDED</option>
    </select>
  </fieldset>
  
  </div>
  </p>
  <p>
  <div class="form-group">
    <label for="entry" >Entry</label>
    <input type="text" class="form-control" id="entry" name="entry">
  </div>
  
  <div class="form-group">
    <label for="stoploss">Stoploss</label>
    <input type="text" class="form-control" id="stoploss" name="stoploss">
  </div>
  
  <div class="form-group">
    <label for="tp1">TP1</label>
    <input type="text" class="form-control" id="tp1" name="tp1">
  </div>

  <div class="form-group">
    <label for="tp2">TP2</label>
    <input type="text" class="form-control" id="tp2" name="tp2">
  </div>
  </p>
  
  <p>
  <div class="form-group" class="col-xs-10">
    <label for="notes">Notes</label>
    <textarea class="form-control" rows="3" id="notes" name="notes"></textarea>
  </div>
  </p>
  <p>
  <div class="form-group" class="col-xs-10">
    <label for="pips">Pips</label>
    <input type="number" class="form-control" id="pips" name="pips">
  </div>
  </p>

  <button type="submit" class="btn btn-success">Submit</button>
</form>
    </div>
 
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>