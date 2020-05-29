import {connect} from 'react-redux'
import {HomeComponent} from './Home'
import {selectProductAction} from 'Redux/Actions/products'

const actions = {
  selectProduct: selectProductAction
}

const mapStateToProps = (state) => {
  return {
  cardList: state.products.data,
}}

export const Home = connect(mapStateToProps, actions)(HomeComponent)