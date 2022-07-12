<?php

session_start();

session_destroy();

header('location: log-in.php');