import axios from 'axios';
import React, { useState } from 'react'

const AddApllicant = () => {

    const[NIC, setNIC] = useState("");
    const[First_Name,setFirst_Name] = useState("");
    const[Last_Name, setLastName] = useState("");
    const[Address, setAddress] = useState("");
    const[Email,SetEmail] = useState("");
    const[Student_category,setStudent_category] = useState("");
    const[User_Name,setUser_Name] = useState("");
    const[Password,setPassword] = useState("");

    const changeOnClick = e=>{

        const applicant={
            NIC,
            First_Name,
            Last_Name,
            Address,
            Email,
            Student_category,
            User_Name,
            Password
        };
        axios.post("http://localhost:8000/applicants/addApplicants",applicant)
        .then(res=>alert(res.data))
        .catch(err=>{console.log(err);
        });
    };
    return (
        <div>
            <div className="container">
          <center> 
              <h1>Become a Member of The Library</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">

            <br/>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="NIC">NIC NUmber</label>
            <input type="text" 
            onChange={e => setNIC(e.target.value)}
            className="form-control"  
            placeholder="NIC Number" />


            </div>

            <br/>

          <div className="form-group col-md-6">
            <label htmlFor="First_Name ">First Name</label>
            <input type="text"
             onChange={e => setFirst_Name(e.target.value)}
            className="form-control"  
            placeholder="First Name" />
            </div>
        </div>

            <br/>

        <div className="form-group col-md-6">
            <label htmlFor="Last_Name">Last Name</label>
            <input type="text"
            onChange={e => setLastName(e.target.value)} 
            className="form-control"  
            placeholder="Last Name" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Address">Address</label>
            <input type="text"
            onChange={e => setAddress(e.target.value)} 
            className="form-control"  
            placeholder="Address" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Email">Email</label>
            <input type="text"
            onChange={e => SetEmail(e.target.value)} 
            className="form-control"  
            placeholder="ABC@gmail.com" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Student_category">Applicant Category</label>
            <select  
            onChange={e => setStudent_category(e.target.value)} 
            className="form-control">
            <option selected>Ordinary Level</option>
            <option>Advance Level</option>
            <option>Course </option>
            <option>Staff</option>
            
  
            </select>
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="User_Name">User Name</label>
            <input type="text"
            onChange={e => setUser_Name(e.target.value)} 
            className="form-control"  
            placeholder="User Name" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Password">Password</label>
            <input type="password" 
            onChange={e => setPassword(e.target.value)} 
            className="form-control"  
            placeholder="Enter a Password" />
          </div>
        
            
         <br/>
        
        
       
        <button type="submit" className="btn btn-primary">Enter</button>
      </form>
    </center>
    
      </div>
        </div>
    )
}

export default AddApllicant
