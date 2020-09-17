import React, { Component } from "react";
import Navbar from "./Navbar";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      changepass: false,
    };
  }

  funChange = () => {
    this.setState({changepass:!this.state.changepass})
  };

  funLog = () => {
    localStorage.removeItem('pass');
    this.props.history.push('/');
  };

  render() {
    return (
      <Navbar>
        <div>
          <form className="mt-5">
            <div className="form-group">
              <label>Username : dummyname</label>
            </div>
            {this.state.changepass ? 
            (
              <div className="form-group">
                <label>New Password : </label>
                <input type="text" />
              </div>
            ) : 
            (
              <div className="form-group">
                <label>Password : *****</label>
              </div>
            )}
          </form>
        </div>

        <div className="mt-5">
          {this.state.changepass ? (<button className="btn btn-outline-danger m-3 w-25" onClick={this.funChange}>
            Save Password
          </button>) : ( <button
            className="btn btn-outline-danger m-3 w-25"
            onClick={this.funChange}
          >
            Change Password
          </button>)}
         
          <button className="btn btn-outline-danger w-25" onClick={this.funLog}>
            Logout
          </button>

        </div>
      </Navbar>
    );
  }
}
