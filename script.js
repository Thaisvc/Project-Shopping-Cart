// criando imagem do item
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
// cria tags dinamicamente
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// remove item q foi clicado do carrinho/parametro evento de click
const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(ol.innerHTML);
};
// cria os elementos no carrinho
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `SKU: ${sku} |   NAME: ${name} |    PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  // pegando elemento q sera pai dos q criarei
  const ol = document.querySelector('.cart__items');
  // add elementos criados (li) ao pai(ol)
  ol.appendChild(li);
  saveCartItems(ol.innerHTML);
  return li;
};

// adicionar produto o carrinho
const addCarrinho = async (idProduct) => {
  // chama a api co o id do produto
  const dataApi = await fetchItem(idProduct);
  // desconstroi o objeto
  const { id, title, price } = dataApi;
  // cria novo objeto
  const obj = {
    sku: id,
    name: title,
    salePrice: price,
  };
  // retorno chama createCartItemElement q cria as linha dentro do carrinho com os dados passados como parametro

  return createCartItemElement(obj);
};

const createProductItemElement = ({ sku, name, image }) => { // recebe dados da funçao createProductlist
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));// cria um span filho com id
  section.appendChild(createCustomElement('span', 'item__title', name));// cria um span filho com titulo
  section.appendChild(createProductImageElement(image));// chama a funçao q cria a imagem do produto 
  // adicionando captura de click a cada button
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', () => addCarrinho(sku));// passando o id 
  // add botao ao produto
  section.appendChild(button);

  return section;
};

// seleciona o id de um item
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// _____________________________________________________
// criar a lista de produto
const createProductlist = async () => {
  // pegando os dados da api com o produto q quero/ como ela é uma funçao assicrona e preciso tratar
  const dataApi = await fetchProducts('computador');
  // pegra o pai para o qual vou criar a lista
  const section = document.querySelector('.items');
  // percorrendo os dados
  dataApi.results.forEach((products) => {
    // descontruindo o  para pegar o q preciso
    const { id, title, thumbnail } = products;
    const details = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    /* OUTRA FORMA --> transformando os dados da api em array para melhor tratar os dados
    const dataEntries = Object.entries(dataApi) */
    // pegando a section pai passando como filho meus elementos retornado da api (createProductItemElement) funçao q cria elemento de forma dinamica q recebe como dados meus objeto de produtos
    section.appendChild(createProductItemElement(details));
  });
};

createProductlist();

window.onload = () => {
  document.querySelector('.cart__items').innerHTML = getSavedCartItems();
};
