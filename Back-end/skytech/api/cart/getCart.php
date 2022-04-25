<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../database.php';
function read_items($con){
    $query = "select p.img_produit,p.id_produit,d.id_panier,p.lib_produit,p.prix_produit,d.qte_produit from produit p,detail d where p.id_produit=d.id_produit and d.id_panier=(select id_panier from panier where mail_user=?)";
    $stmt = $con->prepare($query);
    $mail= isset($_GET['mail']) ? $_GET['mail'] : die();
    $stmt->bind_param('s', $mail);
    $stmt->execute();
    $img='';
    $idpanier=0;
    $idproduit=0;
    $lib='';
    $prix=0;
    $qt=0;
    $items=[];
    $stmt->bind_result($img,$idproduit,$idpanier,$lib,$prix,$qt);
 
    while($stmt->fetch()){
    $arr=array('image_produit'=>$img,'id_produit'=>$idproduit,'id_panier'=>$idpanier,'lib_produit'=>$lib,'prix_produit'=>$prix,'qte_produit'=>$qt);
    array_push($items,$arr);}
    return $items;
}
$res=read_items($con);
print_r(json_encode($res));












?>