<?php

class index extends engine {
    
    public function admin() {
        $smarty = new Smarty();
        $smarty->display("admin.html");
    }

    public function home() {

        $month = $_GET['month'];
        $week = $_GET['week'];
        $name = $_GET['name'];

        $random = mt_rand(10000, 99999);

        $smarty = new Smarty();
        $smarty->assign("id", $id);
        $smarty->assign("random", $random);

        require_once APP_PATH . "engine/mobile_detect.php";
        $isMobile = (new MobileDetect)->isMobile();
        if ($isMobile) {
            $smarty->assign("style_path", "/templates/mobi");
            $smarty->display("mobi/_index.html");
        } else {
            $smarty->assign("style_path", "/templates/pc");
            $smarty->display("pc/_index.html");
        }   
    }

    public function get_data() {
        $month = $_GET['month'];
        $week = $_GET['week'];
        $name = $_GET['name'];
        $lang = $_GET['lang'];

        $link = D();

        $result = $link->query("SELECT * FROM data WHERE month = '" . $month . "' AND week = '" . $week . "' AND name = '" . $name . "' AND lang = '" . $lang . "' LIMIT 1");

        $row = mysqli_fetch_assoc($result);

        echo json_encode(array(
            "month" => $month,
            "week" => $week,
            "name" => $name,
            "lang" => $lang,
            "data" => $row
        ));
    }

    public function get_data_jsonp() {
        $month = $_GET['month'];
        $week = $_GET['week'];
        $name = $_GET['name'];
        $lang = $_GET['lang'];


        $link = D();

        $result = $link->query("SELECT * FROM data WHERE month = '" . $month . "' AND week = '" . $week . "' AND name = '" . $name . "' AND lang = '" . $lang . "' LIMIT 1");

        $row = mysqli_fetch_assoc($result);

        echo $_GET['callback'] . '(' . json_encode(array(
            "month" => $month,
            "week" => $week,
            "name" => $name,
            "lang" => $lang,
            "data" => $row
        )) . ')';
    }

    public function get_data_list() {
        $link = D();

        $lang = $_REQUEST['lang'];

        $result = $link->query("SELECT * FROM data WHERE lang = '" . $lang . "'");

        $data = [];

        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        echo json_encode($data);
    }

    public function delete_data() {
        $link = D();

        $id = $_POST['id'];

        $link->query("DELETE FROM data WHERE id = " . $id);

        echo json_encode(1);
    }

    public function get_data_list_jsonp() {
        $link = D();

        $lang = $_REQUEST['lang'];

        $result = $link->query("SELECT * FROM data WHERE lang = '" . $lang . "'");

        $data = [];

        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        echo $_GET['callback'] . '(' . json_encode($data) . ")";
    }

    public function submit_data() {
        $data = $_POST['data'];
        
        $month = $data['month'];
        $week = $data['week'];
        $name = $data['name'];
        $lang = $data['lang'];
        $data2 = json_encode($data);

        $link = D();

        $result = $link->query("SELECT * FROM data WHERE month = '" . $month . "' AND week = '" . $week . "' AND name = '" . $name . "' AND lang = '" . $lang . "' LIMIT 1");
        if (is_array(mysqli_fetch_assoc($result))) {
           $result = $link->query("UPDATE data SET data= '" . $data2 . "' WHERE month = '" . $month . "' AND week = '" . $week . "' AND name = '" . $name . "' AND lang = '" . $lang . "'");

           echo json_encode(array(
                "code" => "200",
                "message" => "数据更新成功"
            ));
        } else {
            $result = $link->query("INSERT INTO data(`month`, `week`, `name`, `lang`, `data`) VALUES ('" . $month . "', '" . $week . "', '" . $name . "', '" . $lang . "', '" . $data2 . "')");

            echo json_encode(array(
                "code" => "200",
                "message" => "插入数据成功，请刷新后查看"
            ));
        }
    }
}