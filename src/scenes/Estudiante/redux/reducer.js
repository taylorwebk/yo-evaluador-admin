import {
  SUBMIT_STUDENTS_BEGIN,
  SUBMIT_STUDENTS_SUCCESS,
  SUBMIT_STUDENTS_FAIL,
  SUBMIT_STUDENTS_RESET
} from './constants'
export const studentSubmit = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_STUDENTS_RESET:
      return {}
    case SUBMIT_STUDENTS_BEGIN:
      return 'enviando'
    case SUBMIT_STUDENTS_SUCCESS:
      return action.res
    case SUBMIT_STUDENTS_FAIL:
      return 'fail'
    default:
      return state
  }
}
