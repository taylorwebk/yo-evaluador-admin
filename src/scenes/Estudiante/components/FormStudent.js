import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form, Container, Button, Icon, Modal, Header} from 'semantic-ui-react'
import {reset} from './../redux/submitStudents'
import ListStudent from './ListStudent'
import Error from './../../../components/Error'
class FormStudent extends Component {
  constructor (args) {
    super(args)
    this.state = {
      actual: {
        nombre: '',
        ci: '',
        ru: ''
      },
      estudiantes: [],
      showModal: false
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e, {name, value}) {
    this.setState({
      actual: Object.assign({}, this.state.actual, {[name]: value})
    })
  }
  handleSave (e) {
    let duplicate = this.state.estudiantes.filter((e) => (
      (e.ci === this.state.actual.ci || e.ru === this.state.actual.ru)
    ))
    if (duplicate.length === 0) {
      const no = Object.assign({}, this.state.actual)
      this.setState({
        actual: {
          nombre: '',
          ci: '',
          ru: ''
        },
        estudiantes: this.state.estudiantes.concat([no])
      })
    } else {
      this.handleModal()
    }
  }
  handleModal () {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  handleSubmit () {
    let data = {
      estudiantes: this.state.estudiantes
    }
    this.props.submitStudents(data)
  }
  render () {
    if (!this.props.show) {
      return null
    }
    if (this.props.studentSubmit === 'fail') {
      return <Container>
        <Error title='Error' m='Ocurrio un error enviando datos' />
        <Button color='orange' onClick={this.props.reset}>
          Volver
        </Button>
      </Container>
    }
    const {nombre, ci, ru} = this.state.actual
    const {showModal} = this.state
    return (
      <Container>
        <Modal
          open={showModal}
          onClose={this.handleModal}
          basic
          size='small'
        >
          <Header icon='warning' content='Duplicado' />
          <Modal.Content>
            <p>El CI o RU ingresado ya está guardado.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleModal} inverted>
              <Icon name='checkmark' /> Ok
            </Button>
          </Modal.Actions>
        </Modal>
        <Form size='small' onSubmit={this.handleSave}>
          <Form.Group widths='equal'>
            <Form.Input
              name='nombre'
              value={nombre}
              onChange={this.handleChange}
              label='Nombre:'
              placeholder='Nombre Completo'
              width={8}
              required
              error={nombre === ''}
              autoFocus
            />
            <Form.Input
              name='ci'
              value={ci}
              onChange={this.handleChange}
              label='C.I.:'
              placeholder='Carnet'
              type='number'
              width={4}
              required
              error={ci === ''}
            />
            <Form.Input
              name='ru'
              value={ru}
              onChange={this.handleChange}
              label='R.U.:'
              placeholder='Matricula'
              type='number'
              width={4}
              required
              error={ru === ''}
            />
          </Form.Group>
          <Button color='google plus' icon>
            <Icon name='list ul' />
            Guardar
          </Button>
        </Form>
        <ListStudent handleSubmit={this.handleSubmit} students={this.state.estudiantes} />
      </Container>
    )
  }

}
const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(reset())
})
export default connect(null, mapDispatchToProps)(FormStudent)
