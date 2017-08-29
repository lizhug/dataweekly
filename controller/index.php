<?php

class index extends engine {
    public function home() {
        $smarty = new Smarty();
        require_once APP_PATH . "engine/mobile_detect.php";
        $isMobile = (new MobileDetect)->isMobile();
        if ($isMobile) {
            $smarty->assign("style_path", "/templates/mobi");
            $smarty->display("mobi/_index.html");
        } else {
            $smarty->assign("style_path", "/templates/pc");
            $smarty->display("pc/_indexv2.html");
        }   
    }
}