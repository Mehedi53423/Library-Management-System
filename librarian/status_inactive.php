<?php

require_once '../dbcon.php';

$id = base64_decode($_GET['id']);

mysqli_query($con, query: "UPDATE `students` SET `status` = '0' WHERE `id` = '$id'");

header('location: students.php');

?>