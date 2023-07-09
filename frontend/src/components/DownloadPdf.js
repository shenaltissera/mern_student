import React, { Component } from 'react'
import axios from 'axios'
import { saveAs } from 'file-saver';

export default class DownloadPdf extends Component {

    constructor(props){
        super(props);
        this.state={
            lecId:"",
            lecFname:"",
            lecLname:"",
            nic:"",
            dob:"",
            email:"",
            cNumber:"",
            address:"",
            summary:"",
            username:"",
            password:"",
            aQualification:"",
            Rmembership:"",
            Rdate:""
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }


    handleInputChange = (e)=>{
        const{name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;
        const {lecId,lecFname,lecLname,nic,dob,email,cNumber,address,username,password,summary,aQualification,Rmembership,Rdate} = this.state;

        const data ={
            lecId:lecId,
            lecFname:lecFname,
            lecLname:lecLname,
            nic:nic,
            dob:dob,
            email:email,
            cNumber:cNumber,
            address:address,
            username:username,
            password:password,
            summary:summary,
            aQualification:aQualification,
            Rmembership:Rmembership,
            Rdate:Rdate
        }



        console.log(data)

        axios.put(`/post/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Details Updated Succesfully!")
                this.setState({
            lecId:"",
            lecFname:"",
            lecLname:"",
            nic:"",
            dob:"",
            email:"",
            cNumber:"",
            address:"",
            username:"",
            password:"",
            summary:"",
            aQualification:"",
            Rmembership:"",
            Rdate:""
                })
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    lecId:res.data.post.lecId,
                    lecFname:res.data.post.lecFname,
                    lecLname:res.data.post.lecLname,
                    nic:res.data.post.nic,
                    dob:res.data.post.dob,
                    email:res.data.post.email,
                    cNumber:res.data.post.cNumber,
                    address:res.data.post.address,
                    username:res.data.post.username,
                    password:res.data.post.password,
                    summary:res.data.post.summary,
                    aQualification:res.data.post.aQualification,
                    Rmembership:res.data.post.Rmembership,
                    Rdate:res.data.post.Rdate
                });

                console.log(this.state.post);
            }
        });
    }

    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'Lecturer.pdf');
          })
      }
    
    render() {
        return (
            <div className ="container">
                
<center><h1><b><u>Lecturer Details</u></b></h1></center>
            
    <div className = "container"></div>

    <div className="mb-3">
<label className="form-label"><b>Lecturer ID</b></label>
<textarea type="text" className="textField" name="lecId" cols="25" rows="2"value={this.state.lecId} onChange={this.handleInputChange} readOnly/>
</div>
            <div className="mb-3">
<label  className="form-label"><b>First Name</b></label>
<textarea type="text" className="textField" name="lecFname" cols="25" rows="2"value={this.state.lecFname} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>Last Name</b></label>
<textarea type="text" className="textField" name="lecLname" cols="25" rows="2"value={this.state.lecLname} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>NIC number</b></label>
<textarea type="text" className="textField" name="nic" cols="25" rows="2"value={this.state.nic} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>Date of birth</b></label>
<textarea type="text" className="textField" name="dob" cols="25" rows="2"value={this.state.dob} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>E-mail</b></label>
<textarea type="text" className="textField" name="email" cols="25" rows="2"value={this.state.email} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>Contact number</b></label>
<textarea type="text" className="textField" name="cNumber" cols="25" rows="2"value={this.state.cNumber} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>Address</b></label>
<textarea type="text" className="textField" name="address" cols="25" rows="2" value={this.state.address} onChange={this.handleInputChange}readOnly/>
</div> 

<div className="mb-3">
<label className="form-label"><b>Username</b></label>
<textarea type="text" className="textField" name="username" cols="25" rows="2"value={this.state.username} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label className="form-label"><b>Password</b></label>
<textarea type="text" className="textField" name="password" cols="25" rows="2"value={this.state.password} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>Career Summary</b></label>
<textarea type="text" className="textField" name="summary" cols="25" rows="5" value={this.state.summary} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label"><b>Acedemic qualifications</b></label>
<textarea type="text" className="textField" name="aQualification" cols="25" rows="4"  value={this.state.aQualification} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label className="form-label"><b>Research interests and memberships</b></label>
<textarea type="text" className="textField" name="Rmembership" cols="25" rows="4" value={this.state.Rmembership} onChange={this.handleInputChange}readOnly/>
</div>

<div className="mb-3">
<label  className="form-label">Registration Date</label>
<textarea type="text" className="textField" name="Rdate" cols="25" rows="2" value={this.state.Rdate} onChange={this.handleInputChange}readOnly/>
</div>


<br></br>

<center><button className="btn btn-primary" onClick={this.createAndDownloadPdf}>download</button></center>
</div>
        )
    }
}