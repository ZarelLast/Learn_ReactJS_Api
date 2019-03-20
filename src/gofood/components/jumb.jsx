import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import style from '../assets/style.css'
import Button from '@material-ui/core/Button'
import red from '@material-ui/core/colors/red'

export default class Jumb extends Component {
  render () {
    return (
      <div>
        <Jumbotron className='bg-image'>
          <div className='overlay'></div>
            <Container className='inner'>
              <Grid xs={10} md={5}>
                <h1 className='display-5'>
                  TAKE YOUR FOOD BUSSINES TO THE NEXT LEVEL WITH GO-RESTO
                </h1>
              </Grid>
              <Grid container>
                <Button
                  variant='contained'
                  className='text-light m-1'
                  size='large'
                  style={{ backgroundColor: red[900] }}
                >
                  <h6 className='Title text-center pt-3 pb-2'>
                    CLAIM YOUR RESTAURANT
                  </h6>
                </Button>
                <Button
                  variant='contained'
                  className='text-light m-1'
                  size='large'
                  style={{ backgroundColor: red[900] }}
                >
                  <h6 className='Title text-center pt-3 pb-2'>
                    REGISTER AS A SELLER
                  </h6>
                </Button>
              </Grid>
            </Container>
        </Jumbotron>
      </div>
    )
  }
}
