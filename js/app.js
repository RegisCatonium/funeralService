"use strict";

// слайдер
const works = new Swiper('#works', {
	// loop: true,
	grabCursor: true,
	autoHeight: true,
	slidesPerView: 1,
	initialSlide: 1,
	spaceBetween: 50,
	speed: 500,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	 }
})

// --