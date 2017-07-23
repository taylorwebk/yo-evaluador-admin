import React, { Component } from 'react'
import {connect} from 'react-redux'

import {submitTeachers} from './redux/submitTeachers'
import {addTeacher, reset} from './redux/actions'

import AddTeacherComp from './components/AddTeacherComp'
import ServerTeacherComp from './components/ServerTeacherComp'
class Docente extends Component {
  constructor (args) {
    super(args)
    this.state = {
      teachers: this.props.teachers
    }
  }
  render () {
    const {error, responseSubmit, teachersToSend, submiting} = this.props.teacher
    const {submitTeachers, addTeacher, teachers, reset} = this.props
    return (
      <div>
        <AddTeacherComp
          error={error}
          submiting={submiting}
          teachersToSend={teachersToSend}
          responseSubmit={responseSubmit}
          addTeacher={addTeacher}
          submitTeachers={submitTeachers}
          reset={reset}
        />
        <ServerTeacherComp teachers={teachers} />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  teacher: state.teacher
})
const mapDispatchToProps = (dispatch) => ({
  submitTeachers: (data) => dispatch(submitTeachers(data)),
  addTeacher: (teacher) => dispatch(addTeacher(teacher)),
  reset: () => dispatch(reset())
})
export default connect(mapStateToProps, mapDispatchToProps)(Docente)
