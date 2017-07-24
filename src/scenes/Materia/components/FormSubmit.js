import React, { Component } from 'react'
import {Container, Form, Grid, Button} from 'semantic-ui-react'
class FormSubmit extends Component {
  constructor (args) {
    super(args)
    this.state = {
      des: '',
      sigla: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e, {name, value}) {
    this.setState({
      [name]: value
    })
  }
  handleSubmit () {
    this.props.submitSubject(this.state)
  }
  render () {
    const {des, sigla} = this.state
    return (
      <Container textAlign='left'>
        <Grid stackable container columns={1}>
          <Grid.Row>
            <Grid.Column stretched>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Input
                    label='Materia'
                    placeholder='Simulacion de Sistemas'
                    width={10}
                    required
                    value={des}
                    name='des'
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label='Sigla'
                    placeholder='INF-281'
                    width={6}
                    required
                    value={sigla}
                    name='sigla'
                    onChange={this.handleChange}
                  />
                  <Button color='blue' compact>Registrar <br /> Materia</Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}

export default FormSubmit
