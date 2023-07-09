import React, { Component } from 'react'
import axios from 'axios'
import background from '../images/hall.png';



export default class leaveReq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lecId: "",
            name: "",
            beginDate: "",
            returnDate: "",
            reason: "",
            email: "",
            Cnumber: "",

        }
    }



    handleInputChange = (e) => {
        const { name, value } = e.target;



        this.setState({
            ...this.state,
            [name]: value
        })
    }
    onsubmit = (e) => {
        e.preventDefault();
        const { lecId, name, beginDate, returnDate, reason, email, Cnumber } = this.state;
        const data = {

            lecId: lecId,
            name: name,
            beginDate: beginDate,
            returnDate: returnDate,
            reason: reason,
            email: email,
            Cnumber: Cnumber


        }
        console.log(data)
        axios.post("/req/save", data).then((res) => {
            if (res.data.success) {
                alert("Your request send Succesfully!")
                this.setState({
                    lecId: "",
                    name: "",
                    beginDate: "",
                    returnDate: "",
                    reason: "",
                    email: "",
                    Cnumber: "",

                })
            }
        })
    }

    onClickDemo = () => {
        this.setState(
            {
                lecId: "LEC00899",
                name: "jayantha",
                beginDate: "2021-09-20",
                returnDate: "2021-09-23",
                reason: "funeral",
                email: "jay@gmail.com",
                Cnumber: "071556789",
            })
    }

    render() {
        return (
              <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                marginTop:'-45px',
                marginBottom:'-65px'
               
              }}>
                  <br></br>
                  <br></br>
            <div
                style={{
                    width: '1000px',
                    border: '2px solid black',
                    marginRight: '40px',
                    marginLeft: '440px',
                    background:'white',
                    
                    
                }}>

                <div className="container" >

                    <br></br>
                    <br></br>
                    <center><h3><b>Request for get leave</b></h3></center>
                    <br></br>
                    <center><p>In line with Institute policy relating to annual leave, all lecturers must submit a formal request for
                        annual leave. A separate request form must be submitted for each block of leave requested.
                        All requests are considered based on existing leave requests received from all lecturers, work
                        commitments and minimum academic staffing levels required.</p></center>

                    <form className="needs-validation" onSubmit={this.onsubmit}>

                        <br></br>
                        <div class="form-outline mb-4">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer ID</b></label>
                            <input 
                            className="form-control" 
                            name="lecId" 
                            value={this.state.lecId} 
                            onChange={this.handleInputChange} 
                            required />
                        </div>


                        <br></br>
                        <div class="form-outline mb-4">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer Name</b></label>
                            <input 
                            className="form-control" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleInputChange} 
                            required />
                        </div>
                        <br></br>




                        <div class="form-outline mb-4">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Date leaves to begin</b></label>
                            <input 
                            type="date" 
                            className="form-control" 
                            name="beginDate" 
                            value={this.state.beginDate} 
                            onChange={this.handleInputChange} 
                            required />
                        </div>


                        <br></br>
                        <div class="form-outline mb-4">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Date of the return to duties</b></label>
                            <input
                                type="date"
                                className="form-control"
                                name="returnDate"
                                value={this.state.returnDate}
                                onChange={this.handleInputChange}
                                required />
                        </div>



                        <div class="col-md-12">
                            <label style={{ fontSize: '14px' }} className="form-label"><b>Reason for the get leave</b></label>
                            <textarea 
                            className="form-control" 
                            name="reason" 
                            cols="25" rows="3" 
                            value={this.state.reason}
                             onChange={this.handleInputChange} 
                             required />
                        </div>
                        <br></br>



                        <div class="form-outline mb-4">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Email</b></label>
                            <input 
                            type="email"
                            className="form-control" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleInputChange} 
                            required />
                        </div>

                        <br></br>
                        <div class="form-outline mb-4">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Contact Number</b></label>
                            <input 
                            className="form-control" 
                            name="Cnumber" 
                            value={this.state.Cnumber} 
                            onChange={this.handleInputChange}
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            title="Must contain 10  numbers"
                            maxLength="10"
                            required />
                        </div>
                        <br></br>


                        <center><button 
                        type="submit" 
                        className="btn btn-primary">Send Request</button>
                        </center>
                        <br></br>
                    </form>
                </div><center><button className="btn btn-outline-danger btn-sm" onClick={this.onClickDemo}>Demo</button></center>
                <br></br>
                
            </div>
            <br></br>
            <br></br>
            </div>

        )
    }
}