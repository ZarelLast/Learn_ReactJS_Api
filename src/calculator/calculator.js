import React, { Component } from 'react'
import 'typeface-roboto'
import { Container } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import Number from './number'
class Calculator extends Component {
  state = {
    hasil:''
  }

  pencet = event => {
    if(event.target.value === '='){
      this.hitung();
    }else{
      this.setState({ hasil:this.state.hasil+event.target.value })
    }
  }
  
  hitung = () => {
    this.setState({
      hasil:eval(this.state.hasil)+''
    })
  }

  hapus = event => {
    this.setState({
      hasil:'',
    })
    console.log('Terhapus')
  }

  render () {
    return (
      <div className='bg-dark p-5'>
        <Container>
          <Grid container>
            <Grid item xs={12} className='text-light my-2'>
              <h1 xs={12}>{this.state.hasil}</h1>
              <input className='form-control text-right' value={this.state.hasil}
              />
            </Grid>
            <Number angka='1' klik={this.pencet} />
            <Number angka='2' klik={this.pencet}/>
            <Number angka='3' klik={this.pencet}/>
            <Number angka='+' klik={this.pencet}/>
            <Number angka='4' klik={this.pencet}/>
            <Number angka='5' klik={this.pencet}/>
            <Number angka='6' klik={this.pencet}/>
            <Number angka='-' klik={this.pencet}/>
            <Number angka='7' klik={this.pencet}/>
            <Number angka='8' klik={this.pencet}/>
            <Number angka='9' klik={this.pencet}/>
            <Number angka='X' klik={this.pencet}/>
            <Number angka='C' klik={this.hapus}/>
            <Number angka='0' klik={this.pencet}/>
            <Number angka='/' klik={this.pencet}/>
            <Number angka='=' klik={this.pencet}/>
          </Grid>
        </Container>
      </div>
    )
  }
}
export default Calculator
