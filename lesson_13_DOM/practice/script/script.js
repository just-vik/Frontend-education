// const btnNode = document.querySelector("#btn");
// //element.addEventListener(event, listener, options);
// //это метод в JavaScript, который используется для добавления слушателя событий к определенному элементу DOM
// btnNode.addEventListener("click", () => console.log("Клик!"));

//меняем содержимое кнопки
// let number = 0;
// // Добавление слушателя события "click" к элементу btnNode
// btnNode.addEventListener("click", (event) => {
//   // Вывод объекта event в консоль для отладки (можно удалить в финальной версии)
//   console.log(event);
//   // Увеличение значения переменной number на 1 при каждом клике
//   number++;
//   // Установка увеличенного значения как текстового содержимого элемента, на который был произведен клик
//   // Используется event.target, чтобы получить элемент, на который был произведен клик
//   event.target.innerText = number;
//   // Альтернативный способ обновления текстового содержимого элемента btnNode
//   // btnNode.innerText = number;
// });

// let number = 0;
// btnNode.innerText = number;
// btnNode.addEventListener("mouseover", ({ target }) => {
//   number++;
//   target.innerText = number;
// });

const formNode = document.querySelector("#addForm");
const tasks = [];
formNode.addEventListener("submit", (event) => {
  //отменяет поведение по умолчанию(отправка HTTP запроса)
  event.preventDefault(); //отменяет поведение по умолчанию
  const title = event.target.title.value; //считывает содерж строки
  const employee = event.target.employee.value;
  const price = +event.target.price.value;
  tasks.push({ title, employee, price }); //добавляем в массив
  console.log(tasks); //выводим в консоль
  event.target.reset(); //очищает строку после ввода
});
//добавить еще одно поле (исполнитель)
//при обработке формы в массив добавлять объект со свойствами (title, employee)

//добавить еще одно поле (цена)
// доработать процесс таким образом, чтобы в объекте task было значение цены под ключем (price)
