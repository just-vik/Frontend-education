// Поиск максимального числа:
// Условие: Напишите программу, которая находит максимальное число из массива и выводит его.

// Генератор таблицы умножения:
// Условие: Выведите таблицу умножения для числа 5.

// Подсчет четных чисел:
// Условие: Напишите программу, которая подсчитывает количество четных чисел в заданном массиве.

// Реверс массива:
// Условие: Напишите программу, которая переворачивает заданный массив.

const numbers = [12, 5, 38, 19, 3, 4, 8];

console.log("=======Поиск максимального числа=======");
let result = numbers[0];
for (number of numbers) {
  if (number > result) {
    result = number;
  }
}
console.log(result);
// через тернарный оператор
// let result = arr[0];
// for(elem of arr){
//   result = result > elem ? result : elem;
// }
// console.log(result);

console.log("=======Генератор таблицы умножения=======");
const mtpl = 5;
for (let i = 1; i <= 10; i++) {
  console.log(mtpl + " * " + i + " = " + mtpl * i);
  //интерполяция
  console.log(`${mtpl} X ${i} = ${mtpl * i}`);
}

console.log("=======Подсчет четных чисел=======");
let count = 0;
for (num of numbers) {
  if (num % 2 === 0) {
    count++;
  }
}
console.log(count);

console.log("=======Реверс массива=======");
const reversNumbers = [];
for (let i = numbers.length; i >= 0; i--) {
  //перебор массива в обратном порядке
  reversNumbers.push(numbers[i]); //добавление числа в новый массив
}
console.log(reversNumbers);

for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
  //развернуть массив
  let tmp = numbers[i];
  numbers[i] = numbers[numbers.length - 1 - i];
  numbers[numbers.length - 1 - i] = tmp;
}
console.log(numbers);

console.log("=======РАБОТА СО СТРОКАМИ=======");
const message = "word";
for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}

console.log("цикл выводит посимвольно в обратном порядке");
for (let i = message.length - 1; i >= 0; i--) {
  console.log(message[i]);
}

console.log("цикл перевернуть строку");
let newMessage="";
for (let i = message.length - 1; i >= 0; i--) {
  newMessage+=message[i];
}
console.log(newMessage);


