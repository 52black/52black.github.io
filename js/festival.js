function al(){
var D=new Date();
var dl=["10-24"];
var tx=[['1024程序员节快乐','向程序员们致敬，拒绝加班','https://baike.baidu.com/item/1024%E7%A8%8B%E5%BA%8F%E5%91%98%E8%8A%82/16017417']]
n=(D.getMonth()+1)+'-'+D.getDate();
var a=dl.indexOf(n);
if(a!=-1){
  var $$ = mdui.$;
  mdui.dialog({
    title: tx[a][0],
    content: tx[a][1],
    buttons: [
      {
        text: '确认',
        onClick: function(inst){
            window.open(tx[a][2],"_blank");
          }
      }
    ]
  });
}
}
checkCookie();
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    var curDate = new Date();
var curTime = curDate.getTime();
var endTime = convertTime(curDate,Deadline);
var disTime = endTime - curTime;
    var expires = "expires=" + disTime;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
            
    } else {
         setCookie("username", '1', 1);
         al();
    }
  }