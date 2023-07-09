import React ,{useState,useEffect,useRef  }from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const Course =  (props) => {
   
    const[courseID , setCourseID] = useState("");
    const[courseName , setCourseName] = useState("");
    const [courseImage , setFileName]= useState("");
    const[courseType , setcourseType] = useState("");
    const[description , setDescription] = useState("");
    const[requirement , setRequirement] = useState("");
    const[price , setprice] = useState("");
    const[duration , setDuration] = useState("");
    const[message, setMessage] =useState('');

   useEffect(() => {
        axios.get(`http://localhost:8000/courses/${props.match.params.id}`)

        .then(res =>[

            setCourseID(res.data.courseID),
            setCourseName(res.data.courseName),
            setcourseType(res.data.setcourseType),
            setDescription(res.data.description),
            setRequirement(res.data.requirement),
            setprice(res.data.price),
            setFileName(res.data.courseImage),
            setDuration(res.data.duration)


        ])

        .catch(error =>console.log(error))
          
         },[props]);

        function pdfGenerat(){
          var doc = new jsPDF('landscape', 'px', 'a4', 'false');
          
          doc.autoTable({
                 
                  body: [
                      [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
                    ],
                  })
              autoTable(doc, { html: '#cusdet' })
             doc.save('course.pdf')
        
                }
          

    return (



        <MainContainer  >
  
       <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course Information&nbsp;&nbsp;<i class="far fa-bookmark"></i></h1>

      
       <br></br>
       <table class="table table-borderless"   >
  <thead >
    <tr>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <th scope="col"><img src={`/uploads/${courseImage}`} alt="..." style={{height: "400px" ,width: "580px" }}  /></th>
   
     
    </tr>
  </thead>
  <tbody id="cusdet" >
    <tr>
      <th  scope="row"><i class="fas fa-portrait"></i>&nbsp; Course ID</th>
      <td>{courseID}</td>
      
    </tr>
    <tr>
      <th scope="row"><i class="fas fa-book-open"></i>&nbsp;Course Name</th>
      <td>{courseName}</td>
    
    </tr>
    <tr>
      <th scope="row"><i class="fas fa-comment-medical"></i> &nbsp; Description</th>
    <th> {description}</th>
      
    </tr>
    <tr>
      <th scope="row"><i class="fas fa-key"></i>&nbsp; Requirement</th>
      <td>{requirement}</td>
    
    </tr>
    <tr>
      <th scope="row"><i class="far fa-credit-card"></i>&nbsp; Price</th>
      <td>Rs{price}</td>
    
    </tr>
    <tr>
      <th scope="row"><i class="far fa-calendar-times"></i>&nbsp; Duration</th>
      <td scope="row" >{duration}</td>
    
    </tr>
  </tbody>

       <br></br>

       <button className="btn btn-danger btn-sm"  onClick={pdfGenerat}>Generate PDF</button>
       </table>
       <br></br>
   <br></br>
  
 
             <br></br>
   
             <Link  to="/CourseInside" type="button" class="btn btn-dark" ><i class="fas fa-arrow-circle-left"></i>&nbsp;Course Inside</Link><br></br>

    <br></br>

      <Link  to="/" type="button" class="btn btn-success"><i class="fas fa-arrow-circle-left"></i>&nbsp;Back</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     







        </MainContainer>
    )



}







export default Course

const  MainContainer = styled.div`

  margin: 7rem 0;
  padding:4rem 14rem;
  h2{

  text-align:center;
  font-weight:
}
h4{
    color:red

}

`;
