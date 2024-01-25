// Находим форму по id
const formNode = document.querySelector("#addForm");
// Массив для хранения задач (todos)
const todos = [];
//===================addEventListener=======================
// Добавляем слушатель события submit для формы
formNode.addEventListener("submit", (event) => {
  // Предотвращаем стандартное поведение отправки формы
  event.preventDefault();
  // Деструктуризация объекта event.target, чтобы получить доступ к элементам формы
  const { title, priority } = event.target;
  // Создаем объект с данными из формы
  const todo = {
    title: title.value,
    priority: priority.value,
  };
  // Добавляем объект в массив todos
  todos.push(todo);
  // Вызываем функцию перерендера для обновления отображения
  rerender();
  // Сбрасываем значения формы
  event.target.reset();
});
//===================getTodoNode=======================
// Функция, которая создает DOM-элемент для задачи на основе ее данных (название и приоритет)
function getTodoNode(title, priority) {
  // Создаем контейнер div для задачи
  const container = document.createElement("div");
  // Создаем элементы <p> для отображения названия и приоритета
  const titleNode = document.createElement("p");
  const priorityNode = document.createElement("p");
  // Заполняем текстовое содержание элементов данными
  titleNode.innerText = `Title: ${title}`;
  priorityNode.innerText = `Priority: ${priority}`;
  // Добавляем созданные элементы внутрь контейнера
  container.append(titleNode, priorityNode);
  // Возвращаем контейнер
  return container;
}
//=================rerender=========================
// Функция перерендера, которая обновляет отображение списка задач
function rerender() {
  // Находим контейнер для задач по его id
  const container = document.querySelector("#todosContainer");
  // Очищаем содержимое контейнера
  container.innerText = "";
  // Перебираем все задачи в массиве todos
  todos.forEach(({ title, priority }) => {
    // Создаем DOM-элемент для каждой задачи
    const todoNode = getTodoNode(title, priority);
    // Добавляем созданный элемент внутрь контейнера
    container.append(todoNode);
  });
}
