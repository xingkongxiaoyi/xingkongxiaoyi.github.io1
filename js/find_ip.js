
  
    document.getElementById("show_ip").innerHTML =("<div id=\"ok\">"+'IP地址:' + returnCitySN["cip"] + ', CID:' + returnCitySN["cid"] + ', 地区:' + returnCitySN["cname"]+",浏览器版本:"+getBrowserInfo()+"</div>");
    

    function getBrowserInfo()
{
  var agent = navigator.userAgent.toLowerCase() ;
 
  var regStr_ie = /msie [\d.]+;/gi ;
  var regStr_ff = /firefox\/[\d.]+/gi
  var regStr_chrome = /chrome\/[\d.]+/gi ;
  var regStr_saf = /safari\/[\d.]+/gi ;
   
  //IE
  if(agent.indexOf("msie") > 0)
  {
    return agent.match(regStr_ie) ;
  }
 
  //firefox
  if(agent.indexOf("firefox") > 0)
  {
    return agent.match(regStr_ff) ;
  }
 
  //Chrome
  if(agent.indexOf("chrome") > 0)
  {
    return agent.match(regStr_chrome) ;
  }
 
  //Safari
  if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
  {
    return agent.match(regStr_saf) ;
  }
 
}


