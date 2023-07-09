
import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import adminCourseDisplay from './adminCourseDisplay';


const DisplayAll = ({posts}) => {


  const [serachItem,setserachItem] =useState([]);
    const[course,setCourse]  = useState([])
    const deleteCourse = id=>{

        axios.delete(`http://localhost:8000/courses/${id}`)
      
        .then(res => alert(res.data))
           
                     setCourse(course.filter(elem => elem._id !== id ));
        }


    return (

        <div>
     


<div className="">
  <br></br>
  <h1>Manage All Course</h1>
  <div align="left">
    <p>The Course Currently Available In The Institue</p>
    <td>
                <input className="form-control" style={{width:'400px', marginLeft:'50px'}} type="search" placeholder="Search All Courses" onChange={event=>{setserachItem(event.target.value)}} ></input>
              </td>
    </div>
  <div align="right">
    <p></p>
  <Link to ={{
        pathname:`/add-course`
      }}>
        
       <button type="button" className="btn btn-info "  > <i class="fas fa-plus-circle"></i>&nbsp;Add New Course </button>
    </Link>
</div >
<div align="right">
  <br></br>
    <p>The Course Follow student In The Institue</p>
  <Link to ={{
        pathname:`/followed`
      }}>
        
       <button type="button"class="btn btn-dark" > <i class="fas fa-sign-out-alt"></i>&nbsp;Enroll Student List </button>
    </Link>
</div >
 
    <br></br>
    <br></br>
<table class="table">
  <thead>
    <tr class="text-info bg-dark">
     
     
      <th Scope="col">❌</th>
      <th scope="row">Course ID</th>
      <th scope="row">Course Name</th>
      <th scope="row">Course Description</th> 
      <th scope="row">Image</th>
      <th scope="row">More Information</th>
      <th scope="row">Delete Course</th>
      <th scope="row">Update Course</th>

    </tr>
    </thead>

  <tbody>


  {posts.filter((course)=>{
    if(serachItem==""){
      return course
    }else if(course.courseName.toLowerCase().includes(serachItem.toLowerCase())){
      return course
    }
  })
  
.map((course, index) =>(
 
 <tr key={index}>
 <th scope="row">{index+1}</th>
    
      <td>{course.courseID}</td>
      <td>{course.courseName}</td>
      <td>{course.description}</td>
    
     
      <td><div class="text-center">
    <img src={`/uploads/${course.courseImage}`} alt="..." style={{height: "55px" ,width: "84px" }}  />
    </div></td>

      <td> <Link to ={{
        pathname:`/course/${course._id}`
      }}>
       <button type="button" class="btn btn-success" style={{marginTop:'10px'}} > <i class="fas fa-search"></i>&nbsp;More</button>
    </Link></td>

      <td><button  onClick={() => deleteCourse(course._id)}    className="btn btn-danger" style={{marginTop:'10px'}}><i class="far fa-trash-alt">&nbsp;delete</i>
      </button></td>

 

        <td>
   

<Link to={`/Cupdate/${course._id}`} 

className="btn btn-warning" style={{marginTop:'13px'}}>

<i class="fas fa-edit"></i>&nbsp;Edit </Link>


        </td>
      
     
      
      

    </tr>
  
  ))}  
  
  </tbody>

</table>
</div>
          
       



       </div>
    )
}

export default DisplayAll
