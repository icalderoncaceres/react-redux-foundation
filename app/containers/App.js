import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


/* Creacte class */
export default class App extends React.Component {
  constructor() {
    super();
  }

  /* Render  */
  render(){
    /* Rerturn render */
    return (
      <div>
        <h2>Shopping cart</h2>
        <hr />
        <ProductsContainer />
        <hr />
        <CartContainer />
      </div>
    );
  }
}
