//Методы для получения элементов (нод) Node
const elem = document.querySelector("p");
// document - это объект, представляющий текущий HTML-документ.
// querySelector("p") - это метод, который ищет первый элемент в документе,
//соответствующий селектору "p". В данном случае, ищется первый параграф (<p>).
console.log(elem.innerText); //innerText - считывает текст параграфа

elem.innerText = "New text for paragraph"; //замена содержимого текста ноды

//написать скрипт который переводит содержимое параграфа в верхний регистр
elem.innerText = elem.innerText.toUpperCase() + "!!!";

//создание элементов и запись в них через JS
//создать div содержащий h2 заголовок и p текст
function createTopic(title, text, link) {
  //создаем div/h2/p - используем createElement
  const container = document.createElement("div");
  const titleNode = document.createElement("h2");
  const textNode = document.createElement("p");

  const linkNode = document.createElement("a");

  // устанавливаем текст заголовка и абзаца из параметров функции
  titleNode.innerText = title;
  textNode.innerText = text;

  linkNode.innerText = "подробнее...";

  //указания атрибута (2 способа)
  // 1.универсальный, но громосткий
  //linkNode.setAttribute("href", link);
  // 2.более короткий
  linkNode.href = link;

  // добавляем заголовок и текст внутрь контейнера
  container.append(titleNode, textNode, linkNode);
  return container;
  // TASK: добавить ссылку <a href="">подробнее...</a>;  ссылка должна идти после параграфа
}

// TASK: Создать функцию, которая получает в качестве аргумента массив из объектов.
// Проходится по ним циклом и создает в HTML карточки с этими постами
const array = [
  {
    title: "Заголовок 1",
    text: "Текст 1",
    link: "http://www.example1.com",
  },
  {
    title: "Заголовок 2",
    text: "Текст 2",
    link: "http://www.example2.com",
  },
  {
    title: "Заголовок 3",
    text: "Текст 3",
    link: "http://www.example3.com",
  },
];

// Функция render, которая отрисовывает темы на веб-странице
function render(topics) {
  // Получаем корневой элемент с id "root" из документа
  const root = document.querySelector("#root");
  // Для каждой темы в массиве вызываем функцию createTopic и добавляем ее результат (элемент) в корневой элемент
  topics.forEach(({ title, text, link }) =>
    root.append(createTopic(title, text, link))
  );
}

// Вызываем функцию render, передавая ей массив тем для отрисовки
render(array);

// // добавление контейнера в #root
// const root = document.querySelector("#root");
// // пример использования функции
// const result = createTopic(
//   "Статья об автомобилях",
//   "С момента появления первых автомобилей в начале 20-го века, они прошли долгий путь",
//   "https://www.google.com/"
// );
// root.append(result);

//создать функцию которая получает в качестве аргументов название задачи и ее номер
//функция должна вывести следующую структуру
// getTask("сходить в бассейн", 12)
// <div>
//     <p>Номер задачи: 12</p>
//     <p>Задача: сходить в бассейн</p>
// </div>

function getTask(taskNumber, taskTitle) {
  // Создаем div
  const container = document.createElement("div");
  // Создаем элементы p для номера задачи и самой задачи
  const number = document.createElement("p");
  const title = document.createElement("p");
  // Устанавливаем текст для элементов p
  number.innerText = `Номер задачи: ${taskNumber}`;
  title.innerText = `Задача: ${taskTitle}`;
  // Добавляем элементы p внутрь div
  container.append(number, title);
  // Возвращаем созданный div
  return container;
}
// TASK: Написать процесс, который проходится циклом по массиву и выводит в HTML все задачи
const tasks = [
  { title: "Заголовок 1", number: 42 },
  { title: "Заголовок 2", number: 17 },
  { title: "Заголовок 3", number: 99 },
  { title: "Заголовок 4", number: 23 },
  { title: "Заголовок 5", number: 7 },
];

const root = document.querySelector("#root");
tasks
  .filter(({ show }) => show)
  .forEach(({ number, title }) => root.append(getTask(number, title)));
