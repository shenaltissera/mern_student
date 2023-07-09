import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" href="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-books">Add Book</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Fines">Fines</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-fine">Add Fines</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/ApplicantHome">Applicants</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/AddApplicant">New Applicant</Link>
      </li>
   
  
    </ul>
    
  </div>
</nav>                 
        </div>
    )
}

export default Navbar
