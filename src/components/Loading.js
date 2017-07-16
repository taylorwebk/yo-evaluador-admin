import React, {Component} from 'react'
import {Container, Dimmer, Loader} from 'semantic-ui-react'
class Loading extends Component {
  render () {
    return (
      <Container fluid>
        <Dimmer active inverted>
          <Loader size='large'>
            <b>
              {this.props.m}
            </b>
          </Loader>
        </Dimmer>
      </Container>
    )
  }
}

export default Loading
