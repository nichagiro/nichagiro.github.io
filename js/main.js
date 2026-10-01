(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function() {
		if( ! $('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// Back to top button
	$(window).scroll(function() {
		$('.back-to-top').toggleClass('is-visible', $(this).scrollTop() > 400);
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	});

	/*--/ Smooth scroll nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	/*--/ Navbar reduce on scroll /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.navbar-expand-md').addClass('navbar-reduce');
		} else {
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
	});

	/*--/ Typed /--*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var strings = typed_strings.split(',').map(function (s) {
			return s.trim();
		});
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			$('.text-slider').text(strings[0]);
		} else {
			new Typed('.text-slider', {
				strings: strings,
				typeSpeed: 80,
				loop: true,
				backDelay: 1100,
				backSpeed: 30
			});
		}
	}

})(jQuery);
