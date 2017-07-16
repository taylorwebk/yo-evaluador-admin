import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
class HeaderAdmin extends Component {

  render () {
    const {title, active, logout, handleItemClick} = this.props
    return (
      <Menu color='orange' size='large' inverted stackable widths={5}>
        <Menu.Item icon='file text' name='materia' link active={active === 'materia'} onClick={handleItemClick} />
        <Menu.Item icon='student' name='docente' link active={active === 'docente'} onClick={handleItemClick} />
        <Menu.Item icon='users' name='estudiante' active={active === 'estudiante'} onClick={handleItemClick} />
        <Menu.Item header>{title}</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='Salir' onClick={logout} />
        </Menu.Menu>
      </Menu>
    )
  }

}

export default HeaderAdmin
