import React, {Component} from 'react';
import gif from './g.gif';

export default class NavBar extends Component {
    render () {
        return (
          <div>
            <center>
            <img src={gif} style={{ width: '500px', height: 'auto' }} />
            </center>
         
<nav class="navbar navbar-expand-lg navbar-light bg-light " style = {{backgroundColor:'#e3f2fd',marginLeft:'350px'}}>

  <div class="container-fluid">
   <button class="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" 
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
           <button className = "btn btn-info"> <a href = "/paymenthome" style = {{textDecoration: 'none' , color : 'black'}}><b> Additional Payments </b></a></button>
           
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/buycourse" style = {{textDecoration: 'none' , color : 'black'}}><b>Buy Course</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/cReceipt" style = {{textDecoration: 'none' , color : 'black'}}><b>Buy Course List</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/feespay" style = {{textDecoration: 'none' , color : 'black'}}><b>Fees Pay Form</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/paidlist" style = {{textDecoration: 'none' , color : 'black'}}><b>Fees Paid List</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;

           <button className = "btn btn-info"> <i class="fa fa-list" aria-hidden="true"></i>  <a href = "/calculatesalary" style = {{textDecoration: 'none' , color : 'black'}}><b>Lecturer Salary</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;

           <button className = "btn btn-info"> <i class="fa fa-list" aria-hidden="true"></i>  <a href = "/calculateStaffsalary" style = {{textDecoration: 'none' , color : 'black'}}><b>Staff Salary</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           
        </li>
        </ul>
    </div>
  </div>
</nav>

</div>
        )
    }
}
