const fetchItem = async (itemId) => {
  if (itemId === undefined) return new Error('You must provide an url'); 
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    const data = await response.json();
    const results = await data;
    return results;
  } catch (error) {
    return error;
  }
};

fetchItem();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}