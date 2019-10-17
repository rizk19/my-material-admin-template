import React, {
   useReducer
} from 'react'
import OpenSidebarContext from './openSidebarContext'
import openSidebarReducer from './openSidebarReducer'
import {
   SET_OPEN_SIDEBAR,
} from '../types'

const OpenSidebarState = props => {
   const initialState = {
      isOpen: true,
   }

   const [state, dispatch] = useReducer(openSidebarReducer, initialState)

   const setOpenSidebar = () =>
      dispatch({
         type: SET_OPEN_SIDEBAR,
      })

   return ( <OpenSidebarContext.Provider
            value = {{
               sidebarOpen: state.isOpen,
               setOpenSidebar,
            }}>
               { props.children }
            </OpenSidebarContext.Provider>
   )
}

export default OpenSidebarState