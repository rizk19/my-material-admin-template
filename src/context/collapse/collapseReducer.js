import {
   SET_COLLAPSE_RAW_INGREDIENTS,
   SET_COLLAPSE_PKG_INGREDIENTS,
   SET_COLLAPSE_RAW_STOCK,
   SET_COLLAPSE_PKG_STOCK,
   SET_COLLAPSE_PRODUCT,
   SET_COLLAPSE_NEXT_PRODUCT
} from '../types'

export default (state, action) => {
   switch (action.type) {
      case SET_COLLAPSE_RAW_INGREDIENTS:
         return {
            ...state,
            rawIngredients: !state.rawIngredients
         }
         case SET_COLLAPSE_PKG_INGREDIENTS:
            return {
               ...state,
               pkgIngredients: !state.pkgIngredients
            }
            case SET_COLLAPSE_RAW_STOCK:
               return {
                  ...state,
                  rawStock: !state.rawStock
               }
               case SET_COLLAPSE_PKG_STOCK:
                  return {
                     ...state,
                     pkgStock: !state.pkgStock
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