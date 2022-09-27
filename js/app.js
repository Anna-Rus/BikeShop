//BildSlider
let sliders = document.querySelectorAll('._swiper');

if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }


if (document.querySelector('.news__body')) {
	let mainslide = new Swiper('.news__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		mousewheel: true,
		//loop: true,
		// Dotts
		pagination: {
			el: '.news__dotts',
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
	});
}




let headerBurger = document.querySelector('.menu-header__icon');
let headerMenu = document.querySelector('.menu-header__body');
let backgroundMenu = document.querySelector('.header__menu');
if (headerBurger) {
	headerBurger.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
		backgroundMenu.classList.toggle('_active');
	});
}


