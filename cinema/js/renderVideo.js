// *вывод видео
import { getTriends } from './services.js';

const filmWeek = document.querySelector('.film-week');
//первый фильм
const firstRender = (data) => {
  console.log('data[0]: ', data);
  filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${
      data.vote_average
    }">
          <div class="film-week__poster-wrapper">
            <img
              class="film-week__poster"
              src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${
                data.backdrop_path
              }"
              alt="постер ${data.title || data.name}"
            />
            <p class="film-week__title_origin">${
              data.original_title || data.original_name
            }</p>
          </div>
          <h2 class="film-week__title">${data.title || data.name}</h2>
          <a
            class="film-week__watch-trailer tube"
            href="https://youtu.be/V0hagz_8L3M"
            aria-label="смотреть трейлер"
          ></a>
    </div>
    `;
};

// !получаем фильмы
const renderVideo = async () => {
  const data = await getTriends();
  firstRender(data.results[0]); //первый фильм
};

export default renderVideo;
