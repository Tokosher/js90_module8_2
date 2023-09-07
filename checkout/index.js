import { createMarkup } from '../markups/busket-murkup';

const selectors = {
    container: document.querySelector('.js-list'),
    totalPrice: document.querySelector('.js-total-price'),
    clear: document.querySelector('.js-clear'),
}

const LS_KEY = 'PRODUCT_ITEMS';
const LSProducts = JSON.parse(localStorage.getItem(LS_KEY)) || [];


if (LSProducts.length) {
    const totalPrice = LSProducts.reduce((acc, currentItem) => acc += currentItem.quantity * currentItem.price, 0);
    selectors.container.innerHTML = createMarkup(LSProducts)
    selectors.totalPrice.textContent = totalPrice.toString();
}

selectors.clear.addEventListener('click', handleClick);

function handleClick () {
    localStorage.removeItem(LS_KEY);
    window.location.href = '../index.html';
}

