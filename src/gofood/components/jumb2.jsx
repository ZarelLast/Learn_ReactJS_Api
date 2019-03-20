import React, { Component } from 'react'
import {
  Jumbotron,
  Container,
} from 'reactstrap'
import red from '@material-ui/core/colors/'
import style from '../assets/style.css'


export default class Jumb2 extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className='mt-5 bgRed'>
					<Container>
					<h1>hi</h1>
					</Container>
        </Jumbotron>
      </div>
    )
  }
}
