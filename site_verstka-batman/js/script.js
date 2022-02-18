//menu
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation_active');
});
navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation_active');
});
//audio on/off
try {
  const mute = document.querySelector('.mute__checkbox');
  //new Audio() -браузерное API
  const audio = new Audio('audio/waterTower.mp3');
  const checkMute = () => {
    if (mute.checked) {
      audio.play().catch(() => {
        mute.checked = false;
      });
      console.log('audio.play');
    } else {
      audio.pause();
      console.log('audio.pause');
    }
  };
  mute.addEventListener('change', () => {
    checkMute();
  });
  setTimeout(checkMute, 2000); //ждем загрузки музыки
} catch {
  console.log('на этой странице нет музыки');
}
try {
  //попытка выполнить слайдер
  const sliderThumbs = new Swiper('.slider-thumbs', {
    // Optional parameters
    loop: true,
    spaceBetween: 20, //расстояние между слайдерами
    slidesPerView: 3, //сколько отображать
    centeredSlides: true, // активный слайд по центру
    loopedSlides: 4,
  });

  sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
  });

  const sliderMain = new Swiper('.slider-main', {
    // Optional parameters
    loop: true,
    //   thumbs: {
    //     swiper: sliderThumbs, //связали два слайдера
    //   },
    loopedSlides: 4,
  });
  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;
  //поставим на паузу фильм при переходе на другой фильм
  const videoAll = document.querySelectorAll('video');
  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videoAll.length; i++) {
      videoAll[i].pause();
    }
  });

  //.pagination
  const pagination = document.querySelector('.pagination');
  const paginationArrow = document.querySelector('.pagination__arrow');

  paginationArrow.addEventListener('click', () => {
    pagination.classList.toggle('pagination_active');
  });
} catch {
  //если не получилось то обработка ошибки:
  console.log('на этой странице нет слайдера');
}
