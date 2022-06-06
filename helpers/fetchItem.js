const endpoint = 'https://api.mercadolibre.com/items/';

const fetchItem = async (call) => {
  try {
    const response = await fetch(`${endpoint}${call}`).then((resposta) => resposta.json());
   
    return response;
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