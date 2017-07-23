import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, browserHistory} from 'react-router-dom'
import store from './store'
import Home from './scenes/Home'
import MainPanel from './scenes/MainPanel'
import './css/semantic.css'

const mainStore = store()
class App extends Component {

  render () {
    return (
      <Provider store={mainStore}>
        <BrowserRouter history={browserHistory}>
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/main' component={MainPanel} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }

}
render(
  <App />,
  document.getElementById('app')
)
