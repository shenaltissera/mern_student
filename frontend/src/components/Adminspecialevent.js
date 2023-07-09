import React, { Component } from 'react'
import axios from 'axios';


export default class Adminspecialevents extends Component {
    
    constructor(props){
        super(props);

        this.state={
            specialevents:[]
        };
    }
    

    componentDidMount(){
        this.retrivespecialevent();
    }


   retrivespecialevent(){
       axios.get("/retrive").then(res=>{
           if(res.data.success){
               this.setState({
                specialevents:res.data.existingEvents
               });
         console.log(this.state.specialevents)
            }
       })
   }

    
   onDelete = (id) =>{

    axios.delete(`/events/delete/${id}`).then((res)=>{
        alert("Delete successfull");
        this.retrivespecialevent();
    })
  }





    
    render() {
        return (
            <div>
                <center><h1>Special Events</h1></center>
                <div className="container-xxl">
                <table className="table  table-striped table-bordered">
                    <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Event ID</th>
                            <th scope="col">Event Name </th>
                            <th scope="col">Venue</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Edit or Delete</th>
                          </tr>
                    </thead>
                    <tbody>
                        {this.state.specialevents.map((specialevents,event) =>(
                           <tr>
                               <th scope="row">{event+1}</th>
                                   <td>{specialevents.eventID}</td>
                                   <td>{specialevents.eventname}</td>
                                   <td>{specialevents.venue}</td>
                                   <td>{specialevents.date}</td>
                                   <td>{specialevents.time}</td>
                                   <td>
                                       <a  className="btn btn-warning" href={`/editspecialevent/${specialevents._id}`} style={{textDecoration:'none', color:'white'}}>
                                        <i>Edit</i>
                                       </a>
                                       &nbsp;
                                       <a  className="btn btn-danger" href="" onClick={()=> this.onDelete(specialevents._id)} style={{textDecoration:'none', color:'white'}}>
                                        <i>Delete</i>
                                       </a>
                                   </td>
                           </tr>
                        ))} 
                    </tbody>
                </table>

                  <button className="btn btn-success"><a href="/addnewspecialevent" style={{textDecoration:'none', color:'white'}}>Create new special Event</a></button>


                </div>



            </div>
        )
    }
}
