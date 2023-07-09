import React, { Component } from 'react'
import axios from 'axios';

export default class Adminttrequest extends Component {
   
   
   constructor(props){
       super(props);
       
        //timetable update requests
       this.state={
          ttrequests:[]
       };

      
   }

  
   componentDidMount(){
       this.retrivettrequests();
   }
   
   retrivettrequests(){
       axios.get("/retriverequests").then(res=>{
           if(res.data.success){
               this.setState({
                   ttrequests:res.data.existingttRequests
               });
               console.log(this.state.ttrequests)
           }
       })
   }

   filterData(ttrequests,searchKey){
    const result = ttrequests.filter((ttrequest) =>
    ttrequest.timetableId.toLowerCase().includes(searchKey)||
    ttrequest.subject.toLowerCase().includes(searchKey)||
    ttrequest.lecName.toLowerCase().includes(searchKey)
    )
    this.setState({ttrequests:result})
}



   handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
       
    axios.get("/retriverequests").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingttRequests,searchKey)
        }
    });

  }
   
  onDelete = (id) =>{
      axios.delete(`/request/delete/${id}`).then((res)=>{
          alert("delete successfull!");
          this.retrivettrequests();
      })
  }

    render() {
        return (
            <div>
                 
                 <center><h1>All Time tables and update requests </h1></center>
                <div className="container-xxl">
                <center><h2 style={{textDecoration:'none', color:'black'}}>Time table update requests</h2></center>
                <div className="col-lg-9 mt-2 mb-2">
                     <input
                            className="form-control"
                            type="search"
                            placeholder="search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                     </input>
                </div>
                <table className="table  table-striped table-bordered">
                    <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Time table ID</th>
                            <th scope="col">Lecture ID </th>
                            <th scope="col">Lecturer Name</th>
                            <th scope="col">Subject or Course</th>
                            <th scope="col">Month and Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Edit or Delete</th>
                          </tr>
                    </thead>
                    <tbody>
                        {this.state.ttrequests.map((ttrequests,event) =>(
                           <tr>
                               <th scope="row">{event+1}</th>
                                   <td>{ttrequests.timetableId}</td>
                                   <td>{ttrequests.lecId}</td>
                                   <td>{ttrequests.lecName}</td>
                                   <td>{ttrequests.subject}</td>
                                   <td>{ttrequests.day}</td>
                                   <td>{ttrequests.time}</td>
                                   <td>
                                       <a  className="btn btn-danger" href="" onClick={()=> this.onDelete(ttrequests._id)} style={{textDecoration:'none', color:'white'}}>
                                        <i>Delete</i>
                                       </a>
                                   </td>
                           </tr>
                        ))} 
                    </tbody>
                </table>


                </div>

            
            </div>
        )
    }
}
