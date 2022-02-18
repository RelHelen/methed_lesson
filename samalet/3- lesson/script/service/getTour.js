const URL_API = 'https://61f4662310f0f7001768c90f.mockapi.io/api/airplane';

//получили данные тз url
//fetch(URL_API) - вернет данные ввиде промиса
const getData = () =>
  fetch(URL_API)
    .then((response) => {
      console.log('response: ', response);
      //функция вернет если промис выполнился   успешно
      if (response.ok) {
        //переводим в удобный формат для JS
        return response.json();
      }
      throw new Error(response.status);
      // на иначе вернет ошибку,оператор исключения, создаст новую ошибку и сбросить все
    })
    .catch((err) => {
      //функция вернет если промис выполнился не успешно
      console.error(err);
    });
//console.log('getData: ', getData());

//* fetch отправил запрос и возвращает ответ-промис
/*   вначале статус = pending- ожидание
    промис - обещание вернуть :

        статус ответа   PromiseState:     положительный(fulfilled) или отрицательный(reject)
        результат ответа     PromiseResult: Response(ввиде промиса)
        
   response- результат надо обработать с помощью метода then(), 
    он вызовет фукцию когда промис вернется не важно с каким результатом, может вернуть тоже ошибку
    .catch - выполняется когда будет статус ошибки 
    
*/

export default getData;
