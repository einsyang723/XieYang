var proArr=["抹茶", "焙茶", "煎茶", "玄米茶", "玉露", "和三盆糖打菓子", "大福", "最中", "栗蒸羊羹", "海綿蛋糕", "煉切", "糰子", "葛櫻", "銅鑼燒", "香魚燒"];
var list=[];

window.onload = function(){
var Btn0=document.getElementById("Btn0");
var Btn1=document.getElementById("Btn1");
var Btn2=document.getElementById("Btn2");
var Btn3=document.getElementById("Btn3");
var Btn4=document.getElementById("Btn4");
var Btn5=document.getElementById("Btn5");
var Btn6=document.getElementById("Btn6");
var Btn7=document.getElementById("Btn7");
var Btn8=document.getElementById("Btn8");
var Btn9=document.getElementById("Btn9");
var Btn10=document.getElementById("Btn10");
var Btn11=document.getElementById("Btn11");
var Btn12=document.getElementById("Btn12");
var Btn13=document.getElementById("Btn13");
var Btn14=document.getElementById("Btn14");

click(Btn0,0);
click(Btn1,1);
click(Btn2,2);
click(Btn3,3);
click(Btn4,4);
click(Btn5,5);
click(Btn6,6);
click(Btn7,7);
click(Btn8,8);
click(Btn9,9);
click(Btn10,10);
click(Btn11,11);
click(Btn12,12);
click(Btn13,13);
click(Btn14,14);

    }


for(var i=0;i<15;i++){
    list.push(0);
    
}


function click(element, i) {
    element.onclick = function() {
        alert("add"+i);
        list[i]+=1;
        var table = document.getElementById("table");
        var tbody = table.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";
      // 循环遍历数据，创建行和单元格，并插入表格
        for (var j = 0; j < list.length; j++) {
            if(list[j]!=0){
                var row = document.createElement("tr");
                var productCell = document.createElement("td");
                var countCell = document.createElement("td");
                productCell.textContent =proArr[j];
                countCell.textContent =list[j];
            
                row.appendChild(productCell);
                row.appendChild(countCell);

                tbody.appendChild(row);
        }
      }
        
};
  }

function showPopup() {
    document.getElementById("popup").style.display = "block";
    
  }
  
function closePopup() {
    document.getElementById("popup").style.display = "none";
    
}
  
function enter(){
    
  var datetimeInput = document.getElementById("datetime-input");
  var parts = datetimeInput.value.split("T");
  var formattedDate = parts[0].replace(/-/g, "");
  var formattedTime = parts[1].substring(0, 5);
  var selectedDateTime = formattedDate + " " + formattedTime;
  var pro = list.join("-");

  var url = "php/orderSend.php";
  var params = "pro=" + encodeURIComponent(pro) + "&selectedDateTime=" + encodeURIComponent(selectedDateTime);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 處理回應
      console.log(xhr.responseText);
    }
  };

  xhr.send(params);


    

   
    
    
    //再用資料庫篩選已付款跟未付款分開
 //

}