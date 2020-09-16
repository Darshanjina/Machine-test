import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }

    funHandleChange = (e) => {
     this.setState({[e.target.name]:e.target.value}) 
    }

    funSubmit = () => {
      if(
        this.state.username !== "" || this.state.password !== "" 
      ){
        this.props.history.push('/home')
      }
      
    }
    
    render() {
        return (
            <div className="container my-5">
            <form>
  <div className="form-group">
    <label>Username</label>
    <input type="username" className="form-control w-75" name="username" value={this.state.username} onChange={this.funHandleChange}/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control w-75" name="password" value={this.state.password} onChange={this.funHandleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={this.funSubmit}>Login</button>
</form>
            </div>
        )
    }
}
