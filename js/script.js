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


const quiches = [
	{
		'id': 'quiche_1',
		'images': [
			'../assets/images/quiche_1_1.jpg',
			'../assets/images/quiche_1_2.jpg',
		],
		'food__popup_description_title': 'Шпинат и брынза',
		'weight': '125 г',
		'price': '6 руб. 50 коп.',
		'description__text': 'Пирог на рассыпчатой песочной основе с начинкой из свежего шпината и брынзы под сливочно-яичной заливкой.',
		'compound__text': 'Мука, масло сливочное, яйцо, шпинат, брынза, сыр, сливки, сметана, соль, перец.',
		'calories': '245,07',
		'protein': '8,35',
		'fats': '18,31',
		'carbohydrates': '15,17',
	},
	{
		'id': 'quiche_2',
		'images': [
			'../assets/images/quiche_2_1.jpg',
			'../assets/images/quiche_2_2.jpg',
			'../assets/images/quiche_2_3.jpg',
		],
		'food__popup_description_title': 'Груша и голубой сыр',
		'weight': '130 г',
		'price': '6 руб. 50 коп.',
		'description__text': 'Открытый французский пирог на рассыпчатой песочной основе с начинкой из грудинки, груши и голубого сыра под сливочно-яичной заливкой.',
		'compound__text': 'Мука, масло сливочное, яйцо, грудинка, сыр, груша, сыр с голубой плесенью, сливки, сметана, орегано, тимьян, соль, перец.',
		'calories': '264,34',
		'protein': '7,18',
		'fats': '16,72',
		'carbohydrates': '16,62',
	}
];

const foodPopupWrapper = document.querySelector('#food__popup_wrapper');
const foodPopupCloseBtn = document.querySelector('#food__popup_close_btn');
const foodPopupSlider = document.querySelector('#food__popup_slider');

document.addEventListener('click', (event) => {
	if (event.target.closest('a').classList.contains('food__images_link')) {
		foodPopupWrapper.style.display = 'flex';
		document.querySelector('html').style.overflow = 'hidden';

		for (let quiche of quiches) {
			if (quiche.id === event.target.closest('a').id) {
				foodPopupWrapper.querySelector('#food__popup_description_title').innerHTML = quiche.food__popup_description_title;
				foodPopupWrapper.querySelector('#wieght').innerHTML = quiche.weight;
				foodPopupWrapper.querySelector('#price').innerHTML = quiche.price;
				foodPopupWrapper.querySelector('#description__text').innerHTML = quiche.description__text;
				foodPopupWrapper.querySelector('#compound__text').innerHTML = quiche.compound__text;
				foodPopupWrapper.querySelector('#calories').innerHTML = quiche.calories;
				foodPopupWrapper.querySelector('#protein').innerHTML = quiche.protein;
				foodPopupWrapper.querySelector('#fats').innerHTML = quiche.fats;
				foodPopupWrapper.querySelector('#carbohydrates').innerHTML = quiche.carbohydrates;

				for (let img of quiche.images) {
					let food__popup_slider_item = document.createElement('div');
					food__popup_slider_item.className = 'food__popup_slider_item';
					let food__popup_img = document.createElement('img');
					food__popup_img.src = img;
					food__popup_slider_item.appendChild(food__popup_img);
					foodPopupSlider.appendChild(food__popup_slider_item);
				}
			}
		}
	}

	$('.food__popup_slider').slick({
		arrows: false,
	});
})

foodPopupCloseBtn.addEventListener('click', () => {
	foodPopupWrapper.style.display = 'none';
	document.querySelector('html').style.overflow = 'auto';
	foodPopupSlider.innerHTML = '';
	foodPopupSlider.className = 'food__popup_slider';
});