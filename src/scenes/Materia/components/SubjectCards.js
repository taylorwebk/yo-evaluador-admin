import React, { Component } from 'react'
import {Container, Header, Card} from 'semantic-ui-react'
import CardComp from './CardComp'
class SubjectCards extends Component {
  constructor (args) {
    super(args)
    this.colors = [
      'red', 'orange', 'yellow', 'olive', 'green', 'teal',
      'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'
    ]
    this.randomColor = this.randomColor.bind(this)
  }
  randomColor () {
    return this.colors[Math.floor(Math.random() * this.colors.length)]
  }
  render () {
    const {list, teachers} = this.props
    const options = teachers.map(t => ({label: t.nombre, value: t.id}))
    const cards = list.map((subject, i) => {
      return <CardComp
        key={i}
        subject={subject}
        color={this.randomColor()}
        options={options}
      />
    })
    return (
      <Container textAlign='left'>
        <Header as='h2' color='orange' textAlign='center'>
          <Header.Content>
            Materias
          </Header.Content>
        </Header>
        <Card.Group itemsPerRow={2}>
          {cards}
        </Card.Group>
      </Container>
    )
  }

}

export default SubjectCards
