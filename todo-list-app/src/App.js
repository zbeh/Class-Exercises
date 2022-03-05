
import TodoList from "./TodoList";
import {Form} from "react-bootstrap";
import React from "react";
import Todo from "./Todo";
import Clock from './Clock'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     currentUser: "1",
      profiles: [],
      showTimer: false
    }
  }

  componentDidMount() {
    fetch('/json/profiles.json').then(res => res.json()).then(response=>{
      this.setState({profiles: response})
    })
  }

  render() {

   return (<div className="App container text-center">
      <Clock></Clock>


      <div key={`inline-radio`} className="mb-3 text-center">
        {this.state.profiles.map(profile=>{
          return ( <Form.Check
            inline
            label={profile.name}
            onChange={(e) => {
             this.setState({currentUser: e.target.id})
            }}
            checked={this.state.currentUser ===profile.id}
            name={'profile'}
            type="radio"
            id={profile.id}
         />)
        })}

      </div>
      <TodoList user={this.state.currentUser}/>
      <Todo></Todo>
    </div>)
  }
}

export default App;
