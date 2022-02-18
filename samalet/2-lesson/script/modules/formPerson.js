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
  const labelName = createMyElement('label', {
    className: 'field__label',
    for: `name${n}`,
    textContent: 'ФИО',
  });
  const inputName = createMyElement('input', {
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
  const fieldTicket = creatFieldName('field');
  const labelTicket = createMyElement('label', {
    className: 'field__label',
    for: `ticket${n}`,
    textContent: 'Номер билета (10 цифр)',
  });
  const inputTicket = createMyElement('input', {
    className: 'field__input',
    id: 'ticket${n}',
    name: 'ticket',
    type: 'text',
    placeholder: 'Номер билета',
    required: true,
    minLength: 10,
    maxLength: 10,
  });

  const button = createMyElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });

  fieldName.append(labelName, inputName);

  fieldTicket.append(labelTicket, inputTicket);
  form.append(title, fieldName, fieldTicket, button);

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
