
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';
import pic4 from '../images/emailPhone.jpeg';
import pic44 from '../images/E1.jpeg';
const StudentEmail = () => {
  function sendEmail(e) {


    e.preventDefault();

    emailjs.sendForm(
      "service_vpxw0tg",
      "template_nmvgp8s",
      e.target,
      "user_vorScJNN0PFeTqKO9dOgS"
    ).then(res => {
      console.log(res);
      alert("email send success");
    }).catch(err => console.log(err));
  }


  return (
    <div className="container">
      <form className="row" onSubmit={sendEmail} >
        <h1>  Admin Send An Email To The New Student</h1>
        &nbsp;&nbsp;
        <img src={pic44} style={{ width: '1290px', height: '100%', marginBottom: '20px' }}></img>
        &nbsp;
        <h1>  You must fill all the details of this one.....</h1>
        <div class="card">
          <h4 class="card-header">Send an Email</h4>
          <div class="card-body">
            <h6 class="card-title">Send an Email to the Student </h6>
            <label>Student Name</label>
            <input type="" name="stdname" className="form-control" />

            <label>Student Email Address</label>
            <input type="email" name="user_email" className="form-control" />

            <label> Message</label>
            <textarea name="message" rows="4" className="form-control" />

            <br></br>
          </div>

          <button type="submit" class="btn btn-dark"><i class="far fa-envelope"></i>&nbsp;Send Email</button>
        </div>
      </form>
      <br></br> <br></br>
      <img src={pic4} style={{ width: '1290px', height: '100%', marginBottom: '20px' }}></img>

    </div>

  );
};

export default StudentEmail;

