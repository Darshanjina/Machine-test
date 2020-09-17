import React, { Component } from 'react'
import {Redirect, Route} from 'react-router-dom';

export default class PrivateRoute extends Component {
    render() {
        const pass = localStorage.getItem('pass');
        if(pass === null || pass === undefined || pass === ""){
            return(<Redirect to="/"/>)
        }
        else{
            return(<Route {...this.props}/>)
        }
    }
}
