import React, { Component } from 'react';
import axios from 'axios';
import adminpic from '../images/stdAdminPic.png';
import search from '../images/searchStd.jpg';
import girl from '../images/orange.jpg';
export default class mainhome extends Component {
  constructor(props){
    super(props);
  
    this.state ={
      posts:[]
      };
    }
    
componentDidMount(){
  this.retrievePosts();
}


    retrievePosts(){
      axios.get("http://localhost:8000/approved").then(res => {
        if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
          });
          console.log(this.state.posts)
        }
      });
    }
  
    onDelete = (id) =>{
      axios.delete(`/approved/delete/${id}`).then((res) =>{
          alert("Deleted Successfully");
          this.retrievePosts();
      })
  }




    filterData(posts,searchKey){
        const result = posts.filter((post) =>
        post.registrationNo.toLowerCase().includes(searchKey)||
        post.student_full_name.toLowerCase().includes(searchKey)||
        post.Name_with_initials.toLowerCase().includes(searchKey)||
        post.nic.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})
    }
  
  handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value
  
      axios.get("/approved").then(res => {
          if(res.data.success){
           this.filterData(res.data.existingPosts,searchKey) 
          }
        });
  }
  


    render() {
      return (
        <div>
         <p class="fs-4">Student Management System</p>
         <div className="container">
                <h1><p class="fs-1"> Welcome to Student <img src={adminpic} style={{width:'600px' , height:'100%'}}></img> </p></h1>
          </div> 
          <div className="container">
                <img src={girl} style={{width:'1400px' , height:'100%'}}></img> 
          </div> 


        <h1> <p class="fs-2"> Display Student Details</p></h1>
        <div>
                <h1><p class="fs-3"> You can search.. <img src={search} style={{width:'80px' , height:'100%'}}></img> </p></h1>
          </div>
          <table>
            <tr>
              <td>
                <input className="form-control" style={{width:'700px'}} type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}></input>
              </td>
              
              <td>
                <button className="btn btn-dark" style={{marginLeft:'33px'}}><a href="/studentapplications" style={{textDecoration:'none',color:'white'}}> STUDENT APPLICATIONS </a></button>
              </td>
              <td>
                {/* <button className="btn btn-dark" style={{marginLeft:'33px'}}><a href="/registration" style={{textDecoration:'none',color:'white'}}> Registration Form</a></button> */}
              </td>
              
            </tr>
          </table>
            
          
          

        <table className="table table-success table-striped table-bordered" style={{marginTop:'45px'}}>
     

          <thead>
              <tr>
              <th scope = "col">INDEX NO</th>
              <th scope = "col">REGISTRATION NUMBER</th>
               <th scope = "col">STUDENT FULL NAME</th>
                <th scope = "col">DATE OF ADDMISSION </th>
                <th scope = "col"> CLASS NAME</th>
                <th scope = "col"> COURSE NAME</th>
                <th scope = "col"> NIC</th>
                <th scope = "col"> EMAIL</th>
                <th scope = "col">TELEPHONE </th>          
                <th scope = "col"> BANK NAME</th>
                <th scope = "col"> PAYMENT DATE</th>
                <th scope = "col"> ACTION</th>
                
              </tr>
          </thead>
        
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr>
            <td scope="row">{index+1}</td>
            <td>{posts.registrationNo}</td>
            <td>{posts.student_full_name}</td>
            <td>{posts.date_of_addmission}</td>
            <td>{posts.class_name}</td>
            <td>{posts.course_name}</td>
            
            <td>{posts.nic}</td>
            <td>{posts.email}</td>
           
            <td>{posts.telephone}</td>
            
            
            <td>{posts.bank_name}</td>
           
            <td>{posts.payment_date}</td>
  
                <td>
  
                    <a className="btn btn-dark" href= {`/stdupdateedit/${posts._id}`}>
                    <i className="fas fa-edit" ></i>&nbsp;EDIT
                    </a>&nbsp;&nbsp;&nbsp;
                    
  
                 
                <a className="btn btn-warning"  href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>&nbsp;&nbsp;&nbsp;
                
                
  
                    <a className="btn btn-dark" href= {`/view/${posts._id}`}>
                    <i className="fas fa-edit" ></i>&nbsp;VIEW
                    </a>&nbsp;&nbsp;&nbsp;
                    
  
                
                
  
                    <a className="btn btn-dark" href= {`/profile/${posts._id}`}>
                    <i className="fas fa-edit" ></i>&nbsp;PROFILE
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
  
  
