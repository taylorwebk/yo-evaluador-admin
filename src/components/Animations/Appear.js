import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'
const initialStyle = {
  opacity: 0,
  scale: 0.8
}
const springStyle = {
  opacity: spring(1),
  scale: spring(1, {stiffness: 100, damping: 9})
}
class Appear extends Component {
  render () {
    return (
      <Motion defaultStyle={initialStyle} style={springStyle}>
        {val =>
          <div style={{ opacity: val.opacity, transform: 'scale(' + val.scale + ')' }}>
            {this.props.children}
          </div>}
      </Motion>
    )
  }

}

export default Appear
