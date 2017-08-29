<?php

/**
 * 全局快捷方法
 * @param $model
 * @return mixed
 */

##实例化模型函数
function M($model) {
    require_once APP_PATH . "model/" . $model . ".php";

    return new $model();
}

##数据库操作
function D() {
    $config = require_once APP_PATH. "conf/config.php";
    
    if (!isset($GLOBALS['link'])) {
    	$GLOBALS['link'] = new mysqli("p:" . $config['db_host'], $config['db_user'], $config['db_password'], $config['db_name']);	
    }

    return $GLOBALS['link'];
}