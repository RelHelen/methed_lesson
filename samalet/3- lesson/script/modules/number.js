const arr = ['год', 'года', 'лет'];
// возвращает число и слово
const declOfNum = (n, titles) => {
  return (
    n +
    ' ' +
    titles[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ]
  );
};
//https://codepen.io/Quper/pen/zYGxbJm
export default declOfNum;
