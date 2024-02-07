"use strict";
const a = 2;
const b = 8;
const words = [];
console.log(a + b);
words.push("bike");
words.push("roll");
console.log(words);
const userName = "Vigol";
const userAge = 37;
const isTeacher = false;
console.log(userName, userAge, isTeacher);
// создать новый проект
// - в нем создать tsconfig (tsc --init)
// - прописать (rootDir, outDir)
// - написать TS скрипт, который содержит две числовые переменные и выводит в
//   консоль сумму этих переменных
function sum(x, y) {
    return x + y;
}
console.log(sum(12, 45));
