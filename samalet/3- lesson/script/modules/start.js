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
const creatFirstForm = (data) => {
  // *<form class="field">
  const form = createMyElement('form', {
    className: 'field',
  });

  // *<label class="field__label">Укажите количество человек (max: 6)</label>
  const label = createMyElement('label', {
    className: 'field__label',
    textContent: 'Укажите количесво человек (max:6)',
  });

  const labelTour = createMyElement('label', {
    className: 'field__label',
    for: 'tour',
    textContent: 'Выбрать тур',
  });

  // *<select class="field__select" id="tour" name="tour">
  const fieldSelect = createMyElement('select', {
    className: 'field__select',
    id: 'tour',
    name: 'tour',
  });

  // *<option value="1">Мальдивы</option>
  //вытаскиваем из data.tour перебираем по item
  const options = data.map((item) => {
    // console.log('data.item:', item);
    //console.log('data.item.tour:', item.tour);
    return createMyElement('option', {
      value: item.id,
      textContent: item.tour,
    });
  });

  fieldSelect.append(...options); //cghtl jgthfnjh

  // *<input  class="field__input"  id="count"  name="count"  type="number"  placeholder="#"  min="1"  max="6"  required="true"/>
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

  //*<button class="btn-confirm" type="submit">Подтвердить</button>
  const button = createMyElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });

  form.append(label, input, labelTour, fieldSelect, button);
  return form;
};

//start  выводит элемент
const start = (app, title, data) => {
  const h1 = createTitle(title);
  const main = createMain();
  const firstForm = creatFirstForm(data);

  app.append(h1, main);
  main.append(firstForm);
  return { main, firstForm, h1 };
};
//передача start
export default start;
