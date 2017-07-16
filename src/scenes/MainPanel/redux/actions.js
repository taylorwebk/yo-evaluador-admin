import {REQUEST_DATA, RECEIVE_DATA, ERROR_DATA} from './constants'
export function fetchDataBegin () {
  return {
    type: REQUEST_DATA
  }
}
export function fetchDataEnd (data) {
  return {
    type: RECEIVE_DATA,
    data
  }
}
export function fetchDataError () {
  return {
    type: ERROR_DATA
  }
}
