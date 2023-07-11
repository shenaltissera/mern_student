
import React,{useEffect,useState} from 'react'


import { Link } from 'react-router-dom';
import axios from 'axios';


const Courses = ({posts}) => {

  const [serachItem,setserachItem] =useState([]);

  const[course,setCourse]  = useState([])

    return (

    

<div  class="text-center mt-3">
<div className="container ">
  <div align="left">
<h4>👌 Now You Can Search Courses  😉</h4>
</div>
<div class="input-group">
  
  <input type="search" class="form-control rounded" placeholder="Search Courses" aria-label="Search" onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  
</div>
   </div> 
   <br></br><br></br>
      <h1 className="text-center mt-3">All Courses List</h1>
    
 
      {posts.filter((course)=>{
    if(serachItem==""){
      return course
    }else if(course.courseName.toLowerCase().includes(serachItem.toLowerCase())){
      return course
    }
  })

      .map((course, key) =>(

       
<div  class="d-flex justify-content-center">
<div className="col-12 col-md-7 col-lg-78 mx-0 mb-2">
 
<div className="card p-0 overflow-hidden h-100 shadow" >
  <div className=" text-center mt-3">
  <img src={`uploads/${course.courseImage}`} alt="..."  class="img-fluid"   width="390"/> 
  <div className="card-body text-center">
  <h4 className="card-title">&nbsp; {course.courseName} </h4>
  <p className="card-title">&nbsp; 🔶Course Type: {course.courseType} </p>
  <p className="card-text">&nbsp; 🔶 Enroll Requirement: {course.requirement}</p>
  <p className="card-text">&nbsp;🔶 Course Duration: {course.duration}</p>
  <p className="card-text">&nbsp;💯 Certificate of completion </p>
  <Link to ={{
        pathname:`/course1/${course._id}`
      }}>
    <button type="button" class="btn btn-primary"><i class="fas fa-search"></i>&nbsp;More</button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to ={{
        pathname:`/buycourse`
      }}>
    <button type="button" class="btn btn-dark"><i class="fas fa-shopping-cart"></i>&nbsp;Buy</button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to ={{
        pathname:`/log`
      }}>
    <button type="button" class="btn btn-danger">&nbsp;Enroll</button>
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











