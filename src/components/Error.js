import React, { Component } from 'react'
import {Message, Container, Icon} from 'semantic-ui-react'

class Error extends Component {

  render () {
    return (
      <Container>
        <Message negative icon>
          <Icon name='frown' />
          <Message.Content>
            <Message.Header>{this.props.title}</Message.Header>
            <p>{this.props.m}</p>
          </Message.Content>
        </Message>
      </Container>
    )
  }

}

export default Error
