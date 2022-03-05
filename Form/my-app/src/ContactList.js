import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
export default class ContactList extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover className='container'>
          <thead className='text-center'>
            <tr>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Email</th>
             <th>Phone</th>
            </tr>
          </thead>
          
          <tbody className='text-center'>
          {console.log(this.props.list)} 
           {this.props.list.map((person,id)=>{
            return(
              <tr key={id}>
               <td>{person.first}</td>
               <td>{person.last}</td>
               <td>{person.email}</td>
               <td>{person.phone}</td>
              </tr>
            )
            })}
         </tbody>
       </Table>
      </div>
    )
  }
}
