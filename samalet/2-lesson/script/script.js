import start from './modules/start.js';
import getFormPerson from './modules/formPerson.js';
import readyPlane from './modules/readyPlane.js';
const init = (slectorApp, title) => {
  //title- параметр внутри функции
  const app = document.querySelector(slectorApp);
  //создадим элемент в app с текстом title
  //start(app, title);
  //деструкторизация из объекта в переменные
  const { main, firstForm } = start(app, title);
  console.log('firstForm: ', firstForm);
  console.log('main: ', main);
  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const forms = getFormPerson(firstForm.count.value);
    const numPerson = firstForm.count.value;
    console.log('forms: ', forms);
    firstForm.remove();
    main.append(...forms);
    // ... это спред оператор , позволяет передать через запятую

    //готовим самолет
    readyPlane(forms, main, numPerson);
  });
};
init('.app', 'Выберите тур');
