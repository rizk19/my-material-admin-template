import React, {
   useReducer
} from 'react'
import CollapseContext from './collapseContext'
import collapseReducer from './collapseReducer'
import {
   SET_COLLAPSE_RAW_INGREDIENTS,
   SET_COLLAPSE_PKG_INGREDIENTS,
   SET_COLLAPSE_RAW_STOCK,
   SET_COLLAPSE_PKG_STOCK,
   SET_COLLAPSE_PRODUCT,
   SET_COLLAPSE_NEXT_PRODUCT
} from '../types'

const CollapseState = props => {
   const initialState = {
      rawIngredients: false,
      pkgIngredients: false,
      rawStock: false,
      pkgStock: false,
      product: false,
      nextProduct: false,
   }

   const [state, dispatch] = useReducer(collapseReducer, initialState)

   const setCollapseRawIngredients = () =>
      dispatch({
         type: SET_COLLAPSE_RAW_INGREDIENTS,
      })

   const setCollapsePkgIngredients = () =>
      dispatch({
         type: SET_COLLAPSE_PKG_INGREDIENTS,
      })

   const setCollapseRawStock = () =>
      dispatch({
         type: SET_COLLAPSE_RAW_STOCK,
      })

   const setCollapsePkgStock = () =>
      dispatch({
         type: SET_COLLAPSE_PKG_STOCK,
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
               collapseRawIngredients: state.rawIngredients,
               collapsePkgIngredients: state.pkgIngredients,
               collapseRawStock: state.rawStock,
               collapsePkgStock: state.pkgStock,
               collapseProduct: state.product,
               collapseNextProduct: state.nextProduct,
               setCollapseRawIngredients,
               setCollapsePkgIngredients,
               setCollapseRawStock,
               setCollapsePkgStock,
               setCollapseProduct,
               setCollapseNextProduct
            }}>
               { props.children }
            </CollapseContext.Provider>
   )
}

export default CollapseState