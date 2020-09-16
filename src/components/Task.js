import React, { Component } from 'react'
import Axios from "axios";
import Cards from './Cards';
import Navbar from './Navbar';
import Addtask from './Addtask';

export default class Task extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             list:[],
             form: false
        }
    }
    
    componentDidMount(){
        this.funData();
    }

    funData = () => {
        Axios.get('http://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            console.log(res.data)
            this.setState({list:res.data});
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    funDelete = (id) => {
        const filteredList = this.state.list.filter((user)=>{
            return (user.id !== id)
        })
        this.setState({list:filteredList});
    }

    funAdd = (newTask) => {
        const newList = [...this.state.list,newTask];
        this.setState({list:newList});
    }

    showForm=()=>{
        this.setState({form:!this.state.form});
    }


    render() {
        return (
            <Navbar>
                {this.state.list && this.state.list.map((user,i)=>(
                   <Cards key={i} user={user} funDelete={this.funDelete}/>
                ))}

                    {
                        this.state.form ? (<Addtask funAdd={this.funAdd}/>) : null
                    }
                    

                    <div>
                    <button className="btn btn-primary w-10 my-3" onClick={this.showForm}>Add Task</button>
                    </div>

                    </Navbar>
        )
    }
}
