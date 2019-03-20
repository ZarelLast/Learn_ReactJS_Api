import React,{Component} from 'react'
import axios from 'axios'
import { Col, Row, Container } from 'reactstrap'
import Kotak from './partials/card'

export default class Get_Data extends Component {
  state = {
    info: []
  }

  componentDidMount () {
    axios.get('http://localhost/API_ReactJS/api/orang').then(cari => {
      const info = cari.data
      this.setState({ info })
    })
    .catch(function (error) {
        console.log(error);
      })
  }

  render () {
    return (
      <div>
        <Container className='m-5'>
          <Row>
          {this.state.info.map(data => (
          <Col md='2'>
              <Kotak nama={data.nama} />
          </Col>
          ))}
          </Row>
        </Container>
      </div>
    )
  }
}
