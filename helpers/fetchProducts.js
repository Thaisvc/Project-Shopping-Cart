const fetchProducts = async (computador) => {
  try {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const response = await fetch(`${endpoint}${computador}`);
  const products = await response.json();
 
  return products;
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