import {
  SET_ADDRESS,
  SET_MINT_DATA,
  SET_CONFIRM_TRANSACTION,
  SET_MINT_TRANSACTION,
} from '../utils/actions'

  const main_reducer = (state , action) => {

    switch (action.type) {
      case SET_ADDRESS:
        return { ...state, address: action.payload }
      case SET_MINT_DATA:
        return { ...state, mintDetails: action.payload }
      case SET_CONFIRM_TRANSACTION:
        return { ...state, isConfirmed: action.payload }
      case SET_MINT_TRANSACTION:
        return { ...state, mintTransaction: action.payload }

      default:
        return state
      //throw new Error(`No Matching "${action.type}" - action type`)
    }
  }

  export default main_reducer