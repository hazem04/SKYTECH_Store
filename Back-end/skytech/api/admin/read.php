<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../database.php';
include_once '../../models/produit.php';

$db = $con;
function read_items($db)
{
    $items = new produit($db);

    $stmt = $items->getproduits();


    $produitArr = array();
    $produitArr["body"] = array();
    $id_produit = 0;
    $lib_produit = '';
    $prix_produit = 0;
    $description = '';
    $img_produit = '';
    $id_cat = '';
    $mail_admin = '';
    $qte_produit=0;
    $produitArr = [];
    $stmt->bind_result($id_produit, $lib_produit, $prix_produit, $img_produit, $id_cat, $description, $mail_admin,$qte_produit);
    while ($stmt->fetch()) {


        $e = array(
            "id_produit" => $id_produit,
            "lib_produit" => $lib_produit,
            "prix_produit" => $prix_produit,
            "img_produit" => $img_produit,
            "id_cat" => $id_cat,
            "description" => $description,
            "mail_admin" => $mail_admin,
            "qte_produit"=>$qte_produit

        );
        array_push($produitArr, $e);
    }
    return $produitArr;

}
$res=read_items($con);
print_r(json_encode($res));



?>