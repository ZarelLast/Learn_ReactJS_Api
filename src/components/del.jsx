import React,{Component} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';

export default class Del_Data extends Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios
      .delete(`http://localhost/API_ReactJS/api/orang/${this.state.id}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type='text' name='id' onChange={this.handleChange} />
          </label>
          <Button type='submit'>Delete</Button>
        </form>
      </div>
    )
  }
}
