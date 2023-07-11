import React, { Component } from "react";
import axios from "axios";

export default class Displaytimetables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timetables: [],
    };
  }

  componentDidMount() {
    this.retrivetimetables();
  }

  retrivetimetables() {
    axios
      .get("/retrivetables")
      .then((response) =>
        this.setState({ timetables: response.data.existingttables })
      )
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  }

  render() {
    return (
      <div>
        <div className="container-xxl">
        <br></br>
          <center>
          <b> <h1 style={{ textDecoration: "none", color: "black" }}>
              classes and courses Time tables{" "}
            </h1> </b>
            <br></br>
          </center>
          <div className="col-lg-5 mt-1 mb-1"></div>
          <hr style={{ backgroundColor: "color", height: "2px" }}></hr>
          <div class="d-flex justify-content-center">
            <div className="col-12 col-md-7 col-lg-78 mx-0 mb-2">
              <table className="table  table-borderless">
                <tbody>
                  {this.state.timetables.map((timetables, index) => (
                    <tr className="card p-0 overflow-hidden h-100 shadow">
                      {/* <th scope="row">{index+1}</th> */}
                      <td
                        className="card-text"
                        style={{
                          fontSize: "30px",
                          color: "#00ff80",
                          textAlign: "center",
                        }}
                      >
                        &nbsp; Time Table ID : &nbsp;{timetables.timetableID}
                      </td>
                      <td
                        className="card-text"
                        style={{
                          fontSize: "30px",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        &nbsp; Subject or Course : &nbsp;
                        {timetables.subjectORcourse}
                      </td>
                      <td
                        className="card-text"
                        style={{
                          fontSize: "30px",
                          color: "#black",
                          textAlign: "center",
                        }}
                      >
                        &nbsp; Month and Date : &nbsp;{timetables.monthANDdate}
                      </td>
                      <td
                        className="card-text"
                        style={{
                          fontSize: "30px",
                          color: "#black",
                          textAlign: "center",
                        }}
                      >
                        &nbsp; Time : &nbsp;{timetables.time}
                      </td>
                      <td className="card-text">
                        <center>
                          <a
                            className="btn btn-warning"
                            href={`/downloadttables/${timetables._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <i>Download as PDF</i>
                          </a>{" "}
                        </center>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
