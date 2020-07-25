$(document).ready(function(){
    $('.section-promo-slider').slick({
        infinite: false,
        draggable: false,
        asNavFor: '.section-promo-slider-nav',
        variableWidth: true,
    });

    $('.section-promo-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.section-promo-slider',
        centerMode: true,
        focusOnSelect: true,
        infinite: false,
        variableWidth: true
      });

// show slider



const photoBlock = document.querySelector('.section-promo-media-photos')
const closeButton = document.querySelector('.slider-close');
const sliderBlock = document.querySelector('.section-promo-photos-bg')
photoBlock.addEventListener('click', showSlider)
closeButton.addEventListener('click', hideSlider)


function showSlider(){
   
    sliderBlock.classList.add('show-slider');
}
function hideSlider(){
    sliderBlock.classList.remove('show-slider');
}

})

