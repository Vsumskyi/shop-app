import { connect } from 'react-redux'
import { SortInputComponent } from './SortInput'
import { sortProductsAction } from 'Redux/Actions/products'

const actions = {
  sortProducts: sortProductsAction
}

const mapStateToProps = state => {
  return {
    sortBy: state.products.sortBy,
    sortDir: state.products.sortAscending
  }
}

export const SortInput = connect(mapStateToProps, actions)(SortInputComponent)
