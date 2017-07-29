import React, { Component } from 'react'
import {Header, Segment, Icon, Card, Feed} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import ClassForm from './ClassForm'
class CardComp extends Component {
  constructor (args) {
    super(args)
    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleShow () {
    this.setState({
      show: !this.state.show
    })
  }
  handleClick (e) {
    const id = e.currentTarget.getAttribute('id')
    this.props.history.push('/main/clase/' + id)
  }
  render () {
    const {show} = this.state
    const {sigla, des, clases, id} = this.props.subject
    const color = this.props.color
    let paralelos, form
    if (clases.length === 0) {
      paralelos = <Card.Content>
        <Card.Meta>
          No existen paralelos, registra uno haciendo click en:
          <Icon color={color} name='plus square' size='large' />.
        </Card.Meta>
      </Card.Content>
    } else {
      const styles = {
        cursor: 'pointer'
      }
      paralelos = clases.map(clase => {
        return <Card.Content key={clase.id}>
          <Feed style={styles} >
            <Feed.Event id={clase.id} onClick={(e) => { this.handleClick(e) }}>
              <Feed.Label>
                <Header as='h1'>
                  {clase.par}
                </Header>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  Paralelo {clase.par}
                </Feed.Summary>
                <Feed.Extra text>
                  <p><b>Aula: </b>{clase.aula}</p>
                  <p><b>Docente: </b>{clase.docente}</p>
                  <p><b>Inscritos: </b>{clase.nroEstudiantes}</p>
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      })
    }
    form = <Card.Content>
      <ClassForm color={color} subjectId={id} options={this.props.options} />
    </Card.Content>
    return (
      <Card color={color}>
        <Card.Content>
          <Card.Header>
            <Segment clearing basic>
              <Header color={color} as='h2' floated='left'>
                {sigla}
              </Header>
              <Header as='h2' floated='right'>
                <Icon link onClick={this.handleShow} color={color} name={show ? 'minus square' : 'plus square'} />
              </Header>
            </Segment>
          </Card.Header>
          <Card.Meta>
            &nbsp;&nbsp;&nbsp;{des}
          </Card.Meta>
        </Card.Content>
        {show && form}
        {paralelos}

      </Card>
    )
  }

}

export default withRouter(CardComp)
