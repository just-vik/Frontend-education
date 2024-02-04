const texts = [
    {
        id: 1,
        text: "Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития."
    },
    {
        id: 2,
        text: "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий."
    },
    {
        id: 3,
        text: "Не следует, однако забывать, что сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации форм развития. Задача организации, в особенности же консультация с широким активом в значительной степени обуславливает создание форм развития. Задача организации, в особенности же консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач."
    },
    {
        id: 4,
        text: "Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации. Таким образом укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития."
    }
]

// добавить код, который находит все кнопки 
// и вешает на них обработчик клика
// при нажатии на кнопку в консоль должно выводиться "click"
const btnsNodeList = document.querySelectorAll(".btns button")
let currentPostId = 1;
// btnsNodeList.forEach(elem => {
//     elem.addEventListener("click", event => {
//         // определяем номер кнопки (btnIndex), через получение индекса
//         const btnIndex = [...btnsNodeList].indexOf(event.target)
//         const { text } = texts.find(({ id }) => id === btnIndex + 1)
//         // реализовать вывод выбранного текста в .current_text
//         const currentTextNode = document.querySelector(".current_text")
//         currentTextNode.innerText = text;
//     });
// });

texts.forEach(({ id, text }) => {
    const container = document.querySelector(".btns");
    const btnsNode = document.createElement("button");

    btnsNode.addEventListener("click", event => {
        const currentTextNode = document.querySelector(".current_text.text")
        currentTextNode.innerText = text;
    });
    btnsNode.innerText = `${id} кнопка`;
    container.append(btnsNode);
})

const [leftTriggerNode, rightTriggerNode] = document.querySelectorAll(".triggers button");
leftTriggerNode.addEventListener("click", () => {
    currentPostId--;
    currentPostId = currentPostId < 1 ? texts.length : currentPostId;
    const currentTextNode = document.querySelector(".current_text .text")
    currentTextNode.innerText = texts.find(({ id }) => id === currentPostId).text;

})
rightTriggerNode.addEventListener("click", () => {
    currentPostId++;
    currentPostId = currentPostId > texts.length ? 1 : currentPostId;
    const currentTextNode = document.querySelector(".current_text .text")
    currentTextNode.innerText = texts.find(({ id }) => id === currentPostId).text;

})

