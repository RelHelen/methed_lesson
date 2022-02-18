import airPlane from './airPlane.js';
//создаем самолет
const readyPlane = (forms, main, numPerson) => {
  const data = [];
  //из массива forms будем получать парметры, методом перебоа
  //на каждую forms навешать событие
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      //form.elements -коллекция элементов формы
      console.log('form.elements: ', form.elements);
      for (const element of form.elements) {
        element.disabled = true;
      }
      //формируем массив из данных, которые вводим в форму
      data.push({
        name: form.name.value,
        ticket: form.ticket.value,
      });
      console.log('data: ', data);
      //когда совпадет количество форм и количество заполненых массивов
      if (forms.length === data.length) {
        forms.forEach((form) => form.remove());
        //появляется самолет
        airPlane(main, data, numPerson);
      }
    });
  });
};
export default readyPlane;
