import {fetchDataBegin, fetchDataEnd, fetchDataError} from './actions'
import GET from './../../../services/GET'
export function fetchData () {
  return (dispatch) => {
    dispatch(fetchDataBegin())
    GET.data().then(
      (data) => dispatch(fetchDataEnd(data))
    ).catch(
      () => dispatch(fetchDataError())
    )
  }
}
