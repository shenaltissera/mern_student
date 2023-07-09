import React, { Component } from 'react'
import axios from 'axios';

export default class Adminalltimetables extends Component {
  
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

    onDelete = (id) =>{
        axios.delete(`/timetables/delete/${id}`).then((res)=>{
            alert("Delete successful!");
            this.retrivetimetables();
        })
    }

  
    render() {
        return (
            <div>
                <div className="container-xxl">
                <center><h2 style={{textDecoration:'none', color:'black'}}>All Time tables </h2></center>
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
                                       <a  className="btn btn-warning" href={`/admineditttables/${timetables._id}`} style={{textDecoration:'none', color:'white'}}>
                                        <i>Edit</i>
                                       </a>
                                       &nbsp;
                                       <a  className="btn btn-danger" href="" onClick={()=> this.onDelete(timetables._id)} style={{textDecoration:'none', color:'white'}}>
                                        <i>Delete</i>
                                       </a>
                                   </td>
                   </tr>  
                ))}
                </tbody>
                </table>
                   
                <button className="btn btn-success"><a href="/addnewtimetable" style={{textDecoration:'none', color:'white'}}>Add new time table</a></button>



                </div>
            </div>
        )
    }
}
