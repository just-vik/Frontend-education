//функции являются объектами первого класса, и, следовательно, могут быть присвоены переменным,
//переданы как аргументы и возвращены из других функций.
// function sum(a, b) {
//   return a + b;
// }
// const handler = sum;
// console.log(handler(12, 5));

//можем передавать функции как аргумент другой функции
// function sub(a, b) {
//   return a - b;
// }
// function mult(a, b) {
//   return a * b;
// }
// function handler(callback) {
//   //const callback = sub;
//   console.log(callback(12, 5));
// }
// handler(sub);
// handler(mult);

// console.log("===============");
// создать функцию forEach, которая принимает в качестве аргументов
// массив из значений и callback функцию.
// forEach должен вызвать данную функцию с каждым значением их массива
// function forEach(array, callback) {
//   for (elem of array) {
//     callback(elem);
//   }
// }
// function handler(value) {
//   const result = value ** 2; //** возводит в квадрат
//   console.log(result);
// }
//каждый элемент массива обрабатывается handler(т.е возводит в степень)
// forEach([1, 2, 3, 4, 5, 6, 7], handler);

//работа встроенного forEach
// const array = [1, 2, 3, 4, 5, 6, 7];
// forEach(array,handler);
// array.forEach(handler);
//без написания handler - стрелочная функция
// array.forEach((value) => console.log(value ** 2));

console.log("===============");
// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }
// function handler(value, index, array) {
//   const result = value ** 2; //** возводит в квадрат
//   console.log(index, result);
// }
// const array = [1, 2, 3, 4, 5, 6, 7];
// forEach(array, handler);
// array.forEach((value, index, array) => console.log(index, value ** 2, array));

console.log("===============");
// создать массив из слов и используя метод forEach вывести каждое слово отдельно
// const word = ["bike", "table", "keyboard", "snowboard"];
// word.forEach((word) => console.log(word));

console.log("===============");
// создать массив из чисел и используя метод forEach вывести все числа.
// если число отрицательное, то вывести его положительное значение (-5 -> 5)
// const arrayNum = [1, 2, -3, 4, -5, 6, -7];
// arrayNum.forEach((number) => console.log(number < 0 ? -number : number));

console.log("===============");
// используя метод forEach выведите слова, длиннее 5 символов
// const words = ["bike", "table", "keyboard", "snowboard"];
// words.forEach((word) => {
//   if (word.length > 5) {
//     console.log(word);
//   }
// });

console.log("=======map / forEach========");
//Выбор между map и forEach зависит от конкретной задачи. Если вы хотите создать новый массив на основе существующего, используйте map.
//Если нужно просто выполнить операцию для каждого элемента без создания нового массива,
//используйте forEach.
// const result = arrayNum.map((number) => number ** 2);
// console.log(result);
// const array = [1, 2, -3, 4, -5, 6, -7];
// function map(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i], i, array));
//   }
//   return newArray;
// }
// const result = map(array, (number) => number ** 2);
// console.log(result);

console.log("========filter=======");
// используя метод filter сформировать массив из четных чисел
// function map(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i],i,array)) {
//         newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// const array = [1, 2, 3, 4, 5, 6, 7];
// const result = array.filter((number) => number % 2 === 0);
// console.log(result);

console.log("===============");
// написать процесс, который из массива с числами формирует массив который
// содержит только положительные числа из исходного массива
// const array = [1, 2, -3, 4, -5, 6, -7];
// console.log(array.filter((x) => x > 0));

console.log("===============");
// написать процесс, который из массива с числами формирует массив который
// меняет - на + (решается через создание нового массива)
// const array = [1, 2, -3, 4, -5, 6, -7];
// console.log(array.map((x) => (x >= 0 ? x : -x)));

console.log("===============");
//написать процесс который формирует массив из увадратов положительных чисел
// [1, 2, -3, 4, -5, 6, -7]
// [1, 4, 16, 36]
// const array = [1, 2, -3, 4, -5, 6, -7];
// const result_01 = array.filter((x) => x > 0);
// const result = result_01.map((x) => x ** 2);
// console.log(result_01);
// console.log(result);

// const result = array
//           .filter((x) => x > 0)
//           .map((x) => x ** 2);
// console.log(result);

console.log("===============");
// создать массив, который состоит из исходных строк, которые длиннее 5 символов
// в каждой строке в конце должен быть добавлен "!"
const words = ["bike", "table", "keyboard", "snowboard"];
//результат ['keyboard!', 'snowboard!']
const result = words
    .filter((x) => x.length > 5)
    .map((x) => x + "!");
console.log(result);
