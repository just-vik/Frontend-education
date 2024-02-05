//1. реализовать процесс, который при отправке формы 
// выводит данные нового продукта в консоль

// 2.доработать обработчик формы таким образом
// чтобы при отправке формы в массив products 
// добавлялся объект со свойствами title, price, count

// 3.создать структуру карточки продукта
// <div>
//     <p>Bike</p>
//     <p>2300</p>
//     <p>12</p>
// </div>

// 4. добавить скрипт, который вызывает createProductCart 
// с данными из объекта product
// то, что вернет функция необходимо добавить в элемент
// с классом products
// 5. доработать функцию createProductCart таким образом, чтобы у div был класс
// product_cart

// 6. в createProductCart реализуйте проверку если count равень 0, 
// то у карточки продукта должен быть красный border (реализуйте это через стили inline)

// 7. в createProductCart реализуйте проверку 
// если кол-во продуктов равно 0, то вместо 0 запишите фразу "Товар кончился"

const addProductNode = document.querySelector("#add_product");
let products = [];

addProductNode.addEventListener("submit", event => {
    event.preventDefault();
    const title = event.target.title.value;
    const price = +event.target.price.value;
    const count = +event.target.count.value;
    // Добавляем объект со свойствами title, price, count в массив products
    const product = { title, price, count };
    products.push(product);
    // Сбрасываем значения формы после отправки
    event.target.reset();
    rerender();
});

function createProductCard(title, price, count) {
    const containerNode = document.createElement('div');
    containerNode.classList.add("product_cart")
    const titleNode = document.createElement('p');
    const priceNode = document.createElement('p');
    const countNode = document.createElement('p');
    titleNode.innerText = title;
    priceNode.innerText = price;
    countNode.innerText = count;

    const btnNode = document.createElement('button');
    btnNode.innerText = "удалить";
    btnNode.addEventListener("click", () => remove(title));

    countNode.innerText = count === 0 ? "Товар кончился" : count;
    containerNode.style.backgroundColor = count === 0 ? "#fab1a0" : "#55efc4";


    containerNode.append(titleNode, priceNode, countNode, btnNode);
    return containerNode;
}

function rerender() {
    const productsNode = document.querySelector('.products');
    // добавить очистку productsNode
    productsNode.innerText = "";
    // пройтись циклом по массиву products и для каждого объекта создать карточку 
    // с продуктом и добавить эту карточку в productsNode
    products.forEach(({ title, price, count }) => productsNode.append(createProductCard(title, price, count)));
}

function remove(title) {
    const newProductsArray = products.filter(product => product.title !== title);
    products = newProductsArray;
    rerender();
}