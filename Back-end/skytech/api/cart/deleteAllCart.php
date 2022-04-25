<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../database.php';
function deleteAll($con){
    $res=['status'=>'failed'];
    $iduser=isset($_GET['mail_user']) ? $_GET['mail_user'] : die();
    $sql="delete d.* from detail d,panier p where p.id_panier=d.id_panier and p.id_panier=(select id_panier from panier where mail_user='{$iduser}')";
    if(mysqli_query($con,$sql)){
        $res=['status'=>'success'];
    }
    return $res;
}

$res=deleteAll($con);
print_r(json_encode($res));
?>