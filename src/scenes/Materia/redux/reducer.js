import A from './constants'
const initialState = {
  list: [],
  responseSubmit: {},
  submiting: false,
  error: false
}
export const subject = (state = initialState, action) => {
  switch (action.type) {
    case A.SUBMIT_SUBJECT_BEGIN:
    case A.REQUEST_SUBJECTS:
    case A.SUBMIT_CLASS_BEGIN:
      return Object.assign({}, state, {submiting: true})
    case A.RECEIVE_SUBJECTS:
      return Object.assign(
        {},
        state,
        {submiting: false, error: false, list: action.data}
      )
    case A.SUBMIT_SUBJECT_SUCCESS:
      return Object.assign({}, state, {
        submiting: false,
        error: false,
        list: action.data
      })
    case A.SUBMIT_SUBJECT_ERROR:
      return Object.assign({}, state, {
        submiting: false,
        error: true,
        responseSubmit: action.err
      })
    default:
      return state
  }
}
