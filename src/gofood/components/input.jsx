import React, { Component } from 'react'
import {
  Container,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Col,
  CardTitle,
  CardHeader
} from 'reactstrap'
import axios from 'axios'
import Button from '@material-ui/core/Button'

export default class GofoodInput extends Component {
  state = {
    title: null,
    image: null,
    about: null,
    price: null
  }

  handleTitle = event => {
    this.setState({ title: event.target.value })
  }
  handleImage = event => {
    this.setState({ image: event.target.value })
  }
  handlePrice = event => {
    this.setState({ price: event.target.value })
  }
  handleAbout = event => {
    this.setState({ about: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const input = {
      title: this.state.title,
      image: this.state.image,
      price: this.state.price,
      about: this.state.about
    }
    console.log(input)

    axios
      .post('https://larapi-react.herokuapp.com/api/gofood', {
        headers: {
          'Access-Control-Allow-Origin': 'https://stupefied-colden-26ba04.netlify.com',
          'Access-Control-Allow-Credentials': true
        },
        'title': this.state.title,
        'image': this.state.image,
        'price': this.state.price,
        'about': this.state.about
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
        alert('Data Terkirim')
      })
      .catch(function (error) {
        console.log(error)
        alert('Gagal Terkirim')
      })
  }

  render () {
    return (
      <div>
        <Container>
          <Col md={6} className='mx-auto'>
            <Card className='my-4'>
              <CardHeader className='text-center'>
                <CardTitle>
                  <h3>Input GoFood</h3>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>Title</Label>
                    <Col md={12}>
                      <Input type='text' name='title' onChange={this.handleTitle} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label>Link Image</Label>
                    <Col md={12}>
                      <Input type='text' name='image' onChange={this.handleImage} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label>Price</Label>
                    <Col md={12}>
                      <Input type='text' name='price' onChange={this.handlePrice} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label>About</Label>
                    <Col md={12}>
                      <Input type='textarea' name='about' onChange={this.handleAbout}
                      />
                    </Col>
                  </FormGroup>
                  <Button color='primary' variant='contained' type='submit'>
                    Add
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </div>
    )
  }
}
