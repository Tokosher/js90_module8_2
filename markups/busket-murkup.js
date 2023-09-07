export function createMarkup(arr) {
    return arr.map(({ img, name, price, quantity }) => `
    <li class="cart-item">
    <img src="${img}" alt="${name}" class="product-img"/>
    <h2>${name}</h2>
    <p>Quantity: ${quantity}</p>
    <p>${price * quantity} грн</p>
    </li>
    `).join('')
}