import React, { Component } from 'react';
import axios from 'axios'
import { pdfDownload } from './pdfDownload'
import "./Regviewer.css"
import "./style.css"
import regmain from '../images/reg1.gif';


class viewRegistrations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationL: [],
      lecFname: "",
      lecLname:"",
      nic:"",
      dob:"",
      email: "",
      cNumber: "",
      address:"",
      Rdate:"",
      uploads: ""
    };
    this.navigateDownload = this.navigateDownload.bind(this);
    this.navigateDelete = this.navigateDelete.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:8000/getAlldata").then((res) => {
      console.log(res.data);
      this.setState({ registrationL: res.data.data });
      console.log("registrationL", this.state.registrationL);
    });
  }

  navigateDownload(event, uploads) {
    pdfDownload(event, uploads);
  }


  navigateDelete(event, id) {
    alert("Decline Registration")
    axios.delete(`/deleteRegistration/${id}`).then(res => {
      console.log(res.data)
      window.location.reload();
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    if (this.state.registrationL.length == 0) {
      return (
        <div className="research-content">
          <div className="research-alert">
            <h2> No registrations uploads available!</h2>
          </div>
        </div>);
    }

    return (
      <div className="">
        
        <div className="container">
        <center>
        <img src={regmain} style={{ width: '1200px', height: 'auto' }}></img>
        <br></br>
        <br></br>
          <h3 style={{fontFamily:'fantasy'}}><b>View Lecturer Registrations</b></h3>
          <h6><p>In this page administrator checking the lecturers' registrations. View their curriculum vitae, 
            and If they suitable for the institute they have been selected to the institute. their selected 
            confirmation E-mail will send. administrator can reject the registrations by checking curriculum vitae.</p></h6>
          <br></br>
          </center>
          
          {this.state.registrationL.length > 0 && this.state.registrationL.map((value, index) => (
            <div key={index} className="card mb-3" >
              <div className="card-content-research" style={{ border: '3px solid black'}}>
                <div className="p-3" style={{background:'#F5F5F5'}}>
                  <h4 style={{ fontSize: '20px',color: 'black'}}><p><b>Registration No : 0{index + 1}</b></p></h4>
                  <br></br>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> First Name :   {value.lecFname}</b></h5>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> Last Name :   {value.lecLname}</b></h5>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> NIC number :   {value.nic}</b></h5>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> Date Of Birth :   {value.dob}</b></h5>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> E-mail :   {value.email}</b></h5>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> Mobile Number :   {value.cNumber}</b></h5>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> Address :   {value.address}</b></h5>
                  <h5 style={{ fontSize: '16px',color: 'black' }}><b> Registration Date :   {value.Rdate}</b></h5>
                  <br></br>
                  <button className="btn btn-secondary" onClick={event => this.navigateDownload(event, value.uploads)}> <i class="fa fa-file" aria-hidden="true"></i> <b> View Curriculum Vitae</b></button>

                  <a href = {`/addLec/${value._id}`} className="btn btn-success" style={{ marginLeft: "2%" }} target="_blank" rel="noopener noreferrer"> <i class="fa fa-plus" aria-hidden="true" ></i><b> Add to the Institute</b></a>


                  <button className="btn btn-danger" style={{ marginLeft: "2%" }} onClick={event => this.navigateDelete(event, value._id)}><i class="fa fa-times" aria-hidden="true"></i> <b>Reject Registration </b></button>
                  
                  <a href = {`/lecConfirmationSend/${value._id}`} className="btn btn-warning" style={{ marginLeft: "2%" }}  target="_blank" rel="noopener noreferrer" > <i class="fas fa-envelope-square" ></i><b> Send E-mail</b></a>
                 <br></br>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default viewRegistrations;
