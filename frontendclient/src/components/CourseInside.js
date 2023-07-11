import React from "react";
import "./course.css";
import { Link } from 'react-router-dom';
export const CourseInside = () => {
  return (
    <div>
      <form method="" action="" id="">
      <br></br> <br></br>
          <div className="container"><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course Name - IT1100 </h1></div>
        <br></br>
        <h4>
        <br></br>
          <br></br>
          <i class="fas fa-clipboard"></i>&nbsp;&nbsp;Announcements Forum  <br></br><br></br>
          <i class="fas fa-clipboard"></i>&nbsp;&nbsp;Questions related to lecturesForum  <br></br><br></br>
          <i class="fas fa-clipboard"></i>&nbsp;&nbsp;Questions related to Final ProjectForum  <br></br>

          

        </h4>

      
          <br></br>
          <br></br>

<h3>Notice </h3>
  <br></br>
 <h5>Dear students,

Some students have complained that the Video content from 3:12 is not working. In that section, I've explained the basics in PHP like PHP coding structure, variables, and comments. If it's not working for you, please ignore that part as those parts are already explained in the PHP lecture recording too. </h5>
<br></br>
          <hr
        style={{
            color: "forestgreen",
            backgroundColor: "#228b22",
            height: "50px"
        }}
    />

        

      </form>

    

      <form method="" action="#" id="#">
       
          <h3>Submit Your Assignment </h3>
          <br></br>

          <h4>Lab Submission</h4>
          <h6>Submit your answers of lab practical 5 here in the given link</h6>
          <h6>Create a folder named with your registration number (IT20XXXXX) and save your CSS, HTML, js, and image files inside that. Then zip the folder and upload it to the below link. </h6>
          <div className="form-group files">
          <input type="file" className="form-control" multiple />
        </div>

        <button class="btn btn-success"> Submit</button>
      </form>


      <hr
        style={{
            color: "forestgreen",
            backgroundColor: "#228b22",
            height: "50px"
        }}
    />


      <form method="" action="#" id="#">
        <div className="form-group files">
          <h3>Submit Your Assignment </h3>
          <input type="file" className="form-control" multiple />
        </div>

        <button class="btn btn-success"> Submit</button>
      </form>
    
      <br></br>
          <br></br>    
        
          <br></br>
          <br></br>
      <Link to ={{
        pathname:`/course}`
      }}>
    <button type="button" class="btn btn-primary">back</button>
    </Link> 
    </div>
  );
};

export default CourseInside;
