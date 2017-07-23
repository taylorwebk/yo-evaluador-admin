import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
class TableTeachers extends Component {

  render () {
    const {teachers, search} = this.props
    let rows
    if (search === '') {
      rows = teachers
    } else {
      rows = teachers.filter(t => {
        if (
          (t.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
          (t.cod.indexOf(search) !== -1)
        ) {
          return true
        }
        return false
      })
    }
    rows = rows.map(t => (
      <Table.Row key={t.id}>
        <Table.Cell>{t.nombre}</Table.Cell>
        <Table.Cell>{t.cod}</Table.Cell>
      </Table.Row>
    ))
    return (
      <Table color='blue' compact singleLine>
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
    )
  }

}

export default TableTeachers
