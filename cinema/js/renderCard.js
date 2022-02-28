import { getVideo } from './services.js';
//* создание карточек
const listCard = document.querySelector('.other-films__list');
{
  /* <li class="other-films__item">
  <a
    class="other-films__link"
    data-rating="7.6"
    href="https://youtu.be/N1r36HTysDM"
  >
    <img
      class="other-films__img"
      src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jycSKuZ4CvgPWRHdhgPA9q1EC8n.jpg"
      alt="постер"
    />
  </a>
</li>; */
}
//! функция создания карточек
const renderCard = async (data) => {
  listCard.textContent = '';

  // ' const cards = data.map((item) => {
  //   'map возвращает обратно массив данных из data-массив
  //  'item это уже  объект
  //        console.log('cards: ', item);
  Promise.all(
    data.map(async (item) => {
      const video = await getVideo(item.media_type, item.id);
      //       console.log('video item: ', video);

      const key = video.results[0]?.key;
      //     console.log('video key: ', key);
      const card = document.createElement('li');
      card.className = 'other-films__item';

      const link = document.createElement('a');
      if (key) {
        link.href = `https://youtu.be/${key}`;
      }
      link.className = 'other-films__link';
      link.dataset.rating = item.vote_average;

      const img = document.createElement('img');
      img.className = 'other-films__img';
      img.alt = `постер: ${item.title || item.name}`;
      img.src = item.poster_path
        ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
        : `img/no_poster.jpg`;

      link.append(img);
      card.append(link);
      console.log('card: ', card);
      return card;
    })
  ).then((cards) => {
    //console.log('cards: ', cards);

    listCard.append(...cards);
  });

  //        'listCard.append(...cards);
  //        ... спред оператор раскладывает на отдельные элементы
};

export default renderCard;
