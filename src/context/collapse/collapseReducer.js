import {
   SET_COLLAPSE_INGREDIENTS,
   SET_COLLAPSE_STOCK,
   SET_COLLAPSE_PRODUCT,
   SET_COLLAPSE_NEXT_PRODUCT
} from '../types'

export default (state, action) => {
   switch (action.type) {
      case SET_COLLAPSE_INGREDIENTS:
         return {
            ...state,
            ingredients: !state.ingredients
         }
         case SET_COLLAPSE_STOCK:
            return {
               ...state,
               stock: !state.stock
            }
            case SET_COLLAPSE_PRODUCT:
               return {
                  ...state,
                  product: !state.product
               }
               case SET_COLLAPSE_NEXT_PRODUCT:
                  return {
                     ...state,
                     nextProduct: !state.nextProduct
                  }
                  default:
                     return state
   }
}