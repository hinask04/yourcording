const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  centeredSlides: true,
//        speed: 40000,
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
//        autoplay:{
//        delay: 0,
//    },
//    loopedSlides: 3,
    pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}


});// JavaScript Document,