import React, { Component } from 'react'
import {Container, Header, Icon} from 'semantic-ui-react'
import {Route} from 'react-router-dom'

import Fade from './../../../components/Animations/Fade'
import Materia from './../../Materia'
import Docente from './../../Docente'
import Estudiante from './../../Estudiante'
import Clase from './../../Clase'
class Body extends Component {

  render () {
    const {url} = this.props
    const {students, teachers} = this.props.data.content
    return (
      <Container textAlign='center'>
        <Route path={`${url}/materia`} render={props => (
          <Fade>
            <Materia teachers={teachers} {...props} />
          </Fade>
        )} />
        <Route path={`${url}/docente`} render={props => (
          <Fade>
            <Docente teachers={teachers} {...props} />
          </Fade>
        )} />
        <Route path={`${url}/estudiante`} render={props => (
          <Fade>
            <Estudiante students={students} {...props} />
          </Fade>
        )} />
        <Route path={`${url}/clase/:id`} render={props => (
          <Fade>
            <Clase students={students} {...props} />
          </Fade>
        )} />
        <Route exact path={`${url}`} render={() => (
          <Header color='orange' as='h2' icon>
            <br />
            <Icon name='settings' />
            Panel de Adminstraci&oacute;n
            <Header.Subheader>
              Desde ac&aacute; podr&aacute; adminsitrar Materias, Docentes y Estudiantes.
            </Header.Subheader>
          </Header>
        )} />
      </Container>
    )
  }

}

export default Body
