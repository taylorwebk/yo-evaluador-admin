import React, { Component } from 'react'
import {Icon, Step, Container, Message, Grid} from 'semantic-ui-react'
import FormStudent from './FormStudent'
import Loading from './../../../components/Loading'
class AddStudent extends Component {
  constructor (args) {
    super(args)
    this.state = {
      active: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      active: !this.state.active
    })
  }
  render () {
    if (this.props.studentSubmit === 'enviando') {
      return <Loading m='Enviando Estudiantes' />
    }
    const {submitStudents, studentSubmit} = this.props
    const {active} = this.state
    return (
      <Container textAlign='left'>
        <Grid container stackable columns={2}>
          <Grid.Row>
            <Grid.Column stretched>
              <Step.Group vertical>
                <Step active={active} onClick={this.handleClick}>
                  <Icon color={active ? 'blue' : 'black'} name='user plus' />
                  <Step.Content>
                    <Step.Title>Nuevo Estudiante</Step.Title>
                    <Step.Description>
                      Registre uno o varios estudiantes.
                    </Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
            <Grid.Column>
              <Message color='orange' attached hidden={!active}>
                <Message.Header>Instrucciones:</Message.Header>
                <Message.Item>
                  Llenar el formulario.
                </Message.Item>
                <Message.Item>
                  Click en <b>Guardar</b> y repetir.
                </Message.Item>
                <Message.Item>
                   Para <b>enviar</b> click en <Icon name='save' size='small' circular color='orange' inverted />.
                </Message.Item>
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid container columns={1}>
          <Grid.Row>
            <Grid.Column>
              <FormStudent studentSubmit={studentSubmit} submitStudents={submitStudents} show={active} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}

export default AddStudent
