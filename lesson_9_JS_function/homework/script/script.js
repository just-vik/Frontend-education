// Калькулятор стоимости товаров:
// Создайте функцию, которая принимает цену товара и количество единиц,
// а затем возвращает общую стоимость.

// Проверка на четность:
// Создайте функцию, которая определяет, является ли число четным и возвращает булевое значение.

// Реверс строки:
// Напишите функцию, которая принимает строку
// и возвращает ее в обратном порядке (reverse использовать нельзя).

// Конвертер температуры:
// Создайте функцию для конвертации температуры из градусов Цельсия в градусы Фаренгейта.

console.log("====Калькулятор стоимости товаров====");
const total = function (price, qty) {
  return qty > 0 ? price * qty : undefined;
};
console.log("Total price:" + total(10, 0));
console.log("Total price:" + total(5, 2));
console.log("Total price:" + total(3, 10));

console.log("====Проверка на четность====");
function even(number) {
  return number % 2 === 0;
}
console.log(even(4));
console.log(even(7));

console.log("====Реверс строки====");
function rev(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(rev("function"));

//формула конвертера температуры f = (9/5)c + 32
console.log("====Конвертер температуры====");
function conversation(c) {
  return (9 / 5) * c + 32;
}
const celsius = 18;
const fahrenheit = conversation(celsius);
console.log(`${celsius} °C = ${fahrenheit} °F`);
