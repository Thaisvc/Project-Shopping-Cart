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

const createProductItemElement = ({ sku, name, image }) => {
  const classItem = document.querySelector('.items');
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  classItem.appendChild(section);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = async () => {
  const apiProduto = await fetchProducts();
  const sk = apiProduto.results.map((id) => id.id);
  const nam = apiProduto.results.map((nome) => nome.title);
  const imag = apiProduto.results.map((img) => img.thumbnail);
  const result = { sk, nam, imag };
  /* console.log(result); */
  for (let index = 0; index < result.sk.length; index += 1) {
    const sku = result.sk[index];
    const name = result.nam[index];
    const image = result.imag[index];
    const obj = { sku, name, image };
    createProductItemElement(obj);
  }
};