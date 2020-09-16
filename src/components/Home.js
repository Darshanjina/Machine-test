import React, { Component } from 'react'
import Dropdown from "../components/Dropdown";
import Information from "../components/Information";
import Navbar from './Navbar';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vehicle:"Car",
        }
    }

    funChangeVehicle = (value) => {
        this.setState({vehicle:value});
    }



    
    render() {
        return (
            <Navbar>
                <Dropdown vehicle={this.state.vehicle} funChangeVehicle={this.funChangeVehicle} />
                <Information vehicle={this.state.vehicle}  />
            </Navbar>
        )
    }
}
