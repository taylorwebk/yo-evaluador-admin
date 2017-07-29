import A from './constants'
import POST from './../../../services/POST'
import GET from './../../../services/GET'
let requestSubjects = () => ({
  type: A.REQUEST_SUBJECTS
})
let receiveSubjects = (data) => ({
  type: A.RECEIVE_SUBJECTS,
  data
})
let submitSubjectBegin = () => ({
  type: A.SUBMIT_SUBJECT_BEGIN
})
let submitSubjectError = (err) => ({
  type: A.SUBMIT_SUBJECT_ERROR,
  err
})
let submitSubjectSuccess = (data) => ({
  type: A.SUBMIT_SUBJECT_SUCCESS,
  data
})
let submitClassBegin = () => ({
  type: A.SUBMIT_CLASS_BEGIN
})
let submitClassSuccess = (data) => ({
  type: A.SUBMIT_CLASS_SUCCESS,
  data
})
let submitClassError = (data) => ({
  type: A.SUBMIT_CLASS_ERROR,
  data
})
export const getSubjects = () => dispatch => {
  dispatch(requestSubjects())
  GET.subjects().then(
    res => { dispatch(receiveSubjects(res.content)) }
  )
}
export const submitSubject = (data) => dispatch => {
  dispatch(submitSubjectBegin())
  POST.subject(data).then(
    res => res.status === 'success'
    ? dispatch(submitSubjectSuccess(res.content))
    : dispatch(submitSubjectError(res.content))
  ).catch((e) => dispatch(submitSubjectError(e.message)))
}
export const submitClass = (data) => dispatch => {
  dispatch(submitClassBegin())
  POST.class(data).then(
    res => res.status === 'success'
    ? dispatch(submitClassSuccess(res.content))
    : dispatch(submitClassError(res.content))
  ).catch(e => dispatch(submitClassError(e.message)))
}
