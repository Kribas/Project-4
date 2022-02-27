$(document).ready(function(){

    $("#owl").owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        nav: true,
        responsiveClass:true,
        navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
        smartSpeed: 1000,
        responsive:{
    
            0:{
    
                items:1
    
            },
    
            600:{
    
                items:1
    
            },
    
            1000:{
    
                items:1,
    
                loop:true
    
            }
    
        }
        
    });






    $("#owl-one").owlCarousel({
        items: 3,
        nav: true,
        navContainer: '#customNav-one',
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

  $("#owl-two").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    navContainer: '#customNav-two',
    smartSpeed: 2000,
    responsiveClass:true,
    
    responsive:{

        0:{

            items:1

        },

        600:{

            items:1

        },

        1000:{

            items:2,

            loop:true

        }

    }
    
});
