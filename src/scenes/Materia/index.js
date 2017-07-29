import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSubjects, submitSubject} from './../Materia/redux/actions'
import Loading from './../../components/Loading'
import FormSubmit from './components/FormSubmit'
import SubjectCards from './components/SubjectCards'
class Materia extends Component {
  componentDidMount () {
    this.props.getSubjects()
  }
  render () {
    let {error, list, submiting} = this.props.subject
    let {submitSubject, teachers} = this.props
    if (submiting) {
      return <Loading m='Cargando Materias' />
    }
    return (
      <div>
        <FormSubmit
          error={error}
          submitSubject={submitSubject}
        />
        <SubjectCards
          list={list}
          teachers={teachers}
        />
      </div>
    )
  }

}
const mapStateToProps = (state) => ({
  subject: state.subject
})
const mapDispatchToProps = (dispatch) => ({
  submitSubject: (data) => dispatch(submitSubject(data)),
  getSubjects: () => dispatch(getSubjects())
})
export default connect(mapStateToProps, mapDispatchToProps)(Materia)
