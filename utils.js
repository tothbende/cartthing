function calculateTotalWithDiscount(cart) {
  const maxPrice = cart.reduce((acc, item) => Math.max(acc, item.price),0);
  const discountedItem = cart.filter(item => item.price === maxPrice)
        .reduce((acc, item) =>item.price > acc.price ? item : acc)
  return cart.reduce((acc, item) =>acc+(item === discountedItem? item.quantity * item.price*0.9 :item.quantity * item.price),0)
}



const getData = async (url, renderFc) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderFc(data);    
  } catch (error) {
    console.error(error);
  }
};
 
 
 
const url ="https://raw.githubusercontent.com/mkatay/json_products/refs/heads/main/products";