<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include_once '../../database.php';

function deleteitem($con){
    $res=array('status'=>'failed');
    $idpanier=isset($_GET['id_panier']) ? $_GET['id_panier'] : die();
    $idproduit=isset($_GET['id_produit']) ? $_GET['id_produit'] : die();
    $sql="delete from detail where id_panier={$idpanier} and id_produit={$idproduit}";
    if(mysqli_query($con,$sql)){
        $res=array('status'=>'succes');
    }
    return $res;
}
$res=deleteitem($con);
print_r(json_encode($res));
?>