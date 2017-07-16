import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
class TableStudents extends Component {

  render () {
    const {students, search} = this.props
    let rows
    if (search === '') {
      rows = students
    } else {
      rows = students.filter((student) => {
        if (
          (student.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
          (student.ci.indexOf(search) !== -1) ||
          (student.ru.indexOf(search) !== -1)
        ) {
          return true
        } else {
          return false
        }
      })
    }
    rows = rows.map((student) => (
      <Table.Row key={student.id}>
        <Table.Cell>{student.nombre}</Table.Cell>
        <Table.Cell>{student.ci}</Table.Cell>
        <Table.Cell>{student.ru}</Table.Cell>
      </Table.Row>
    ))
    return (
      <Table color='blue' compact singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>C&eacute;dula</Table.HeaderCell>
            <Table.HeaderCell>Matr&iacute;cula</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
        </Table.Body>
      </Table>
    )
  }

}

export default TableStudents
