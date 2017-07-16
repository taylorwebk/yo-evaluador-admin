import React, { Component } from 'react'
import {Menu, Icon} from 'semantic-ui-react'
class Header extends Component {

  render () {
    return (
      <Menu inverted color='green' widths={3}>
        <Menu.Item>
          <Icon name='pencil' size='large' />
          <b>
              Yo Evaluador Admin
          </b>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header
