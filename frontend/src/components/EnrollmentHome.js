import React, { Component } from 'react'
import axios from 'axios';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class EnrollmentHome extends Component {

    constructor(props){
        super(props);

        this.state = {
            enrollments:[]
        };
    }

    componentDidMount(){
        this.retrieveEnrollments();
    }

    retrieveEnrollments(){
        axios.get("/enrollment").then((res)=>{
            if(res.data.success){
                this.setState({
                    enrollments:res.data.existingEnrollments
                });

                console.log(this.state.enrollments)
            }
        })
    }

    onDelete=(id)=>{
        axios.delete(`/enrollment/delete/${id}`).then((res)=>{
            alert("Successfully Removed!");
            this.retrieveEnrollments();
        })
    }

    filterData(enrollments, Searchkey){
        const result = enrollments.filter((enr)=>
        enr.subjectId.toLowerCase().includes(Searchkey) || 
        enr.StudentName.toLowerCase().includes(Searchkey) ||
        enr.enrollmentCode.toLowerCase().includes(Searchkey) ||
        enr.dateOfEnroll.toLowerCase().includes(Searchkey) ||
        enr.studentId.toLowerCase().includes(Searchkey)
        )
    
        this.setState({enrollments:result})
      }
      
      handleSearchArea = (e)=>{
        const Searchkey = e.currentTarget.value;
        axios.get("/enrollment").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingEnrollments, Searchkey)
          }
        })
      }

    render() {
        return (
            <div>
                <div style={{marginBottom: '45px', marginLeft:'50px'}}>
                    <h1>Enrollment List</h1>
                    <h5>All the Enrollments Will be Displayed Here</h5>
                </div >

                <table>
                    <tr>
                    <td>
                        <input className="form-control" style={{width:'400px', marginLeft:'50px'}} type="search" placeholder="Search for Enrollments" name="searchQuery" onChange={this.handleSearchArea}></input>
                    </td>
                    <td>
                        <button className="btn btn-primary" style={{marginLeft:'1320px'}}><a href="/addEnrollment" style={{textDecoration:'none', color:'white'}}><i className="fas fa-plus-circle"></i>&nbsp;Add New Enrollment</a></button>
                        &nbsp;
                        <ReactHTMLTableToExcel
                            className = 'btn btn-outline-success'
                            table = 'enrollment-table'
                            filename = 'enrollments Excel'
                            sheet = 'Sheet'
                            buttonText = 'Generate Sheet'
                        />                        
                    </td>
                    </tr>
                </table>

                <table id="enrollment-table" className="table table-striped" style={{marginTop: '45px'}}>
                <thead>
                <tr>
                    
                    <th style={{background: 'var(--bs-orange)'}} scope="col">#</th>
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Student Address</th>
                    <th scope="col">Subject ID</th>
                    <th scope="col">Enrollment Code</th>
                    <th scope="col">Date of Enrollment</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.state.enrollments.map((enrollments, index)=>(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{enrollments.studentId}</td>
                    <td>{enrollments.StudentName}</td>
                    <td>{enrollments.StudentAddress}</td>
                    <td>{enrollments.subjectId}</td>
                    <td>{enrollments.enrollmentCode}</td>
                    <td>{enrollments.dateOfEnroll}</td>
                    <td>
                        <a className="btn btn-danger" href="" onClick={()=>this.onDelete(enrollments._id)}>
                        <i className="fas fa-user-minus"></i>
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
