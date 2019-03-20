import React, { Component } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Divider,
  CardHeader,
  CardActions,
  Grid,
  Fab
} from '@material-ui/core'
import { red, green, grey } from '@material-ui/core/colors'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Icon from '@material-ui/core/Icon'
import { CardImg } from 'reactstrap'
import 'typeface-roboto'

export class Kartu extends Component {
  render () {
    return (
      <div>
        <Card>
          <CardImg src={this.props.image} />
          <Divider variant='fullWidth' />
        </Card>
      </div>
    )
  }
}
export class Kartu2 extends Component {
  render () {
    return (
      <div>
        <Card>
          <CardHeader title={this.props.title} />
          <Divider variant='fullWidth' />
          <CardContent>

          </CardContent>
          <Divider variant='fullWidth' />
          <Grid container spacing={32}>
            <Grid item>
              <Fab color='primary'>
                <AddIcon onClick={this.props.tambah}/>
              </Fab>
            </Grid>
            <Grid item>
              <Fab color='inherit'>
                {this.props.angka}
              </Fab>
            </Grid>
            <Grid item md={6}>
              <Fab color='secondary'>
                <RemoveIcon onClick={this.props.kurang}/>
              </Fab>
            </Grid>
            <Grid item>
              <Fab style={{background:green.A700,color:grey[50]}}>
                <ShoppingCartIcon onClick={this.props.cart}/>
              </Fab>
            </Grid>
          </Grid>
        </Card>
      </div>
    )
  }
}
