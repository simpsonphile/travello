var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var cityCardsContainer = document.querySelector('.city-cards-container');
var cityCards = document.querySelectorAll('.city-card');
var mainCardsContainer = document.querySelector('.city-cards-main-container');
var widthOfCityCard = 30/100;
var rightPos = 0;


//functions
function changewidthOfCityCard(){
  if(window.innerWidth>=900)widthOfCityCard=30/100;
  else if(window.innerWidth>600)widthOfCityCard=47/100;
  else widthOfCityCard=97/100;
}

function adjustCityCards(){
  cityCards.forEach(function(e){
    e.style.width = mainCardsContainer.offsetWidth * widthOfCityCard +'px';
    e.style.marginLeft = mainCardsContainer.offsetWidth * 1.5/100+ 'px';
    e.style.marginRight = mainCardsContainer.offsetWidth * 1.5/100+ 'px';
  });

  cityCardsContainer.style.width = cityCards[0].offsetWidth * (cityCards.length+1) +'px';
  cityCardsContainer.style.right = "0px";
  rightPos = 0;
  cityCardsContainer.style.height = cityCards[0].offsetHeight+"px";
}

function slide(direction, value){
  // if((rightPos + direction * value <= cityCards[0].offsetWidth * 3) && (rightPos + direction * value >= 0))
  if((((rightPos + direction * value <= cityCards[0].offsetWidth * 3) && window.innerWidth>=900)||
    ((rightPos + direction * value <= cityCards[0].offsetWidth * 4) && window.innerWidth>600 && window.innerWidth<900) ||
    ((rightPos + direction * value <= cityCards[0].offsetWidth * 5) && window.innerWidth<=600))&&
    (rightPos + direction * value >= 0))
  rightPos +=direction*value;
  cityCardsContainer.style.right = rightPos+'px';
}



//listeners
window.addEventListener('resize', function(){
  changewidthOfCityCard();
  adjustCityCards();
});

prev.addEventListener('click', function(){
  let slideValue = cityCards[0].offsetWidth + mainCardsContainer.offsetWidth * 3/100;
  slide(-1,slideValue);
});
next.addEventListener('click', function(){
  let slideValue = cityCards[0].offsetWidth + mainCardsContainer.offsetWidth * 3/100;
  slide(1, slideValue);
});


//init
changewidthOfCityCard();
adjustCityCards();

////////////////////////
//city-cards-modal
let modalImage = document.querySelector('#city-cards-modal');
for (var i = 0; i < cityCards.length; i++) {
  cityCards[i].addEventListener('click', function(e){
    console.log(e.children.item(1));
    modalImage.src = e.children.item(1).src;
    window.location.assign('#modal');
  });
}
