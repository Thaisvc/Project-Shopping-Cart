require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  try {
    it('é uma função', () => {
      expect(typeof fetchItem).toBe('function');
    });
    it("é chamada", () => {
      fetchItem("MLB1615760527");
      expect(fetch).toHaveBeenCalled();
    });
    it('usa o endpoint', () => {
      const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
      fetchItem('MLB1615760527');
      expect(fetch).toHaveBeenCalledWith(endpoint);
    });
    it('retorna o valor correto', async () => {
      const results = await fetchItem('MLB1615760527');
      expect(results).toEqual(item);
    });
    it('returns error with no arguments', async () => {
      const expected = new Error('You must provide an url');
      const results = await fetchItem();
      expect(results).toEqual(expected);
    });
  } catch (error) {
    console.log(`Sorry, has been an error: ${error}`)
  }
});