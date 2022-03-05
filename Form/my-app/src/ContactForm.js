import React, { Component } from 'react'
import {Button,Form} from "react-bootstrap"

export default class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state=
        {
            first:"",
            last:"",
            email:"",
            phone:""
              
        }
        
    }
    handleFirstname(e){
        this.setState({first:e.target.value})
    }
    handleLastname(e){
        this.setState({last:e.target.value})
    }
    handleEmail(e){
        this.setState({email:e.target.value})
    }
    handlePhone(e){
        this.setState({phone:e.target.value})
    }
    
    handleSubmit(event){
      event.preventDefault();
      this.props.onAddContact(this.state)
      console.log(this.state);
        
    }

  render() {
    return (
      <div className='container'>
            <Form onSubmit={(event)=>{this.handleSubmit(event)}} className="my-5">
            <Form.Group controlId="fullNameInput" className='mt-5'> 
            <Form.Label className='mt-2'>FirstName</Form.Label>
            <Form.Control name="first-name" onChange={(e) => {this.handleFirstname(e);}}type="text"/>
            <Form.Label className='mt-2'>LastName</Form.Label>
            <Form.Control name="last-name" onChange={(e) => {this.handleLastname(e);}}type="text"/>
            <Form.Label className='mt-2'>Email</Form.Label>
            <Form.Control name="email" onChange={(e) => {this.handleEmail(e);}}type="email"/>
            <Form.Label className='mt-2'>Phone</Form.Label>
            <Form.Control name="phone" onChange={(e) => {this.handlePhone(e);}}type="number"/> 
            </Form.Group>
              <Button type="submit" className="my-3">Submit</Button>
            </Form>
        
      </div>
    )
  }
}
