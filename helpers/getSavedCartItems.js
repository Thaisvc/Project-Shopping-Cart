const getSavedCartItems = () => {
  const getList = localStorage.getItem('cartItems');
  const test = JSON.parse(getList);
  const { sku } = test;
  return sku;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
