import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'
const initialStyle = {
  opacity: 0,
  translateY: 50
}
const springStyle = {
  opacity: spring(1),
  translateY: spring(0, {stiffness: 100, damping: 9})
}
class Fade extends Component {
  render () {
    return (
      <Motion defaultStyle={initialStyle} style={springStyle}>
        {val =>
          <div style={{ opacity: val.opacity, transform: 'translate(0, ' + val.translateY + 'px)' }}>
            {this.props.children}
          </div>}
      </Motion>
    )
  }

}

export default Fade
