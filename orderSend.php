<?php


if (isset($_POST["pro"], $_POST["selectedDateTime"])) {
    $pro=$_POST["pro"];
    $selectedDateTime=$_POST["selectedDateTime"];
    $arr=explode("-", $pro);
   
    
        $arr0=$arr[0];
        $arr1=$arr[1];
        $arr2=$arr[2];
        $arr3=$arr[3];
        $arr4=$arr[4];
        $arr5=$arr[5];
        $arr6=$arr[6];
        $arr7=$arr[7];
        $arr8=$arr[8];
        $arr9=$arr[9];
        $arr10=$arr[10];
        $arr11=$arr[11];
        $arr12=$arr[12];
        $arr13=$arr[13];
        $arr14=$arr[14];


        $conn = new mysqli('localhost','root', 'S225244168ya', 'xieyang', '3306');

        if(!$conn){
            die('連接失敗 : '. mysqli_error($conn));
            
            }
        else{
            //$sql ="INSERT INTO `product_order` VALUES('簡侑參', '".$selectedDateTime."', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0','0')";
            $sql ="INSERT INTO `product_order` VALUES('簡侑參', '".$selectedDateTime."', '1', '".$arr0."', '".$arr1."', '".$arr2."', '".$arr3."', '".$arr4."', '".$arr5."', '".$arr6."', '".$arr7."', '".$arr8."', '".$arr9."', '".$arr10."', '".$arr11."', '".$arr12."', '".$arr13."', '".$arr14."')";
            $result=mysqli_query($conn,$sql);
            print_r("成功");  
            echo"成功i";
            //mysqli_free_result($result);
            mysqli_close($conn);

            }
    }
else{
    echo "out";
}

?>