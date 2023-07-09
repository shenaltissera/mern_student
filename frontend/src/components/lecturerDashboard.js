import React, { Component } from 'react'
import background from '../images/home34.png';

export default class lecturerHome extends Component {
    render() {
        return (
            <div style={{marginTop:'-45px',backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
                <center>
                       
                       <br></br>
                       <div className = "headname">
                           <h1>LECTURER DASHBOARD</h1>
                       </div>
                       <br></br>
                       <br></br>
                       

                       <div className ="btn1">
                       <a href = "/LecturerRegistration" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer" >Registration</a>
                       </div>

                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn1">
                       <a href = "/leaveReq" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Send Request To Get Leaves</a>
                       </div>
                   
                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn1">
                       <a href = "/timetableReq" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Send Request To Update Time Table</a>
                       </div>

                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn1">
                       <a href = "/detailsHome" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">View  Notices</a>
                       </div>

                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn1">
                      <a href = "#" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Payment Details</a>
                      </div>
                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn1">
                      <a href = "#" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Time Table Details</a>
                      </div>

                       <br></br>
                       <br></br>
                       <br></br>
                       <div className ="btn1">
                       <a href = "#" style ={{textDecoration:'none',color:'white'}} target="_blank" rel="noopener noreferrer">Leave Request Details</a>
                       </div>


                       
                   </center>
                
            </div>
        )
    }
}
