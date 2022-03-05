import React, { Component } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'

class App extends Component {
  constructor(props){
    super(props)
     this.state={
       contacts:[]
     }
     this.handelContactsend = this.handelContactsend.bind(this)
  }
  
  handelContactsend(contactobj){
    console.log(this.state.contacts);
    this.setState({contacts:[...this.state.contacts, contactobj]})
    console.log(this.state.contacts);
  }
  render() {
    return (
      <div>
        <ContactForm onAddContact={this.handelContactsend}/>
        <ContactList list={this.state.contacts} />
      </div>
    )
  }
}
export default App
