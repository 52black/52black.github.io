var inst = new mdui.Drawer('#drawer');

// method

document.getElementById('open').addEventListener('click', function () {
  inst.open();
});

document.getElementById('close').addEventListener('click', function () {
  inst.close();
});

document.getElementById('toggle').addEventListener('click', function () {
  inst.toggle();
});

document.getElementById('getState').addEventListener('click', function () {
  mdui.alert(inst.getState());
});

 // event
var drawer = document.getElementById('drawer');
drawer.addEventListener('open.mdui.drawer', function () {
  console.log('open');
});
drawer.addEventListener('opened.mdui.drawer', function () {
  console.log('opened');
});
drawer.addEventListener('close.mdui.drawer', function () {
  console.log('close');
});
drawer.addEventListener('closed.mdui.drawer', function () {
  console.log('closed');
});
