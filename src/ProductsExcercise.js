import logo from './logo.svg';
import './App.css';

function ProductsExcercise() {
  const products = [{ name: "Jeans", price: 12 }, { name: "shirt", price: 10 }];
  let filteredProducts = [];
  const discount = 10;
  filteredProducts = products.filter(product => product.name == "Jeans")

  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum = sum + products[i].price;
  }
  let discountedPrice = sum - discount;
  return (
    <>
    <h1>Product Excercise</h1>
      <h1>Products</h1>
      {products.map(product => <li>{product.name}</li>)}
      <h2>Filtered Products</h2>
      {filteredProducts.map(product => <li>{product.name}</li>)}
      <h2>Sum</h2>
      {sum}
      <h2> Discounted Price</h2>
      {discountedPrice}
    </>
  );
}

export default ProductsExcercise;
