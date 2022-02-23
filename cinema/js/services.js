// *получаем с url фильмы
const API_KEY = '9bd51e0a45346cc10bb48e427eccb97b';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';
// trending/all/day?api_key=<<api_key>>
//функция для запроса с любым сервисом через api
const getData = (url) => {
  //будем пользоваться api которое встроено в браузер api fetch
  //она позволяет делать простоые get запросы, передаем url и получаем ответ
  //обрабатываем ответ с помощью метода then
  //then принимает callback функцию и эта функция будет принимать ответ response
  //который отправился с помощью fetch
  //response - ответ от сервера

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        //return response.text();
        return response.json(); //возвращает ввиде объекта
      }
      throw `что то пошло не так ${response.status}`;
    })
    .catch((err) => {
      console.error(err);
    });
};
// !получаем с url фильмы
export const getTriends = async (type = 'all', period = 'day', page = 1) => {
  //чтобы получить не  промис (-)ожидание ответа от сервиса), необходимо сделать функцию асинхронной и подождать когда данные придут и потом запишут в data
  // trending/all/day?api_key=<<api_key>>

  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  //   const url = `${BASE_URL}trending/all/week?api_key=${API_KEY}${LANGUAGE}`;
  const data = await getData(url);
  return data;
};
