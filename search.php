<?php

header("Content-Type:text/html;charset=utf-8");

$conn = new mysqli('localhost','root', 'S225244168ya', 'XieYang', '3306');

$cityArea=$_GET['cityArea'];

if(!$conn)
    die('連接失敗 : '. mysqli_error($conn));
else{

        $sql=" SELECT DISTINCT `shopname`, `phone`, `address`, `coordination` FROM `shopinformation` WHERE SUBSTRING_INDEX(SUBSTRING(`address`, 1), '區', 1)='".$cityArea."'" ;
        //$sql=" SELECT DISTINCT `shopname`, `phone`, `address`, `coordination` FROM `shopinformation` WHERE SUBSTRING_INDEX(SUBSTRING(`address`, 1), '區', 1)='台北市中山'" ;
    
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
                    
                    $txt.=$row['shopname'];
                    $txt.="-";                  
                    $txt.=$row['phone'];
                    $txt.="-";                  
                    $txt.=$row['address'];
                    $txt.="-";                  
                    $txt.=$row['coordination'];
                   // $txt.="-";
                   // $txt.=$toldescribe;
                    $txt.="/";    
                    echo $txt;   
                   
                }
            }
            mysqli_free_result($result);
            
        }
        else
        {
            echo ('語法執行失敗');
            mysqli_close($conn);
        }
    }



?>