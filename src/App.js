import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'typeface-roboto'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import Calculator from './calculator/calculator';
import Get_Data from './components/get';
import Post_Data from './components/post';
import Del_Data from './components/del';
import Edit_Data from './components/edit';
import Gofood from './gofood/gofood';
import Navigasi from './components/partials/navbar';
import GofoodInput from './gofood/components/input';
import SeeMore from './gofood/components/seemore';
import GofoodDelete from './gofood/components/delete';
import Pesan from './gofood/components/pesan'

class View extends Component {
  render () {
    return (
      <Router>
        <div>
          
          <Navigasi />
          <Route path='/App' exact component={View} />
          <Route path='/Get_Data/' component={Get_Data} />
          <Route path='/Post_Data/' component={Post_Data} />
          <Route path='/Del_Data/' component={Del_Data} />
          <Route path='/Edit_Data' component={Edit_Data} />
          <Route path='/calculator/' component={Calculator} />
          <Route path='/GoFood/' component={Gofood} />
          <Route path='/GoFood-Input' component={GofoodInput} />
          <Route path='/GoFood-Edit' component={GofoodInput} />
          <Route path='/GoFood-Delete' component={GofoodDelete} />
          <Route path='/see-more' component={SeeMore} />
          <Route path='/pesan/:id' component={Pesan} />
        </div>
      </Router>
    )
  }
}

export default View
