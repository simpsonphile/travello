let header = document.querySelector('.header');
let headerBot = header.querySelector('.bot');

function setHeaderBotPosition(){
  headerBot.style.bottom = -headerBot.offsetHeight/2+'px';
  header.style.paddingBottom = headerBot.offsetHeight/2+1+'px';
  header.style.marginBottom = headerBot.offsetHeight/2+75+'px';
}

window.addEventListener('resize', setHeaderBotPosition);

setHeaderBotPosition();
