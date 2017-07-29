import React, { Component } from 'react'
import Select from 'react-select'
import {Grid, Input, Button} from 'semantic-ui-react'
import Appear from './../../../components/Animations/Appear'
import 'react-select/dist/react-select.min.css'
class ClassForm extends Component {
  constructor (args) {
    super(args)
    this.state = {
      docenteid: '',
      materiaid: this.props.subjectId,
      paralelo: '',
      aula: ''
    }
    this.paralelo = [
      {label: 'A', value: 'A'},
      {label: 'B', value: 'B'},
      {label: 'C', value: 'C'},
      {label: 'D', value: 'D'},
      {label: 'E', value: 'E'},
      {label: 'F', value: 'F'},
      {label: 'G', value: 'G'},
      {label: 'H', value: 'H'}
    ]
    this.changeDocente = this.changeDocente.bind(this)
    this.changeParalelo = this.changeParalelo.bind(this)
    this.changeClassRoom = this.changeClassRoom.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  changeDocente (id) {
    this.setState({
      docenteid: id
    })
  }
  changeParalelo (id) {
    this.setState({
      paralelo: id
    })
  }
  changeClassRoom (e, {value}) {
    this.setState({
      aula: value
    })
  }
  handleSubmit () {
    console.log(this.state)
  }
  render () {
    const {color} = this.props
    const {aula} = this.state
    return (
      <Appear>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Select
                simpleValue
                placeholder='Docente'
                options={this.props.options}
                onChange={this.changeDocente}
                value={this.state.docenteid}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Select
                simpleValue
                placeholder='Paralelo'
                options={this.paralelo}
                onChange={this.changeParalelo}
                value={this.state.paralelo}
              />
            </Grid.Column>
            <Grid.Column>
              <Input
                value={aula}
                onChange={this.changeClassRoom}
                placeholder='Aula'
                fluid />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.handleSubmit} color={color} fluid>
                Registrar Paralelo
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Appear>
    )
  }

}

export default ClassForm
