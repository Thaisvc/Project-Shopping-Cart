const getSavedCartItems = () => {
  const getLocal = localStorage.getItem('cartItems');
  
  /* const getList = JSON.parse(getLocal); */
  return getLocal;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
