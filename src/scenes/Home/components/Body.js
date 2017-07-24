import React, { Component } from 'react'
import {Container, Header, Icon, Button, Input, Dimmer} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import C from './../../../components/Colors'
import ClickEffect from './../../../components/Animations/ClickEffect'
class Body extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      show: false
    }
    this.handleDimmer = this.handleDimmer.bind(this)
    this.login = this.login.bind(this)
  }
  handleDimmer () {
    this.setState({
      show: !this.state.show
    })
  }
  login () {
    let clave = document.getElementById('clave').value
    if (clave === 'redux') {
      this.props.history.push('/main')
    } else {
      this.handleDimmer()
    }
  }
  render () {
    return (
      <Container textAlign='center'>
        <Header as='h2' icon>
          <Icon style={{color: C.green2}} name='student' />
          <span style={{color: C.green3}}>Sistema de Evaluaci&oacute;n Docente</span>
          <br />
          <Header.Subheader>
            <span>
              <br />
              Evaluación docente... por que los estudiantes también debemos calificar.
            </span>
          </Header.Subheader>
        </Header>
        <Container textAlign='center'>
          <Input id='clave' type='password' icon='key' iconPosition='left' placeholder='Clave...' />
          <br />
          <br />
          <ClickEffect>
            <Button color='teal' size='huge' onClick={this.login}>
              Iniciar
              <Icon name='angle double right' />
            </Button>
          </ClickEffect>
        </Container>
        <Dimmer
          active={this.state.show}
          onClickOutside={this.handleDimmer}
          page
        >
          <Header color='red' as='h2' icon inverted>
            <Icon color='red' name='exclamation triangle' />
            Clave Incorrecta
            <Header.Subheader>La clave de acceso es incorrecta, pruebe de nuevo.</Header.Subheader>
          </Header>
        </Dimmer>
      </Container>
    )
  }

}
export default withRouter(Body)
