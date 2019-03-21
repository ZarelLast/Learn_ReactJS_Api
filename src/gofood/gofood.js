import React, { Component } from 'react';
import Navbars from './components/navbar';
import Jumb from './components/jumb';
import Cards from './components/card';
import Jumb2 from './components/jumb2';
import See from './components/See'

export default class Gofood extends Component {
  render() {
    return (
      <div>
          <Navbars />
          <Jumb />
          <Cards />
          <See />
          <Jumb2 />
      </div>
    )
  }
}
