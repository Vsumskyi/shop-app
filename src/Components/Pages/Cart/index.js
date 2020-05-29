import {connect} from 'react-redux'
import {CartComponent} from './Cart'
import {countPricesAction} from 'Redux/Actions/cart'

const mapStateToProps = (state) => {
   return {
   cartItems: state.cart.cartItems,
   price: state.cart.prices
}}

const actions = {
  countPrice: countPricesAction
}


export const Cart = connect(mapStateToProps, actions)(CartComponent)