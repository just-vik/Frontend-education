const formNode = document.querySelector("#userForm"); // выбираем форму по её идентификатору

const users = []; // массив для хранения данных о пользователях

formNode.addEventListener("submit", (event) => {
  event.preventDefault(); // предотвращаем отправку формы по умолчанию
  const { firstName, lastName, age } = event.target; // получаем данные из формы
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
  }; // создаем объект пользователя
  users.push(user); // добавляем пользователя в массив
  rerender(); // перерисовываем интерфейс
  event.target.reset(); // сбрасываем значения формы
});

function createUser(firstName, lastName, age) {
  const container = document.createElement("div"); // создаем контейнер для пользователя
  const nameNode = document.createElement("p"); // создаем элемент для имени
  nameNode.innerText = "Name: " + firstName + " " + lastName; // устанавливаем текст имени
  const ageNode = document.createElement("p"); // создаем элемент для возраста
  ageNode.innerText = "Age: " + age; // устанавливаем текст возраста
  container.append(nameNode, ageNode); // добавляем элементы в контейнер
  return container; // возвращаем контейнер пользователя
}

function rerender() {
  const container = document.querySelector("#userCards"); // выбираем контейнер для пользователей
  container.innerText = ""; // очищаем контейнер
  users.forEach(({ firstName, lastName, age }) => {
    const userNode = createUser(firstName, lastName, age); // создаем элемент для пользователя
    container.append(userNode); // добавляем элемент в контейнер
  });
}
