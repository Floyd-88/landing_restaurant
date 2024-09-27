  let swiperInstance = null;

      swiperInstance = new Swiper('.swiper-container', {
        loop: true,              // Бесконечная прокрутка
        slidesPerView: 1,        // Одна карточка на экране
        spaceBetween: 20,        // Отступы между карточками
        centeredSlides: false,   // Отключаем центрирование слайда
        pagination: false,       // Убираем точки
        navigation: false,       // Убираем стрелки
        speed: 400,              // Скорость анимации перехода (увеличена для плавности)
        slideToClickedSlide: true,  // Переход к слайду по клику
      });

