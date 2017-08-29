<?php

class user extends engine {
    public function login($facebookId, $token) {
    	if ($facebookId) {
    		
    		##实例化数据库
    		$link = D();

    		#查询用户是否存在
    		$result = $link->query("SELECT uid FROM 9_user WHERE openid = '$facebookId' LIMIT 0, 1");

    		$row = mysqli_fetch_assoc($result);

    		if ($row['uid']) {

    			//自动登录，记录session和cookie
    			SetCookie("uid", $row['uid'],time() + 3600 * 24 * 7, "/", "gadgetguruawards.9apps.cc", 0);

    			session_start();
    			
    			$_SESSION["uid"] = $row['uid'];

    		} else {
    			$ctime = date("Y-m-d H:i:s", time());
    			$link->query("INSERT INTO 9_user (`openid`, `claim`, `ctime`, `contact`) VALUES ('$facebookId', 0, '$ctime', '')");

    			$result = $link->query("SELECT uid FROM 9_user WHERE openid = '$facebookId' LIMIT 0, 1");

    			$row = mysqli_fetch_assoc($result);

    			SetCookie("uid", $row['uid'],time() + 3600 * 24 * 7, "/", "gadgetguruawards.9apps.cc", 0);

                session_start();
                
                $_SESSION["uid"] = $row['uid'];
    		}

            $result = $link->query("SELECT id FROM 9_app_vote WHERE uid = {$row['uid']} LIMIT 0, 1");
            $row = mysqli_fetch_assoc($result);
            if ($row['id']) {
                $_SESSION["voted"] = 1;     ##记录是否voted过
            }

            return array(
                "code" => "200",
                "message" => "success"
            );
    	} else {
            return array(
                "code" => "400",
                "message" => "failed"
            );
        }
    }

    public function getClaimNumber($uid) {
        if ($uid) {
            $link = D();

            $result = $link->query("SELECT claim FROM 9_user WHERE uid = $uid");

            $row = mysqli_fetch_assoc($result);

            return $row['claim'] ? $row['claim'] : 0;
        } else {
            return 0;
        }
    }

    public function getPrizeList($uid) {
        if ($uid) {
            $link = D();
            $result = $link->query("SELECT * FROM 9_user_prize LEFT JOIN 9_prize ON 9_prize.id = 9_user_prize.prize_id WHERE uid = $uid");

            while($row = mysqli_fetch_assoc($result)) {
                if ($row['title']) {
                    $data[] = $row;
                }
            }

            return $data;
        }
    }

    public function getVoteAppId($uid) {
        $link = D();
        $result = $link->query("SELECT app_id FROM 9_app_vote WHERE uid = $uid LIMIT 0, 1");
        $row = mysqli_fetch_assoc($result);

        return $row;
    }

    public function shareRecord($postId, $appId) {

        session_start();

        $uid = $_SESSION['uid'];

        if ($uid && $postId && $appId) {

            $link = D();

            $dateNow = date("Y-m-d H:i:s", strtotime(date("Y-m-d", time())));
            $dateTomorrow = date("Y-m-d H:i:s", time() + 60);
            $ctime = date("Y-m-d H:i:s", time());

            $result = $link->query("SELECT id FROM 9_user_share WHERE uid = $uid AND ctime BETWEEN '$dateNow' AND '$dateTomorrow'");

            $shareTime = 0;
            while($row = mysqli_fetch_assoc($result)) {
                $shareTime++;
            }

            ##每天前三次才能获取claim资格
            if ($shareTime < 3) {
                M("vote")->addClaimChance();
                $link->query("INSERT INTO 9_user_share (`uid`, `post_id`, `app_id`, `ctime`, `status`) VALUES ('$uid', '$postId', '$appId', '$ctime', 1)");
                return "success";
            } else {
                $link->query("INSERT INTO 9_user_share (`uid`, `post_id`, `app_id`, `ctime`, `status`) VALUES ('$uid', '$postId', '$appId', '$ctime', 0)");
                return "fail";
            }
        } else {
            return "fail";
        }
    }

    public function updateContact($name, $phone, $email, $account, $address, $pin) {
        session_start();

        $uid = $_SESSION['uid'];

        $originArr = $this->getContact($uid);

        ##手机
        if ($pin) {
            $newArr = array(
                "name" => $name,
                "phone" => $phone,
                "address" => $address,
                "email" => $email,
                "pin" => $pin
            );
        } else {
            $newArr = array(
                "name" => $name,
                "phone" => $phone,
                "email" => $email,
                "paymt" => $account
            );
        }

        if (!$originArr) {
            $contact = json_encode($newArr);
        } else {
            $contact = json_encode(array_merge($originArr, $newArr));
        }


        if ($uid) {
            $link = D();
            $link->query("UPDATE 9_user SET contact = '$contact' WHERE uid = $uid");

            return array(
                "code" => "200",
                "message" => "success"
            );
        }
    }

    public function getContact($uid) {
        $link = D();

        ##获取联系方式
        $result = $link->query("SELECT * FROM 9_user WHERE uid = $uid");
        $row = mysqli_fetch_assoc($result);

        if ($row['contact']) {
            return json_decode($row['contact'], true);
        } else {
            return "";
        }
    }

    public function checkPrize($uid) {
        $link = D();

        $result = $link->query("SELECT 9_user_prize.id, 9_prize.logo, 9_user_prize.type, 9_prize.des_w FROM 9_user_prize LEFT JOIN 9_prize ON 9_prize.id = 9_user_prize.prize_id WHERE uid = '$uid' AND 9_user_prize.type in ('phone_1', 'phone_2') LIMIT 0, 1");
        $phoneFlag = mysqli_fetch_assoc($result);

        $result2 = $link->query("SELECT id FROM 9_user_prize  WHERE uid = '$uid' AND type = 'cash' LIMIT 0, 1");
        $cashFlag = mysqli_fetch_assoc($result2);

        return array(
            "phone" => $phoneFlag,
            "cash" => $cashFlag
        );
    }
}