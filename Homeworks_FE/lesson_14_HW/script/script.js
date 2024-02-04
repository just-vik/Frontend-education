const formNode = document.querySelector("#userForm"); // выбираем форму по её идентификатору

const users = []; // массив для хранения данных о пользователях

formNode.addEventListener("submit", (event) => {
  event.preventDefault(); // предотвращаем отправку формы по умолчанию
  const { firstName, lastName, age } = event.target; // получаем данные из формы
  const user = {
    // создаем объект пользователя
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
  };
  users.push(user); // добавляем пользователя в массив
  render(); // перерисовываем интерфейс
  event.target.reset(); // сбрасываем значения формы
});

function setRandomColor(node) {
  const randomValue = () => Math.round(Math.random() * 255);
  const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
  node.style.backgroundColor = color;
}

function createUser(firstName, lastName, age) {
  const container = document.createElement("div"); // создаем контейнер для пользователя
  const nameNode = document.createElement("p"); // создаем элемент для имени
  const ageNode = document.createElement("p"); // создаем элемент для возраста

  setRandomColor(container);
  container.classList.add("user_item"); // Добавление класса к контейнеру карточки пользователя

  nameNode.innerText = "Name: " + firstName + " " + lastName; // устанавливаем текст имени
  ageNode.innerText = "Age: " + age; // устанавливаем текст возраста

  container.append(nameNode, ageNode); // добавляем элементы в контейнер
  // container.style.fontFamily = "Times New Roman', Times, serif";
  // container.style.margin = "10px";
  // container.style.backgroundColor = "whitesmoke";
  return container; // возвращаем контейнер пользователя
}

function render() {
  const container = document.querySelector(".userContainer"); // выбираем контейнер для пользователей
  container.innerText = ""; // очищаем контейнер
  users.forEach(({ firstName, lastName, age }) => {
    const userNode = createUser(firstName, lastName, age); // создаем элемент для пользователя
    container.append(userNode); // добавляем элемент в контейнер
  });
}

//вывести случайное число от 25 до 255
// function setRandomColor() {
//   const container = document.querySelector(".userContainer");
//   container.style.backgroundColor = "green";
//   const randomValue = () => Math.round(Math.random() * 255);
//   const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
//   container.style.backgroundColor = color;
// }
// setRandomColor();
