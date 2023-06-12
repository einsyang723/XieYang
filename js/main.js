var customerId = "";
var customerName = "";
var customerMail = "";
var customerPhone = "";
var customerLevel = 1;
var customerTotal = 0;
var customerCoupon = "";

function show_hide() {
  var login = document.getElementById("container1");
  var signup = document.getElementById("container2");

  if (login.style.display === "none") {
    signup.style.display = "none";  //signup消失
    login.style.display = "block";  //lonin出現
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    login.style.display = "none";   //login消失
    signup.style.display = "block"; //signup出現
    signup.style.visibility = "visible";

    document.getElementById("nickName").value = "";
    document.getElementById("account2").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("comfirm_password").value = "";
  }
}

//從文字輸入獲取值，再到DB取json
$(document).ready(function () {
  //返回chat gpt和python套件的斷字
  $('.btn_logIn').click(function () {
    var account = $('#account').val();
    console.log(account);
    var password = $('#password').val();
    console.log(password);
    if (account != "" && password != "") {
      $.ajax({
        url: 'http://127.0.0.1:5000/api_LogIn',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'account': account, 'password': password }),
        success: function (data) {
          if (data.check == true) {
            customerId = data.account
            console.log(customerId);
            customerName = data.name;
            customerMail = data.email;
            customerPhone = data.phone;
            customerTotal = 0;  //還沒改
            customerLevel = calLevel(customerTotal);
            customerCoupon = "";  //還沒改
            location.href = '././index.html';
            showAccount();
          } else {
            $('.message').addClass("show");
            $('.message').text("帳號或密碼錯誤");
            console.log("帳號或密碼錯誤");
          }
        },
        error: function (xhr, status, error) {
          console.log(error);
        }
      });
    }
  })

  $('.btn_signUp').click(function () {
    var account = $('#account2').val();
    console.log(account);
    var password = $('#password2').val();
    console.log(password);
    var email = $('#email').val();
    console.log(email);
    var phone = $('#phone').val();
    console.log(phone);
    var name = $('#nickName').val();
    console.log(name);
    var comfirm_password = $('#comfirm_password').val();
    console.log(comfirm_password);
    if (comfirm_password != password) {
      $('.message').addClass("show");
      $('.message').text("確認密碼和密碼不同");
      console.log("確認密碼和密碼不同");
    } else if (account != "" && password != "" && email != "" && phone != "" && name != "" && comfirm_password != "") {
      $.ajax({
        url: 'http://127.0.0.1:5000/api_SignUp',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'account': account, 'password': password, 'email': email, 'phone': phone, 'name': name }),
        success: function () {
          location.reload();
        },
        error: function (xhr, status, error) {
          console.log(error);
        }
      });
    }
  })
})

function showAccount() {
  if (customerId != "") {
    $('#logIn').text = "歡迎, " + customerName;
  }
}

function calLevel(customerTotal) {
  let tmp = Math.trunc(customerTotal / 100);
  let level = 1;
  while (tmp > 1) {
    tmp /= 2;
    level += 1;
  }
  return level;
}