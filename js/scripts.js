$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    margin: 20,
    responsive:{
        0:{
            items:1,
            loop: false,
        },
        1100:{
            items:2
        }
    }

})

$( function() {
    $( "#accordion" ).accordion();
} );