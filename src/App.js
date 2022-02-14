import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component { 

  constructor() {
    super();
    this.state ={
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                price: 990,
                title: 'Landline Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZGxpbmUlMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                id: 2
            },
            {
                price: 9989,
                title: 'Laptop',
                qty: 5,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
    console.log('Hey plz inc the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })
}
  handleDecreaseQuantity = (product) => {
      console.log('Dec qty of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0)
      {
          return;
      }
      products[index].qty -= 1;
      this.setState({
          products: products
      })
  }
  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item) => item.id !== id);  //it will return a new array [{}]

      this.setState({
          products : items
      })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count+=product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  }

  render() {
    const {products} = this.state;
    return ( 
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <h1>Cart</h1>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />  
        <div style={ { fontSize: 20, padding: 10} }>Total: {this.getCartTotal()}</div>
      </div>  
      
    );
  }
}


export default App;
