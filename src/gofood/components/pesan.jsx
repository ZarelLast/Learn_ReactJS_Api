import React, { Component } from 'react'
import axios from 'axios'

export default class Pesan extends Component {
  state = {
      id : null,
      title : null,
      image : null,
      price : null,
      about : null
  }
  componentDidMount = () =>{
      axios.get(`https://larapi-react.herokuapp.com/api/gofood/pesan/` + this.props.match.params.id)
      .then(res=>{
          this.setState({
            id:res.data.id,
            title:res.data.title,
            price:res.data.price,
            image:res.data.image,
            about:res.data.about
        })
      })
      .catch(function (error) {
        console.log(error)   
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={this.state.image} />
        <h1>{this.state.price}</h1>
        <h1>{this.state.about}</h1>
      </div>
    )
  }
}
