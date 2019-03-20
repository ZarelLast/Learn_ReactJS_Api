import React,{Component} from 'react'
import axios from 'axios'
import { Card } from 'reactstrap'

export default class Kotak extends Component{
    render() {
        return(
            <Card className='mb-4 mx-0'>{this.props.nama}</Card>
        )
    }
}