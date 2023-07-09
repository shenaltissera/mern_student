import React, { Component } from 'react'
import axios from 'axios';

export default class AdminApproveLrequests extends Component {
   
    constructor(props){
        super(props);
        
        
        this.state={
            leaverequests:[]
        };
    }
    
     componentDidMount(){
         this.retriveleaverequests();
      
     }
  
    retriveleaverequests(){
      axios.get('/leaverequests')
          .then(response => this.setState({ leaverequests:response.data.existingleaveRequests }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
  }
  
      onDelete = (id) =>{
          axios.delete(`/leaverequests/delete/${id}`).then((res)=>{
              alert("Delete successful!");
              this.retriveleaverequests();
          })
      }
   
    render() {
        return (
            <div>
               <div className="container-xxl">
               <center><h2 style={{textDecoration:'none', color:'#00ff80'}}>Manage Lecturer Leave Requests</h2></center>
                </div>
                <br/><br/>
                <div className="container-xxl">
                <center><h2 style={{textDecoration:'none', color:'black'}}>All Leave Requests </h2></center>
                <table className="table  table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lecturer ID</th>
                            <th scope="col">Lecturer Name</th>
                            <th scope="col">Begine Date</th>
                            <th scope="col">Return Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Approve(Pay / No Pay) or Delete</th>
                          </tr>
                    </thead>
               <tbody>
                {this.state.leaverequests.map((leaverequests,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{leaverequests.lecId}</td>
                           <td>{leaverequests.name}</td>
                           <td>{leaverequests.beginDate}</td>
                           <td>{leaverequests.returnDate}</td>
                           <td>{leaverequests.reason}</td>
                           <td>{leaverequests.email}</td>
                           <td>{leaverequests.Cnumber}</td>
                           <td>
                                       <a  className="btn btn-warning" href={`/AdminApproveLR/${leaverequests._id}`} style={{textDecoration:'none', color:'white'}}>
                                        <i>Approve</i>
                                       </a>
                                       &nbsp;
                                       <a  className="btn btn-danger" href="" onClick={()=> this.onDelete(leaverequests._id)} style={{textDecoration:'none', color:'white'}}>
                                        <i>Delete</i>
                                       </a>
                                   </td>
                   </tr>  
                ))}
                </tbody>
                </table>
                   
               </div>
            </div>
        )
    }
}

