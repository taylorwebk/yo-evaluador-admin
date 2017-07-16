import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchData} from './redux/fetchData'
import HeaderAdmin from './../../components/HeaderAdmin'
import Body from './components/Body'
import Loading from './../../components/Loading'
import Error from './../../components/Error'
import Fade from './../../components/Animations/Fade'
class MainPanel extends Component {
  constructor (...args) {
    super(...args)
    this.active = ''
    this.title = 'Administración'
    this.handleItemClick = this.handleItemClick.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount () {
    this.props.fetchData()
  }
  handleItemClick (e, { name }) {
    this.active = name
    this.title = name.toUpperCase()
    this.props.history.push(`${this.props.match.url}/${name}`)
  }
  logout () {
    this.props.history.push('/')
  }
  render () {
    let body
    const {url} = this.props.match
    if (this.props.data === null) {
      body = <Error title='Error' m='Ocurrió un error al cargar los datos...' />
    } else {
      if (Object.keys(this.props.data).length === 0) {
        body = <Loading m='Cargando Datos...' />
      } else {
        body = <Fade>
          <Body url={url} data={this.props.data} />
        </Fade>
      }
    }
    return (
      <div>
        <HeaderAdmin title={this.title} active={this.active} logout={this.logout} handleItemClick={this.handleItemClick} />
        {body}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.data
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPanel)
