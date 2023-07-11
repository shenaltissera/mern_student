import React, { Component } from 'react'
import './Loginpage.css'



export default class Loginpage extends Component {
  render() {
    return (
      <div className="container-sm">
        <div className="wrapper fadeInDown">
  <div id="formContent">
    
   
    <form>
      <b>Username</b>  <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"></input><br/><br/>
      <b>Password</b>  <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"></input><br/><br/>
      <input type="submit" className="fadeIn fourth" value="Log In" href="/Admin"></input>
    </form>



  </div>
</div>
</div>

)
}
}