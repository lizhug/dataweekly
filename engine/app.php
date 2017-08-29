<?php

class engine {

    //route
    public function route() {
        $controller = isset($_GET['c']) ? $_GET['c'] : "index";
        $func = isset($_GET['f']) ? $_GET['f'] : "home";

        require_once APP_PATH . "controller/" . $controller . ".php";

        $app = new $controller();
        $app->$func();
    }
}