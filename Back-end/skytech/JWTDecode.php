<?php
    $res=[];
    if (isset($_GET['token'])) {
        require 'JwtHandler.php';
        $jwt = new JwtHandler();
        $data =  $jwt->jwtDecodeData($_GET['token']);
        if(isset($data->mail) && isset($data->role))
            $res=array('mail'=>$data->mail,'role'=>$data->role);
    
}
    print_r(json_encode($res));
?>