import React, { Component } from 'react'
import axios from 'axios';

export default class CourseReceipt extends Component {
  
  constructor(props){
      super(props);
      
      
      this.state={
          buyCourse:[]
      };
  }
  
   componentDidMount(){
       this.retrivebuyCourse();
    
   }

  retrivebuyCourse(){
    axios.get("/retrivedula")
        .then(response => this.setState({ buyCourse:response.data.existingCourseReceipt}))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
}

filterData(buyCourse,searchKey){
  const result = buyCourse.filter((buyCourse) =>
  buyCourse.fullName.toLowerCase().includes(searchKey)||
  buyCourse.courseName.toLowerCase().includes(searchKey)
 
  )
  this.setState({buyCourse:result})
}



 handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;
  axios.get("/retrivedula").then(res=>{
      if(res.data.success){
          this.filterData(res.data.existingCourseReceipt,searchKey)
      }
  });

}

    render() {
        return (
            <div>
                <div className="container-xxl">
                <center><h2 style={{textDecoration:'none', color:'black'}}> <u> <b> Course Receipts </b> </u> </h2></center>
                &nbsp;
                <div className="col-lg-9 mt-2 mb-2">
                     <input
                            className="form-control"
                            type="search"
                            placeholder="Search for your reciept"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                     </input>
                </div>
                &nbsp;
                <table className="table table-success table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">#</th>
                          </tr>
                    </thead>
               <tbody>
                {this.state.buyCourse.map((buyCourse,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{buyCourse.fullName}</td>
                           <td>{buyCourse.email}</td>
                           <td>{buyCourse.courseName}</td>
                           <td>{buyCourse.date}</td>
                           <td>
                                       <a  className="btn btn-warning" href={`/getCourseR/${buyCourse._id}`} style={{textDecoration:'none', color:'white'}}>
                                        <i class="fa fa-bookmark-o" aria-hidden="true"> Get Receipt</i>
                                       </a>
                                       &nbsp;
                                      
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