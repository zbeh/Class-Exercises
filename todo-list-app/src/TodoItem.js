import React, {Component} from "react";

export default class TodoItem extends Component{
    render(){
        console.log(this.props)
        return (
            <li style={{ display:'flex',justifyContent:'space-evenly',margin:'.5em'}}>
                {this.props.index} -
                {this.props.title}
                <div className="btn-group">
                    <button onClick={this.props.remove}>x</button>
                    <button onClick={this.props.doneTodo}>done</button>
                </div>
            </li>
        )
    }
}