<?php
$servername = "localhost";
$username = "root";
$password = "Nknu@0723";
$dbname = "www";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} else {
  $account = $_POST['account'];
  $password = $_POST['password'];
  $select = $connect->prepare("SELECT account,password FORM member WHERE account = :acc AND password = :pw");
  $select->execute(array(':acc' => $account, ':pw' => $password));
  $result = $select->fetch(PDO::FETCH_ASSOC);
  if ($result['account'] == $account && $result['password'] == $password) {
    session_start();
    $_SESSION['member'] = $result;
    header("location:./?error=登入成功");
  } elseif ($result['password'] != $password || $result['account'] != $account) {
    header("location:./?error=帳密錯誤");
  } elseif ($result['password'] != '' || $result['account'] != '') {
    header("location:./?error=輸入不完全");
  }
}
?>