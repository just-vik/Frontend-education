// Создание объекта пользователя с именем, фамилией и возрастом
const user_test = {
  name: "Анатолий",
  lastName: "Ушанов",
  age: 31,
};
// Вывод имени пользователя, используя квадратные скобки и строковый ключ
console.log(user_test["name"]);
// Вывод имени пользователя, используя точечную нотацию
console.log(user_test.name);

console.log("===добавление и изменение ключей===");
user_test.salary = 3200;
console.log(user_test);
user_test.salary = 4200;
console.log(user_test);

console.log("===обработка массива обьекта===");
const users = [
  {
    id: 1,
    name: "Анатолий",
    age: 31,
  },
  {
    id: 2,
    name: "Ольга",
    age: 34,
  },
  {
    id: 3,
    name: "Степан",
    age: 42,
  },
];
console.log(users);
//вывести все имена пользователей
for (const names of users) {
  console.log(names.name);
}

console.log("===задача age>33===");
// доработать цикл таким образом, чтобы он выводил имена пользователей с возрасом больше 33
for (const user of users) {
  if (user.age > 33) {
    console.log(user.name);
  }
}

console.log("===========");
// users
//   .filter((elem) => elem.age >= 33)
//   .forEach((elem) => console.log(elem.name));

console.log("=====деструктуризация объекта======");
// Создается объект `obj` с тремя свойствами: a, b и c, представляющими числовые значения.
const obj = {
  a: 12,
  b: 15,
  c: 21,
};
const { a, b, c } = obj;
// Используется деструктуризация объекта: извлекаются свойства a, b и c из объекта `obj`.
// Теперь переменные a, b и c содержат соответствующие значения из объекта.
console.log(b - a);
console.log(c);

console.log("===========");
// Это объявление функции handler. Внутри параметры функции ожидают объект с свойствами a и b.
// Используется деструктуризация объекта в сигнатуре функции, что позволяет сразу извлечь свойства a и b
// из переданного объекта.
function handler({ a, b }) {
  //const { a, b } = obj;
  console.log(a, b);
}
handler(obj);

console.log("===========");
users
  //Этот метод фильтрует массив пользователей, используя стрелочную функцию.
  //Внутри функции используется деструктуризация объекта для извлечения свойства age
  .filter(({ age }) => age >= 33)
  //Этот метод перебирает каждый элемент массива, используя метод forEach.
  //Внутри стрелочной функции опять используется деструктуризация объекта
  //для извлечения свойств name и age из каждого элемента массива
  .forEach(({ name, age }) => console.log(name, age));

console.log("===Задача 2===");
//написать процесс, который формирует новый массив из имен пользователей, у которых id четный
//фильтрация пользователей с четным id и извлечение имен
const result = users.filter(({ id }) => id % 2 === 0).map(({ name }) => name);
console.log(result);

console.log("===Задача 3===");
const store = [
  {
    name: "Ноутбук",
    price: 1200,
    brand: "Acer",
    inStock: true,
  },
  {
    name: "Смартфон",
    price: 500,
    brand: "Samsung",
    inStock: false,
  },
  {
    name: "Планшет",
    price: 300,
    brand: "Apple",
    inStock: true,
  },
  {
    name: "Клавиатура",
    price: 50,
    brand: "Samsung",
    inStock: true,
  },
];
// сформировать массив из товаров, которые есть в наличии
const avalability = store.filter(({ inStock }) => inStock);
console.log(avalability);

console.log("==========");
// сформировать новый массив из названий товаров бренда "Samsung"
// ["Смартфон", "Клавиатура"]
const arrayByBrand = store
  .filter(({ brand }) => brand === "Samsung")
  .map(({ name }) => name);
console.log(arrayByBrand);

console.log("=====метод Reduce=====");
//Метод reduce() в JavaScript используется для преобразования массива в единое значение
//(сводное значение) путем применения функции к каждому элементу массива.
//Функция reduce() принимает два аргумента: функцию обратного вызова
//и начальное значение аккумулятора.
const numbers = [6, 5, 3, 24, 4, 8];
//найти сумму чисел
const sum = numbers.reduce((acc, elem) => acc + elem);
console.log(sum);
// (acc, elem) => acc + elem;
// acc = 12 elem = 5 return 17
// acc = 17 elem = 3 return 20
// acc = 20 elem = 6 return 26
// acc = 26 elem = 4 return 30
// acc = 30 elem = 8 return 38

console.log("===Задача 4===");
//используя reduce найти масимальное значение
const max = numbers.reduce((acc, elem) => (elem > acc ? elem : acc));
console.log(max);

console.log("===Задача 5===");
// используя reduce найти произведение всех чисел
const mult = numbers.reduce((acc, elem) => acc * elem);
console.log(mult);

console.log("===Задача 6===");
//посчитать сумму всех товров
const res = store.reduce((acc, item) => acc + item.price, 0);
// 0 (initialValue) - это начальное значение аккумулятора. В данном случае, начальная сумма установлена в 0.
console.log(res);

console.log("===Задача 7===");
// написать процесс, который находит самую низкую цену продукта (именно число).
const minPrice = store.reduce(
  (acc, { price }) => (acc > price ? price : acc),
  store[0].price
);
//store[0].price  вместо этого можно использовать Infinity
console.log(minPrice);
