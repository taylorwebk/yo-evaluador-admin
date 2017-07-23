import React, { Component } from 'react'
import {Table, Button, Container, Popup} from 'semantic-ui-react'
class ListTeacher extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.teachers === nextProps.teachers) {
      return false
    } else {
      return true
    }
  }
  render () {
    if (this.props.teachers.length === 0) {
      return null
    }
    const rows = this.props.teachers.map((t, i) => {
      return <Table.Row key={i}>
        <Table.Cell>{t.nombre}</Table.Cell>
        <Table.Cell>{t.codigo}</Table.Cell>
      </Table.Row>
    })
    return (
      <Container>
        <br />
        <Table color='green' compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nombre</Table.HeaderCell>
              <Table.HeaderCell>C&eacute;dula</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
        <Popup
          trigger={
            <Button onClick={this.props.handleSubmit} style={{position: 'fixed', top: '220px', right: '22px'}} size='huge' color='orange' circular icon='save' floated='right' />
          }
          content='Enviar lista al servidor.'
          inverted
        />
      </Container>
    )
  }

}

export default ListTeacher
