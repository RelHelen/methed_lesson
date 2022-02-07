const formTodo = document.getElementById('form-todo');
const author = document.getElementById('author');
const post = document.getElementById('post');
const todoBtn = document.querySelector('.todo__btn');
const todoList = document.querySelector('.todo__list');
//объект base
const base = {
  employee: 'Птеров Сергей Иванович',
  todo: getLS(),
  /*todo: [
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
  ],*/
  /*check: function (id) {
      console.log('id: ', id);
    },
    addTodo: function (author, post) {
      const todo = {
        id: 'td' + (base.todo.length + 1),
        author: author,
        post: post,
        ready: false,
      };
      console.log('todo: ', todo);
    },*/
  check(id) {
    console.log('id: ', id);
    for (let i = 0; i < base.todo.length; i++) {
      if (base.todo[i].id === id) {
        base.todo[i].ready = true;
      }
    }
  },
  addTodo(author, post) {
    const todo = {
      //id: 'td' + (base.todo.length + 1),
      //милисекунды
      id: 'td' + Date.now(),
      author, //author: author,
      post, //post: post,
      ready: false,
    };
    base.todo.push(todo);
    return todo;
  },
};
base.check(24);
//base.addTodo('максим', 'Дела делай');
//base.addTodo('максим2', 'Дела делай2');
//console.log(document); //выводит DOM

//перебираем массив base  и добавляем элементы на страницу
function renderTodo() {
  for (let i = 0; i < base.todo.length; i++) {
    const liEl = creatTodo(base.todo[i]);
    todoList.append(liEl); //добавили в конец списка элемент
    console.log('liEl: ', liEl);
  }
}

//создание элемента списка дел
function creatTodo(objTodo) {
  //${authorVal} - интерполяция
  const todoItem = `
    <article class="post ${objTodo.ready ? ' post_complete' : ''}">    
      <h3 class="post__author">${objTodo.author}</h3>
      <p class="post__todo">${objTodo.post}</p>
      ${
        !objTodo.ready
          ? `<button class="post__ready" type="button" data-id="${objTodo.id}">✔</button>`
          : ''
      }
    </article>
   `;
  const li = document.createElement('li');
  li.classList.add('todo__list-item');
  li.innerHTML = todoItem;
  return li;
}

//добавление списка дел на старницу
function addTodo(e) {
  e.preventDefault();
  console.log(e);
  const authorVal = author.value;
  const postVal = post.value;
  const objTodo = base.addTodo(authorVal, postVal);
  console.log('objTodo: ', objTodo);
  const todoLi = creatTodo(objTodo);
  todoList.append(todoLi);
  setLS(); //СОХРАНИЛИ в localStorage
  formTodo.reset(); //очистили форму
}

function checkBtn(e) {
  const btn = e.target.closest('.post__ready'); //если попали по классу .post__ready то вернется элемент с этим классом

  console.log('btn: ', btn);
  if (btn) {
    //элемент будет искаться ввверх по дререву
    const postArt = btn.closest('.post');
    console.log('postArt: ', postArt);
    if (postArt) {
      postArt.classList.add('post_complete');

      const id = btn.dataset.id;
      base.check(id);
      console.log('base.todo:', base.todo);
      setLS(); //СОХРАНИЛИ в localStorage
      btn.remove();
    }
  }
}
//сохранить  пару в local storage
function setLS() {
  //преобразовали из объкта в строку
  localStorage.setItem('objTodoLS', JSON.stringify(base.todo));

  console.log('JSON.stringify(base.todo): ', JSON.stringify(base.todo));
}

//получить пару из local storage
function getLS() {
  //если есть в хранилище ключ objTodoLS,то возвращаем объект
  if (localStorage.getItem('objTodoLS')) {
    //преобразовали из строки в массив
    return JSON.parse(localStorage.getItem('objTodoLS'));
  }
  //иначе вернули пустой масссив
  return [];
}
renderTodo();
formTodo.addEventListener('submit', addTodo);
todoList.addEventListener('click', checkBtn);
