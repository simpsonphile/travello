let modal = document.querySelector('#city-cards-modal');
let modalText = modal.querySelector('.modal-text');
let modalImageContainer = modal.querySelector('.modal-image-container');
let closeModal = modal.querySelector('.close-icon');

for (var i = 0; i < cityCards.length; i++) {
  cityCards[i].addEventListener('click', function(e){
    clearModal();
    //tworzymy obrazek
    let newImage = document.createElement('img');
    newImage.src = this.getElementsByTagName('img')[0].src;
    //dodajemy obrazek
    modalImageContainer.appendChild(newImage);

    //kopiujemy text content i dodajemy do modala
    modalText.appendChild(this.querySelector('.city-card-text').cloneNode(true));

    //pokazujemy modal
    window.location.assign('#city-cards-modal');
  });
}

function clearModal(){
  modalImageContainer.innerHTML = '';
  modalText.innerHTML = '';
  window.location.assign('#explore-by-city');
}

modal.addEventListener('click', function(e){
  console.log(e);
  if(e.path[0] == modal)
  clearModal();
});

closeModal.addEventListener('click', function(){
  clearModal();
});



window.addEventListener('keydown', function(e){
  if(e.keyCode == 27 || e.key == 'Escape'){
      clearModal();
    }
});
