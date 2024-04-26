/**
 * Create items list
 *
 * @param {Object} item - item data
 * @returns {HTMLElement}
 */

const addItems = (item) => {
    // CREATE ARTICLE ELEMENT
    const article = document.createElement('article');
    article.classList.add('menu-item', item.category);

    // IMAGE
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = item.src;
    img.alt = item.title;

    // ITEM INFO
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    article.append(img, itemInfo);

    // HEADER
    const header = document.createElement('header');

    // TITLE
    const title = document.createElement('h4');
    title.innerText = item.title;

    // PRICE
    const price = document.createElement('h4');
    price.classList.add('price');
    price.innerText = `$${item.price}`;

    header.append(title, price);

    // DESCRIPTION
    const description = document.createElement('p');
    description.classList.add('item-text');
    description.innerText = item.desc;

    itemInfo.append(header, description);

    return article;
};

export default addItems;
