// Удвоение элементов массива:
// Условие: Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.

// Преобразование строк в верхний регистр:
// Условие: Создайте массив строк и используйте метод map, чтобы преобразовать
// все строки в верхний регистр.

// Вычисление суммы элементов:
// Условие: Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.

// Удаление отрицательных чисел:
// Условие: Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.

console.log("========Удвоение элементов массива=======");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers
    .map((num) => num * 2);
console.log(result);

console.log("=======Преобразование строк в верхний регистр========");
const strings = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
const uppercasedStrings = strings.map((str) => str.toUpperCase());
console.log(uppercasedStrings);

console.log("========Вычисление суммы элементов массива========");
const numbers_2 = [6, 7, 8];
let sum = 0;
numbers_2.forEach((num) => {
  sum += num;
});
console.log(sum);

console.log("=======Удаление отрицательных чисел=======");
const numbers_3 = [-7, -2, 9, -4, 2, 5];
const result_3 = numbers_3
    .filter((num) => num >= 0);
console.log(result_3);
