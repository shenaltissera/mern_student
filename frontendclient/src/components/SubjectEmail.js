import React, { Component } from 'react'
import emailjs from "emailjs-com";

export default class SubjectEmail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stdName: '',
            userEmail: '',
            enKey: "EN" + this.rand(999, 99999)
        }
    }

    sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(
            "service_x3exyq6",
            "template_nu35ky8",
            e.target,
            "user_4Ty61vRi47OewtmEVjcGx"
        ).then(res => {
            console.log(res);
            alert("Successfully sent. please check your email for the code...");
        }).catch(err => console.log(err));

    }

    rand = (min, max) => {
        return Math.floor(Math.random() * max - min + 1) + min;
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: '45px', marginLeft: '50px' }}>
                    <h1>Add New Enrollment</h1>
                    <h5>Create a New Enrollment and Add to the System</h5>
                </div>
                <hr />
                <div className='container'>
                    <form className="row" onSubmit={this.sendEmail} ><br />
                        <div class="card" style={{ width: '50%', marginLeft: '310px' }}>
                            <h4 class="card-header">Get Your Enrollment Key</h4>
                            <div class="card-body">

                                <label>Your Email Address</label>
                                <input type="email" name="userEmail" className="form-control" />

                                <label> Message</label>
                                <input type='password' name="enKey" value={this.state.enKey} rows="2" className="form-control" style={{ textAlign: 'center' }} readOnly />
                                <center><p style={{ color: 'red' }}>An Email Form Royal EDU Will Receive You Shortly.</p></center>
                                <br></br>
                            </div>

                            <button type="submit" class="btn btn-success"><i class="far fa-envelope"></i>&nbsp;Send Email</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
