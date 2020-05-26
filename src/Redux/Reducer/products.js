import { SELECT_PRODUCT, DELETE_PRODUCT } from "../Actions/actionsTypes"
import {createReducer} from 'Helpers/reducer'

const initialState = {
  data: [
    {
       id: 1,
       name: "шарик",
       image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
       price: 15,
       count: 1
    },
    {
       id: 2,
       name: "футболка",
       image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
       price: 15,
       count: 1
    },
    {
       id: 4,
       name: "шарик 2",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
       price: 15,
       count: 1
    },
  ],
  selectedProduct: null
}


const products = {
  [SELECT_PRODUCT]: (state = initialState, action) => {
    return {
      ...state,
      data: state.data.map(i => {
        if (i.id === action.product.id ) i.inCart = true
        return i
      }),
      selectedProduct: action.product,
    }
  },
  [DELETE_PRODUCT]: (state = initialState, action) => {
      return {
        ...state,
        data: state.data.map(i => {
          if (i.id === action.id ) i.inCart = false
          return i
        })
      }
  }
}
export default createReducer(initialState, products)


