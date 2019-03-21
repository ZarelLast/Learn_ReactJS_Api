import React, { Component } from 'react'
import { Card, CardContent, CardActionArea, Typography, Divider } from '@material-ui/core'
import { CardImg } from 'reactstrap'

export default class CardMenu extends Component {
  render () {
    return (
      <Card>
        <CardActionArea>
          <CardImg src={this.props.image} height='275'/>
          <CardContent>
            <Typography variant='h6' component='title'>
              {this.props.title}
            </Typography>
            <Divider variant='fullWidth'/>
            <Typography variant='body1' className='float-right' component='p'>
              {this.props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}
