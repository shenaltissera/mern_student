import React, { Component } from 'react'
import emailjs from "emailjs-com";
import axios from 'axios'

export default class LecturerEmail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_18gdtkh",
      "template_udyfyyk",
      e.target,
      "user_ME7v5ffY74WUjxSxumOCr"
    ).then(res => {
      console.log(res);
      alert("Your email send successfully!");
    }).catch(err => console.log(err));

  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/reviewer/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({

          lecFname: res.data.post.lecFname,
          lecLname: res.data.post.lecLname,
          email: res.data.post.email,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.sendEmail} >

          <div class="card" style={{
            width: "100%", border: '2px solid black',
          }}>

            <center><h4 class="card-header"> <b>Send Confirmation E-mail To Lecturers</b></h4></center>
            <div class="card-body">

              <label><b>Name</b></label>
              <input name="name" className="form-control" value={this.state.lecFname + this.state.lecLname} required />
              <br></br>
              <label><b>E-mail</b></label>
              <input type="email" name="user_email" value={this.state.email} className="form-control" required />
              <br></br>
              <label><b>Message</b></label>
              <textarea name="message" rows="4" className="form-control" value="Congratulations! You have been selected by the Royal-Edu Institute 
              
              
              Be the best with the best lecturers. ICON assure you that your learning experience at ICON will be beyond expectation. 
              Well experienced, qualified and dedicated lecturers will guide you with practical corporate examples as they are prominent corporate professionals. 
              they have produced highest pass rates and many local and world prize winners across many professional examinations over the years. 
              The local and international exposure combined with many years of corporate cross cultural experience add further value to students in teaching.
              You will receive a wide range of knowledge which makes your learning journey a success.

" />

              <br></br>

              <center><button type="submit" class="btn btn-info" ><i class="fas fa-envelope-square"></i> <b>Send Email</b></button></center>

            </div>


          </div>
        </form>

      </div>
    )
  }
}
