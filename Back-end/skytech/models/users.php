<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Users{
    private $con;

    public $mail;
    public $password;
    public $firstname;
    public $lastname;
    public $phone;

    public function __construct($db){
        $this->con=$db;
    }
    public function read_one(){
        $query = "select mail_user,password_user from users where mail_user=?";
        $stmt = $this->con->prepare($query);
        $stmt->bind_param('s', $this->mail);
        $stmt->execute();
        $email='';
        $pass='';
        $stmt->bind_result($email,$pass);
        $row = $stmt->fetch();
        $this->mail = $email;
        $hashedpass = $pass;
        if($row){
        if(password_verify($this->password,$hashedpass)){
            return array(
                'token'=> $this->mail,
                'role'=>'Client'
            );}
        else
            return [];

        }
        else{
            return [];
        }
    }
    public function write_one(){
        $query="insert into users values (?,?,?,?,?)";
        $stmt = $this->con->prepare($query);
        $hashedpassword=password_hash($this->password,PASSWORD_BCRYPT);
        $stmt->bind_param('ssssi', $this->mail,$hashedpassword,$this->firstname,$this->lastname,$this->phone);
        if($stmt->execute()){
            return array('status'=>'success');
        }
        else
            return array('status'=>'failed','reason'=>'errorinsert');
    }
        
    
}



?>