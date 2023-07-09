
import React, { Component } from 'react'
import logo from './Bright.png'
 
export default class Homeheader extends Component {
  
  
    render() {
        return (
      <div style={{marginBottom:'20px'}}>
        <nav className="navbar navbar-light bg-light ">
          <div   >
             <img src={logo} alt="logo" style={{width:600 , marginTop:'20px', marginLeft:'20px'}} />
                       
         </div>
        </nav>
        <br/>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0 text-dark"> 
        <li className="nav-item">
        <b><a className="nav-link active " aria-current="page" href="/middle" style={{fontSize:'25px', marginLeft:'20px'}}>Home</a></b>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/" style={{fontSize:'25px'}}>Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/displaytimetables" style={{fontSize:'25px'}}>Subjects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/adminspecialevent" style={{fontSize:'25px'}}>Library</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/special" style={{fontSize:'25px'}}>Special Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/Admintimetable" style={{fontSize:'25px'}}>Payment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/about" style={{fontSize:'25px'}}>About us</a>
        </li>
      </ul>
      <form className="d-flex">
      <a className="navbar-brand " href="/"><b> Register Now! </b></a>
      <a className="navbar-brand " href="/login"><b> Login </b></a>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-success" type="submit" style={{ marginRight:'20px'}}>Search</button>
      </form>
</nav>
<br/>
</div>     
        )
    }
}
