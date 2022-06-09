const fetchProducts = async (computador) => {
  try {
    // caminho da mimnha api
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    // tratando a 1 promise
    const response = await fetch(endpoint);
    // tratando a 2 promise e o resultado da busca
    const data = await response.json();
    return data; // retorna os dados da api
  } catch (error) {
    return error;
    // retorna erro se ouver
  }
};

/* fetchProducts() */

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
