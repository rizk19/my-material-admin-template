import React, {
   useReducer
} from 'react'
import CollapseContext from './collapseContext'
import collapseReducer from './collapseReducer'
import {
   SET_COLLAPSE_INGREDIENTS,
   SET_COLLAPSE_STOCK,
   SET_COLLAPSE_PRODUCT,
   SET_COLLAPSE_NEXT_PRODUCT
} from '../types'

const CollapseState = props => {
   const initialState = {
      ingredients: false,
      stock: false,
      product: false,
      nextProduct: false,
   }

   const [state, dispatch] = useReducer(collapseReducer, initialState)

   const setCollapseIngredients = () =>
      dispatch({
         type: SET_COLLAPSE_INGREDIENTS,
      })

   const setCollapseStock = () =>
      dispatch({
         type: SET_COLLAPSE_STOCK,
      })

   const setCollapseProduct = () =>
      dispatch({
         type: SET_COLLAPSE_PRODUCT,
      })

      const setCollapseNextProduct = () =>
      dispatch({
         type: SET_COLLAPSE_NEXT_PRODUCT,
      })

   return ( <CollapseContext.Provider
            value = {{
               collapseIngredients: state.ingredients,
               collapseStock: state.stock,
               collapseProduct: state.product,
               collapseNextProduct: state.nextProduct,
               setCollapseIngredients,
               setCollapseStock,
               setCollapseProduct,
               setCollapseNextProduct
            }}>
               { props.children }
            </CollapseContext.Provider>
   )
}

export default CollapseState