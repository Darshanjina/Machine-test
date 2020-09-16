import React, { Component } from 'react'

export default class Dropdown extends Component {
    
    funChange=(e)=>{
        this.props.funChangeVehicle(e.target.value);
    }
    
    
    render() {

        return (
      <div>
          <select className="form-control w-25" value={this.props.vehicle} onChange={this.funChange}>
          <option value="Bike">Bike</option>
          <option value="Car">Car</option>
          <option value="Truck">Truck</option>
          </select>
      </div>
        )
    }
}
