import React, { Component } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import { Container, CardImg } from 'reactstrap'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import DeleteIcon from '@material-ui/icons/Delete'
import CardActions from '@material-ui/core/CardActions';;

export default class SeeMore extends Component {
  state = {
    array: [],
    id : '',
    title :'',

  }
  onListen = event => {
    event.preventDefault()
    this.setState({
      id:event.target.value,
    })
    console.log(this.state.id)
    console.log(event.target.value)
  }
  onDelete = event => {
      event.preventDefault()
      const id = event.target.value;
      axios.delete(`https://larapi-react.herokuapp.com/api/gofood/${id}`)
      .then(res=>{
        console.log(res)
        console.log(res.data)
        alert('Data Berhasil Di hapus')
      })
      .catch(function(error){
        alert('Data Gagal Di hapus')
        console.log(error);
      })
  }
  componentDidMount = () => {
    axios
      .get('https://larapi-react.herokuapp.com/api/gofood')
      .then(res => {
        const info = res.data
        this.setState({ array: info })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    return (
      <div>
        <Container className='my-5'>
          <Grid container spacing={16}>
            {this.state.array.map(data => (
            <Grid item xs={11} md={11}>
              <Card>
                <Grid container>
                  <Grid item xs={2} md={2}>
                    <CardImg className='rounded-0 rounded-left' src={data.image} style={{height:125}}/>
                  </Grid>
                  <Grid item xs={9} md={9}>
                    <CardActionArea onClick={this.onDelete} value={data.id}>
                      <CardHeader title={data.title}/>
                      <CardContent>
                        <Typography inline={true} component='p'>
                          {data.about}
                        </Typography>
                        <Typography variant='h6' className='float-right' inline={true} component='p' style={{ color: red[700] }}>
                          Rp.{data.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Grid>
                  <Grid item xs={1} md={1}>
                    <CardActions className='mx-4 mt-5'>
                      <DeleteIcon className='float-right'/>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}
