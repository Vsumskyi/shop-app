import {connect} from 'react-redux'
import {ProductCounterComponent} from './ProductCounter'
import { plusProductAction, 
         minusProductAction,
         deleteProductAction} from 'Redux/Actions/cart'

const actions = {
  plusProduct: plusProductAction,
  minusProduct: minusProductAction,
  deleteProduct: deleteProductAction,
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
 }
}

export const ProductCounter = connect(mapStateToProps, actions)(ProductCounterComponent)