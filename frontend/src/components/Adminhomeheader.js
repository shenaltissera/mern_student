
import React, { Component } from 'react'
import logo from './LK.png'
 
export default class Adminhomeheader extends Component {
  
  
    render() {
        return (
      <div style={{marginBottom:'45px'}} >
        <nav className="navbar navbar-light bg-light">
          <div>
             <img src={logo} alt="logo"style={{width:200 , marginTop:'20px', marginLeft:'20px'}}/>
          </div>
        </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark"> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/adminhome" style={{fontSize:'25px'}}>Home</a>
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
