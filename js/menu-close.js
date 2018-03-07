var menuElements = document.getElementById('main-nav-menu').getElementsByTagName('li');
var checkbox = document.querySelector('#show-menu-checkbox');

for (var i = 0; i < menuElements.length; i++) {
  menuElements[i].addEventListener('click', function(){
    checkbox.checked = false;
  });
}

var mainNavMenu = document.querySelector('#main-nav-menu');
mainNavMenu.addEventListener('click', function(e){
    checkbox.checked = false;
});

window.addEventListener('resize', function(){
  checkbox.checked = false;
})
