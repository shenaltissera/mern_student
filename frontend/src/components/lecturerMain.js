import React, {Component} from 'react'
import background from '../images/home34.png';

export default class lecturerMain extends Component{
    render(){
        return(
            <div style={{marginTop:'-45px',backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
                   <center>

                   <br></br>
                       <div className = "headname">
                           <h1>LECTURER MANAGEMENT ADMIN DASHBOARD</h1>
                       </div>
                       
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn2">
                      <a href = "/viewRegistrations" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Check Lecturers' Registrations</a>
                       </div>
                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn2">
                     <a href = "/lechome" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">All Lecturers' Details</a>
                       </div>
                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn2">
                      <a href = "/addLec" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Add New Lecturer</a>
                       </div>

                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn2">
                      <a href = "/detailsHome" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Publish The Notices</a>
                       </div>
                   </center>

                
            </div>
        )
    }
}