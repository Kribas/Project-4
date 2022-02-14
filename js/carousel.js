$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        navContainer: '#customNav',
        loop: true,
        responsiveClass:true,
        smartSpeed: 2000, 

    responsive:{

        0:{

            items:1

        },

        600:{

            items:1

        },

        1000:{

            items:3,

            loop:true

        }

    }
    });
  });