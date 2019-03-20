import React, { Component } from 'react'
import axios from 'axios'

export default class Edit_Data extends Component {
  state = {
    array: ['id', 'nama']
  }

  componentDidMount = () => {
    const id = axios
      .get('http://localhost/API_ReactJS/api/orang')
      .then(data => {
        const cari = data.data.id
        this.setState({ array: cari })
      })

    axios.get('http://localhost/API_ReactJS/api/orang').then(data => {
      const cari = data.data.id
      this.setState({ array: cari })
    })

    console.log(id)
    axios
      .patch('http://localhost/API_ReactJS/api/orang/', id)
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        {this.state.array.map(cari => (
          <div>
            <input onChange={this.handleChage} value={cari.id} />
            <input onChange={this.handleChage} value={cari.nama} />
          </div>
        ))}
      </div>
    )
  }
}
