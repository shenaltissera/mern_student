import React, { Component } from 'react'
import axios from 'axios';

export default class updateAdmin extends Component {


    constructor(props){
        super(props);
        this.state={
            RegistationNumber:"",
            AppointedDate:"",
            FirstName:"",
            LastName:"",
            DateOfBirth:"",
            position:"",
            ContactNumber:"",
            NationalIDNumber:"",
            Gender:"",
            Address:"",
            BasicSalary:"",
            Email: "",
            WorkingExp: "",
            CarreerSum: "",
            EducationalQf: ""
        }
    }

    handleInputChange = (e)=>{
        const{name,value} =  e.target;

        this.setState({
            ...this.state,
            [name]:value,
        })
    }

    onSubmit = (e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;

        const{RegistationNumber,AppointedDate, FirstName, LastName,
            DateOfBirth, position, ContactNumber, NationalIDNumber, Gender, 
            Address, BasicSalary,Email,WorkingExp,CarreerSum,EducationalQf} = this.state;

        const data ={
            RegistationNumber:RegistationNumber,
            AppointedDate:AppointedDate,
            FirstName:FirstName,
            LastName:LastName,
            DateOfBirth:DateOfBirth,
            position:position,
            ContactNumber:ContactNumber,
            NationalIDNumber:NationalIDNumber,
            Gender:Gender,
            Address:Address,
            BasicSalary:BasicSalary,
            Email:Email,
            WorkingExp:WorkingExp,
            CarreerSum:CarreerSum,
            EducationalQf:EducationalQf
        }

        console.log(data)

        axios.put(`/register/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Profile Updated..!")
                window.location.replace('/staffhome');
                this.setState({
                    RegistationNumber:"",
                    AppointedDate:"",
                    FirstName:"",
                    LastName:"",
                    DateOfBirth:"",
                    position:"",
                    ContactNumber:"",
                    NationalIDNumber:"",
                    Gender:"",
                    Address:"",
                    BasicSalary:"",
                    Email: "",
                    WorkingExp: "",
                    CarreerSum: "",
                    EducationalQf: ""
                })
            }
        })
    }


    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/register/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    RegistationNumber:res.data.post.RegistationNumber,
                    AppointedDate:res.data.post.AppointedDate,
                    FirstName:res.data.post.FirstName,
                    LastName:res.data.post.LastName,
                    DateOfBirth:res.data.post.DateOfBirth,
                    position:res.data.post.position,
                    ContactNumber:res.data.post.ContactNumber,
                    NationalIDNumber:res.data.post.NationalIDNumber,
                    Gender:res.data.post.Gender,
                    Address:res.data.post.Address,
                    BasicSalary:res.data.post.BasicSalary,
                    Email: res.data.post.Email,
                    WorkingExp: res.data.post.WorkingExp,
                    CarreerSum: res.data.post.CarreerSum,
                    EducationalQf: res.data.post.EducationalQf
                });

                console.log(this.state.post);
            }
        });
    }






    render() {
        return (

             <div style={{marginLeft:100}}>

<a className="btn btn-success" href="/staffhome" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-home"></i>&nbsp;Home
                </a>
            <h1 className="h1">Update Profile</h1>

           <hr/>
          <form className="needs-validation" noValidate>
          
          <div className="form-group" style={{marginBottom:'15px'}}>
          <label for="formGroupExampleInput" class="form-label">Update Registration Number</label>
          <input type="text" 
          className="form-control" 
          name="RegistationNumber"
          value={this.state.RegistationNumber}
          onChange= {this.handleInputChange}/>
        </div>

        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update Appointed Date</label>
          <input type="text" 
          className="form-control" 
          name="AppointedDate"
          value={this.state.AppointedDate}
          onChange= {this.handleInputChange}/>
        </div>

        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update First Name</label>
          <input type="text" 
          className="form-control" 
          name="FirstName"
          value={this.state.FirstName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update Last Name</label>
          <input type="text" 
          className="form-control" 
          name="LastName"
          value={this.state.LastName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update Date Of Birth</label>
          <input type="text" 
          className="form-control" 
          name="DateOfBirth"
          value={this.state.DateOfBirth}
          onChange={this.handleInputChange}/>
        </div>

        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update position</label>
          <input type="text" 
          className="form-control" 
          name="position"
          value={this.state.position}
          onChange={this.handleInputChange}/>
        </div>

        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update Contact Number</label>
          <input type="text" 
          className="form-control" 
          name="ContactNumber"
          value={this.state.ContactNumber}
          onChange={this.handleInputChange}/>
        </div>

        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update National ID Number</label>
          <input type="text" 
          className="form-control" 
          name="NationalIDNumber"
          value={this.state.NationalIDNumber}
          onChange={this.handleInputChange}/>
        </div>

        
        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update Gender</label>
          <input type="text" 
          className="form-control" 
          name="Gender"
          value={this.state.Gender}
          onChange={this.handleInputChange}/>
        </div>

        
        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update Address</label>
          <input type="text" 
          className="form-control" 
          name="Address"
          value={this.state.Address}
          onChange={this.handleInputChange}/>
        </div>

        
        <div className="mb-3">
        <label for="formGroupExampleInput" class="form-label">Update BasicSalary</label>
          <input type="text" 
          className="form-control" 
          name="BasicSalary"
          value={this.state.BasicSalary}
          onChange={this.handleInputChange}/>
        </div>

        <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="Email"
              value={this.state.Email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Working Experience
            </label>
            <input
              type="text"
              className="form-control"
              name="WorkingExp"
              value={this.state.WorkingExp}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Carreer Summary
            </label>
            <input
              type="text"
              className="form-control"
              name="CarreerSum"
              value={this.state.CarreerSum}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Educational Quilification
            </label>
            <input
              type="text"
              className="form-control"
              name="EducationalQf"
              value={this.state.EducationalQf}
              onChange={this.handleInputChange}
            />
          </div>

        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> 
              <i className="far fa-check-square"></i>
              &nbsp;Update
        </button>

        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        )
    }
}