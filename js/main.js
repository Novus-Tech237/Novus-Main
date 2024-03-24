(function ($) {
    "use strict";
    
    // preloader
    function loader() {
        $('#ctn-preloader').addClass('loaded');
        $("#loading").fadeOut(500);
        // Una vez haya terminado el preloader aparezca el scroll
    
        if ($('#ctn-preloader').hasClass('loaded')) {
            // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
            $('#preloader').delay(900).queue(function () {
                $(this).remove();
            });
        }
    }
    
    $(window).on('load', function () {
        loader();
        wowanimation();
      mainSlider();
      counterOn()
    });
    
    
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });
    
    
    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#header-sticky").removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });
    
    $(function () {
        $('a.icon-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 80
            }, 1000);
            event.preventDefault();
        });
    });
    
    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: false,
            fade: true,
            arrows: false,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });
    
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    
    
    // about-active
    $('.about-active').slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: false,
      speed: 1000,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
          }
        }
      ]
    });
    
    
    // testimonial-active
    $('.testimonial-active').slick({
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      infinite: true,
      autoplay: false,
      speed: 1000,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            fade: true,
          }
        }
      ]
    });
    
    
    // control-active
    $('.control-active').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    });
    
    // brand-active
    $('.brand-active').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    });
    
    // s-testimonial-active
    $('.s-testi-active').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-up"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-down"></i></button>',
      vertical: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    });
    
    // active
    $('.single-pricing').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().find('.single-pricing').removeClass('active');
    })
    
    // paroller
    if ($('.paroller').length) {
        $('.paroller').paroller();
    }
    
    // niceSelect;
    $(".selected").niceSelect();
    
    
    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
              enabled: true,
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    
    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
    
    // counterUp
    function counterOn() {
      $('.count').counterUp({
        delay: 10,
        time: 2000
      });
    }
    
    
    
    // isotop
    $('.gallery-active,.blog-active').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.gallery-active,.blog-active').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
              columnWidth: 1,
          }
        });
        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });
    
    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    
    // aos-active
    AOS.init({
        duration: 1000,
        mirror: true
    });
    
    /* slider video */
    $(".youtube-bg").YTPlayer({
        containment: ".youtube-bg",
        autoPlay: true,
        loop: true,
        mute: true,
        opacity: 100,
        addRaster: true,
        showControls: false,
    });
    
    
    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 500,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fas fa-level-up-alt"></i>',
        activeOverlay: false,
    });
    
    // WOW active
    function wowanimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }
    
    
    })(jQuery);