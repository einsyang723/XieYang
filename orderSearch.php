<?php

header("Content-Type:text/html;charset=utf-8");

$conn = new mysqli('localhost','root', 'S225244168ya', 'XieYang', '3306');

$pay=$_GET['pay'];

if(!$conn)
    die('連接失敗 : '. mysqli_error($conn));
else{

        $sql=" SELECT DISTINCT `arr_time`, `obj0`, `obj1`, `obj2`, `obj3`, `obj4`, `obj5`, `obj6`, `obj7`, `obj8`, `obj9`, `obj10`, `obj11`, `obj12`, `obj13`, `obj14` FROM `product_order` WHERE pay='".$pay."'" ;
        
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
                    
                    $txt.=$row['arr_time'];
                    $txt.="-";                  
                    $txt.=$row['obj0'];
                    $txt.="-";
                    $txt.=$row['obj1'];
                    $txt.="-";
                    $txt.=$row['obj2'];
                    $txt.="-";
                    $txt.=$row['obj3'];
                    $txt.="-";
                    $txt.=$row['obj4'];
                    $txt.="-";
                    $txt.=$row['obj5'];
                    $txt.="-";                  
                    $txt.=$row['obj6'];
                    $txt.="-";
                    $txt.=$row['obj7'];
                    $txt.="-";
                    $txt.=$row['obj8'];
                    $txt.="-";
                    $txt.=$row['obj9'];
                    $txt.="-";
                    $txt.=$row['obj10'];
                    $txt.="-";
                    $txt.=$row['obj11'];
                    $txt.="-";
                    $txt.=$row['obj12'];
                    $txt.="-";
                    $txt.=$row['obj13'];
                    $txt.="-";
                    $txt.=$row['obj14'];
                    $txt.="-";
                    
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