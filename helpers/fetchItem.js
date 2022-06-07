const fetchItem = async (ItemID) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
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