import {
   SET_OPEN_SIDEBAR,
} from '../types'

export default (state, action) => {
   switch (action.type) {
      case SET_OPEN_SIDEBAR:
         return {
            ...state,
            isOpen: !state.isOpen
         }
         default:
            return state
   }
}