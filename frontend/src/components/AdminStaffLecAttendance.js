import React, { Component } from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class AdminStaffLecAttendance extends Component {
   
    constructor(props){
        super(props);
        
        
        this.state={
            attendance:[]
        };
    }
    
     componentDidMount(){
         this.retriveattendance();
      
     }
  
    retriveattendance(){
      axios.get('/retriveSLattendance')
          .then(response => this.setState({ attendance:response.data.existingattendance }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
  }
  
      onDelete = (id) =>{
          axios.delete(`/attendance/delete/${id}`).then((res)=>{
              alert("Delete successful!");
              this.retriveattendance();
          })
      }
  
   
   
    render() {
        return (
            <div>
               <div className="container-xxl">
               <center><h2 style={{textDecoration:'none', color:'#00ff80'}}>Manage Staff and Lecturer Attendance</h2></center>
                </div>
                <br/><br/>
                <div className="container-xxl">   
                <ReactHTMLTableToExcel
                            className = 'btn btn-outline-success'
                            table = 'staff-table'
                            filename = 'Staff attendance Excel'
                            sheet = 'Sheet'
                            buttonText = 'Download all staff attendance'
                        />  
                <br/><br/>
                <button className="btn btn-success"><a href="/addnewattendance" style={{textDecoration:'none', color:'white'}}>Mark New attendance</a></button>
                <br/><br/>
                <table id='staff-table' className="table table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Attendance ID</th>
                            <th scope="col">Full Name </th>
                            <th scope="col">Month </th>
                            <th scope="col">category</th>
                            <th scope="col">Delete Row</th>
                          </tr>
                    </thead>
               <tbody>
                {this.state.attendance.map((attendance,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{attendance.attendanceID}</td>
                           <td>{attendance.name}</td>
                           <td>{attendance.month}</td>
                           <td>{attendance.category}</td>
                           <td>
                                       &nbsp;
                                       <a  className="btn btn-danger" href="" onClick={()=> this.onDelete(attendance._id)} style={{textDecoration:'none', color:'white'}}>
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
