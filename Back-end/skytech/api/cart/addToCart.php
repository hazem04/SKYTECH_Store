<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../database.php';

function additem($con){
    $res=array('status'=>'failed');
    $mailuser=isset($_GET['mail_user']) ? $_GET['mail_user'] : die();
    $idproduit=isset($_GET['id_produit']) ? $_GET['id_produit'] : die();
    $idpanier="";
    $querry="select id_panier from panier where mail_user=?";
    
    $stmt=$con->prepare($querry);
    $stmt->bind_param('s', $mailuser);
    $stmt->execute();
    $stmt->bind_result($idpanier);
    $panier="";
    while($stmt->fetch()){
        $panier=$idpanier;
    }
    $sql="insert into detail values({$panier},{$idproduit},1)";
    if(mysqli_query($con,$sql)){
        $res=array('status'=>'succes');
    }
    return $res;
}
$res=additem($con);
print_r(json_encode($res));
?>