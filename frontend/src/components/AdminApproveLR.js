import React, { Component } from 'react'
import axios from 'axios'

export default class AdminApproveLR extends Component {
   
    constructor(props){
        super(props);

        this.state={
            lecId:"",
            name:"",
            beginDate:"",
            returnDate:"",
            reason:"",
            email:"",
            Cnumber:"",
            PayORnoPay:""
        }
    }
    
    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }
   
    onSubmit = (e) =>{
        e.preventDefault();

        const {lecId,name,beginDate,returnDate,reason,email,Cnumber,PayORnoPay} = this.state;

        const data ={
            lecId:lecId,
            name:name,
            beginDate:beginDate,
            returnDate:returnDate,
            reason:reason,
            email:email,
            Cnumber:Cnumber,
            PayORnoPay:PayORnoPay
        }
          console.log(data)

          axios.post(`/approveleaves/save`,data).then((res)=>{
            if(res.data.success){
                alert("New Approved Leave added succssfully!")
                this.setState(
                    {
                        lecId:"",
                        name:"",
                        beginDate:"",
                        returnDate:"",
                        reason:"",
                        email:"",
                        Cnumber:"",
                        PayORnoPay:""
                    }
                )
            }
        })



    }
   
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/leaverequests/search/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    lecId:res.data.lrequets.lecId,
                    name:res.data.lrequets.name,
                    beginDate:res.data.lrequets.beginDate,
                    returnDate:res.data.lrequets.returnDate,
                    reason:res.data.lrequets.reason,
                    email:res.data.lrequets.email,
                    Cnumber:res.data.lrequets.Cnumber

                });

                console.log(this.state.timetable);
            }
        });
    }
   
   
   
    render() {
        return (
            <div>
                 <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Approved Leave requests</h1>
            <form className="needs-validation" onSubmit={this.onSubmit}>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Lecturer ID</label>
                    <input 
                    className="form-control"
                    name="lecId"
                    placeholder="enter Lecturer Id"
                    value={this.state.lecId}
                    onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Lecturer Name</label>
                    <input 
                    className="form-control"
                    name="name"
                    placeholder="enter Event Name"
                    value={this.state.name}
                    onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Begin Date</label>
                    <input 
                    className="form-control"
                    name="beginDate"
                    placeholder="enter begin Date"
                    value={this.state.beginDate}
                    onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Return Date</label>
                    <input 
                    className="form-control"
                    name="returnDate"
                    placeholder="enter return Date"
                    value={this.state.returnDate}
                    onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Reason</label>
                    <input 
                    className="form-control"
                    name="reason"
                    placeholder="enter reason"
                    value={this.state.reason}
                    onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>email</label>
                    <input 
                    className="form-control"
                    name="email"
                    placeholder="enter email"
                    value={this.state.email}
                    onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Card number</label>
                    <input 
                    className="form-control"
                    name="Cnumber"
                    placeholder="enter Cnumber"
                    value={this.state.Cnumber}
                    onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Pay or No Pay</label>
                    <select className="form-select" name="PayORnoPay" value={this.state.PayORnoPay} onChange={this.handleInputChange} required >
                      <option selected disabled value="">Choose...</option>
                      <option>No Pay</option>
                      <option>Pay</option>
                    </select>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
                    <i className="far fa-check-square"></i>
                    &nbsp;Approved Leave
                </button>



            </form>
            
        </div>
            </div>
        )
    }
}
