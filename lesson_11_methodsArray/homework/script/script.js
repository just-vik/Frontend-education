// 1. Задача: "Удвоение зарплаты"
//У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата".
//Используя метод map, удвойте зарплату каждого сотрудника.

// 2. Задача: "Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников,
//у которых зарплата выше 5500.

// 3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.

// 4. Задача: "Имена в верхнем регистре" Используя метод map,
//преобразуйте имена всех сотрудников к верхнему регистру.

const employees = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 6000 },
  { name: "Charlie", salary: 4500 },
];

console.log("=======Удвоение зарплаты======");
const x2Salary = employees.map(({ name, salary }) => ({name, salary: salary * 2}));
console.log(x2Salary);

console.log("=======Фильтрация сотрудников======");
const sortSalary = employees.filter(({ salary }) => salary > 5500);
console.log(sortSalary);

console.log("=======Общая зарплата======");
const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log(totalSalary);

console.log("=======Имена в верхнем регистре======");
//const upperCase = employees.map(({ name, salary }) => ({name: name.toUpperCase(), salary}));

//через spread
const upperCase = employees.map(employee => ({ ...employee, name: employee.name.toUpperCase() }));
console.log(upperCase);
