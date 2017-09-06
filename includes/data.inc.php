<?php
class userData{
  
  // database connection and table name
  private $conn;
  private $table_name = "tblusers";
    
  // object properties
  public $username;
  public $password;
  public $email;
  public $hash;
  public $vcode;
  public $status;
    
  public function __construct($db){
    $this->conn = $db;
  }
    
  // create user
  function create(){

    //write query
    $query = "INSERT INTO ".$this->table_name." values('',?,?,?,'0','','','','','','','',?,?)";

    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(1, $this->username);
    $stmt->bindParam(2, $this->password);
    $stmt->bindParam(3, $this->email);
    $stmt->bindParam(4, $this->hash);
    $stmt->bindParam(5, $this->vcode);
    
    if($stmt->execute()){
    return true;
    }else{
    return false;
    }
    
  }


  function verifyvcode(){
    
        //write query
        $query = "SELECT username,vcode FROM ".$this->table_name." WHERE vcode = ? and status = 0";
    
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->vcode);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->username = $row['username'];
        
        $this->status = "1";

        if($this->vcode == $row['vcode']){

                $sql = "UPDATE 
                " . $this->table_name . "
                 SET 
                  status = :value 
                 WHERE 
                  username= :username";
          
                    $stmt1 = $this->conn->prepare($sql);
                    
                    $stmt1->bindParam(':value',  $this->status);
                    $stmt1->bindParam(':username', $this->username);
                    $stmt1->execute();

          return true;
        }else{
          return false;
        }
        
  }

  function makevcode($length) {
    
           global $template;
           settype($template, "string");
    
           $template = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
           /* this line can include numbers or not */
    
           settype($length, "integer");
           settype($rndstring, "string");
           settype($a, "integer");
           settype($b, "integer");
    
           for ($a = 0; $a <= $length; $a++) {
                   $b = rand(0, strlen($template) - 1);
                   $rndstring .= $template[$b];
           }
    
           return $rndstring; 
    }
}
?> 