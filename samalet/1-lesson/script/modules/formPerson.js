import createMyElement from './createElement.js';

const creatFieldName = (classEl) => {
  const el = createMyElement('div', {
    className: classEl,
  });
  return el;
};

const creatFormPerson = (n) => {
  const form = createMyElement('form', {
    className: 'person',
  });

  const title = createMyElement('h2', {
    className: 'person__title',
    textContent: `Пассажир #${n + 1}`,
  });

  //   const fieldName = createMyElement('div', {
  //     className: 'field',
  //   });
  const fieldName = creatFieldName('field');
  const label = createMyElement('label', {
    className: 'field__label',
    for: `name${n}`,
    textContent: 'ФИО',
  });
  const input = createMyElement('input', {
    className: 'field__input',
    id: 'name${n}',
    name: 'name',
    type: 'text',
    placeholder: 'Введите ваше ФИО',
    required: true,
  });

  //   const fieldName2 = createMyElement('div', {
  //     className: 'field',
  //   });
  const fieldName2 = creatFieldName('field');
  const label2 = createMyElement('label', {
    className: 'field__label',
    for: `ticket${n}`,
    textContent: 'Номер билета (10 цифр)',
  });
  const input2 = createMyElement('input', {
    className: 'field__input',
    id: 'ticket${n}',
    name: 'ticket',
    type: 'text',
    placeholder: 'Номер билета',
    required: true,
    minlength: 10,
    maxlength: 10,
  });

  const button = createMyElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });

  fieldName.append(label, input);
  form.append(title, fieldName);
  fieldName2.append(label2, input2);
  form.append(fieldName2, button);

  return form;
};
const getFormPerson = (count) => {
  const forms = [];
  if (count > 6) {
    count = 6;
  }
  for (let i = 0; i < count; i++) {
    forms.push(creatFormPerson(i));
  }
  return forms;
};
export default getFormPerson;
