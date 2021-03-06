import React, { Component } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { Container, CardImg, CardDeck } from 'reactstrap'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import red from '@material-ui/core/colors/red'

export default class Cards extends Component {
  state = {
    array: [],
    ID : null
  }
  componentDidMount = () => {
    axios
      .get('https://larapi-react.herokuapp.com/api/gofood')
      .then(res => {
        const info = res.data
        this.setState({ array: info })
      })
      .catch(function (error) {
        alert(error)
      })
  }
  render () {
    return (
      <div>
        <Container>
          <Grid container spacing={24}>
            {this.state.array.map(data => (
              <Grid item xs={10} md={4} lg={4}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar aria-label='Recipe'>
                        <img src='https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1' />
                      </Avatar>
                    }
                    title={data.title}
                  />
                  <Link to={`/pesan/${data.id}`}>
                  <CardActionArea>
                    <CardImg height='225px' className='rounded-0' src={data.image} />
                    <CardContent>
                      <Typography gutterBottom variant='h5' style={{ color: red[700] }} >
                        Rp. {data.price}
                      </Typography>
                      <Typography gutterBottom component='p'>{data.about}</Typography>
                    </CardContent>
                  </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}
