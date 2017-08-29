<?php

class vote extends engine {
    public function takeVote($appId, $uid) {

        if ($uid) {
        	//执行数据插入操作
        	if (!$appId) {
        		return array(
		            "code" => "401",
		            "message" => "appId error"
		        );
        	}

	        $link = D();

	        $result = $link->query("SELECT id FROM 9_app_vote WHERE uid = $uid LIMIT 0, 1");

	        $row = mysqli_fetch_assoc($result);

            session_start();

	        if ($row['id']) {
	            $_SESSION["voted"] = 1;
	        	return array(
		            "code" => "201",
		            "message" => "you have voted"
		        );
	        } else {
	        	$datetime = date("Y-m-d H:i:s", time());
		        $link->query("INSERT INTO 9_app_vote (`uid`, `app_id`, `ctime`) VALUES ($uid, $appId, '$datetime')");

		        ##应用投票数+1
		        $link->query("UPDATE 9_app SET vote = vote + 1 WHERE id = $appId");


                $_SESSION["voted"] = 1;

		        return array(
		            "code" => "200",
		            "message" => "vote success"
		        );	
	        }
	        
        } else {
        	return array(
	            "code" => "400",
	            "message" => "login first"
	        );
        }   
    }


    ##增加抽奖次数
    public function addClaimChance() {
    	$uid = $_SESSION['uid'];

    	if ($uid) {
    		$link = D();

    		$result = $link->query("UPDATE 9_user SET claim = claim + 1 WHERE uid = $uid");
    	}
    }
}