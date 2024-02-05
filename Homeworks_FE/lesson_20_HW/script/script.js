
const button = document.querySelector('#target button');
const paragraph = document.querySelector('#target p');
const messages = [
    "1text",
    "2text",
    "3text",
]
let index = 0;
button.addEventListener('click', () => {
    paragraph.innerText = messages[index
        % messages.length];
    index++;
});


const formNode = document.querySelector('#form');
formNode.addEventListener('submit', event => {
    event.preventDefault();
    const message = event.target.message.value;
    console.log(message);
    event.target.reset()
});


const randomBtnNode = document.querySelector(".random_btn")
randomBtnNode.addEventListener("click", event => {
    const value = Math.round(Math.random() * 10 + 5);
    event.target.innerText = value;
})
