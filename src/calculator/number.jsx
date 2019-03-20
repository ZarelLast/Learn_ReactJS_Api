import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

export default class Number extends Component {
    render(){
        return (
            <Grid item xs={3}>
              <Button color='primary' variant="contained" onClick={this.props.klik} value={this.props.angka} className='w-100 h-100'>
                {this.props.angka}
              </Button>
            </Grid>
        )
    }
}