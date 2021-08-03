/*global $, Typed, prettyLog, AOS, atvImg, WOW,Pace*/
/*

    ========================================================================
     TABLE OF CONTENT
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        [1] Loading
        [2] Navbar toggle
        [3] SmoothScroll and scroll spy
        [4] Jaralax
        [5] Magenific popup
        [6] Portfolio thumbs
        [7] Ripples
        [8] iostop
		[9] owl
        [10] Contact

    ========================================================================
*/
"use strict";
var Pirana = {
	init: function () {
		this.functionality.init()
	},
	functionality: {
		init: function () {
			var e = this,
				$loading = $('.pace'),
				$loadingBg = $('.loading'),
				$body = $("body");
			Pace.on('done', function () {
				$loadingBg.fadeOut();
				$loading.fadeOut(300);
				$body.removeClass('overhide');
			}),
				e.toggleColors(),
				e.navScroll(),
				e.spy(),
				e.smoothScroll(),
				e.jarallax(),
				e.magnific(),
				e.thumbHeight(),
				$(window).resize(e.thumbHeight);
				e.navToggle(),
				e.ripples(),
				e.pluginsInit(),
				e.isotope(),
				e.owl()


		},
		toggleColors: function () {
			var $toggler = $('.toggler'),
				$colorCtrl = $('.color-ctrl'),
				$body = $('body');
			$toggler.on("click", function () {
				$colorCtrl.toggleClass('open');
			});
			$body.on('click', function (e) {
				if (!$(e.target).closest($colorCtrl).length) {
					$colorCtrl.removeClass('open');
				}
			});
			$('.brown').on("click", function () {
				$('#color').attr("href", "css/colors/brown.css");
			});
			$('.cyan').on("click", function () {
				$('#color').attr("href", "css/colors/cyan.css");
			});
			$('.deep-orange').on("click", function () {
				$('#color').attr("href", "css/colors/deep-orange.css");
			});
			$('.deep-purple').on("click", function () {
				$('#color').attr("href", "css/colors/deep-purple.css");
			});
			$('.light-blue').on("click", function () {
				$('#color').attr("href", "css/colors/light-blue.css");
			});
			$('.light-green').on("click", function () {
				$('#color').attr("href", "css/colors/light-green.css");
			});
			$('.original-red').on("click", function () {
				$('#color').attr("href", "css/colors/original-red.css");
			});
			$('.turquoise').on("click", function () {
				$('#color').attr("href", "css/colors/turquoise.css");
			});
		},
		navScroll: function () {
			var $window = $(window),
				$nav = $('#nav');
				$window.on("scroll", function (event) {
					event.preventDefault();
				if ($window.scrollTop() > 280) {
					$nav.addClass("scroll");
				} else {
					//remove the background property
					$nav.removeClass("scroll");
				}
			});
		},
		spy: function () {
			var $body = $('body');
			$body.scrollspy({ target: "#nav", offset: 100 });
		},
		smoothScroll: function () {
			var $link = $(".smoothScroll");
			$link.on('click', function (event) {
				if (this.hash !== "") {
					var hash = this.hash;
					$('html, body').animate({
						scrollTop: $(hash).offset().top
					}, 800, function () {
						window.location.hash = hash;
					});
				}
			});
		},
		jarallax: function () {
			var $jarallax = $('.jarallax');
			$jarallax.jarallax({
				speed: 0.5,
				imgWidth: 1920,
				imgHeight: 1280
			});
		},
		magnific: function () {
			var $lightBox = $('.lightbox');
			$lightBox.magnificPopup({
				type: 'image',
				mainClass: 'mfp-with-zoom mfp-fade',
				zoom: {
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function (openerElement) {
						return openerElement.is('.atvImg') ? openerElement : openerElement.find('.atvImg');
					}
				}
			});
		},
		thumbHeight: function () {
			var imageContainer = $('.atvImg'),
				ww = $(window).width();
			imageContainer.css({
				"height": "220px"
			});
		},
		navToggle: function () {
			var $navBarToggle = $(".navbar-toggle"),
				$link = $(".smoothScroll");
			$link.on("click", function () {
				if ($navBarToggle.css("display") !== "none") {
					$navBarToggle.trigger("click");
				}
			});
		},
		ripples: function () {
			var $home = $('#home');
			$home.ripples({
				resolution: 512,
				dropRadius: 20,
				perturbance: 0.04,
			});
		},
		pluginsInit: function () {
			atvImg();
			new WOW().init();
		},
		isotope: function () {
			var $folioItems = $(".folio-items"),
				$folioFilter = $(".folio-filter ul li");
			if ($folioItems.length) {
				var $elements = $folioItems;
				$elements.isotope();
				$folioFilter.on("click", function () {
					$folioFilter.removeClass("current");
					$(this).addClass("current");
					var selector = $(this).attr("data-filter");
					$folioItems.isotope({
						filter: selector,
						animationOptions: {
							duration: 750,
							easing: "linear",
							queue: false,
						},
					});
				});
			}
		},
		owl: function () {
			var $owlDemo = $("#owl-demo");
			$owlDemo.owlCarousel({
				autoPlay: 7000,
				stopOnHover: true,
				navigation: false,
				paginationSpeed: 1000,
				goToFirstSpeed: 2000,
				singleItem: true,
				autoHeight: true,
			});
		}
	}

}
$(function () {
	Pirana.init();
});
// $(function () {
// 	"use strict";
// 	var $window = $(window),
// 		$loading = $('.pace'),
// 		$loadingBg = $('.loading'),
// 		$body = $("body"),
// 		$header = $('.large-header'),
// 		$nav = $('#nav'),
// 		$link = $(".smoothScroll"),
// 		$toggler = $('.toggler'),
// 		$colorCtrl = $('.color-ctrl'),
// 		$filter = $('.folio-filter'),
// 		$owl = $("#owl-demo");

// 	$toggler.on("click", function () {
// 		$colorCtrl.toggleClass('open');
// 	});
// 	$body.on('click', function (e) {
// 		if (!$(e.target).closest($colorCtrl).length) {
// 			$colorCtrl.removeClass('open');
// 		}
// 	});
// 	$('.brown').on("click", function () {
// 		$('#color').attr("href", "css/colors/brown.css");
// 	});
// 	$('.cyan').on("click", function () {
// 		$('#color').attr("href", "css/colors/cyan.css");
// 	});
// 	$('.deep-orange').on("click", function () {
// 		$('#color').attr("href", "css/colors/deep-orange.css");
// 	});
// 	$('.deep-purple').on("click", function () {
// 		$('#color').attr("href", "css/colors/deep-purple.css");
// 	});
// 	$('.light-blue').on("click", function () {
// 		$('#color').attr("href", "css/colors/light-blue.css");
// 	});
// 	$('.light-green').on("click", function () {
// 		$('#color').attr("href", "css/colors/light-green.css");
// 	});
// 	$('.original-red').on("click", function () {
// 		$('#color').attr("href", "css/colors/original-red.css");
// 	});
// 	$('.turquoise').on("click", function () {
// 		$('#color').attr("href", "css/colors/turquoise.css");
// 	});
// 	//owl
// 	$owl.owlCarousel({
// 		autoPlay: 7000,
// 		stopOnHover: true,
// 		navigation: false,
// 		paginationSpeed: 1000,
// 		goToFirstSpeed: 2000,
// 		singleItem: true,
// 		autoHeight: true,
// 	});
// 	// Loading
// 	Pace.on('done', function () {
// 		$loadingBg.fadeOut();
// 		$loading.fadeOut(300);
// 		$body.removeClass('overhide');
// 	})
// 	// Nav Scroll
// 	$window.on("scroll", function () {
// 		if ($window.scrollTop() > 280) {
// 			$nav.addClass("scroll");
// 		} else {
// 			//remove the background property
// 			$nav.removeClass("scroll");
// 		}
// 	});
// 	// Smoothscroll and spy
// 	$body.scrollspy({ target: "#nav", offset: 100 });
// 	$link.on('click', function (event) {

// 		if (this.hash !== "") {
// 			var hash = this.hash;
// 			$('html, body').animate({
// 				scrollTop: $(hash).offset().top
// 			}, 800, function () {
// 				window.location.hash = hash;
// 			});
// 		}
// 	});
// 	// jarallax
// 	$('.jarallax').jarallax({
// 		speed: 0.5,
// 		imgWidth: 1920,
// 		imgHeight: 1280
// 	});
// 	// Magnific Popup
// 	$('.lightbox').magnificPopup({
// 		type: 'image',
// 		mainClass: 'mfp-with-zoom mfp-fade',
// 		zoom: {
// 			enabled: true,
// 			duration: 300,
// 			easing: 'ease-in-out',
// 			opener: function (openerElement) {
// 				return openerElement.is('.atvImg') ? openerElement : openerElement.find('.atvImg');
// 			}
// 		}
// 	});
// 	// portfolio Thumbs
// 	function thumbHeight() {
// 		var imageContainer = $('.atvImg'),
// 			ww = $(window).width();
// 		imageContainer.css({
// 			// "height": $('.folio-list li').width() + "px"
// 			"height": "220px"
// 		});
// 	}
// 	thumbHeight();
// 	$(window).resize(thumbHeight);
// 	/* Nav Toggle */
// 	$link.on("click", function () {
// 		if ($(".navbar-toggle").css("display") !== "none") {
// 			$(".navbar-toggle").trigger("click");
// 		}
// 	});
// 	atvImg();
// 	new WOW().init();
// 	// Ripples
// 	$('#home').ripples({
// 		resolution: 512,
// 		dropRadius: 20,
// 		perturbance: 0.04,
// 	});
// 	// isotope
// 	if ($(".folio-items").length) {
// 		var $elements = $(".folio-items");
// 		$elements.isotope();
// 		$(".folio-filter ul li").on("click", function () {
// 			$(".folio-filter ul li").removeClass("current");
// 			$(this).addClass("current");
// 			var selector = $(this).attr("data-filter");
// 			$(".folio-items").isotope({
// 				filter: selector,
// 				animationOptions: {
// 					duration: 750,
// 					easing: "linear",
// 					queue: false,
// 				},
// 			});
// 		});
// 	}

// });

/* Contact Form */
function submit_form() {
	"use strict";
	//Variable declaration and assignment
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
		fullname = $("#fullname").val(),
		email = $("#email").val(),
		message = $("#message").val(),
		dataString = { 'fullname': fullname, 'email': email, 'message': message, 'submitted': '1' },
		$response = $("#response_brought");

	if (fullname === "") { //Validation against empty field for fullname
		$response.html('<br clear="all"><div class="form_info" align="left">Please enter your fullname in the required field to proceed. Thanks.</div>');
		$("#fullname").focus();
	} else if (email === "") { //Validation against empty field for email address
		$response.html('<br clear="all"><div class="form_info" align="left">Please enter your email address in the required email field to proceed. Thanks.</div>');
		$("#email").focus();
	} else if (reg.test(email) === false) { //Validation for working email address
		$("#response_brought").html('<br clear="all"><div class="form_info" align="left">Sorry, your email address is invalid. Please enter a valid email address to proceed. Thanks.</div>');
		$("#email").focus();
	} else if (message === "") { //Validation against empty field for email message
		$response.html('<br clear="all"><div class="form_info" align="left">Please enter your message in the required message field to proceed. Thanks.</div>');
		$("#message").focus();
	} else {
		//Show loading image
		$response.html('<br clear="all"><div align="left" style=" padding-top:6px; margin-left:100px; margin-top:15px;"><font style="font-family:Raleway, sans-serif; font-size:12px; color:#fff;">Please wait</font> <img src="img/loading.gif" alt="Loading...." align="absmiddle" title="Loading...."/></div>');

		$.post('contact_form.php', dataString, function (response) {
			//Check to see if the message is sent or not
			var response_brought = response.indexOf('Congrats');
			if (response_brought !== -1) {
				//Clear all form fields on success
				$(".contact-form").slideUp(500);


				//Display success message if the message is sent
				$response.html(response);


				//Remove the success message also after a while of displaying the message to the user
				setTimeout(function () {
					$response.html('');
				}, 10000);
			} else {
				//Display error message is the message is not sent
				$(".contact-form").slideUp(500);
				$response.html(response);
			}
		});
	}
}
/* End Contact Form */