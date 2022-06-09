const saveCartItems = (items) => {
  /* const string = JSON.stringify(items); */
  
  localStorage.setItem('cartItems', items);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}