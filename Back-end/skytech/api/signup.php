<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
include_once '../database.php';
include_once '../models/users.php';


$user = new Users($con);
$user->mail= isset($_GET['mail']) ? $_GET['mail'] : die();
$user->password= isset($_GET['pass']) ? $_GET['pass'] : die();
$user->firstname= isset($_GET['firstname']) ? $_GET['firstname'] : die();
$user->lastname= isset($_GET['lastname']) ? $_GET['lastname'] : die();
$user->phone= isset($_GET['phone']) ? $_GET['phone'] : die();

$res=[];
$res=$user->write_one();
$sql="insert into panier (mail_user) values ('{$user->mail}')";
if(!mysqli_query($con,$sql)){
    $res=['status'=>'failed','reason'=>'errorpanier'];
}
print_r(json_encode($res));



?>