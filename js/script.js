const burgerButton = document.querySelector('#burger');
const navAside = document.querySelector('#nav');
const navButton = document.querySelector('#nav_btn');
const overlay = document.querySelector('#overlay');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');


function toggleClassOpen() {
	navAside.classList.toggle('open'); 
	line1.classList.toggle('transform_line');
	line2.classList.toggle('transform_line');
}

function removeClassOpen(event) {
	if (event.target.classList.contains('nav_link')) {
		navAside.classList.remove('open');
		line1.classList.remove('transform_line');
		line2.classList.remove('transform_line');
	}

	if (event.target.classList.contains('nav_btn')) {
		navAside.classList.remove('open');
		line1.classList.remove('transform_line');
		line2.classList.remove('transform_line');
	}
	if (event.target.classList.contains('overlay')) {
		navAside.classList.remove('open');
		line1.classList.remove('transform_line');
		line2.classList.remove('transform_line');
	}
}


burgerButton.addEventListener('click', toggleClassOpen);
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
const drinksTab = document.querySelector('#drinks-tab');
const dessertsTab = document.querySelector('#desserts-tab');
const foodTab = document.querySelector('#food-tab');
const coffeeTab = document.querySelector('#coffee-tab');
const cakesTab = document.querySelector('#cakes-tab');
const menuTabs = document.querySelectorAll('.menu_tab');

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


const dropdown = document.querySelector('#dropdown');
const dropdownBtn = document.querySelector('#dropdown_btn');
const dropdownLocation = document.querySelector('#dropdown_location');
const dropdownLocationBtn = document.querySelector('#dropdown__location_btn');

function toggleClassOpenDropdown(event) {
	if (event.target.classList.contains('dropdown')
	|| event.target.classList.contains('dropdown_btn')
	|| event.target.classList.contains('dropdown_text')
	|| event.target.classList.contains('header_arrow')) {
		dropdown.classList.toggle('open_dropdown');
	} else {
		dropdown.classList.remove('open_dropdown');
	}

	if (event.target.classList.contains('location')
	|| event.target.classList.contains('dropdown__location_btn')
	|| event.target.classList.contains('dropdown__location_text')
	|| event.target.classList.contains('location_arrow')) {
		dropdownLocation.classList.toggle('open_dropdown');
	} else {
		dropdownLocation.classList.remove('open_dropdown');
	}
}

document.addEventListener('click', toggleClassOpenDropdown);


const addressBtn = document.querySelector('#address');
const mapBtn = document.querySelector('#map');
const coffeeHousesPhotos = document.querySelector('#coffee__houses_photos');
const locationMap = document.querySelector('#location_map');

function addClassActiveBtn(event) {
	if (!event.target.classList.contains('active_btn') && event.target.classList.contains('map')) {
		mapBtn.classList.add('active_btn');
		addressBtn.classList.remove('active_btn');
		coffeeHousesPhotos.classList.remove('grid');
		coffeeHousesPhotos.classList.add('none');
		locationMap.classList.add('block');
	} else if (!event.target.classList.contains('active_btn') && event.target.classList.contains('address')) {
		addressBtn.classList.add('active_btn');
		mapBtn.classList.remove('active_btn');
		coffeeHousesPhotos.classList.add('grid');
		coffeeHousesPhotos.classList.remove('none');
		locationMap.classList.remove('block');
	}
}

addressBtn.addEventListener('click', addClassActiveBtn);
mapBtn.addEventListener('click', addClassActiveBtn);


document.querySelectorAll('.preview__slider_item').forEach(item => item.onmousedown = e => e.target.style.cursor = 'grab');
document.querySelectorAll('.preview__slider_item').forEach(item => item.onmouseup = e => e.target.style.cursor = 'default');

document.querySelectorAll('.confectionery__slider_item').forEach(item => item.onmousedown = e => e.target.style.cursor = 'grab');
document.querySelectorAll('.confectionery__slider_item').forEach(item => item.onmouseup = e => e.target.style.cursor = 'default');


const guestProfileBtn = document.querySelector('#guest_profile_btn');
const guestProfileWrapper = document.querySelector('#guest__profile_wrapper');
const guestProfileCloseBtn = document.querySelector('#guest__profile_close_btn');

function showGuestProfile() {
	guestProfileWrapper.classList.add('show');
	document.querySelector('html').style.overflow = 'hidden';
}

function hideGuestProfile() {
	guestProfileWrapper.classList.remove('show');
	document.querySelector('html').style.overflow = 'auto';
}

guestProfileBtn.addEventListener('click', showGuestProfile);
guestProfileCloseBtn.addEventListener('click', hideGuestProfile);


const programmBtn = document.querySelector('#programm_btn');
const programmWrapper = document.querySelector('#programm_wrapper');
const programmCloseBtn = document.querySelector('#programm__close_btn');
const programmFooterBtn = document.querySelector('#programm__footer_btn');

function showProgramm() {
	programmWrapper.classList.add('show');
	document.querySelector('html').style.overflow = 'hidden';
}

function hideProgramm() {
	programmWrapper.classList.remove('show');
	document.querySelector('html').style.overflow = 'auto';
}

programmBtn.addEventListener('click', showProgramm);
programmCloseBtn.addEventListener('click', hideProgramm);
programmFooterBtn.addEventListener('click', hideProgramm);


const selectedAddress = document.querySelector('#selected_address');
const addressOptionsContainer = document.querySelector('#address__options_container');
const addressOptionsList = document.querySelectorAll('.address_option');

selectedAddress.addEventListener('click', () => {
	addressOptionsContainer.classList.toggle('active');

	for (let i = 0; i < addressOptionsList.length; i++) {
		if (addressOptionsList[i].querySelector('label').innerHTML === selectedAddress.innerHTML) {
			addressOptionsList[i].classList.add('bg');
		}
	}
});

addressOptionsList.forEach( o => {
	o.addEventListener('click', () => {
		selectedAddress.innerHTML = o.querySelector('label').innerHTML;
		addressOptionsContainer.classList.remove('active');

		for (let i = 0; i < addressOptionsList.length; i++) {
			addressOptionsList[i].classList.remove('bg');
		}

	})
});


const selectedDay = document.querySelector('#selected_day');
const selectedMonth = document.querySelector('#selected_month');
const selectedYear = document.querySelector('#selected_year');


const dayOptionsContainer = document.querySelector('#day__options_container');
const monthOptionsContainer = document.querySelector('#month__options_container');
const yearOptionsContainer = document.querySelector('#year__options_container');

const dayOptionsList = document.querySelectorAll('.day_option');
const monthOptionsList = document.querySelectorAll('.month_option');
const yearOptionsList = document.querySelectorAll('.year_option');

selectedDay.addEventListener('click', () => {
	dayOptionsContainer.classList.toggle('active');
});

dayOptionsList.forEach( o => {
	o.addEventListener('click', () => {
		selectedDay.innerHTML = o.querySelector('label').innerHTML;
		dayOptionsContainer.classList.remove('active');
		selectedDay.style.color = 'rgba(255, 255, 255, 1)';
	})
});


selectedMonth.addEventListener('click', () => {
	monthOptionsContainer.classList.toggle('active');
});

monthOptionsList.forEach( o => {
	o.addEventListener('click', () => {
		selectedMonth.innerHTML = o.querySelector('label').innerHTML;
		monthOptionsContainer.classList.remove('active');
		selectedMonth.style.color = 'rgba(255, 255, 255, 1)';
	})
});


selectedYear.addEventListener('click', () => {
	yearOptionsContainer.classList.toggle('active');
});

yearOptionsList.forEach( o => {
	o.addEventListener('click', () => {
		selectedYear.innerHTML = o.querySelector('label').innerHTML;
		yearOptionsContainer.classList.remove('active');
		selectedYear.style.color = 'rgba(255, 255, 255, 1)';
	})
});

// const table = document.querySelector('#table');
// const arrowDown = document.querySelector('.private__cabinet_table_arrow');
// const arrowUp = document.querySelector('.private__cabinet_table_transform_arrow');
// const privateCabinetTableTr = document.querySelector('#order_1');

// arrowDown.addEventListener('click', () => {
// 	console.log('Hello');
// 	privateCabinetTableTr.classList.toggle('active');
// });

// for (let tBody of table.tBodies) {
// 	console.log(tBody);
// }

console.log('hello');