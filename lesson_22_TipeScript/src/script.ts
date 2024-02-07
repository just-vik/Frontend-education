const a: number = 2;
const b: number = 8;

const words: string[] = [];
console.log(a + b);

words.push("bike");
words.push("roll");
console.log(words);

const userName: string = "Vigol";
const userAge: number = 37;
const isTeacher: boolean = false;
console.log(userName, userAge, isTeacher);
// создать новый проект
// - в нем создать tsconfig (tsc --init)
// - прописать (rootDir, outDir)
// - написать TS скрипт, который содержит две числовые переменные и выводит в
//   консоль сумму этих переменных


function sum(x: number, y: number): number {
    return x + y;
}
console.log(sum(12, 45));