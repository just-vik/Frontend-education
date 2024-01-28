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

function createUser(firstName, lastName, age) {
  const container = document.createElement("div"); // создаем контейнер для пользователя
  container.classList.add("user-card"); // Добавление класса к контейнеру карточки пользователя

  const nameNode = document.createElement("p"); // создаем элемент для имени
  const ageNode = document.createElement("p"); // создаем элемент для возраста

  nameNode.innerText = "Name: " + firstName + " " + lastName; // устанавливаем текст имени
  ageNode.innerText = "Age: " + age; // устанавливаем текст возраста

  container.append(nameNode, ageNode); // добавляем элементы в контейнер
  container.style.fontFamily = "Times New Roman', Times, serif";
  container.style.color = "red";
  container.style.margin = "50px";
  container.style.backgroundColor = "whitesmoke";
  return container; // возвращаем контейнер пользователя
}

function render() {
  const container = document.querySelector("#userCards"); // выбираем контейнер для пользователей
  container.innerText = ""; // очищаем контейнер
  users.forEach(({ firstName, lastName, age }) => {
    const userNode = createUser(firstName, lastName, age); // создаем элемент для пользователя
    container.append(userNode); // добавляем элемент в контейнер
  });
}
