const swiperMenu = new Swiper('.swiperMenu', {
    direction: 'horizontal',
    slidesPerView: '1',
    grid: {
        rows: 3
    },
    loop: false,
    spaceBetween: 1000,
    navigation: {
      nextEl: '.posnext',
      prevEl: '.posback',
    }
});