import React, { Component } from 'react'
import  './Homefooter.css'

export default class Homeheader extends Component {
  
  
    render() {
        return (
            <div >
     <footer className="site-footer bg-dark text-dark" style={{fontSize:'20px', marginTop:'45px'}}>
      <div >
        <div className="row">
          <div className="col-sm-12 col-md-2" style={{marginLeft:'100px'}}>
          <h6 >Categories</h6>
            <ul className="footer-links">
              <li><a href="/" style={{textDecoration:'none'}}>A/L subjects</a></li>
              <li><a href="/" style={{textDecoration:'none'}}>O/L subjects</a></li>
              <li><a href="/" style={{textDecoration:'none'}}>After A/L subjects</a></li>
              <li><a href="/" style={{textDecoration:'none'}}>After O/L subjects</a></li>
              <li><a href="/" style={{textDecoration:'none'}}>About us</a></li>
              <li><a href="/" style={{textDecoration:'none'}}>Payment</a></li>
            </ul>
           </div>

          <div className="col-xs-6 col-md-7">
            
            <center><h6>About</h6></center>
            <p className="text-justify" style={{color:'white'}}>Royal-EDU higher education institute <i> Join with us to make your life success </i> We have  courses for after o/l and after a/l students. There are all subjects for O/L and A/L students. . </p>
          </div>

          <div className="col-xs-6 col-md-2" style={{marginLeft:'30px'}}>
            <h6>Payments</h6>
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
            <p className="copyright-text" >Copyright &copy; 2021 All Rights Reserved by<br/><a href="/">Royal-Edu Institute </a>.
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
