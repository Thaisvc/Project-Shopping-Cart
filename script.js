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

// Requisito 5 - remove o item do carrinho ao clicar nele.
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

// Requisito 4 - Adiciona os itens ao carrinho e adiciona o elemento retornado da função createCartItemElement() como filho do elemento cart_items.
const addItemsToCart = async (itemId) => {
  const cartItems = document.querySelector('.cart__items');
  const getFetchItem = await fetchItem(itemId);
  const product = {
    sku: getFetchItem.id,
    name: getFetchItem.title,
    salePrice: getFetchItem.price,
  };
  cartItems.appendChild(createCartItemElement(product));
};
addItemsToCart();

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
// Requisito 4 - Adiciona o escutador de click na função addItemToCart. Quando o botão Adicionar ao carrinho for clicado a função será executada.
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', () => addItemsToCart(sku));
  section.appendChild(button);
  return section;
};
// Requisito 2
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