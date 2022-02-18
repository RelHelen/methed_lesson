// *получаем данные при заказе из localStorage

export const getStorage = (id) => {
  if (localStorage.getItem(`tour-${id}`)) {
    //данные в localStorage хранятся ввиде строки ''
    // \\return localStorage.getItem('tour');

    //сериализуем правильно данные в строку
    //до отпраки в localStorage с помощью JSON.parse
    return JSON.parse(localStorage.getItem(`tour-${id}`));
  } else {
    return [];
  }
};

// *отправляем данные  в localStorage
export const setStorage = (id, data) => {
  const storage = getStorage(id);
  //делаем проерку данных перед отправкой на localStorage
  //если на один билет одно место, то возвращаем массив filterBooking только с правильными местами
  // filter находит совадения и возвращаеь массив при верных совпадениях
  const filterBooking = storage.filter((item) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].ticket === item) {
        return false;
      }
    }

    return item;
  });
  //собираем новый массив из данных и filterBooking
  const newBooking = [...filterBooking, ...data];
  console.log('filterBooking - item: ', newBooking);
  localStorage.setItem(`tour-${id}`, JSON.stringify(newBooking));
};
