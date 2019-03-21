import React, { Component } from 'react'
import { grey } from '@material-ui/core/colors'
import { Typography, Grid } from '@material-ui/core'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Navbars extends Component {
  render () {
    return (
      <div style={{ background: grey[900] }}>
        <Container>
          <Grid container>
            <Grid item>
              <Link to={'/GoFood/'}>
                <Typography
                  variant='h6'
                  component='title'
                  className='text-light'
                >
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to={'/see-more/'}>
                <Typography
                  variant='h6'
                  component='title'
                  className='text-light'
                >
                  Explore
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}
