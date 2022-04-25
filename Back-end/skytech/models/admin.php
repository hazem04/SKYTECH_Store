<?php
class Admin{
    private $con;

    public $mail;
    public $password;
    public $name;

    public function __construct($db){
        $this->con=$db;
    }
    public function read_one(){
        $query = "select mail_admin,password_admin from admin where mail_admin=?";
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
        if(password_verify($this->password,$hashedpass))
            return array(
                'token'=> $email,
                'role'=>'Admin'
                
            );
        else
            return [];

        }
        else{
            return [];
        }
    }




}



?>