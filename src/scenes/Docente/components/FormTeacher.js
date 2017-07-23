import React, { Component } from 'react'
import {Container, Form, Button, Icon, Modal, Header} from 'semantic-ui-react'

import Error from './../../../components/Error'
import ListTeacher from './ListTeacher'
class FormTeacher extends Component {
  constructor (args) {
    super(args)
    this.state = {
      actual: {
        nombre: '',
        codigo: ''
      },
      showModal: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e, {name, value}) {
    this.setState({
      actual: Object.assign({}, this.state.actual, {[name]: value})
    })
  }
  handleSave (e) {
    let duplicate = this.props.teachersToSend.filter((t) => (
      (t.codigo === this.state.actual.codigo)
    ))
    if (duplicate.length === 0) {
      const no = Object.assign({}, this.state.actual)
      this.props.addTeacher(no)
      this.setState({
        actual: {
          nombre: '',
          codigo: ''
        }
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
    this.props.submitTeachers({docentes: this.props.teachersToSend})
  }
  render () {
    // console.log(this.state.actual, this.props.teachersToSend)
    if (!this.props.show) {
      return null
    } if (this.props.error) {
      return <Container>
        <Error title='Error' m='Hubo un erro al enviar los datos.' />
        <br />
        <Button color='orange' onClick={this.handleSubmit}>Intentar de nuevo</Button>
        <Button color='teal' onClick={this.props.reset}>Volver</Button>
      </Container>
    }
    const {nombre, codigo} = this.state.actual
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
            <p>El CI ingresado ya está guardado.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleModal} inverted>
              <Icon name='checkmark' /> Ok
            </Button>
          </Modal.Actions>
        </Modal>
        <Form size='small' onSubmit={this.handleSave}>
          <Form.Group>
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
              name='codigo'
              value={codigo}
              onChange={this.handleChange}
              label='C.I.:'
              placeholder='Carnet'
              type='number'
              width={8}
              required
              error={codigo === ''}
            />
            <Button floated='right' compact color='google plus' icon>
              <Icon name='list ul' />
              Guardar
            </Button>
          </Form.Group>
        </Form>
        <ListTeacher
          handleSubmit={this.handleSubmit}
          teachers={this.props.teachersToSend}
        />
      </Container>
    )
  }

}

export default FormTeacher
