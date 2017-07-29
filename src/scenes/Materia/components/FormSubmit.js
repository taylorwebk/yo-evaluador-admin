import React, { Component } from 'react'
import {Container, Form, Grid, Button, Message} from 'semantic-ui-react'
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
    const {error} = this.props
    const {des, sigla} = this.state
    let m = null
    if (error) {
      m = <Message negative>
        <Message.Header>Algo salió mal :(</Message.Header>
        <p>Hubo un error al registrar la materia, intenta de nuevo por favor.</p>
      </Message>
    }
    return (
      <Container textAlign='left'>
        <Grid stackable container columns={1}>
          <Grid.Row>
            <Grid.Column stretched>
              {m}
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
