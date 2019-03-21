import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'reactstrap'
import { Grid } from '@material-ui/core'
import { GridLoader } from 'react-spinners'
import { Kartu, Kartu2 } from './pesan_partials/card'
import 'typeface-roboto'

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
    var increment = this.state.increment+1
    this.setState({ increment })
    console.log(this.state.increment)
  }
  handleKurang = event => {
    event.preventDefault()
    var increment = this.state.increment-1
    this.setState({ increment })
    console.log(increment)
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
              <Kartu2 title={this.state.title}
                text={this.state.about}
                tambah={this.handleTambah}
                angka={this.state.increment}
                kurang={this.handleKurang}
                cart={console.log('finish')}
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
