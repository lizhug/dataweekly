<?php

class app extends engine {
    public function getAppList($page = 0, $number = 5) {
        $link = D();

        $page = $page * $number;

        $result = $link->query("SELECT * FROM 9_app LIMIT $page, $number");
        $data = [];

        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        return $data;
    }

    public function claimPrize() {
        session_start();

        $uid = $_SESSION['uid'];

        if ($uid) {
            $link = D();

            $result = $link->query("SELECT claim FROM 9_user WHERE uid = $uid");

            $row = mysqli_fetch_assoc($result);

            if ($row['claim'] > 0) {

                ##抽奖
                $link->query("UPDATE 9_user SET claim = claim - 1 WHERE uid = $uid");

                $result = $link->query("SELECT id FROM 9_user_prize WHERE uid = $uid and type = 'cash'");
                $cashId = mysqli_fetch_assoc($result)['id'];

                $result = $link->query("SELECT id FROM 9_user_prize WHERE uid = $uid and type = 'phone_1'");
                $phone1Id = mysqli_fetch_assoc($result)['id'];

                $result = $link->query("SELECT id FROM 9_user_prize WHERE uid = $uid and type = 'phone_2'");
                $phone2Id = mysqli_fetch_assoc($result)['id'];

                $result = $link->query("SELECT id FROM 9_user_prize WHERE uid = $uid and type = 'ticket'");
                $ticketId = mysqli_fetch_assoc($result)['id'];

                $result = $link->query("SELECT id FROM 9_user_prize WHERE uid = $uid and type = 'rs'");
                $rsId = mysqli_fetch_assoc($result)['id'];

                ##cash奖品
                $result2 = $link->query("SELECT count(id) as cn FROM 9_user_prize WHERE type  = 'cash' AND date(ctime) = curdate()");
                $cashCount = mysqli_fetch_assoc($result2)['cn'];        ##每日产出的数量

                ##手机奖品1
                $result3 = $link->query("SELECT count(id) as pn FROM 9_user_prize WHERE type  = 'phone_1' AND date(ctime) = curdate()");
                $phone1Count = mysqli_fetch_assoc($result3)['pn'];          ##每日产出的数量

                ##手机奖品2
                $result4 = $link->query("SELECT count(id) as pn FROM 9_user_prize WHERE type  = 'phone_2' AND date(ctime) = curdate()");
                $phone2Count = mysqli_fetch_assoc($result4)['pn'];          ##每日产出的数量

                ##票
                $result5 = $link->query("SELECT count(id) as pn FROM 9_user_prize WHERE type  = 'ticket' AND date(ctime) = curdate()");
                $ticketCount = mysqli_fetch_assoc($result5)['pn'];          ##每日产出的数量

                ##rs
                $result6 = $link->query("SELECT count(id) as pn FROM 9_user_prize WHERE type  = 'rs' AND date(ctime) = curdate()");
                $rsCount = mysqli_fetch_assoc($result6)['pn'];          ##每日产出的数量

                $today = date("Y-m-d", time());

                ##今天各个奖品的概率
                $result4 = $link->query("SELECT config FROM 9_prize WHERE type  = 'cash'");
                $cashRateList = json_decode(mysqli_fetch_assoc($result4)['config'], true);
                foreach ($cashRateList as $key => $value) {
                    if ($value['date'] == $today) {
                        $cashRate = $value['rate'];
                        $cashMax = $value['max'];
                        break;
                    }
                }

                $result4 = $link->query("SELECT config FROM 9_prize WHERE type  = 'phone_1'");
                $phone1RateList = json_decode(mysqli_fetch_assoc($result4)['config'], true);
                foreach ($phone1RateList as $key => $value) {
                    if ($value['date'] == $today) {
                        $phone1Rate = $value['rate'];
                        $phone1Max = $value['max'];
                        break;
                    }
                }

                $result4 = $link->query("SELECT config FROM 9_prize WHERE type  = 'phone_2'");
                $phone2RateList = json_decode(mysqli_fetch_assoc($result4)['config'], true);
                foreach ($phone2RateList as $key => $value) {
                    if ($value['date'] == $today) {
                        $phone2Rate = $value['rate'];
                        $phone2Max = $value['max'];
                        break;
                    }
                }

                $result4 = $link->query("SELECT config FROM 9_prize WHERE type  = 'ticket'");
                $ticketRateList = json_decode(mysqli_fetch_assoc($result4)['config'], true);
                foreach ($phone2RateList as $key => $value) {
                    if ($value['date'] == $today) {
                        $ticketRate = $value['rate'];
                        $ticketMax = $value['max'];
                        break;
                    }
                }

                $result4 = $link->query("SELECT config FROM 9_prize WHERE type  = 'rs'");
                $rsRateList = json_decode(mysqli_fetch_assoc($result4)['config'], true);
                foreach ($rsRateList as $key => $value) {
                    if ($value['date'] == $today) {
                        $rsRate = $value['rate'];
                        $rsMax = $value['max'];
                        break;
                    }
                }

                $cashRand = mt_rand(1, 100);
                $phone1Rand = mt_rand(1, 100);
                $phone2Rand = mt_rand(1, 100);
                $ticketRand = mt_rand(1, 100);
                $rsRand = mt_rand(1, 100);

                ##概率中标   没有中过    今日产出小于设定值
                if ($cashRand <= $cashRate && !$cashId && $cashCount < $cashMax) {
                    //中
                    $result = $link->query("SELECT id, title, des_w FROM 9_prize WHERE type = 'cash'");

                    $cashPrizeList = [];
                    while ($row = mysqli_fetch_assoc($result)) {
                        $cashPrizeList[] = $row;
                    }
                    
                    if (count($cashPrizeList) > 0) {
                        $cashRandIndex = mt_rand(0, count($cashPrizeList) - 1);
                        $cashId = $cashPrizeList[$cashRandIndex]['id'];

                        $ctime = date("Y-m-d H:i:s", time());
                        $link->query("INSERT INTO 9_user_prize (`uid`, `ctime`, `type`, `detail`, `prize_id`) VALUES ($uid, '$ctime', 'cash', '', $cashId)");

                        ##中现金奖
                        return array(
                            "code" => "200",
                            "type" => "cash",
                            "data" => $cashPrizeList[$cashRandIndex]
                        );
                    }
                } else if ($phone1Rand <= $phone1Rate && !$phone1Id && $phone1Count < $phone1Max) {
                    //中
                    $result = $link->query("SELECT id, title, des_w FROM 9_prize WHERE type = 'phone_1'");

                    $phonePrizeList = [];
                    while ($row = mysqli_fetch_assoc($result)) {
                        $phonePrizeList[] = $row;
                    }
                    
                    if (count($phonePrizeList) > 0) {
                        $phonePrizeIndex = mt_rand(0, count($phonePrizeList) - 1);
                        $cashId = $phonePrizeList[$phonePrizeIndex]['id'];

                        $ctime = date("Y-m-d H:i:s", time());
                        $link->query("INSERT INTO 9_user_prize (`uid`, `ctime`, `type`, `detail`, `prize_id`) VALUES ($uid, '$ctime', 'phone_1', '', $cashId)");

                        ##中现金奖
                        return array(
                            "code" => "200",
                            "type" => "phone_1",
                            "data" => $phonePrizeList[$phonePrizeIndex]
                        );
                    }
                } else if ($phone2Rand <= $phone2Rate && !$phone2Id && $phone2Count < $phone2Max) {
                    //中
                    $result = $link->query("SELECT id, title, des_w FROM 9_prize WHERE type = 'phone_2'");

                    $phonePrizeList = [];
                    while ($row = mysqli_fetch_assoc($result)) {
                        $phonePrizeList[] = $row;
                    }
                    
                    if (count($phonePrizeList) > 0) {
                        $phonePrizeIndex = mt_rand(0, count($phonePrizeList) - 1);
                        $cashId = $phonePrizeList[$phonePrizeIndex]['id'];

                        $ctime = date("Y-m-d H:i:s", time());
                        $link->query("INSERT INTO 9_user_prize (`uid`, `ctime`, `type`, `detail`, `prize_id`) VALUES ($uid, '$ctime', 'phone_2', '', $cashId)");

                        ##中现金奖
                        return array(
                            "code" => "200",
                            "type" => "phone_2",
                            "data" => $phonePrizeList[$phonePrizeIndex]
                        );
                    }
                }  else if ($ticketRand <= $ticketRate && !$ticketId && $ticketCount < $ticketMax) {
                    //中
                    $result = $link->query("SELECT id, title, des_w FROM 9_prize WHERE type = 'ticket'");

                    $ticketList = [];
                    while ($row = mysqli_fetch_assoc($result)) {
                        $ticketList[] = $row;
                    }

                    if (count($ticketList) > 0) {
                        $phonePrizeIndex = mt_rand(0, count($ticketList) - 1);
                        $ticketId = $ticketList[$phonePrizeIndex]['id'];

                        $ctime = date("Y-m-d H:i:s", time());
                        $link->query("INSERT INTO 9_user_prize (`uid`, `ctime`, `type`, `detail`, `prize_id`) VALUES ($uid, '$ctime', 'ticket', '', $ticketId)");

                        ##中现金奖
                        return array(
                            "code" => "200",
                            "type" => "ticket",
                            "data" => $ticketList[$phonePrizeIndex]
                        );
                    }
                }  else if ($rsRand <= $rsRate && !$rsId && $rsCount < $rsMax) {
                    //中
                    $result = $link->query("SELECT id, title, des_w FROM 9_prize WHERE type = 'rs'");

                    $rsList = [];
                    while ($row = mysqli_fetch_assoc($result)) {
                        $rsList[] = $row;
                    }

                    if (count($rsList) > 0) {
                        $phonePrizeIndex = mt_rand(0, count($rsList) - 1);
                        $rsId = $rsList[$phonePrizeIndex]['id'];

                        $ctime = date("Y-m-d H:i:s", time());
                        $link->query("INSERT INTO 9_user_prize (`uid`, `ctime`, `type`, `detail`, `prize_id`) VALUES ($uid, '$ctime', 'rs', '', $rsId)");

                        ##中现金奖
                        return array(
                            "code" => "200",
                            "type" => "rs",
                            "data" => $rsList[$phonePrizeIndex]
                        );
                    }
                } else {
                    ##随机抽取一个coupon奖品
                    $result = $link->query("SELECT id, code, title, des, des_w FROM 9_prize WHERE type = 'coupon'");

                    $couponPrizeList = [];
                    while ($row = mysqli_fetch_assoc($result)) {
                        $couponPrizeList[] = $row;
                    }

                    if (count($couponPrizeList) > 0) {
                        $couponRandIndex = mt_rand(0, count($couponPrizeList) - 1);

                        $ctime = date("Y-m-d H:i:s", time());
                        $couponId = $couponPrizeList[$couponRandIndex]['id'];

                        $link->query("INSERT INTO 9_user_prize (`uid`, `ctime`, `type`, `detail`, `prize_id`) VALUES ('$uid', '$ctime', 'coupon', '', '$couponId')");

                        return array(
                            "code" => "200",
                            "type" => "coupon",
                            "data" => $couponPrizeList[$couponRandIndex]
                        );
                    }
                }
            } else {
                return array(
                    "code" => "400",
                    "message" => "You have no chance"
                );
            }


        } else {
            return array(
                "code" => "400",
                "message" => "login first"
            );
        }
    }

    public function savePrize($type, $detail) {
        $link = D();
        $detailTxt = json_encode($detail);

        $link->query("UPDATE 9_prize SET config = '$detailTxt' WHERE type = '$type'");

        return array(
            "code" => "200",
            "message" => $detailTxt
        );
    }

    public function getPrizeConfig($type) {
        $link = D();

        $result = $link->query("SELECT config FROM 9_prize WHERE type = '$type'");
        $row = json_decode(mysqli_fetch_assoc($result)['config'], true);

        return array(
            "code" => "200",
            "data" => $row
        );
    }

}