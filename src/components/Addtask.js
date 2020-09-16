import React, { Component } from 'react'

export default class Addtask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:"",
             title:"",
             completed:false
        }
    }

    funHandleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    funSubmit = (e) => {
            e.preventDefault();
            if(this.state.id !== "" || this.state.title !== "" ){
                this.props.funAdd(this.state);
                this.setState({
                    id:"",
                    title:"",
                    completed:false
                } )   
            }
    }
    
    render() {
        return (
            <div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control my-3" placeholder="id" name="id" value={this.state.id} onChange={this.funHandleChange}/>
                            <input type="text" className="form-control my-3" placeholder="title" name="title" value={this.state.title} onChange={this.funHandleChange}/>
                            <button className="btn btn-danger my-2" onClick={this.funSubmit}>Submit</button>
                        </div>
                    </form>
            </div>
        )
    }
}
