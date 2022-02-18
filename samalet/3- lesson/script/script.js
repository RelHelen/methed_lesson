import start from './modules/start.js';
import getFormPerson from './modules/formPerson.js';
import readyPlane from './modules/readyPlane.js';
import getData from './service/getTour.js';

//async -ассинхронная функция для промиса API
//https://my.methed.ru/pl/teach/control/lesson/view?id=233332694&editMode=0
const init = async (slectorApp, title) => {
  //title- параметр внутри функции
  const app = document.querySelector(slectorApp);
  //await ждет когда закончится выполнение getData  и только после этого запишет результат в data
  //тогда данные вернуться массивом, иначе вернется не понятно что, скорее всего промис
  //при этом все что ниже тоже ждет и не выполняется!
  const data = await getData(); //getData() вернет промис с API
  console.log('await data: ', data);

  //создадим элемент в app с текстом title
  //start(app, title);
  //деструкторизация из объекта в переменные
  const { main, firstForm, h1 } = start(app, title, data);
  console.log('firstForm: ', firstForm);
  console.log('main: ', main);
  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //определим выбранный тур, сравним id data.tour.id с выбранным в форме
    //tourData будет хранить выбранную item в data
    const tourData = data.find((tour) => tour.id === firstForm.tour.value);
    console.log('tourData: ', tourData);
    h1.textContent = tourData.tour;
    console.log('h1.textContext: ', h1);

    const forms = getFormPerson(firstForm.count.value);
    console.log('forms: ', forms);
    firstForm.remove();
    main.append(...forms);
    // ... это спред оператор , позволяет передать через запятую

    //готовим самолет
    readyPlane(forms, main, tourData);
  });
};
init('.app', 'Выберите тур');
