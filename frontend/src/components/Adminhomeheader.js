
import React, { Component } from 'react'
import logo from './Bright.png'
 
export default class Adminhomeheader extends Component {
  
  
    render() {
        return (
      <div style={{marginBottom:'45px'}} >
        <nav className="navbar navbar-light bg-light">
          <div>
             <img src={logo} alt="logo"style={{width:600 , marginTop:'20px', marginLeft:'20px'}}/>
          </div>
        </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark"> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/adminhome" style={{fontSize:'25px'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AdminStudnethome" style={{fontSize:'25px'}}>Student</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/lechome" style={{fontSize:'25px'}}>Lecturer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Admincoursepage" style={{fontSize:'25px'}}>Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Adminsubhome" style={{fontSize:'25px'}}>Subjects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/libraryhome" style={{fontSize:'25px'}}>Library </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Admintimetable" style={{fontSize:'25px'}}>Time Tables</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/adminspecialevent" style={{fontSize:'25px'}}>Special Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/staffhome" style={{fontSize:'25px'}}>Staff </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/paymenthome" style={{fontSize:'25px'}}>Payment </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AdminAttendance" style={{fontSize:'25px'}}>Attendance </a>
        </li>
      </ul>
      <form className="d-flex">
        
        &nbsp;&nbsp;
        <a className="navbar-brand" href="/adminmainhomelogin"><b> Login </b></a>
        &nbsp;&nbsp;
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button style={{marginRight:'20px'}} className="btn btn-success" type="submit">Search</button>
      </form>
</nav>
</div>     
        )
    }
}
