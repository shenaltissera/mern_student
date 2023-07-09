import React, { Component } from 'react'
import axios from 'axios'

export default class AllApplied extends Component {
    constructor(props){
        super(props);

        this.state={
            applications:[]
        };
}


componentDidMount(){
    this.retrieveapplications();
}

retrieveapplications(){
    axios.get("/application/posts").then(res =>{
        if(res.data.success){
            this.setState({
                applications:res.data.existingPosts
            });

            console.log(this.state.applications)
        }
    })
}



    render() {
        return (
            <div style={{marginLeft:100}}>
               <h1 className="h1">Applications For Recruitments</h1>
               <p class="lead"> Contains All Applications for Staff</p>
               <hr/>
               <a className="btn btn-success" href="/staffhome" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-home"></i>&nbsp;Home
                </a>&nbsp;&nbsp;&nbsp;
                &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
    <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> </th>
              <th scope="col">Full Name</th>
              <th scope="col">Applied Position</th>
              <th scope="col">ContactNumber</th>
              <th scope="col">National ID number</th>
              <th scope="col">Gender</th>
              <th scope="col">Expected Salary</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Address</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>

            {this.state.applications.map((applications, index)=>(
              <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{applications.FirstName} {applications.LastName}</td>
              <td>{applications.position}</td>
              <td>{applications.ContactNumber}</td>
              <td>{applications.NationalIDNumber}</td>
              <td>{applications.Gender}</td>
              <td>{applications.ExpectedSalary}</td>
              <td>{applications.DateOfBirth}</td>
              <td>{applications.Address}</td>
              <td>

              <a className="btn btn-primary" href={`/ViewStfApplication/${applications._id}`}>
              <i className="fas fa-user"></i>&nbsp;View Application
              </a>
              </td>
            </tr>
            ))}
            
          </tbody>
</table>
                
            </div>
        )
    }
}