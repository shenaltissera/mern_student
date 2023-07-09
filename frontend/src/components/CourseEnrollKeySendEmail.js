
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';
const CourseEnrollKeySendEmail = () => {
  function sendEmail(e) {

    
    e.preventDefault();

    emailjs.sendForm(
      "service_y5jb5ry",
      "template_yb2oe3e",
      e.target,
      "user_IwJAngoN9wf0bUp6poLzM"
    ).then(res=>{
        console.log(res);
        alert("email send succes");
    }).catch(err=> console.log(err));
  }
  
  return (
    <div>
     <form className="row" onSubmit={sendEmail} >

<div class="card">
  <h4 class="card-header"> 📢 Send Enrollment Key To Students</h4>
  <div class="card-body">
    <h6 class="card-title"> 📧 Send Email :</h6>
     <label>name</label>
        <input type="" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email"   className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />
     
    <br></br>
    </div>
     
        <button type="submit" class="btn btn-secondary" ><i class="far fa-envelope"></i>&nbsp;Send Email</button>
        </div>
 


</form>
      <br></br>
      <Link  to="/followed" type="button" class="btn btn-success"><i class="fas fa-arrow-circle-left"></i>&nbsp;Back to List</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     
    </div>
    
  );
};

export default CourseEnrollKeySendEmail;

