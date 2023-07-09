import React, { Component } from 'react'
import axios from 'axios';

export default class Editspecialevent extends Component {


    constructor(props){
        super(props);
        this.state={
            eventID:"",
            eventname:"",
            venue:"",
            date:"",
            time:""
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
        const id =  this.props.match.params.id;
        const {eventID,eventname,venue,date,time} = this.state;

        const data ={
            eventID:eventID,
            eventname:eventname,
            venue:venue,
            date:date,
            time:time
        }
          console.log(data)

          axios.put(`/events/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Special event updated succssfully!")
                this.setState(
                    {
                        eventID:"",
                        eventname:"",
                        venue:"",
                        date:"",
                        time:"" 
                    }
                )
            }
        })



    }

    componentDidMount(){

        const id =  this.props.match.params.id;
 
         axios.get(`/events/search/${id}`).then((res)=>{
             if(res.data.success){
                 this.setState({
                     eventID:res.data.event.eventID,
                     eventname:res.data.event.eventname,
                     venue:res.data.event.venue,
                     date:res.data.event.date,
                     time:res.data.event.time
                 });
             
                 console.log(this.state.specialevent);
             
             }
 
         });
 
     }




    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Update special event</h1>
            <form className="needs-validation" onSubmit={this.onSubmit} >
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Event ID</label>
                    <input type="text"
                    className="form-control"
                    name="eventID"
                    placeholder="enter Event Id"
                    value={this.state.eventID}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Event Name</label>
                    <input type="text"
                    className="form-control"
                    name="eventname"
                    placeholder="enter Event Name"
                    value={this.state.eventname}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Venue</label>
                    <input type="text"
                    className="form-control"
                    name="venue"
                    placeholder="enter Venue"
                    value={this.state.venue}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Date</label>
                    <input type="text"
                    className="form-control"
                    name="date"
                    placeholder="enter Date"
                    value={this.state.date}
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

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
                    <i className="far fa-check-square"></i>
                    &nbsp;Update
                </button>



            </form>
            
        </div>
        )
    }
}
