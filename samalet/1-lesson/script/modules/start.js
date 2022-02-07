import createMyElement from './createElement.js';
//создаем h1
const createTitle = (title) => {
  const h1 = createMyElement('h1', {
    className: 'title',
    textContent: title,
  });
  //h1.className = 'title';
  //h1.textContent = title;
  return h1;
};
//создаем main
const createMain = () => {
  const main = createMyElement('main', {
    className: 'person-data',
  });
  //main.className = 'person-data';

  return main;
};
//создаем форму
const creatFirstForm = () => {
  const form = createMyElement('form', {
    className: 'field',
  });
  const label = createMyElement('label', {
    className: 'field__label',
    textContent: 'Укажите количесво человек (max:6)',
  });
  const input = createMyElement('input', {
    className: 'field__input',
    id: 'count',
    name: 'count',
    type: 'number',
    placeholder: '#',
    min: '1',
    max: '6',
    required: '',
  });
  const button = createMyElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });
  form.append(label, input, button);

  return form;
};

//start  выводит элемент
const start = (app, title) => {
  const h1 = createTitle(title);
  const main = createMain();
  const firstForm = creatFirstForm();

  app.append(h1, main);
  main.append(firstForm);
  return { main, firstForm };
};
//передача start
export default start;
