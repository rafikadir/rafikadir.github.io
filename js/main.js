jQuery(function($){
    'use strict';

    //Navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.navbar').addClass('is-sticky');
        } else {
            $('.navbar').removeClass('is-sticky');
        }
    });			
    $('navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	

    $('.navbar-nav .nav-item .nav-link').click(function(){
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    //certificate Slider
    $('.certificate-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        autoplay: true,
        margin:20,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        smartSpeed:800,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    })

    //feedback Slider
    $('.feedback-area').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        smartSpeed:800,
       items:1
    })

    // Portfolio
    $('#Container').mixItUp();
    
    //wow
    new WOW().init();

    // Go to Top JS
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.back-top').addClass('active');
        if (scrolled < 600) $('.back-top').removeClass('active');
    });

    $('.back-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
    });

    //Pre loader
    // jQuery(window).on('load',function(){jQuery('.preloader').fadeOut(1500);});
});