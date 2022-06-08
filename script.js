const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// remove item do carrinho 
const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// adiciona itens ao carrinho
const addItemCar = async (itemId) => {
  const cartItems = document.querySelector('.cart__items');
  const getFetchItem = await fetchItem(itemId);
  const product = {
    sku: getFetchItem.id,
    name: getFetchItem.title,
    salePrice: getFetchItem.price,
  };
  cartItems.appendChild(createCartItemElement(product));
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
// escutador de evento q add item ao carrinho
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', () => addItemCar(sku));
  section.appendChild(button);
  return section;
};

const createListProducts = async () => {
  const itemsSection = document.querySelector('.items');
  const productComputer = await fetchProducts('computador');
  productComputer.results.forEach((computer) => {
    const { id, title, thumbnail } = computer;
    const product = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    itemsSection.appendChild(createProductItemElement(product));
  });
};
createListProducts();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => {};