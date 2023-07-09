import React, { Component } from 'react'
import axios from 'axios';


export default class Specialevents extends Component {
    
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

   filterData(specialevents,searchKey){
    const result = specialevents.filter((specialevent) =>
     specialevent.eventID.toLowerCase().includes(searchKey)||
     specialevent.eventname.toLowerCase().includes(searchKey)||
     specialevent.venue.toLowerCase().includes(searchKey)
    )
    this.setState({specialevents:result})
}



   handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
       
    axios.get("/retrive").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingEvents,searchKey)
        }
    });

  }

    
    
    render() {
        return (
            <div className="container">
             <div className="container">
                     <div className="row">
                        <div >
                            <center><b><h2 style={{color:'black' , fontSize:'50px'}}>Special Events</h2></b></center>
                        </div>
                 <div className="col-lg-9 mt-2 mb-2">
                     <input
                            className="form-control"
                            type="search"
                            placeholder="search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                     </input>
                </div>
          </div>
                <table className="table  table-striped table-bordered">
                    <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Event ID</th>
                            <th scope="col">Event Name </th>
                            <th scope="col">Venue</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
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
                           </tr>
                        ))} 
                    </tbody>
                </table>
                </div>



            </div>
        )
    }
}
