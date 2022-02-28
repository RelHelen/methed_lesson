import { search as searchGet } from './services.js';
import renderCard from './renderCard.js';

const filmWeek = document.querySelector('.film-week');
const title = document.querySelector('.other-films__title');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');
const search = () => {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('searchInput.value: ', searchInput.value);
    if (!searchInput.value) return; //если поле пустое то вернется и ничего не будет делать
    console.log('searchInput.value: ', searchInput.value);

    searchGet(searchInput.value)
      .then((data) => {
        console.log('data 1111: ', data);
        if (data.results.length) {
          renderCard(data.results);
        } else {
          //   renderCard('');
          //   filmWeek.remove();
          throw 'К сожалению по вашему запросу ничего не найдено';
        }
      })
      .then(() => {
        filmWeek.remove();
        title.textContent = 'Результат поиска';
      })
      .catch((err) => {
        title.textContent = err;
      });
  });
};
search();
export default search;
