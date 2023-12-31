function createMarkup (items) {
    return items.map(({ description, id, img, name, price }) => `
    <li data-id="${id}" class="product-card js-product">
    <img src="${img}" alt="${name}" class="product-img" />
    <h2 class="product-title">${name}</h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price} грн</p>
    <button class="product-add-btn js-add" type="button">Add to basket</button>
    </li>
    `).join('');
}

export { createMarkup }