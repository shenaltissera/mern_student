import React, { Component } from 'react'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class AllApplied extends Component {
    constructor(props){
        super(props);

        this.state={
            registered:[]
        };
}


componentDidMount(){
    this.retrieveRegistered();
}

retrieveRegistered(){
    axios.get("/register/posts").then(res =>{
        if(res.data.success){
            this.setState({
                registered:res.data.existingPosts
            });

            console.log(this.state.registered)
        }
    })
}

onDelete=(id)=>{
  axios.delete(`/register/delete/${id}`).then((res)=>{
    alert("Deleted Succesfully..!")
    this.retrieveRegistered();
  })
}

filterData(registered,searchKey){

  const result = registered.filter((post)=>

  post.RegistationNumber.toLowerCase().includes(searchKey)||
  post.FirstName.toLowerCase().includes(searchKey)||
  post.LastName.toLowerCase().includes(searchKey)||
  post.position.toLowerCase().includes(searchKey)||
  post.NationalIDNumber.toLowerCase().includes(searchKey)
  )

  this.setState({registered:result})
}

handleSearchArea =(e)=>{
  const searchKey=e.currentTarget.value;
  axios.get("/register/posts").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    } 
  });
}


    render() {
        return (
            <div style={{marginLeft:100}} >

               <h1 className="h1">Staff Details</h1>
               <p class="lead"> Contains All Registered Non-Academic Staff Details</p>
<hr/>
                 <a className="btn btn-success" href="/staffhome" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-home"></i>&nbsp;&nbsp;&nbsp;Home
                </a>

               &nbsp;
                &nbsp;
               &nbsp;
               &nbsp;
               &nbsp;
              
                 <a className="btn btn-success" href="/applications" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-file"></i>&nbsp;&nbsp;&nbsp;&nbsp;Applications
                </a>
              
                 &nbsp;
               &nbsp;
               &nbsp;
               &nbsp;
               &nbsp;

                 <ReactHTMLTableToExcel
                 className="btn btn-success"
                 style={{textDecoration:'none', color:'white'}}
                    table="table-to-xls"
                    filename= "Staff Details"
                    sheet="tablexls"
                    buttonText="Download All Details Of Staff"/>

               <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
  </div>
  <div className="col-lg-9 mt-2 mb-2">
    <input
    className="form-control"
    type="search"
    placeholder="Search"
    name="searchQuary"
    onChange={this.handleSearchArea}>
    </input>
  </div>
</div>
<br/>
    <table className="table table-striped" id="table-to-xls">
          <thead>
            <tr>
              <th scope="col"> </th>
              <th scope="col">Registration Number</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">National ID number</th>
              <th scope="col">Gender</th>
              <th scope="col">Basic Salary</th>
              <th scope="col">Email</th>
              <th scope="col">Appointed Date</th>
              <th scope="col"></th>

              
            </tr>
          </thead>
          <tbody>

            {this.state.registered.map((registered, index)=>(
              <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{registered.RegistationNumber}</td>
              <td>{registered.FirstName} {registered.LastName}</td>
              <td>{registered.position}</td>
              <td>{registered.NationalIDNumber}</td>
              <td>{registered.Gender}</td>
              <td>{registered.BasicSalary}</td>
              <td>{registered.Email}</td>
              <td>{registered.AppointedDate}</td>
              
              <td>
              
              <a className="btn btn-primary" href={`/adminprofile/${registered._id}`}>
              <i className="fas fa-user"></i>&nbsp;View Profile
              </a>
              
              &nbsp;
              <a className="btn btn-warning" href={`/updateStf/${registered._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit Details
                </a>

                &nbsp;
                <a className="btn btn-danger" onClick={()=>this.onDelete(registered._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete Member
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
