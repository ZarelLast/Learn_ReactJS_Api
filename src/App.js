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
  DropdownItem,
  Container
} from 'reactstrap'
import Calculator from './calculator/calculator'
import Get_Data from './components/get'
import Post_Data from './components/post'
import Del_Data from './components/del'
import Edit_Data from './components/edit'
import Gofood from './gofood/gofood'
import Navigasi from './components/partials/navbar'
import GofoodInput from './gofood/components/input'
import SeeMore from './gofood/components/seemore'
import GofoodDelete from './gofood/components/delete'
import Pesan from './gofood/components/pesan'
import { Grid } from '@material-ui/core'
import CardMenu from './components/CardMenu'
class View extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navigasi />
          {/* <Route path='/' exact component={Hi} /> */}
          <Route path='/Get_Data/' component={Get_Data} />
          <Route path='/Post_Data/' component={Post_Data} />
          <Route path='/Del_Data/' component={Del_Data} />
          <Route path='/Edit_Data' component={Edit_Data} />
          <Route path='/calculator/' component={Calculator} />
          <Route path='/' exact component={Gofood} />
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
class Hi extends Component {
  render () {
    return (
      <Container className='my-5'>
        <Grid container spacing={24}>
          <Grid item md={4}>
            <Link to={'/calculator/'}>
              <CardMenu
                title='Calculator'
                image='data:image/jpeg;base64,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'
                text='Calculator dengan ReactJS'
              />
            </Link>
          </Grid>
          <Grid item md={4}>
            <Link to={'/GoFood/'}>
              <CardMenu
                title='Go-Food'
                image='https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2015/06/go-food-1.jpg'
                text='Hasil Clone web Go-Food dengan sedikit perubahan dan tambahan'
              />
            </Link>
          </Grid>
          <Grid item md={4}>
            <Link to={'/'}>
              <CardMenu
                title='Coming Soon'
                image='https://cdn2-www.comingsoon.net/wp-content/themes/comingsoon/images/cs_default_image.jpg'
                text='coming soon ...'
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default View
