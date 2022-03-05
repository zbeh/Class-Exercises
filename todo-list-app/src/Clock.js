import React, { Component } from 'react'

export default class Clock extends Component {
        constructor(){
            super()
            this.state={
                time: new Date()
            }
        }
        setTime=()=>{
           this.setState({time:new Date()}) 
        }
        componentDidMount(){
            this.interval= setInterval(()=>this.setTime(),1000)
        }
        componentWillUnmount(){
            clearInterval(this.interval)
        }
  render() {
    return (
      <div>{this.state.time.toLocaleTimeString()}</div>
    )
  }
}

