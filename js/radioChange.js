function tea(){
  $(".l-tea").show();
  $(".l-pastry").hide();
}

function pastry(){
  $(".l-tea").hide();
  $(".l-pastry").show();
}

function hasAlreadyPaid(){
  $(".l-hasAlreadyPaid").show();
  $(".l-notYet").hide();
  search(1);
}

function notYet(){
  $(".l-hasAlreadyPaid").hide();
  $(".l-notYet").show();
  search(0);
}

function $_xmlHttpRequest()
{   
    if(window.ActiveXObject)
    {
        xmlHTTP=new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHTTP=new XMLHttpRequest();
    }
}

function search(pay){
 
  var Arr=[]; 
  var proArr=["抹茶", "焙茶", "煎茶", "玄米茶", "玉露", "和三盆糖打菓子", "大福", "最中", "栗蒸羊羹", "海綿蛋糕", "煉切", "糰子", "葛櫻", "銅鑼燒", "香魚燒"];

  $_xmlHttpRequest();
  
  xmlHTTP.open("GET", "php/orderSearch.php?pay=" + pay, true);

      xmlHTTP.onreadystatechange=function check_user()
      {
          if(xmlHTTP.readyState == 4)
          {
              if(xmlHTTP.status == 200)
              {
                  var txt=xmlHTTP.responseText;
                  //alert(txt); //20230630 10:44-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-/  16
                  var parts = txt.split("/");//時間-obj0的數量...-obj14的數量(共16項)

                  for (var i = 0; i < parts.length-1; i++) {
                      //alert("part"+parts[i]);
                      var subParts = parts[i].split("-");
                      
                      for (var j = 0; j < subParts.length; j++) {
                        if(subParts[j]!=""){
                          Arr.push(subParts[j]);
                          //alert(subParts[j]);
                        }
                      }
                      
                      
                  }
                  
                  if(pay==1){
                    var table = document.getElementById("table-hasAlreadyPaid");
                    var tbody = table.getElementsByTagName("tbody")[0];
                    
                    tbody.innerHTML = "";
                    // 循环遍历数据，创建行和单元格，并插入表格
                    for (var i = 0; i < Arr.length; i+=16) {//0-15 16-31
                      var row = document.createElement("tr");
                      var timeCell = document.createElement("td");
                      var productCell = document.createElement("td");
                      var tablenumCell = document.createElement("td");

                      timeCell.textContent = Arr[i];
                      for(var j=0;j<15;j++){//proarr:0-14 arr:1-15
                        if(Arr[i+j+1]!=0 ){ //&& Arr[j+i+1].includes('":""')
                          productCell.textContent += proArr[j]+"*"+Arr[j+i+1]+" ";
                          //alert(proArr[j]+Arr[j+i+1]);
                          //alert("i="+i);
                          //alert("j="+j);
                        }
                    }
                      tablenumCell.textContent =Math.floor(Math.random() * 10) + 1;

                      row.appendChild(timeCell);
                      row.appendChild(productCell);
                      row.appendChild(tablenumCell);
                      tbody.appendChild(row);
                    }
                  }
                  else if(pay==0){
                    var table = document.getElementById("table-notYet");
                    var tbody = table.getElementsByTagName("tbody")[0];
                    tbody.innerHTML = "";
                    // 循环遍历数据，创建行和单元格，并插入表格
                    for (var i = 0; i < Arr.length; i+=16) {//0-15 16-31
                      var row = document.createElement("tr");
                      var timeCell = document.createElement("td");
                      var productCell = document.createElement("td");
                     

                      timeCell.textContent = Arr[i];
                      for(var j=0;j<15;j++){//proarr:0-14 arr:1-15
                        if(Arr[i+j+1]!=0 ){ //&& Arr[j+i+1].includes('":""')
                          productCell.textContent += proArr[j]+"*"+Arr[j+i+1]+" ";
                          //alert(proArr[j]+Arr[j+i+1]);
                          //alert("i="+i);
                          //alert("j="+j);
                        }
                    }
                      
                      row.appendChild(timeCell);
                      row.appendChild(productCell);
                      tbody.appendChild(row);
                    }
                  }
                  

                  //var arr = txt.split(/-+/).filter(Boolean);

                  //for(var i=0;i<arr.length;i++){
                     // document.getElementById("area").options.add(new Option(arr[i]));
                      
                 // }
                 
              }
          }
      }
      xmlHTTP.send(null);
      
}