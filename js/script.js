const burgerButton = document.querySelector('#burger');
const navAside = document.querySelector('#nav');
const navButton = document.querySelector('#nav_btn');
const overlay = document.querySelector('#overlay');


function addClassOpen() {
	navAside.classList.add('open');
}

function removeClassOpen(event) {
	if (event.target.classList.contains('nav_link')) {
		navAside.classList.remove('open');
	}

	if (event.target.classList.contains('nav_btn')) {
		navAside.classList.remove('open');
	}

	if (event.target.classList.contains('overlay')) {
		navAside.classList.remove('open');
	}
}


burgerButton.addEventListener('click', addClassOpen);
navAside.addEventListener('click', removeClassOpen);
overlay.addEventListener('click', removeClassOpen);


$(document).ready(function() {
	$('.preview_slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		asNavFor: '.new_dots',

		customPaging: function(slider, i) {
			var item = $(slider.$slides[i]).data('item');
			return item;
		},
	});

	$('.new_dots').slick({
		arrows: false,
		dots: true,
        asNavFor: '.preview_slider',
        focusOnSelect: true,
    });
});

$(document).ready(function() {
	$('.confectionery_slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		asNavFor: '.confectionery_dots',

		customPaging: function(slider, i) {
			var item = $(slider.$slides[i]).data('item');
			return item;
		},
	});

	$('.confectionery_dots').slick({
		arrows: false,
		dots: true,
        asNavFor: '.confectionery_slider',
        focusOnSelect: true,
    });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		margin: 20,
		navText: ["",""],

		responsive:{
			0: {
				items: 1,
				loop: true,
				stagePadding: 80,
			},
			321: {
				items: 1,
				loop: true,
				stagePadding: 100,
			},
			480: {
				items: 1,
				loop: true,
				stagePadding: 130,
			},
			578: {
				items: 2,
				loop: true,
				stagePadding: 100,
			},
			768: {
				items: 2,
				loop: true,
				stagePadding: 140,
			},
			991: {
			items: 2,
			loop: true,
			stagePadding: 220,
			},
			1300: {
			items:4
			}
		}
	});
});

// if ($(window).width() < 1300) {
// 	$(".owl-carousel").owlCarousel({
// 		items: 8,
// 	});
// }