import { connect } from 'react-redux'
import { NavigationComponent } from './Navigation'

const mapStateToProps = state => {
	return {
		cartItemsCount: state.cart.cartItems.length,
		loading: state.products.isLoaded
	}
}
export const Navigation = connect(mapStateToProps)(NavigationComponent)
