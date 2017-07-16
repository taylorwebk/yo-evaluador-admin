import React, { Component } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Fade from './../../components/Animations/Fade'
class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <Fade>
          <Body />
        </Fade>
      </div>
    )
  }

}

export default Home
