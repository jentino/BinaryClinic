<?php

$id = $_GET['mytime'];
$d = $_GET['mytime'];
$time = $_GET['mytime'];

$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;

?>
