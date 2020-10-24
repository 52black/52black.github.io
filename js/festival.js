var D=new Date();
var dl=["10-24"];
var tx=[['1024程序员节快乐','向程序员们致敬，拒绝加班']]
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
      }
    ]
  });
}