console.log("функция возводит число в степень");
//function declaration - стандартный способ
function power(base, p) {
  const result = base ** p;
  return result;
}
console.log(power(12, 2));
console.log(power(12, 3));
console.log(power(2, 10));

//function expression - создаем функию и присваеваем переменную
console.log("===================");
const sum = function (value1, value2) {
  return value1 + value2;
};
console.log(sum(12, 43));

//arrow function - для передачи значение в качестве аргумента
console.log("=========считает кол-во символов==========");
const length = (message) => {
  return message.length;
};
//const length = message => message.length; - короткий вариант
console.log(length("hello world"));

//
console.log(
  "=========функция получает 2 аргумента и возвращает наибольшее=========="
);
// Function expression
const max = function (num1, num2) {
  return Math.max(num1, num2);
  //return num1 > num2 ? num1 : num2;
};
console.log(max(5, 10));
console.log(max(-3, 7));
console.log(max(8, 8));

console.log(
  "=========функция mult получает в качестве аргумента 3 числа и возвращает произведение=========="
);
// Function declaration
function mult(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(mult(2, 3, 4)); // Выведет 24
console.log(mult(5, 2, 1)); // Выведет 10
console.log(mult(-2, 8, 3)); // Выведет -48

console.log("===================");
//доработать функцию mult чтобы она могла обрабатывать произвольное кол-во аргументов
function mult(...args) {
  // Используем метод reduce для перемножения всех чисел
  // return numbers.reduce((product, number) => product * number, 1);
  let result = 1;
  for (elem of args) {
    result *= elem;
  }
  return result;
}
console.log(mult(2, 2, 45, 6, 13, 7));

console.log(
  "=========функция получает в качестве аргументов числа и возвращает среднее значение=========="
);
//... - spread operator
function avg(...args) {
  let sum = 0;
  for (elem of args) {
    sum += elem;
  }
  return sum / args.length;
}
console.log(avg(12, 5, 3, 7, 5));

console.log("==========================");
//создать функцию max  которая получает в качестве аргумента числа и возвращает максимальное число
function maximum(...args) {
  let res = args[0];
  for (elem of args) {
    res = res > elem ? res : elem;
  }
  return res;
}
console.log(maximum(2, 8, 4, 10));

//создать функцию которая получает в качестве аргумента массив и выводит все значения (по одному) в консоль
console.log("==========================");
function show(arr) {
  for (elem of arr) {
    console.log(elem);
  }
}
show([1, 5, 3, 7, 5]);


// изменить функцию чтобы она меняла в массиве все отриц числа на положительные
console.log("==========================");
function handler(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] >= 0 ? arr[i] : -arr[i];
  }
  return arr;
}
const sourceArr = [1, -5, 3, -7, 5];
console.log(handler(sourceArr));
