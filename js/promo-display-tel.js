const telEL = document.querySelector('.section-promo-info-phone p');
const closeButton = document.querySelector('.close-button');
const telListEL = document.querySelector('.section-promo-tel-block2')

const telListEL1 = document.querySelector('.section-promo-tel-block2-1')
const telListEL2 =  document.querySelector('.section-promo-tel-block2-2')
const telListEL3 =  document.querySelector('.section-promo-tel-block2-3')


// listeners

closeButton.addEventListener('click', hideTelList);
telEL.addEventListener('click', showTelList);
telListEL.addEventListener('click', hideTelList);




// func

function showTelList(){
    const telListEL = document.querySelector('.section-promo-tel')
    telListEL.classList.add('section-promo-tel-display')
}


function hideTelList(){

    if(event.target == telListEL1 || event.target == telListEL2 || event.target == telListEL3){
        telEL.innerHTML = event.target.innerHTML;

        const telListEL = document.querySelector('.section-promo-tel')
        telListEL.classList.remove('section-promo-tel-display')
    }else if(event.target == closeButton){
        const telListEL = document.querySelector('.section-promo-tel')
        telListEL.classList.remove('section-promo-tel-display')
    }
   


}


