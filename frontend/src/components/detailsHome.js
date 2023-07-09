import React, { Component } from 'react'
import axios from'axios';
import './style.css'

export default class detailsHome extends Component {
constructor(props){
  super(props);

  this.state={
    updateDetails:[]

  };
}

componentDidMount(){
  this.retrieveUpdateDetails();
}

retrieveUpdateDetails(){
  axios.get("/lecDetailsReq").then(res =>{
    if(res.data.success){
     this.setState({
        updateDetails:res.data.existingUpdateDetails
     });

     console.log(this.state.updateDetails);
    }
  });
}
onDelete = (id) =>{
  axios.delete(`/detailreq/delete/${id}`).then((then) =>{
    alert("Delete Successfully!");
    this.retrieveUpdateDetails();
  })
}

filterDate(updateDetails,searchKey){

  const result = updateDetails.filter((detail) =>
  detail.date.toLowerCase().includes(searchKey)||
  detail.notice.toLowerCase().includes(searchKey)
  
  
  )

  this.setState({updateDetails:result})
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
axios.get("/lecDetailsReq").then(res =>{     
      if(res.data.success){

        this.filterDate(res.data.existingUpdateDetails,searchKey)
      }
    });
}
render() {
    return(
      
      
      <div className="container" >
         <div className="row">
          <div className="col-lg-12 mt-3 mb-3">
           <div  className ="container">
            <h3><center><b>Special Notices For Lecturers</b></center></h3>
            </div>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
          </div>
              </div>
 <table className =" table table-bordered" >
  
          {this.state.updateDetails.map((updateDetail,index) =>(
             <div key ={index} className="card mb-3">
               <div className="container" style={{ border: '2px solid black' ,width:'100%',background:"Silver"}}>
                 <h6><b>Notice number : {index+1}</b></h6>
                <h5  style={{ color: 'red'}}><b>Date :{updateDetail.date}</b></h5>
                <h5 style={{ color: 'black'  }}><b>{updateDetail.notice}</b></h5>
               
                </div>
             </div>
          ))}
        </table>
      </div>
      
    )
  }
}
