let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth <= 760 && !swiperInstance) {
    // Инициализация слайдера, если ширина меньше или равна 760px
    swiperInstance = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      pagination: false,
      navigation: false,
      speed: 400,
      slideToClickedSlide: true,
    });
  } else if (window.innerWidth > 760 && swiperInstance) {
    // Уничтожение слайдера, если ширина больше 760px
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

// Вызов функции при загрузке страницы
initSwiper();

// Добавление обработчика на событие изменения размера экрана
window.addEventListener("resize", function () {
  initSwiper();
});
