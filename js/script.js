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

const drinksItem = document.querySelector('#drinks_li');
const dessertsItem = document.querySelector('#desserts_li');
const foodItem = document.querySelector('#food_li');
const coffeeItem = document.querySelector('#coffee_li');
const cakesItem = document.querySelector('#cakes_li');
const foodItems = document.querySelectorAll('.food_item');

function addClassOpenActive(event) {
	for(let i = 0; i < foodItems.length; i++) {
		if (foodItems[i].classList.contains('food__item_active')) {
			foodItems[i].classList.remove('food__item_active');
		}
	}



	
	event.target.classList.add('food__item_active');

	if (drinksItem.classList.contains('food__item_active')) {
		for (let i = 0; i < menuTabs.length; i++) {
			if (menuTabs[i].classList.contains('grid')) {
				menuTabs[i].classList.remove('grid');
			}
		}
		
		drinksTab.classList.add('grid');
	} else if (dessertsItem.classList.contains('food__item_active')) {
		for (let i = 0; i < menuTabs.length; i++) {
			if (menuTabs[i].classList.contains('grid')) {
				menuTabs[i].classList.remove('grid');
			}
		}

		dessertsTab.classList.add('grid');
	} else if (foodItem.classList.contains('food__item_active')) {
		for (let i = 0; i < menuTabs.length; i++) {
			if (menuTabs[i].classList.contains('grid')) {
				menuTabs[i].classList.remove('grid');
			}
		}

		foodTab.classList.add('grid');
	} else if (coffeeItem.classList.contains('food__item_active')) {
		for (let i = 0; i < menuTabs.length; i++) {
			if (menuTabs[i].classList.contains('grid')) {
				menuTabs[i].classList.remove('grid');
			}
		}

		coffeeTab.classList.add('grid');
	} else if (cakesItem.classList.contains('food__item_active')) {
		for (let i = 0; i < menuTabs.length; i++) {
			if (menuTabs[i].classList.contains('grid')) {
				menuTabs[i].classList.remove('grid');
			}
		}

		cakesTab.classList.add('grid');
	}
}

drinksItem.addEventListener('click', addClassOpenActive);
dessertsItem.addEventListener('click', addClassOpenActive);
foodItem.addEventListener('click', addClassOpenActive);
coffeeItem.addEventListener('click', addClassOpenActive);
cakesItem.addEventListener('click', addClassOpenActive);


const drinksTab = document.querySelector('#drinks-tab');
const dessertsTab = document.querySelector('#desserts-tab');
const foodTab = document.querySelector('#food-tab');
const coffeeTab = document.querySelector('#coffee-tab');
const cakesTab = document.querySelector('#cakes-tab');
const menuTabs = document.querySelectorAll('.menu_tab');