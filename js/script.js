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
        slidesToShow: 2,
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

		customPaging: function(slider, i) {
			var item = $(slider.$slides[i]).data('item');
			return item;
		},
	})
})