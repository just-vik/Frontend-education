// функция для вывода модального окна с подсказкой
// alert("Моя первая строчка в JS");

console.log("Моя вторая строчка в JS");

//способы создания переменной:
// var message = "Привет друзья"; //старый способ - не используем
// let message_2 = "привет друзья"; //можно переопределять
// const message_3 = "привет дорогие друзья"; // не работает переобределение - используется по умолчанию

// console.log(message);
// console.log(message_2);
// console.log(message_3);

//NODE.js (терминальный JS)
//DOM (взаимодействие с HTML)

//ES6 -новая спецификация(2015)

const number_1 = 12;
const number_2 = 15;

if (number_1 > number_2) {
  console.log(number_1);
} else if (number_1 < number_2) {
  console.log(number_2);
} else {
  console.log("Они равны");
}
console.log("--------------------------");
//написать программу в которой есть переменная с числом
//используя условный оператор выведите сообщение
//"четное" или "не четное" в зависимости от значения
const number_3 = 12;
if (number_3 % 2 === 0) {
  console.log("число ЧЕТНОЕ!");
} else {
  console.log("число НЕ ЧЕТНОЕ!");
}

//разница между ==  и ===
// == (равенство): Этот оператор сравнивает значения, преобразуя типы, если это необходимо.
// Например, 5 == "5" будет истинным, так как значение равно, и произойдет автоматическое
// приведение типов.

// === (строгое равенство): Этот оператор также сравнивает значения,
// но не выполняет приведение типов. Оба операнда должны быть одного и того же типа
// и иметь одинаковое значение. Например, 5 === "5" будет ложным, так как типы данных разные.

// В вашем коде используется строгое равенство (===), что означает,
// что сравниваются и значения, и типы данных.
console.log("--------------------------");
//написать цикл, который выводит цифр от 0 дл 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("--------------------------");
//............. который выводит цифры от 9 до 0
for (let j = 9; j >= 0; j--) {
  console.log(j);
}

console.log("--------------------------");
//создание массива
const list = [12, "65", true, 5];
list.push(4); //добавление элемента в конец массива
console.log(list);
console.log(list[1]); //получение элемента с индексом 1
console.log(list.length); //длинна массива

console.log("--------------------------");
//написать цикл который выводит все значения по одному
for (let index = 0; index < list.length; index++) {
  console.log(list[index]);
}

console.log("--------------------------");
//доработать цикл таким образом, чтобы он выводил
//только четные числа
const listEven = [12, 4, 5, 3];
let sum = 0;
for (let i = 0; i < listEven.length; i++) {
  if (listEven[i] % 2 === 0) {
    console.log(listEven[i]);
  }
  // посчитать сумму всех чисел массива
  sum += listEven[i];
}
console.log("Сумма всех чисел:", sum);

console.log("--------------------------");
//написать цикл который выводит все эти слова
const words = ["ролики", "самокат", "электричество", "велосипед"];
// for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
//   }

for (word of words) {
  console.log(word);
}
console.log("--------------------------");
//написать цикл который выводит слова длиннее 7 символов
for (word of words) {
  if (word.length > 7) {
    console.log(word);
  }
}

console.log("--------------------------");
//написать цикл который выводит слово с наибольшей длинной
//если таких несколько нужно вывести первое
let res = words[0];
for (word of words) {
  if (word.length > res.length) {
    res = word;
  }
}
console.log(res);

console.log("--------------------------");
let value_1;
if (true) {
  value_1 = 12; //не сработает внутри блока
  var value_2 = 13;
}
console.log(value_1);
console.log(value_2);