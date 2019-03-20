import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

export default class Post_Data extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const input = {
      'nama': this.state.name
    }

    axios
      .post(`http://localhost/API_ReactJS/api/orang`, input)
      .then(res => {
        alert('Data Terkirim')
        console.log(res)
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  
  add = () => {
    alert('tunggu sebentar')
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type='text' name='nama' onChange={this.handleChange} />
          </label>
          <Button type='submit' onClick={this.add}>
            Add
          </Button>
        </form>
      </div>
    )
  }
}
