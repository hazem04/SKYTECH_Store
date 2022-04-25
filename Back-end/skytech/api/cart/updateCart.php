<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../database.php';
function checkqte($con){
    $query = "select qte_produit from produit where id_produit = ?";
    $stmt = $con->prepare($query);
    $idproduit= isset($_GET['id_produit']) ? $_GET['id_produit'] : die();
    $qteproduit= isset($_GET['qte_produit']) ? $_GET['qte_produit'] : die();
    $stmt->bind_param('i', $idproduit);
    $stmt->execute();
    $qt=0;
    $stmt->bind_result($qt);
    $stmt->fetch();
    $stmt->close();
    return ($qt>=$qteproduit);
}
function update_item($con){
    $res=['status'=>'failed'];
    if(checkqte($con)){
        $idpanier= isset($_GET['id_panier']) ? $_GET['id_panier'] : die();
        $idproduit= isset($_GET['id_produit']) ? $_GET['id_produit'] : die();
        $qteproduit= isset($_GET['qte_produit']) ? $_GET['qte_produit'] : die();
        $sql="update detail set qte_produit={$qteproduit} where id_produit={$idproduit} and id_panier={$idpanier}";
        if(mysqli_query($con,$sql)){
      //  $sql2="update produit set qte_produit=qte_produit-{$qteproduit} where id_produit={$idproduit}";
       // if(mysqli_query($con,$sql2)){
            $res=['status'=>'success'];
          //  }
        }
    }
    return $res;
}
$res=update_item($con);
print_r(json_encode($res));













?>