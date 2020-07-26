const mapEL = document.querySelector('.section-promo-media-map');

const  mapBlock = document.querySelector('.section-map');
const closeButtonMap = document.querySelector('.close-map')

mapEL.addEventListener('click', displayMap);
document.addEventListener('keydown', hideMenu);
closeButtonMap.addEventListener('click', hideMenu);

function displayMap() {
    mapBlock.classList.add('map-display-js');

}

function hideMenu() {
    if (mapBlock.classList.contains('map-display-js')) {
        if(event.key == 'Escape'){
            mapBlock.classList.remove('map-display-js');
        }else{
            mapBlock.classList.remove('map-display-js');
        }
    }

}
