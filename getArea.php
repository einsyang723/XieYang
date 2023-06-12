<?php

header("Content-Type:text/html;charset=utf-8");

$conn = new mysqli('localhost','root', 'S225244168ya', 'XieYang', '3306');

$city=$_GET['city'];

if(!$conn)
    die('連接失敗 : '. mysqli_error($conn));
else{
/*`COL 3`, `COL 4`, `COL 5`*/
        $sql=" SELECT DISTINCT SUBSTRING_INDEX(SUBSTRING(`address`, 4), '區', 1) AS `sub_address` FROM `shopInfo` WHERE SUBSTRING(`address`, 1, 3)='".$city."'" ;
        
        $txt="";
        $result=mysqli_query($conn,$sql);

        if ($result) 
        {
            /*mysqli_num_rows方法可以回傳我們結果總共有幾筆資料*/
            if (mysqli_num_rows($result)!=0) 
            {
                /*mysqli_fetch_assoc方法可取得一筆值*/
                while ($row = mysqli_fetch_assoc($result)) 
                {
                    $txt.=$row['sub_address'];
                    $txt.="區-";
                }
            }
            mysqli_free_result($result);
            echo $txt;
        }
        else
        {
            echo ('語法執行失敗');
            mysqli_close($conn);
        }
    }



?>