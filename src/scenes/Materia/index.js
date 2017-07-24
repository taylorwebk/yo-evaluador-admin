import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSubjects, submitSubject} from './../Materia/redux/actions'
import Loading from './../../components/Loading'
import FormSubmit from './components/FormSubmit'
class Materia extends Component {
  componentDidMount () {
    this.props.getSubjects()
  }
  render () {
    let {erro, list, responseSubmit, submiting} = this.props.subject
    let {submitSubject} = this.props
    if (submiting) {
      return <Loading m='Cargando Materias' />
    }
    console.log(this.props)
    return (
      <div>
        <FormSubmit
          submitSubject={submitSubject}
        />
        hola materai
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
