new Swiper(".swiper-container-review", {
  loop: true, // Бесконечная прокрутка
  slidesPerView: 1, // Одна карточка на экране
  spaceBetween: 20, // Отступы между карточками
  centeredSlides: false, // Отключаем центрирование слайда
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Делаем точки кликабельными
  },
  navigation: false, // Убираем стрелки
  speed: 400, // Скорость анимации перехода (увеличена для плавности)
  slideToClickedSlide: true, // Переход к слайду по клику
});