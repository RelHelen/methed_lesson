import createMyElement from './createElement.js';
import declOfNum from './number.js';
const createCockpit = (title) => {
  //div class="cockpit"
  const cockpit = createMyElement('div', {
    className: 'cockpit',
  });
  // <h1 class="cockpit-title">Выберите 1 место</h1>
  const cockpitTitle = createMyElement('h1', {
    className: 'cockpit-title',
    textContent: title,
  });
  //<button class="cockpit-confirm" type="submit">Подтвердить</button>
  const cockpitButton = createMyElement('button', {
    className: 'cockpit-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });
  cockpit.append(cockpitTitle, cockpitButton);
  return cockpit;
};
//создание запасного выхода 'exit'
const createExit = () => {
  //<div class="exit fuselage"></div>
  const fuselage = createMyElement('div', {
    className: 'exit fuselage',
  });
  return fuselage;
};

//создаем ряды стульев
const creatBlockSeat = (n, count) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  //<ol class="fuselage">
  const fuselage = createMyElement('ol', {
    className: 'fuselage',
  });
  for (let i = n; i < count + n; i++) {
    // <li>
    const wrapperRow = createMyElement('li');
    //   <ol class="seats">
    const seats = createMyElement('ol', {
      className: 'seats',
    });
    //сиденья нумеруем
    const seatsRow = letters.map((letter) => {
      //<li class="seat">
      const seat = createMyElement('li', {
        className: 'seat',
      });
      //  <label>
      const wrapperCheck = createMyElement('label');

      // <input name="seat" type="checkbox" value="1A" />
      const check = createMyElement('input', {
        name: 'seat',
        type: 'checkbox',
        value: `${i}${letter}`,
      });
      wrapperCheck.append(check);
      seat.append(wrapperCheck);
      return seat;
    });
    seats.append(...seatsRow);
    wrapperRow.append(seats);
    fuselage.append(wrapperRow);
  }
  return fuselage;
};
//создает самолет и возвращает его
//const creatAirplane = (title, scheme)
const creatAirplane = (title, tourData) => {
  const scheme = tourData.scheme;
  console.log('scheme: ', scheme);

  //form class="choises-seat"
  const choisesSeat = createMyElement('form', {
    className: 'choises-seat',
  });
  //fieldset class="plane" name="plane"
  const plane = createMyElement('fieldset', {
    className: 'plane',
    name: 'plane',
  });
  //div class="cockpit"
  const cockpit = createCockpit(title);

  //перебираем scheme
  //map возвращает новый массив
  //в парметры map попадают значения scheme
  let n = 1; //номер ряда
  const elements = scheme.map((type) => {
    //создаем запасной выход
    if (type === 'exit') {
      return createExit();
    }
    //создаем блок сиденьев
    if (typeof type === 'number') {
      const blockSeat = creatBlockSeat(n, type);
      n = n + type;
      return blockSeat;
    }
  });

  plane.append(cockpit, ...elements);

  choisesSeat.append(plane);

  return choisesSeat;
};

//создадим возможность бронирования столько мест, сколько едит пассажиров data.length
const checkSeat = (form, data) => {
  // выбираем место
  form.addEventListener('change', () => {
    const formData = new FormData(form); //коллекция  элементов

    //const checked = [...formData].map((item) => {
    const checked = [...formData].map(([key, value]) => {
      console.log('formData.item.value: ', value);
      return value;
    });
    //если выбрали столько мест сколько пассажиров
    //остальных блокируем
    if (data.length === checked.length) {
      [...form].forEach((item) => {
        if (item.checked === false && item.name === 'seat') {
          item.disabled = true;
        }
      });
    } else {
      [...form].forEach((item) => {
        if (item.checked === false && item.name === 'seat') {
          item.disabled = false; //или разблокируем
        }
      });
    }
  });

  // отправка данных
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const booking = [...formData].map(([key, value]) => {
      return value;
    });
    for (let i = 0; i < data.length; i++) {
      data[i].seat = booking[i];
    }
    console.log('data.seat=booking: ', data);
  });
};
//начальные парметры самолета и вызов функции построения самолета
const airPlane = (main, data, tourData) => {
  // склоняем слово место и число
  const title = ` Выберите ${declOfNum(data.length, [
    'место',
    'места',
    'мест',
  ])}  `;

  //схема самолета: запасной выход, 11 рядов , запасной выход, 1ряд, запасной выход, 17 рядов,запасной выход,
  //const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];
  const choiseForm = creatAirplane(title, tourData);

  //создадим возможность бронирования столько мест, сколько едит пассажиров data.length
  checkSeat(choiseForm, data);
  // main.append(creatAirplane(title, scheme));
  main.append(choiseForm);
};
export default airPlane;
