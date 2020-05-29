import {connect} from 'react-redux'
import {NavigationComponent} from './Navigation'

const mapStateToProps = state => {
  return {
   cartItemsCount: state.cart.cartItems.length
 }
}
export const Navigation = connect(mapStateToProps)(NavigationComponent)