import {
  submitStudentsBegin,
  submitStudentsSuccess,
  submitStudentsFail,
  submitStudentsReset
} from './actions'
import POST from './../../../services/POST'
export function submitStudents (data) {
  return (dispatch) => {
    dispatch(submitStudentsBegin())
    POST.students(data).then(
      (res) => {
        if (res.status === 'success') {
          return dispatch(submitStudentsSuccess(res))
        } else {
          return dispatch(submitStudentsFail())
        }
      }
    ).catch(
      () => dispatch(submitStudentsFail())
    )
  }
}
export function reset () {
  return submitStudentsReset()
}
