console.log(getCookieByName('account'));
$(document).ready(function () {
  showAccount(getCookieByName('name'));
  console.log(getCookieByName('level'));
})


function showAccount(customerName) {
  if (customerName != "") {
    console.log(123);
    let welcome = document.getElementById("logIn");
    console.log(welcome);
    welcome.innerText = "歡迎, " + customerName;
    welcome.href = "";
    console.log(welcome.innerHTML);
  }
  // $('#logIn').text = "歡迎, " + customerName;
}

function getCookieByName(name) {
  var value = parseCookie()[name];
  if (value) {
    value = decodeURIComponent(value);
  }
  return value;
}

function parseCookie() {
  var cookieObj = {};
  var cookieAry = document.cookie.split(';');
  var cookie;

  for (var i = 0, l = cookieAry.length; i < l; ++i) {
    cookie = jQuery.trim(cookieAry[i]);
    cookie = cookie.split('=');
    cookieObj[cookie[0]] = cookie[1];
  }

  return cookieObj;
}