import React, { Component } from 'react'
import {Container, Input, Popup, Menu, Grid, Message} from 'semantic-ui-react'
import TableStudents from './TableStudents'
class ListServerStudent extends Component {
  constructor (args) {
    super(args)
    this.state = {
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch (e, {value}) {
    this.setState({
      search: value
    })
  }
  render () {
    const {search} = this.state
    return (
      <Container textAlign='left'>
        <Grid container columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Menu color='blue' inverted>
                <Menu.Item header>
                  Estudiantes Registrados
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Popup
                      trigger={
                        <Input
                          icon='search'
                          value={search}
                          iconPosition='left'
                          placeholder='Buscar Estudiantes'
                          onChange={this.handleSearch}
                        />
                      }
                      header='Búsqueda de estudiantes'
                      content='Puedes buscar por CI, RU o nombre'
                      on='focus'
                    />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {search.length > 0 &&
                <Message success>
                  <p>Resultados de: <b>{search}</b>.</p>
                </Message>
              }
              <TableStudents students={this.props.students} search={search} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}

export default ListServerStudent
