import { connect } from 'react-redux'
import { HomeComponent } from './Home'
import { selectProductAction, getProductsAction } from 'Redux/Actions/products'

const actions = {
  selectProduct: selectProductAction,
  getProducts: getProductsAction
}

const sort = (data, sortBy, ascending) => {
  if (ascending) {
    return [...data].sort((a, b) => (b[sortBy] < a[sortBy] ? 1 : -1))
  } else {
    return [...data].sort((a, b) => (b[sortBy] < a[sortBy] ? -1 : 1))
  }
}

const mapStateToProps = state => {
  return {
    cardList: sort(
      state.products.data,
      state.products.sortBy,
      state.products.sortAscending
    ),
    loading: state.products.isLoaded
  }
}

export const Home = connect(mapStateToProps, actions)(HomeComponent)
