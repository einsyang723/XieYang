var city, area="";
var Arr=[];
var map;
var conArray=[];


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

function areaDelete(){
    colls = document.getElementById("area").options; //获取引用
    for(var i=colls.length-1;i>0;i--){
        colls.remove(i);
        //alert("--");
    }
}

function getCity(){
    city= document.getElementById("city").value;
    areaDelete();
    //獲得地區去資料庫找所有地點並加入option
    
    $_xmlHttpRequest();
    xmlHTTP.open("GET","php/getArea.php?city="+city,true);
    
        xmlHTTP.onreadystatechange=function check_user()
        {
            if(xmlHTTP.readyState == 4)
            {
                if(xmlHTTP.status == 200)
                {
                    var txt=xmlHTTP.responseText;
                    
                    var arr = txt.split(/-+/).filter(Boolean);

                    for(var i=0;i<arr.length;i++){
                        document.getElementById("area").options.add(new Option(arr[i]));
                        
                    }
                   
                }
            }
        }
        xmlHTTP.send(null);
        /** 
        if(region=="臺北市")
            item = new Option("ya");    //通过Option()构造函数创建option对象        
              
        
        document.getElementById("place").options.add(item); //添加到options集合中
       */
      
    
}

function getArea(){
    area= document.getElementById("area").value;
}

function search(){

    // 获取表格元素
    
    
    $_xmlHttpRequest();
    xmlHTTP.open("GET","php/search.php?cityArea="+((city+area).replace("區", "")),true);
    
        xmlHTTP.onreadystatechange=function check_user()
        {
            if(xmlHTTP.readyState == 4)
            {
                if(xmlHTTP.status == 200)
                {
                    var txt=xmlHTTP.responseText;
                    alert(txt);
                    var parts = txt.split("/");

                    for (var i = 0; i < parts.length-1; i++) {
                        //alert("part"+parts[i]);
                        var subParts = parts[i].split("-");
                        for (var j = 0; j < subParts.length; j++) {
                            alert("sub"+subParts[j]);
                            Arr.push(subParts[j]);
                        }
                        
                        
                    }
                    

                    var table = document.getElementById("table");
                    var tbody = table.getElementsByTagName("tbody")[0];
                  
                      // 循环遍历数据，创建行和单元格，并插入表格
                      for (var i = 0; i < Arr.length; i+=4) {
                        var row = document.createElement("tr");
                        var nameCell = document.createElement("td");
                        var phoneCell = document.createElement("td");
                        var addressCell = document.createElement("td");
                  
                        nameCell.textContent = Arr[i];
                        phoneCell.textContent = Arr[i+1];
                        addressCell.textContent =Arr[i+2];
                        
                        var newData = {
                            des:  Arr[i]+Arr[i+1]+Arr[i+2],
                            coor: Arr[i+3]
                          };
                          
                          conArray.push(newData);

                        row.appendChild(nameCell);
                        row.appendChild(phoneCell);
                        row.appendChild(addressCell);
                        tbody.appendChild(row);
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



  