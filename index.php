<?php

error_reporting(0);
define("APP_PATH", dirname(__DIR__) . '/' . basename(__DIR__) . '/');

require_once APP_PATH . "engine/function.php";
require_once APP_PATH . "engine/app.php";
require_once APP_PATH . "engine/smarty/Smarty.class.php";

$engine = new engine();
$engine->route();