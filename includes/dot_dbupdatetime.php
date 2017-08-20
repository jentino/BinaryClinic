<?php

<?php
$servername = "localhost";
$username = "root";
$password = "cookies";
$dbname = "povertyalleviatordb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$time = $_GET['mytime'];

//$sql = "INSERT INTO tbl_dots (dot_dir) VALUES ('$dot_name') WHERE dot_id='1';

//$sql = "INSERT INTO tbl_dots (dot_id, dot_dir) VALUES (1,'GREEN')";

//$sql = "INSERT INTO tbl_dots (dot_dir) VALUES ('$dot_name') WHERE dot_id='1';

$sql = "UPDATE timedb SET time='$time', WHERE timeid=1";

if ($conn->query($sql) === TRUE) {
    echo "sql executed successfully.<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>
