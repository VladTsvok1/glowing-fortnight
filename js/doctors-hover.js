document.querySelector('.section-doctors-main-item').addEventListener('mouseover' , hoverChange);

function hoverChange(){
  let currentElemUnder = document.querySelector('.section-reviews');
  currentElemUnder.classList.add('.change-under-hover-item')
}