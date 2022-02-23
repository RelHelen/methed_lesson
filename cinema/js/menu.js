// *слайд меню

//открытие меню
const openMenu = (nav, active) => {
  nav.classList.add(active);
};
//закрытие меню
const closeMenu = (nav, active) => {
  nav.classList.remove(active);
};

// !функция слайд меню
// const slideMenu = (openBtn, menu, classActiveMenu, closeTrigger) => {

//  const slideMenu = (setting)=>{}
//с помощью деструктивного метода все присволили setting
// const { openBtn, menu, classActiveMenu, closeTrigger } = setting;
//или коатко записали:
const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
  // на что нажимаем burgerBtn
  const burgerBtn = document.querySelector(openBtn);
  //   что открываем navigation
  const navigation = document.querySelector(menu);

  //эти элементы закрывают меню
  const navigationClose = document.querySelectorAll(closeTrigger);

  burgerBtn.addEventListener('click', () => {
    openMenu(navigation, classActiveMenu);
  });

  navigationClose.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu(navigation, classActiveMenu);
    });
  });
};

//эту функцию можно испльзоваь в любом другом файле
export default slideMenu;
