<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../database.php';
function read_items($con){
    $query = "select id_produit,lib_produit,prix_produit,img_produit,description from produit p, categorie c where p.id_cat=c.id_cat and c.lib_cat=?";
    $stmt = $con->prepare($query);
    $cat= isset($_GET['lib_cat']) ? $_GET['lib_cat'] : die();
    $stmt->bind_param('s', $cat);
    $stmt->execute();
    $idproduit=0;
    $img='';
    $lib='';
    $prix=0;
    $description="";
    $items=[];
    $stmt->bind_result($idproduit,$lib,$prix,$img,$description);
 
    while($stmt->fetch()){
    $arr=array('id_produit'=>$idproduit,'img_produit'=>$img,'lib_produit'=>$lib,'prix_produit'=>$prix,'description'=>$description);
    array_push($items,$arr);}
    return $items;
}
$res=read_items($con);
print_r(json_encode($res));



?>