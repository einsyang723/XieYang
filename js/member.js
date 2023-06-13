var customerId = getCookieByName('account');
var customerName = getCookieByName('name');
var customerMail = getCookieByName('email');
var customerPhone = getCookieByName('phone');
var customerLevel = getCookieByName('level');
var customerTotal = getCookieByName('total');
var customerCoupon = getCookieByName('coupon');

$(document).ready(function () {
  document.querySelector(".name").innerHTML = customerName;
  document.querySelector(".card-name").innerHTML = "斜陽卡 Lv." + customerLevel;
  document.getElementById("level").value = customerTotal;
  let level_cost = 2 ** (customerLevel - 1) * 100;
  document.getElementById("level").max = level_cost;
  document.querySelector(".cost").innerHTML = customerTotal + " / " + level_cost;
  var coin_text = document.querySelector(".coin_text");
  coin_text.innerHTML = Math.trunc(customerTotal / 100) + "點";
  console.log(coin_text.innerHTML);
  console.log(customerCoupon);
  let coupon = JSON.parse(customerCoupon);
  console.log(coupon);
  console.log(coupon["coupon"].length);
  document.querySelector(".coupon_text").innerHTML = coupon["coupon"].length + "張";

  var jumpCoupon = document.querySelector(".jumpCoupon");
  $('.coupon').click(function () {
    // let jumpCoupon = document.querySelector(".jumpCoupon");
    if (coupon["coupon"].length != 0) {
      let coupon_card = document.createElement("div");
      coupon_card.setAttribute('class', 'coupon_card');
      jumpCoupon.appendChild(coupon_card);
      coupon["coupon"].forEach(element => {
        let card_name = document.createElement("div");
        card_name.textContent = element["name"];
        card_name.setAttribute('class', 'card_name');
        let card_desc = document.createElement("div");
        card_desc.textContent = element["description"];
        card_desc.setAttribute('class', 'card_desc');
        coupon_card.appendChild(card_name);
        coupon_card.appendChild(card_desc);
      });
    }
    jumpCoupon.classList.add("show");
    document.querySelector(".close").classList.add("show");
  })
  $('.close').click(function(){
    jumpCoupon.classList.remove("show");
    document.querySelector(".close").classList.remove("show");
    let coupon_card = document.querySelector(".coupon_card");
    jumpCoupon.removeChild(coupon_card);
  })

})