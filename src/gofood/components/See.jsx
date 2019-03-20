import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

export default class See extends Component {
  render() {
    return (
      <div className='text-center mt-4'>
        <Link to={'/see-more/'}>
            <Button className='text-center' variant='outlined' color='secondary'> See More </Button>
        </Link>
      </div>
    )
  }
}
