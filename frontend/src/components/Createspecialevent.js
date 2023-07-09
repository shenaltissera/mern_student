import React, { Component } from 'react'
import axios from 'axios';
export default class Createspecialevent extends Component {

    constructor(props){
        super(props);

        this.onChangeeventID = this.onChangeeventID.bind(this);
        this.onChangeeventname = this.onChangeeventname.bind(this);
        this.onChangevenue = this.onChangevenue.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangetime = this.onChangetime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onfill = this.onfill.bind(this);

        this.state={
            eventID: "SE" + this.randomid(999, 99999),
            eventname:'',
            venue:'',
            date:'',
            time:''
        
        }
    }

    onfill() {
        this.setState({
            eventID: "SE" + this.randomid(999, 99999),
            eventname: "Christmas party",
            venue: "Hotel grandiza",
            date :"2021-12-27",
            time: "18.30"
        });
      }


    onChangeeventID(e) {
        this.setState({ eventID: e.target.value })
    }

    onChangeeventname(e) {
        this.setState({ eventname: e.target.value })
    }

    onChangevenue(e) {
        this.setState({ venue: e.target.value })
    }

    onChangedate(e) {
        this.setState({ date: e.target.value })
    }

    onChangetime(e) {
        this.setState({ time: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        
        const userObject = {
            eventID: this.state.eventID,
            eventname: this.state.eventname,
            venue: this.state.venue,
            date: this.state.date,
            time: this.state.time
        };

        axios.post('/events/insert', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        
        alert("New special event added succssfully!")
        this.setState({ eventID:'',
        eventname:'',
        venue:'',
        date:'',
        time:''})
    }

    randomid = (min, max) => {
        return Math.floor(Math.random() * max - min + 1) + min;
    }


    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Add new special event</h1>
            <form className="needs-validation" onSubmit={this.onSubmit}>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Event ID</label>
                    <input 
                    className="form-control"
                    name="eventID"
                    placeholder="enter Event Id"
                    value={this.state.eventID}
                    onChange={this.onChangeeventID} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Event Name</label>
                    <input 
                    className="form-control"
                    name="eventname"
                    placeholder="enter Event Name"
                    value={this.state.eventname}
                    onChange={this.onChangeeventname} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Venue</label>
                    <input 
                    className="form-control"
                    name="venue"
                    placeholder="enter Venue"
                    value={this.state.venue}
                    onChange={this.onChangevenue} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Date</label>
                    <input type="date"
                    className="form-control"
                    name="date"
                    placeholder="enter Date"
                    value={this.state.date}
                    onChange={this.onChangedate} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Time</label>
                    <input 
                    className="form-control"
                    name="time"
                    placeholder="enter Time"
                    value={this.state.time} 
                    onChange={this.onChangetime} required/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
                    <i className="far fa-check-square"></i>
                    &nbsp;save
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
