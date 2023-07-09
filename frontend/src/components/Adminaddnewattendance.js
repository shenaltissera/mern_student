import React, { Component } from 'react'
import axios from 'axios'

export default class Adminaddnewattendance extends Component {
   
    constructor(props){
        super(props);

        this.onChangeattendanceID = this.onChangeattendanceID.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangemonth = this.onChangemonth.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onfill = this.onfill.bind(this);
        
        this.state={
            attendanceID:"ATT" + this.randomid(999, 99999),
            name:'',
            month:'',
            category:''
        
        }
    }

    onfill() {
        this.setState({
            attendanceID:"L001",
            name:"Kamal perera",
            month:"September",
            category:'Lecturer'
        });
      }


    onChangeattendanceID(e) {
        this.setState({ attendanceID: e.target.value })
    }

    onChangename(e) {
        this.setState({ name: e.target.value })
    }

    onChangemonth(e) {
        this.setState({ month: e.target.value })
    }

    onChangecategory(e) {
        this.setState({ category: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            attendanceID: this.state.attendanceID,
            name: this.state.name,
            month: this.state.month,
            category: this.state.category,
        };

        axios.post('/attendance/insert', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        
        alert("Insert Successfull!")
        this.setState({ attendanceID:'',
        name:'',
        month:'',
        category:''})
    }

    
    randomid = (min, max) => {
        return Math.floor(Math.random() * max - min + 1) + min;
    }
   
    render() {
        return (           
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Mark  Attendaces</h1>
            <form className="needs-validation" onSubmit={this.onSubmit}>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>attendance ID</label>
                    <input type="text"
                    className="form-control"
                    name="attendanceID"
                    placeholder="enter attendance Id"
                    value={this.state.attendanceID}
                    onChange={this.onChangeattendanceID} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Full Name</label>
                    <input type="text"
                    className="form-control"
                    name="name"
                    placeholder="enter Full Name"
                    value={this.state.name}
                    onChange={this.onChangename} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Month</label>
                    <input type="text"
                    className="form-control"
                    name="month"
                    placeholder="enter month"
                    value={this.state.month}
                    onChange={this.onChangemonth} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Category</label>
                    <input type="text"
                    className="form-control"
                    name="category"
                    placeholder="enter category"
                    value={this.state.category}
                    onChange={this.onChangecategory} required/>
                </div>


                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
                    <i className="far fa-check-square"></i>
                    &nbsp;Mark attendance
                </button>



            </form>
            <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onfill}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Fill the form
          </button>
        </div>
          
        )
    }
}
