import {RECEIVE_DATA, ERROR_DATA} from './constants'
export const data = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data
    case ERROR_DATA:
      return null
    default:
      return state
  }
}
