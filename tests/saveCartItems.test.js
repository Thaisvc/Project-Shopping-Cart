const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
// const item = require('../mocks/item');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });

  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    const param = '<ol><li>Item</li></ol>';
    saveCartItems(param);
    expect(localStorage.setItem).toBeCalledWith('cartItems', param);
  });
});