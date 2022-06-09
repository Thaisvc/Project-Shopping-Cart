const fetchItem = async (ItemID) => {
 try {
  const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
 } catch (error) {
   return error;
 }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
