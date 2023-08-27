<?php

require_once '../DBConnections.php';
require_once '../../controller/get-random-values.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get post data
    $data = json_decode(file_get_contents("php://input", true));

    $username = mysqli_real_escape_string($connection, $data->username);
    $email = mysqli_real_escape_string($connection, $data->email);
    $password = mysqli_real_escape_string($connection, $data->password);
    $lastLogin = date('Y-m-d H:i:s');
    $token = GetRandomAlphaNumeric(35);

    $sql = "INSERT INTO user(username, email, password, token) VALUES('" . $username . "', '" . $email . "', '" . $password . "', '" . $lastLogin . "' , '" . $token . "')";

    $result = DatabaseQuery($sql);

    if ($result) {
        echo json_encode(array(
            'code' => 200,
            'status' => 'Success',
            'message' => 'User registered succesfully',
            'username' => $username,
            'token' => $token,
            'date' => $lastLogin
        ));
    } else {
        echo json_encode(array(
            'code' => 400,
            'status' => 'Failed',
            'message' => 'Something went wrong, please contact administrator'
        ));
    }
}
