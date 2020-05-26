import { SELECT_PRODUCT} from "./actionsTypes"

export const selectProductAction = product => ({
  type: SELECT_PRODUCT,
  product
})

