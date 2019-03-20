import React, { Component } from 'react'
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
import { Link } from 'react-router-dom'

export default class Navigasi extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Modul</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link to={'/calculator/'}>
                <NavLink>Calculator</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                GoFood
              </DropdownToggle>
              <DropdownMenu right>
                <Link to={'/GoFood/'}>
                  <DropdownItem>Home</DropdownItem>
                </Link>
                <Link to={'/GoFood-Input'}>
                  <DropdownItem>Input</DropdownItem>
                </Link>
                <Link to={'/GoFood-Edit'}>
                  <DropdownItem>Edit</DropdownItem>
                </Link>
                <Link to={'/GoFood-Delete'}>
                  <DropdownItem>Delete</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                CRUD
              </DropdownToggle>
              <DropdownMenu right>
                <Link to={'/Get_Data/'}>
                  <DropdownItem>Get Data</DropdownItem>
                </Link>
                <Link to={'/Post_Data/'}>
                  <DropdownItem>Post Data</DropdownItem>
                </Link>
                <Link to={'/Del_Data/'}>
                  <DropdownItem>Del Data</DropdownItem>
                </Link>
                <Link to={'/Edit_Data/'}>
                  <DropdownItem>Edit Data</DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
