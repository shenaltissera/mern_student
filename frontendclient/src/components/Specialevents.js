import React, { Component } from "react";
import axios from "axios";
import ch2 from '../images/events.jpg';
import ch1 from '../images/events2.jpg';
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class Specialevents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specialevents: [],
    };
  }

  componentDidMount() {
    this.retrivespecialevent();
  }

  retrivespecialevent() {
    axios.get("/retrive").then((res) => {
      if (res.data.success) {
        this.setState({
          specialevents: res.data.existingEvents,
        });
        console.log(this.state.specialevents);
      }
    });
  }

  filterData(specialevents, searchKey) {
    const result = specialevents.filter(
      (specialevent) =>
        specialevent.eventID.toLowerCase().includes(searchKey) ||
        specialevent.eventname.toLowerCase().includes(searchKey) ||
        specialevent.venue.toLowerCase().includes(searchKey)
    );
    this.setState({ specialevents: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/retrive").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingEvents, searchKey);
      }
    });
  };

  render() {
    return (
      <div >
        <div className="container">
          <div >
            <div>
              <center>
                <b>
                  <h2 style={{ color: "black", fontSize: "50px" }}>
                    Special Events
                  </h2>
                </b>
              </center>
            </div>
            <div>
              <ReactHTMLTableToExcel
                className="btn btn-outline-success"
                table="specialevent-table"
                filename="specialevents Excel"
                sheet="Sheet"
                buttonText="Download special events"
              />
            </div>

            <div className="col-lg-5 mt-1 mb-1">
              <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}
              ></input>
              &nbsp;
            </div>
          </div>
          <hr />
          <div  class="d-flex justify-content-center">
          <div className="col-12 col-md-7 col-lg-78 mx-0 mb-2">
          <table
            id="specialevent-table"
            className="table  table-borderless"
          >
            <tbody >
              {this.state.specialevents.map((specialevents, event) => (
                <tr className="card p-0 overflow-hidden h-100 shadow">
                 
                  {/* <td className="card-title" >{specialevents.eventID}</td> */}
                  <td className="card-text" style={{fontSize:'30px' , color:'#00ff80' , textAlign:'center'}}>&nbsp;  &nbsp;{specialevents.eventname}&nbsp;  &nbsp;</td>
                  <td className="card-text" style={{fontSize:'25px' , color:'#9966ff' , textAlign:'center'}}>&nbsp;  Vanue : &nbsp;{specialevents.venue}</td>
                  <td className="card-text" style={{fontSize:'25px' , color:'#9966ff' , textAlign:'center'}}>&nbsp;  Date : &nbsp;{specialevents.date}</td>
                  <td className="card-text" style={{fontSize:'25px' , color:'#9966ff' , textAlign:'center'}}>&nbsp;  Time : &nbsp;{specialevents.time}</td>
                  
                </tr>
                
              ))}
              <br></br>
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
