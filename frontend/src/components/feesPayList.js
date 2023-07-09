import React, { Component } from 'react'
import axios from 'axios';

export default class feesPayList extends Component {
  
  constructor(props){
      super(props);
      
      
      this.state={
        feesPayRoutes:[]
      };
  }
  
   componentDidMount(){
       this.retrivefeesPay();
    
   }

   retrivefeesPay(){
    axios.get("/retriveFeesPay").then(res=>{
      if(res.data.success){
        this.setState({
            feesPayRoutes:res.data.existingfeesPay //attention here*****
        });
  
        console.log(this.state.feesPayRoutes)
      }
    })
  }

filterData(feesPayRoutes,searchKey){
  const result = feesPayRoutes.filter((feesPayRoutes) =>
  feesPayRoutes.fullName.toLowerCase().includes(searchKey)

 
  );
  this.setState({feesPayRoutes:result})
}

 handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;
     
  axios.get("/retriveFeesPay").then(res=>{
      if(res.data.success){
          this.filterData(res.data.existingfeesPay,searchKey)
      }
  });

}

    render() {
        return (
            <div>
                <div className="container-xxl">
                <center><h2 style={{textDecoration:'none', color:'black'}}> <u> <b>Fees Paid List </b> </u> </h2></center>
                &nbsp;
                <div className="col-lg-9 mt-2 mb-2">
                <input
              className="form-control"
              style={{ width: "400px", marginLeft: "50px" }}
              type="search"
              placeholder="Search here your payment record "
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
                </div>
                &nbsp;
                <table className="table table-success table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Email</th>
                            <th scope="col">Course ID</th>
                            
                          </tr>
                    </thead>
               <tbody>
                {this.state.feesPayRoutes.map((feesPayRoutes,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{feesPayRoutes.fullName}</td>
                           <td>{feesPayRoutes.studentID}</td>
                           <td>{feesPayRoutes.date}</td>
                           <td>{feesPayRoutes.email}</td>
                           <td>{feesPayRoutes.courseID}</td>
                           
                           
                          
                   </tr>  
                ))}
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}