// criando tag img com class e a imagem
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
// cria tags com class e text
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// cria os itens com botao para adicionar no carrinho id,titulo e imagem
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  return section;
};

// selecionando e exibindo o item
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

// cria li com id titulo e preço para colocar dentro do carrinho
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// essa funçao exibe a lista de produtos
const criarListaProduto = async () => {
  // selecionando elemento pai
const pegarSection = document.querySelector('.items');
// buscando na api
const chamandoAPI = await fetchProducts('computador');
// pegando a api pegando o objeto array results e percorrendo ele
chamandoAPI.results.forEach((computer) => {
  // desconstruindo o arry e pegando o  q preciso
  const { id, title, thumbnail } = computer;
  // construindo meu objeto
  const product = {
    sku: id,
    name: title,
    image: thumbnail,
  };
  // chando funçao q cria elementos, passando meus produtos como filho da section
  pegarSection.appendChild(createProductItemElement(product));
});
};
criarListaProduto();

window.onload = () => {};
