const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  $(window).on("load", function() {
    /*==========  Progress Bar  ==========*/
		if ($('.experience__area-skill-bar').length) {
			$('.experience__area-skill-bar').appear(function () {
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width', percent + '%');
			}, {
				accY: 0
			});
		};
  })