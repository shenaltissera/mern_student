
import React,{useEffect,useState} from 'react'


import { Link } from 'react-router-dom';
import axios from 'axios';


const Courses = ({posts}) => {

  const[course,setCourse]  = useState([])

    return (

<div  class="text-center mt-3">
    
      <h1 className="text-center mt-3">All Courses List</h1>

      {posts.map((course, key) =>(


<div  class="d-flex justify-content-center">
<div className="col-12 col-md-7 col-lg-78 mx-0 mb-2">
 
<div className="card p-0 overflow-hidden h-100 shadow" >
  <div className=" text-center mt-3">
  <img src={`/uploads/${course.courseImage}`} alt="..."  class="img-fluid"   width="390"/> 
  <div className="card-body text-center">
  <h5 className="card-title">&nbsp; {course.courseName} </h5>
  <p className="card-title">&nbsp; 🔶Course Type: {course.courseType} </p>
  <p className="card-text">&nbsp; 🔶 Enroll Requirement: {course.requirement}</p>
  <p className="card-text">&nbsp;🔶 Course Duration: {course.duration}</p>
  <p className="card-text">&nbsp;💯 Certificate of completion </p>
  <Link to ={{
        pathname:`/course/${course._id}`
      }}>
    <button type="button" class="btn btn-primary"><i class="fas fa-search"></i>&nbsp;More</button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to ={{
        pathname:``
      }}>
    <button type="button" class="btn btn-dark"><i class="fas fa-shopping-cart"></i>&nbsp;Buy</button>
    </Link>
  </div>
  
  
  
</div>

</div>

</div>
</div>



)
       
)}

</div>

)
}

export default Courses











