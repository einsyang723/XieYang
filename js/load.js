$(document).ready(function () {
    setTimeout(function () {
        $('.flower').addClass('show')
    }, 1500);
    //浏览器兼容
    function create() {
        petal = document.getElementById('page1').appendChild(document.createElement('img'));
        petal.setAttribute("id", "petal" + index_p);
        petal.src = "../img/home/b" + Math.floor(Math.random() * 7) + ".png";
        petal.style.position = "absolute";
        petal.style.height = "25px";
        petal.style.right = Math.floor(Math.random() * 500) + "px";
        petal.style.top = "0px";
        moveElement("petal" + index_p);
        index_p += 1;
    }
    let petal = document.getElementById('page1').appendChild(document.createElement('img'));
    var index_p = 0;
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    create(index_p);
    if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
        document.addEventListener("DOMMouseScroll", scrollFun, false);
    } else if (document.addEventListener) {
        document.addEventListener("mousewheel", scrollFun, false);
    } else if (document.attachEvent) {
        document.attachEvent("onmousewheel", scrollFun);
    } else {
        document.onmousewheel = scrollFun;
    }

    let index = 1;
    let curIndex = 1; //记录当前的页面
    let wrap = document.querySelector("#wrap");
    let pageNum = document.querySelectorAll(".page").length;
    let hei = 936;
    //如果不加时间控制，滚动会过度灵敏，一次翻好几屏
    let startTime = 0, //翻屏起始时间
        endTime = 0,
        now = 0;

    //滚动事件处理函数
    function scrollFun(event) {
        startTime = new Date().getTime();
        let delta = event.detail || -event.wheelDelta;
        console.log(delta);
        //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
        //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
        if (endTime - startTime < -1000) {
            if (delta > 0 && parseInt(wrap.offsetTop) > -(hei * (pageNum - 1))) {
                //向下滚动
                index++;
                toPage(index);
            }
            if (delta < 0 && parseInt(wrap.offsetTop) < 0) {
                //向上滚动
                index--;
                toPage(index);
            }
            endTime = new Date().getTime();
        }
    }

    function toPage(idx) {
        if (idx != curIndex) {
            //jquery实现动画效果
            let delta = idx - curIndex;
            now = now - delta * hei;
            console.log(now);
            $("#wrap").animate(
                {
                    top: now + "px",
                },
                500
            );
            curIndex = idx;
        }

    }
});


function moveElement(elemID) {
    let elem = document.getElementById(elemID);
    let poseX = parseInt(elem.style.right);
    let poseY = parseInt(elem.style.top);
    if (!poseY < window.innerHeight) {
        poseX += Math.floor(Math.random() * 20) + 1;
        poseY += Math.floor(Math.random() * 20) + 1;
    }
    elem.style.right = poseX + "px";
    elem.style.top = poseY + "px";
    var repeat = "moveElement('" + elemID + "')";
    movement = setTimeout(repeat, 150);
}

