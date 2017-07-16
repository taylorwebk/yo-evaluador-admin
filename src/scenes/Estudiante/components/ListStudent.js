import React, { Component } from 'react'
import {Table, Button, Container, Popup} from 'semantic-ui-react'
class ListStudent extends Component {
  constructor (args) {
    super(args)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit () {
    this.props.handleSubmit()
  }
  render () {
    if (this.props.students.length === 0) {
      return null
    }
    const rows = this.props.students.map((student, i) => {
      return <Table.Row key={i}>
        <Table.Cell>{student.nombre}</Table.Cell>
        <Table.Cell>{student.ci}</Table.Cell>
        <Table.Cell>{student.ru}</Table.Cell>
      </Table.Row>
    })
    return (
      <Container>
        <br />
        <Table color='orange' compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nombre</Table.HeaderCell>
              <Table.HeaderCell>C&eacute;dula</Table.HeaderCell>
              <Table.HeaderCell>
                Matr&iacute;cula
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
        <Popup
          trigger={
            <Button onClick={this.handleSubmit} style={{position: 'fixed', top: '220px', right: '22px'}} size='huge' color='orange' circular icon='save' floated='right' />
          }
          content='Enviar lista al servidor.'
          inverted
        />
      </Container>
    )
  }

}

export default ListStudent
