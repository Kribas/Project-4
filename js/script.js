const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Back to top button
   */
   $(window).on("scroll", function() {
	if($(window).scrollTop() > 100) {
		$(".back-to-top").addClass("active");
	} else {
		
	   $(".back-to-top").removeClass("active");
	}
});

$(window).on("scroll", function() {
	if($(window).scrollTop() > 100) {
		$(".header__bottom").addClass("header-sticky");
		$(".logo").addClass("logo-sticky");

	} else {
		
	   $(".header__bottom").removeClass("header-sticky");
	   $(".logo").removeClass("logo-sticky");
	}
});


