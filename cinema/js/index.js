import slideMenu from './menu.js';
// slideMenu(
//   '.header__burger-btn',
//   '.navigation',
//   'navigation_active',
//   '.navigation__link,.navigation__close'
// );
// передадим ввиде объекта
slideMenu({
  openBtn: '.header__burger-btn',
  menu: '.navigation',
  classActiveMenu: 'navigation_active',
  closeTrigger: '.navigation__link,.navigation__close',
});