import React, { Component } from 'react'
import axios from 'axios';

export default class Admineditttables extends Component {
     
    constructor(props){
        super(props);

        this.state={
            timetableID:'',
            subjectORcourse:'',
            monthANDdate:'',
            time:''
        }
    }
    
    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }
   
    onSubmit =(e) =>{
        e.preventDefault();
        
        const id = this.props.match.params.id;

        const {timetableID,subjectORcourse,monthANDdate,time} = this.state;

        const data ={
            timetableID:timetableID,
            subjectORcourse:subjectORcourse,
            monthANDdate:monthANDdate,
            time:time
        }

        console.log(data)


        axios.put(`/timetables/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("update success")
                this.setState(
                    {
                        timetableID:'',
                        subjectORcourse:'',
                        monthANDdate:'',
                        time:'' 
                    }
                )
            }
        })

    }
   
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/timetables/search/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    timetableID:res.data.table.timetableID,
                    subjectORcourse:res.data.table.subjectORcourse,
                    monthANDdate:res.data.table.monthANDdate,
                    time:res.data.table.time
                });

                console.log(this.state.timetable);
            }
        });
    }
   
    render() {
        return (
            <div>
                <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Update Time table</h1>
            <form className="needs-validation"  onSubmit={this.onSubmit}>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Time Table ID</label>
                    <input type="text"
                    className="form-control"
                    name="timetableID"
                    placeholder="enter Event Id"
                    value={this.state.timetableID}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Subject or Course</label>
                    <input type="text"
                    className="form-control"
                    name="subjectORcourse"
                    placeholder="enter Subject or Course"
                    value={this.state.subjectORcourse}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Month and Date</label>
                    <input type="text"
                    className="form-control"
                    name="monthANDdate"
                    placeholder="enter Month and Date"
                    value={this.state.monthANDdate}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Time</label>
                    <input type="text"
                    className="form-control"
                    name="time"
                    placeholder="enter Time"
                    value={this.state.time}
                    onChange={this.handleInputChange} required/>
                </div>

                <button className="btn btn-success" type="submit"  style={{marginTop:'15px'}}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Update Time table
                </button>



            </form>
            
        </div>
            </div>
        )
    }
}
