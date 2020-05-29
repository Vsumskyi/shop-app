import { connect } from 'react-redux'
import { HomeComponent } from './Home'
import { selectProductAction, getProductsAction } from 'Redux/Actions/products'

const actions = {
	selectProduct: selectProductAction,
	getProducts: getProductsAction
}

const mapStateToProps = state => {
	return {
		cardList: state.products.data,
		loading: state.products.isLoaded
	}
}

export const Home = connect(mapStateToProps, actions)(HomeComponent)
