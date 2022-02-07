const base = {
  employee: 'Птеров Сергей Иванович',
  todo: [
    {
      id: 'td1',
      author: 'Иванов',
      post: 'Отгрузить пылесосы',
      ready: false,
    },

    {
      id: 'td2',
      author: 'Федоров',
      post: 'Получить товар',
      ready: true,
    },
  ],
  check: function (id) {
    console.log('id: ', id);
  },
};
base.check(24);
