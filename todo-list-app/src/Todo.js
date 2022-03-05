import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
        
    componentDidMount(){

        fetch('/json/todo.json')
         .then((response) => response.json())
         .then(result => {this.setState({list:[...this.state.list,...result]})})
        
    }
  
  render() {
    console.log(this.state.list)
    return (
        <div>
           {this.state.list.map((item,id)=><div key={id}>{item.todo}</div>)}
        </div>
    )
  }
}


