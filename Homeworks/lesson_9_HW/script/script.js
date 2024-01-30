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
// 2 variant
// function totalPrice(price,count){
//   return price*count;
// }
// console.log(totalPrice(250,6));

console.log("====Проверка на четность====");
function even(number) {
  return number % 2 === 0;
}
console.log(even(4));
console.log(even(7));
// 2 variant
// function isEven(number){
//   if (number%2===0) {
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isEven(12));
// console.log(isEven(13));

// 3 variant
// function isEven(number){
//   return number%2===0? true:false;
// }
// console.log(isEven(12));
// console.log(isEven(13));

console.log("====Реверс строки====");
function rev(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(rev("function"));
// 2 variant
// function stringReverse(string) {
//   let result = "";
//   for (letter of string) {
//     result = letter + string;
//   }
//   return result;
// }
// console.log(stringReverse("string"));
// result: '' letter: 's'
// result: 's' letter: 't'
// result: 'ts' letter: 'r'
// result: 'rts' letter: 'i'
// result: 'irts' letter: 'n'
// result: 'nirts' letter: 'g'
// 'gnirts'

//формула конвертера температуры f = (9/5)c + 32
console.log("====Конвертер температуры====");
function conversation(c) {
  return (9 / 5) * c + 32;
}
const celsius = 18;
const fahrenheit = conversation(celsius);
console.log(`${celsius} °C = ${fahrenheit} °F`);
// 2 variant
// function convert(value){
//   return value*9/5+32;
// }
// console.log(convert(6));