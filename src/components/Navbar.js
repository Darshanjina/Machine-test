import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="container-fluid bg-secondary p-3">
                <span className="mx-5 text-light">Logo</span>
                <Link to="/home" className="mx-5 text-decoration-none text-light">Home</Link>
                <Link to="/task" className="mx-5 text-decoration-none text-light">Task</Link>
                <Link to="/user" className="mx-5 text-decoration-none text-light">User</Link>
            </div>

            <div className="container">
            {this.props.children}
            </div>
            </React.Fragment>
        )
    }
}
