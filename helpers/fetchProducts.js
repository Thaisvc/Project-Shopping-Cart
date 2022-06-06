const fetchProducts = async (computador) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${computador}`);
    const data = await response.json();
    const results = await data;
    return results;
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