import React, { Component } from 'react'
import axios from 'axios';

export default class Displaytimetables extends Component {
  
    constructor(props){
        super(props);
        
        
        this.state={
            timetables:[]
        };
    }
    
     componentDidMount(){
         this.retrivetimetables();
      
     }
  
    retrivetimetables(){
      axios.get('/retrivetables')
          .then(response => this.setState({ timetables:response.data.existingttables }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
  }
  
    render() {
        return (
            <div>
             <div className="container-xxl">
                <center><h1 style={{textDecoration:'none', color:'Green'}}>All Time tables </h1></center>
                <table className="table  table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Time table ID</th>
                            <th scope="col">Subject or Course</th>
                            <th scope="col">Month and Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Edit or Delete</th>
                          </tr>
                    </thead>
               <tbody>
                {this.state.timetables.map((timetables,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{timetables.timetableID}</td>
                           <td>{timetables.subjectORcourse}</td>
                           <td>{timetables.monthANDdate}</td>
                           <td>{timetables.time}</td>
                           <td>
                               <a  className="btn btn-warning" href="" style={{textDecoration:'none', color:'white'}}>
                                <i>Download as PDF</i>        
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
