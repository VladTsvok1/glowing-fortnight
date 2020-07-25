const menuEL = document.querySelector('.section-header-menu_list span')
menuEL.addEventListener('click', displayMenu);
document.addEventListener('keydown', hideMenu);

function displayMenu() {

    const  menuBlock = document.querySelector('.section-menu');
    menuBlock.classList.add('section-menu-display-js');

}

function hideMenu() {
    if (document.querySelector('.section-menu').classList.contains('section-menu-display-js')) {
        if(event.key == 'Escape'){
            const  menuBlock = document.querySelector('.section-menu');
            menuBlock.classList.remove('section-menu-display-js');
        }
    }

}
