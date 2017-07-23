import {
  SUBMIT_TEACHER_BEGIN,
  SUBMIT_TEACHER_SUCCESS,
  SUBMIT_TEACHER_FAIL,
  ADD_TEACHER,
  REMOVE_TEACHER,
  RESET_TEACHER
} from './constants'
export function submitTeacherBegin () {
  return {
    type: SUBMIT_TEACHER_BEGIN,
    payload: {
      submiting: true
    }
  }
}
export function submitTeacherSuccess (data) {
  return {
    type: SUBMIT_TEACHER_SUCCESS,
    payload: {
      responseSubmit: data
    }
  }
}
export function submitTeacherFail () {
  return {
    type: SUBMIT_TEACHER_FAIL,
    payload: {
      error: true
    }
  }
}
export function addTeacher (teacher) {
  return {
    type: ADD_TEACHER,
    payload: {
      teachersToSend: [teacher]
    }
  }
}
export function removerTeacher (id) {
  return {
    type: REMOVE_TEACHER,
    payload: id
  }
}
export function reset () {
  return {
    type: RESET_TEACHER,
    payload: {
      teachersToSend: [],
      responseSubmit: {},
      submiting: false,
      error: false
    }
  }
}
