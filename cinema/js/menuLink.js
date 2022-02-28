import { getTriends, getTop, getPopular } from './services.js';
import renderCard from './renderCard.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');
console.log('getNav: ', getNav);

const menuLink = () => {
  getNav.forEach((nav) => {
    nav.addEventListener('click', (event) => {
      event.preventDefault();
      //        console.log('nav: ', nav);

      const target = event.target.closest('.get-nav__link'); //чтобы видеть клик именно по ссылке, остановили поднятие вверх
      //если кликнули по сслке, то target имеет значение, иначе пусто
      //      console.log('event.target: ', event.target);
      console.log('target: ', target);
      if (target) {
        event.preventDefault();
        filmWeek.style.display = 'none';
        title.textContent = target.textContent;

        // В тренде
        if (target.classList.contains('get-nav__link_triends')) {
          getTriends().then((data) => {
            // console.log(data);
            renderCard(data.results);
          });
        }

        //Популярные Фильмы
        if (target.classList.contains('get-nav__link_popular-movies')) {
          getPopular('movie').then((data) => {
            // console.log(data);
            renderCard(data.results);
          });
        }
        //Популярные сериалы
        if (target.classList.contains('get-nav__link_popular-tv')) {
          getPopular('tv').then((data) => {
            // console.log(data);
            renderCard(data.results);
          });
        }
        //Top Сериалы
        if (target.classList.contains('get-nav__link_top-tv')) {
          getTop('tv').then((data) => {
            // console.log(data);
            renderCard(data.results);
          });
        }

        //Top Фильмов
        if (target.classList.contains('get-nav__link_top-movies')) {
          getTop('movie').then((data) => {
            // console.log(data);
            renderCard(data.results);
          });
        }
      }
    });
  });
};
menuLink();
export default menuLink;
