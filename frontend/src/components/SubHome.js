import React, { Component } from 'react'
import axios from 'axios';
import main from './SubjectImages/subjectmain.jpg'

export default class SubHome extends Component {
constructor(props){
  super(props);

  this.state = {
    subjects:[]
  };

}


componentDidMount(){
  this.retrieveSubjects();
}


retrieveSubjects(){
  axios.get("/subject").then(res=>{
    if(res.data.success){
      this.setState({
        subjects:res.data.existingSubjects //attention here*****
      });

      console.log(this.state.subjects)
    }
  })
}

onDelete=(id)=>{
    axios.delete(`/subject/delete/${id}`).then((res)=>{
      alert("Deleted Succesfully!");
      this.retrieveSubjects();
    })
  }

  filterData(subjects, Searchkey){
    const result = subjects.filter((sub)=>
    sub.subjectId.toLowerCase().includes(Searchkey) || 
    sub.subjectName.toLowerCase().includes(Searchkey) ||
    sub.subjectType.toLowerCase().includes(Searchkey) ||
    sub.subjectCategory.toLowerCase().includes(Searchkey) ||
    sub.subjectFee.toLowerCase().includes(Searchkey) ||
    sub.subjectDes.toLowerCase().includes(Searchkey)
    )

    this.setState({subjects:result})
  }
  
  handleSearchArea = (e)=>{
    const Searchkey = e.currentTarget.value;
    axios.get("/subject").then(res=>{
      if(res.data.success){
        this.filterData(res.data.existingSubjects, Searchkey)
      }
    })
  }

  render() {
    return (
      <div>
        <div style={{marginBottom: '45px', marginLeft:'50px'}}>
            <h1>Subject Management</h1>
            <h5>Currently Available Subjects</h5>
        </div >
      
        <table>
            <tr>
              <td>
                <input className="form-control" style={{width:'400px', marginLeft:'50px'}} type="search" placeholder="Search for Subjects" name="searchQuery" onChange={this.handleSearchArea}></input>
              </td>
              <td>&nbsp;
                
                <a className="btn btn-success"  href='/addsub'>
                <i className="fas fa-plus-circle"></i>&nbsp;Add New Subject
                </a>
                &nbsp;
              </td>
              <td>
                <a className="btn btn-info" href='/enrollhome'>
                <i className="fas fa-th-list"></i>&nbsp;Enrollment List
                </a>
              </td>
            </tr>
          </table>
        
          <table className="table table-striped" style={{marginTop: '45px'}}>
            <thead>
              <tr>
                
                <th style={{background: 'var(--bs-red)'}} scope="col">#</th>
                <th scope="col">subject ID</th>
                <th scope="col">subject Name</th>
                <th scope="col">subject Type</th>
                <th scope="col">subject Category</th>
                <th scope="col">subject Fee</th>
                <th  style={{width:'800px'}} scope="col">subject Description</th>
                <th style={{width:'360px'}} scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.subjects.map((subjects, index)=>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                      <a href={`/subject/${subjects._id}`} style={{textDecoration:'none'}}>
                      {subjects.subjectId}
                      </a>
                      &nbsp;&nbsp;
                      <a className="btn btn-success" href={`/subjectclientadd/${subjects._id}`}>
                    <i className="fas fa-upload"></i>
                    </a>
                    </td>
                  <td>{subjects.subjectName}</td>
                  <td>{subjects.subjectType}</td>
                  <td>{subjects.subjectCategory}</td>
                  <td>{subjects.subjectFee}</td>
                  <td>{subjects.subjectDes}</td>
                  <td>
                    <a className="btn btn-warning" href={`/editsub/${subjects._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;&nbsp;
                    <a className="btn btn-danger" href="" onClick={()=>this.onDelete(subjects._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                    &nbsp;&nbsp;
                    <a className="btn btn-outline-danger" href={`/downloadsub/${subjects._id}`}>
                    <i className="fa fa-file-pdf-o"></i>&nbsp;Download PDF
                    </a>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        
          <a className="btn btn-outline-primary" href={`/stdview`}>client side</a>

      </div>
    )
  }
}
