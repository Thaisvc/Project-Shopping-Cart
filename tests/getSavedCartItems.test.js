const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
// const item = require('../mocks/item');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});