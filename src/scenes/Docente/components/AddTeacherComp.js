import React, { Component } from 'react'
import {Icon, Step, Container, Message, Grid} from 'semantic-ui-react'
import FormTeacher from './FormTeacher'
import Loading from './../../../components/Loading'
class AddTeacherComp extends Component {
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
    if (this.props.submiting) {
      return <Loading m='Enviando Docentes' />
    }
    const {addTeacher, error, teachersToSend, submitTeachers, reset} = this.props
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
                    <Step.Title>Nuevo Docente</Step.Title>
                    <Step.Description>
                      Registre uno o varios docentes.
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
              <FormTeacher
                addTeacher={addTeacher}
                show={active}
                error={error}
                reset={reset}
                teachersToSend={teachersToSend}
                submitTeachers={submitTeachers}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}

export default AddTeacherComp
