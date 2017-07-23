import {
  submitTeacherBegin,
  submitTeacherSuccess,
  submitTeacherFail
} from './actions'
import POST from './../../../services/POST'
export function submitTeachers (data) {
  return (dispatch) => {
    dispatch(submitTeacherBegin())
    POST.teachers(data).then(
      (res) => {
        if (res.status === 'success') {
          return dispatch(submitTeacherSuccess(res))
        } else {
          return dispatch(submitTeacherFail())
        }
      }
    ).catch(
      () => dispatch(submitTeacherFail())
    )
  }
}
