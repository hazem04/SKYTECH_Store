<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once '../../database.php';
include_once '../../models/produit.php';

$db = $con;
$item = new produit($db);
$item->id_produit = isset($_GET['id_produit']) ? $_GET['id_produit'] : die();
$item->getSingleproduit();
if($item->lib_produit != null){
    // create array
    $produitarr = array(
        "id_produit" =>  $item->id_produit,
        "lib_produit" => $item->lib_produit,
        "prix_produit" => $item->prix_produit,
        "description" => $item->description,
        "img_produit" => $item->img_produit,
        "id_cat" => $item->id_cat,
        "qte_produit"=>$item->qte_produit
    );

    http_response_code(200);
    echo json_encode($produitarr);
}

else{
    http_response_code(404);
    echo json_encode("product not found.");
}
?>