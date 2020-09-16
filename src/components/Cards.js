import React, { Component } from 'react'

export default class Cards extends Component {

    render() {
        const {user} = this.props
        return (
            <React.Fragment>
            <div className="row p-0 my-3">
                <div className="col-2">
                    {user.id}
                </div>
                <div className="col-4">
                    {user.title}
                </div>
                <div className="col-3">
                    {user.completed ? "True" : "False"}
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" onClick={()=>{this.props.funDelete(user.id)}}>Delete</button>
                </div>
            </div>
            <hr/>
            </React.Fragment>
        )
    }
}
