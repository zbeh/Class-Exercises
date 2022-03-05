import React, { Component } from "react";
export class table extends Component {
  constructor(props) {
    super(props);
    // console.log()
    console.log("table", props);
  }
  render() {
    console.log("table1", this.props);

    return (
      <table border="1">
          <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
        </thead>
        <tbody>
        {this.props.data.map((row,index)=>{
            // console.log(row);
                   return( <tr key={index}>
                    <td>{row.email}</td>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.avatar}</td>
                  </tr>)
        })}
        </tbody>
      </table>
    );
  }
}

export default table;
