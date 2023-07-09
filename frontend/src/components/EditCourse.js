import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';


const EditCourse = props => {


    const[courseID , setCourseID] = useState("");
    const[courseName , setCourseName] = useState("");
    const[courseType , setcourseType] = useState("");
    const[description , setDescription] = useState("");
    const[requirement , setRequirement] = useState("");
    const[price , setprice] = useState("");
    const[duration , setDuration] = useState("");
    const[message, setMessage] =useState('');



    const changeOnClick = e =>{
     
        e.preventDefault();

        const courses ={
         
            courseID,
            courseName,
            courseType,
            description,
            requirement,
            price,
            duration

        };

        setCourseID("");
        setCourseName("");
        setcourseType('');
        setDescription('');
        setRequirement('');
        setprice('');
        setDuration('');


        axios.put(`http://localhost:8000/courses/update/${props.match.params.id}`, courses)
        .then (res =>
          alert("Course  Updated!")
          (res.data))
        .catch(err =>{
            console.log(err);
        });
     };

     useEffect(() => {
        axios.get(`http://localhost:8000/courses/${props.match.params.id}`)

        .then(res =>[

            setCourseID(res.data.courseID),
            setCourseName(res.data.courseName),
            setcourseType(res.data.courseType),
            setDescription(res.data.description),
            setRequirement(res.data.requirement),
            setprice(res.data.price),
            setDuration(res.data.duration)


        ])

        .catch(error =>console.log(error))
          
         },[]);




    return (
        <AddCourseContainer>
             <div className="container">
             <h1>Update Course </h1>
             
             <span className="message">{message}</span>
             <form onSubmit={changeOnClick} encType="mltipart/form-data">

  <div class="mb-3">
    <label htmlFor="courseID" class="form-label">Course ID</label>
    <input type="" class="form-control" placeholder="Enter Course ID"
      onChange={e => setCourseID(e.target.value)}
       value={courseID}
    />
  
  </div>

  <div class="mb-3">
    <label htmlFor="courseName" class="form-label">Course Name</label>
    <input type="" class="form-control" placeholder="Enter Course Name" 
        onChange={e => setCourseName(e.target.value)}
        value={courseName}/>
  </div>

  <div class="form-outline">
          
          <label htmlFor="courseType" class="form-label">Course Type</label>
              <input type=""  class="form-control" placeholder="Course Type.." 
                onChange={e => setcourseType(e.target.value)}
                value={courseType}
          
                  />
            </div>

 <div class="form-group">
    <label htmlFor="description">Course Description</label>
    <textarea className="form-control"  rows="5"  
        onChange={e => setDescription(e.target.value)}
        value={description}
        ></textarea>
  </div>

    
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
          
    <label htmlFor="requirement" class="form-label">Requirement</label>
        <input type=""  list="requirement" class="form-control" placeholder="complete  After A/L or After O/L" 
            onChange={e => setRequirement(e.target.value)}
            value={requirement}
            />
             <datalist id="requirement">
                                <option value="Advanced Level"></option>
                                <option value="Ordinary Level "></option>
                              
                            </datalist>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label htmlFor="category" class="form-label">Price</label>
        <input type="" class="form-control"  placeholder="price"
        
        onChange={e => setprice(e.target.value)}
        value={price}
        />
        
      </div>
    </div>
  </div>

  <div class="form-outline">
          
          <label htmlFor="duration" class="form-label">Course Dueration</label>
              <input type=""   list="duration"   class="form-control" placeholder="Course Dueration" 
                 onChange={e => setDuration(e.target.value)}
                 value={duration}
          
                  />
                    <datalist id="duration">
                                <option value="03 Months"></option>
                                <option value="06 Months "></option>
                                <option value="12 Months "></option>
                                <option value="1 Year "></option>
                                
                            </datalist>
            </div>



  
  <div className="container">
    <br></br>
  <button type="submit"  class="btn btn-success">Update Course </button>
  </div>

</form>
<div align="right">
    <p></p>
  <Link to ={{
        pathname:`/a`
      }}>
        
       <button type="button" className="btn btn-info "  > <i class="fas fa-arrow-circle-left"></i>&nbsp;Back to All Course </button>
    </Link>
</div >



</div>


</AddCourseContainer>
    )
}

export default EditCourse;


const AddCourseContainer =  styled.div`
    
    
margin:3rem auto;
padding :4rem;
width:50.85rem;



.btn-primary{
    margin-top : 6rem;
    border:none;
}
.message{
    font-weight:900;
    color:tomato;
    padding: 1rem 1rem 1rem 0;
}
h1{
    font-weight:1000;
    color :red;
}

`; 
