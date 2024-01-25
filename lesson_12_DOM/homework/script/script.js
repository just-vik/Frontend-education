// Задача: Изменение текста элемента
// Условие: Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!".
// С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!".

// Задача: Добавление нового элемента в DOM
// Условие: Создайте массив из строк. Напишите функцию, которая получает этот массив
// и создает нумерованный список из этих строк в html документе.

// Задача: Создание ссылок
// Условие: Подготовьте массив из объектов со свойствами label и link. Создайте функцию,
//которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.

console.log("====Изменение текста элемента=====");
const elem = document.querySelector("p");
elem.innerText = "Привет, JavaScript!";

console.log("====Добавление нового элемента в DOM=====");
const strings = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
function getList(array) {
  const olNode = document.createElement("ol");
  array.forEach((word) => {
    const liElem = document.createElement("li");
    liElem.innerText = word;
    olNode.append(liElem);
  });
  return olNode;
}
const root = document.querySelector("#root");
root.append(getList(strings));

console.log("====Создание ссылок_upgrade version=====");
const autoArray = [
  { label: "Toyota", link: "https://www.toyota.com" },
  { label: "Honda", link: "https://www.honda.com" },
  { label: "Ford", link: "https://www.ford.com" },
  { label: "Chevrolet", link: "https://www.chevrolet.com" },
  { label: "BMW", link: "https://www.bmw.com" },
];
function links(array) {
  const links = document.querySelector("#links");
  const container = document.createElement("ul");
  array.forEach((obj) => {
    const item = document.createElement("li");
    const hyperlink = document.createElement("a");
    hyperlink.href = obj.link;
    hyperlink.textContent = obj.label;
    item.append(hyperlink);
    container.append(item);
  });
  links.append(container);
}
links(autoArray);


function getLinksBlock(array){
  const container = document.createElement("div");
  array.forEach(({label, link})=>{
    const linkNode =document.createElement("a");
  })
}



