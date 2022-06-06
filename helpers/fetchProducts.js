const fetchProducts = async (product) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

    const response = await fetch(endpoint).then((resposta) => resposta.json());
    return response;
  } catch (error) {
    return error;
  }
};
fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}