$( function() {
    // init tabs
    $( ".services-tab" ).tabs();

    // init portfolio tabs
    $( ".portfolio-tabs" ).tabs();

    //init reviews carousel
    $('.reviews-carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>'
    });

    // init slicknav
    $('.header-nav').slicknav({
        appendTo: '#header .container-fluid',
        label: ''
    });
} );