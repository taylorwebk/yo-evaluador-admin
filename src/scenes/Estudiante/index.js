import React, { Component } from 'react'
import {connect} from 'react-redux'
import {submitStudents} from './redux/submitStudents'
import AddStudent from './components/AddStudent'
import ListServerStudent from './components/ListServerStudent'
class Estudiante extends Component {

  render () {
    const {studentSubmit, submitStudents} = this.props
    return (
      <div>
        <AddStudent studentSubmit={studentSubmit} submitStudents={submitStudents} />
        <ListServerStudent students={this.props.students} />
      </div>
    )
  }

}
const mapStateToProps = (state) => ({
  studentSubmit: state.studentSubmit
})
const mapDispatchToProps = (dispatch) => ({
  submitStudents: (data) => dispatch(submitStudents(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Estudiante)
