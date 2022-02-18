import createMyElement from './createElement.js';

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
const creatAirplane = (title, scheme) => {
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

//начальные парметрысамолета и вызов функции построения самолета
const airPlane = (main, data, numPerson) => {
  const title = `Выберите места ${numPerson}`;
  //схема самолета: запасной выход, 11 рядов , запасной выход, 1ряд, запасной выход, 17 рядов,запасной выход,
  const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];

  main.append(creatAirplane(title, scheme));
};
export default airPlane;
