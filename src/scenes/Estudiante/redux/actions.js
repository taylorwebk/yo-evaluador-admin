import {
  SUBMIT_STUDENTS_BEGIN,
  SUBMIT_STUDENTS_SUCCESS,
  SUBMIT_STUDENTS_FAIL,
  SUBMIT_STUDENTS_RESET
} from './constants'
export function submitStudentsBegin () {
  return {
    type: SUBMIT_STUDENTS_BEGIN
  }
}
export function submitStudentsSuccess (res) {
  return {
    type: SUBMIT_STUDENTS_SUCCESS,
    res
  }
}
export function submitStudentsFail () {
  return {
    type: SUBMIT_STUDENTS_FAIL
  }
}
export function submitStudentsReset () {
  return {
    type: SUBMIT_STUDENTS_RESET
  }
}
