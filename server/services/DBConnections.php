<?php

require './../DBConnectionStrings.php';

// Connection for the LOCAL devoplement
$connection = new mysqli($SERVER_NAME, $USER_NAME, $PASSWORD, $DATABASE);

// Connection for the UAT development
// $connection = new mysqli($SERVER_NAME_UAT, $USER_NAME_UAT, $PASSWORD_UAT, $DATABASE);

// Connection for the LIVE development
// $connection = new mysqli($SERVER_NAME_LIVE, $USER_NAME_LIVE, $PASSWORD_LIVE, $DATABASE);

// Check the connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
} else {
    echo '<h1>Connection has been established successfully.</h1>';
}