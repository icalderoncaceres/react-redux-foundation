import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'


/* Products  */
class ProductsContainer extends React.Component {
  /* Container products */
  constructor() {
    super();
  }

  componentWillReceiveProps(){
    this.setState({
      products: this.props.products,
      addToCart: this.props.addToCart
    })
  }

  /* render */
  render(){
    var products = this.props.products;
    var addToCart = this.props.addToCart;
    /* render props */
    return (
      <ProductsList title="Products">
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </ProductsList>
    );
  }
}

/* class */
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

/* Export  */
const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});


export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
