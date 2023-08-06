import React, { Component } from 'react'
import  './Homefooter.css'
import logo from './onlyLogo.png'

export default class Adminhomefooter extends Component {
  
  
    render() {
        return (
            <div >
     <footer className="site-footer bg-dark text-dark" style={{fontSize:'20px', marginTop:'60px'}}>
      <div >
        <div className="row">

          <div className="col-xs-9 col-md-3">
            <h6 style={{color:'black', marginLeft:'200px'}}>Categories</h6>
            <ul className="footer-links"  style={{marginLeft:'200px'}}>
              <li><a href="/"  style={{textDecoration:'none'}}>A/L subjects</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>O/L subjects</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>After A/L subjects</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>After O/L subjects</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>About us</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>Payment</a></li>
            </ul>
          </div>

          <div className="col-xs-9 col-md-6">
           <center><img src={logo} alt="logo"style={{width:200 , marginTop:'20px'}}/></center>
          </div>

          <div className="col-xs-6 col-md-2">
            <h6 style={{color:'black'}}>Payments</h6>
            <ul className="footer-links">
              <li><a href="/"  style={{textDecoration:'none'}}>About Us</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>Contact Us</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>Contribute</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>Privacy Policy</a></li>
              <li><a href="/"  style={{textDecoration:'none'}}>Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr ></hr>
      </div>
</footer>
<div className="bg-light">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12" style={{marginLeft:'20px'}}>
            <p className="copyright-text" >Copyright &copy; 2021 All Rights Reserved by<br/><a href="/"  style={{textDecoration:'none'}}>Royal-Edu Institute </a>.
            </p>
          </div>
          <center><div className="col-md-5 col-sm-6 col-xs-12">
              <ul className="social-icons">
              <li><a className="facebook" href="www.facebook.com"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="www.twitter.com"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="www.dribbble.com"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="www.linkedin.com"><i className="fa fa-linkedin"></i></a></li>   
              </ul>
            </div></center>
          
        </div>
      </div>
</div>   
        )
    }
}
