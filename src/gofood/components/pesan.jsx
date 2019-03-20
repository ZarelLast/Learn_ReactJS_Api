import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'reactstrap'
import { Card, Grid } from '@material-ui/core'
import { GridLoader } from 'react-spinners'
import { Kartu, Kartu2 } from './pesan_partials/card'

export default class Pesan extends Component {
  state = {
    id: null,
    title: null,
    image: null,
    price: null,
    about: null,
    loading: true,
    increment: 0
  }
  handleTambah = event => {
    event.preventDefault()
    const increment = 1
    console.log(increment)
    // this.setState({increment})
  }
  kurang = event => {
    const increment = eval(increment - 1)
    // this.setState({increment})
  }
  componentDidMount = () => {
    axios
      .get(
        `https://larapi-react.herokuapp.com/api/gofood/pesan/` +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          id: res.data.id,
          title: res.data.title,
          price: res.data.price,
          image: res.data.image,
          about: res.data.about,
          loading: false
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    return (
      <div>
        <Container className='py-5 px-2'>
          <Grid container spacing={24}>
            <Grid item md={4}>
              <Kartu image={this.state.image} />
            </Grid>
            <Grid item md={7}>
              <Kartu2
                title={this.state.title}
                tambah={this.tambah()} // act
                kurang={this.kurang()} // act
                angka={this.state.increment} // ''
                cart // act
              />
            </Grid>
          </Grid>
        </Container>
        <center>
          <GridLoader
            loading={this.state.loading}
            sizeUnit={'px'}
            color={'#f00'}
            size={24}
          />
        </center>
      </div>
    )
  }
}
