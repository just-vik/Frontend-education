const containerNode = document.querySelector(".img_container")

// containerNode.addEventListener("click", () => {
//     //проверка на наличие класса "clicked"
//     if (containerNode.classList.contains("clicked")) {
//         containerNode.classList.remove("clicked")
//     } else {
//         containerNode.classList.add("clicked")
//     }
// })

containerNode.addEventListener("click", () => {
    //toggle - проверка на наличие класса "clicked"
    containerNode.classList.toggle("clicked")
})


const imegesNodeList = document.querySelectorAll(".small_card img")
//синтаксис преобразования итерируемого обьекта в массив
// [...imegesNodeList].
imegesNodeList.forEach(imgNode => {
    // на каждую картинку повесить обработчик клика
    // при клике на картинку в консоль должно выводиться сообщение "click!"
    imgNode.addEventListener("click", event => {
        // добавить процесс вывода ссылки на картинку (значение атрибута src)
        // в консоль
        console.log(event.target.src);
        // добавить процесс присвоения ссылки на картинку (по которой мы нажали)
        // в качестве атрибута  src для .big_card
        const bigCardNode = document.querySelector(".big_card");
        bigCardNode.src = event.target.src;
        imegesNodeList.forEach(elem => elem.classList.remove("selected"))
        // при нажатии на маленькую картинку присвоить этот класс этой картинке
        event.target.classList.add("selected");
    })
})