// написать скрипт, который добавляет 10 параграфов в #root с цифрами в качестве текста от 0 до 9

// Находим элемент с id "root"
const rootNode = document.querySelector("#root");

// Создаем 10 параграфов и добавляем их в элемент "root"
for (let i = 0; i < 10; i++) {
    const pNode = document.createElement("p");
    // каждому параграфу присвоить класс "item"
    pNode.classList.add("item")
    pNode.innerText = i;
    rootNode.append(pNode);


}

// написать скрипт, который создает тег картинки и 
// указывает ей атрибут src 
// и добавляет в #root
const imgNode = document.createElement("img");
imgNode.src = "media/bmw.jpg";
rootNode.append(imgNode);


// создать два параграфа, записать в первый свое имя
// а во второй фамилию и добавить в #root
//обернуть параграфы в div
const divNode = document.createElement("div");
const firstName = document.createElement("p");
const lastName = document.createElement("p");
firstName.innerText = "Viktor";
lastName.innerText = "Goloviznin";
divNode.append(firstName, lastName);
rootNode.append(divNode)


// написать процесс, который для каждого слова из массива words
// создает параграф с соответствующим словом 
// и добавляет в root
const words = [
    "bike",
    "snowbord",
    "table",
    "computer"
];

const wordsContainer = document.createElement("div");
words.forEach(word => {
    const wordNode = document.createElement("p");
    wordNode.innerText = word;
    wordsContainer.append(wordNode);
});
rootNode.append(wordsContainer) 