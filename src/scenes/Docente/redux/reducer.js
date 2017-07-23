import {
  SUBMIT_TEACHER_BEGIN,
  SUBMIT_TEACHER_SUCCESS,
  SUBMIT_TEACHER_FAIL,
  ADD_TEACHER,
  REMOVE_TEACHER,
  RESET_TEACHER
} from './constants'
const initialState = {
  teachersToSend: [],
  responseSubmit: {},
  submiting: false,
  error: false
}
export const teacher = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_TEACHER_BEGIN:
      return Object.assign({}, state, {submiting: true})
    case SUBMIT_TEACHER_FAIL:
      return Object.assign({}, state, {submiting: false, error: true})
    case SUBMIT_TEACHER_SUCCESS:
      return Object.assign({}, state, {teachersToSend: [], submiting: false, responseSubmit: action.payload.responseSubmit, error: false})
    case ADD_TEACHER:
      return Object.assign(
        {},
        state,
        {
          teachersToSend: state.teachersToSend.concat(action.payload.teachersToSend)
        })
    case RESET_TEACHER:
      return Object.assign({}, initialState)
    default:
      return state
  }
}
