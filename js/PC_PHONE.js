


    var system ={};  
       var p = navigator.platform;       
       system.win = p.indexOf("Win") == 0;  
       system.mac = p.indexOf("Mac") == 0;  
       system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
       
myscreen=
"屏幕分辨率为："+screen.width+"*"+screen.height //最好是window.screen
+"<br />"+
"屏幕可用大小："+screen.availWidth+"*"+screen.availHeight
+"<br />"+
"网页可见区域宽："+document.body.clientWidth
+"<br />"+
"网页可见区域高："+document.body.clientHeight
+"<br />"+
"网页可见区域宽(包括边线的宽)："+document.body.offsetWidth
+"<br />"+
"网页可见区域高(包括边线的宽)："+document.body.offsetHeight
+"<br />"+
"网页正文全文宽："+document.body.scrollWidth
+"<br />"+
"网页正文全文高："+document.body.scrollHeight
+"<br />"+
"网页被卷去的高："+document.body.scrollTop
+"<br />"+
"网页被卷去的左："+document.body.scrollLeft
+"<br />"+
"网页正文部分上："+window.screenTop
+"<br />"+
"网页正文部分左："+window.screenLeft
+"<br />"+
"屏幕分辨率的高："+window.screen.height
+"<br />"+
"屏幕分辨率的宽："+window.screen.width
+"<br />"+
"屏幕可用工作区高度："+window.screen.availHeight
+"<br />"+
"屏幕可用工作区宽度："+window.screen.availWidth

       if(system.win||system.mac||system.xll){//如果是电脑跳转到
               //window.location.href="";  

               document.getElementById("ping").innerHTML = "电脑 --->>"+myscreen
       }else{  //如果是手机,跳转到
              //window.location.href="#";  

              document.getElementById("ping").innerHTML = "手机--->>"+myscreen;

       }






 //电脑还是手机
