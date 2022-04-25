<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
include_once '../database.php';
include_once '../models/users.php';
include_once '../models/admin.php';


 $user = new Users($con);
 $admin= new Admin($con);
 $admin->mail= isset($_GET['mail']) ? $_GET['mail'] : die();
 $admin->password= isset($_GET['pass']) ? $_GET['pass'] : die();
 $res=array();
 $res= $admin->read_one();
 
 if(empty($res)){
 $user->mail= isset($_GET['mail']) ? $_GET['mail'] : die();
 $user->password= isset($_GET['pass']) ? $_GET['pass'] : die();
 $user_arr=array();
 $res= $user->read_one();
 }

 print_r(json_encode($res));



?>