import React, { Component } from "react";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class AdminSTDattendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stdattendance: [],
    };
  }

  componentDidMount() {
    this.retrivestdattendance();
  }

  retrivestdattendance() {
    axios
      .get("/retriveSTDattendance")
      .then((response) =>
        this.setState({ stdattendance: response.data.existingstdattendance })
      )
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  }

  onDelete = (id) => {
    axios.delete(`/stdattendance/delete/${id}`).then((res) => {
      alert("Delete successful!");
      this.retrivestdattendance();
    });
  };

  render() {
    return (
      <div>
        <div className="container-xxl">
          <center>
            <h2 style={{ textDecoration: "none", color: "#00ff80" }}>
              All Students Attendance
            </h2>
          </center>
        </div>
        <br />
        <br />
        <div className="container-xxl">
          <ReactHTMLTableToExcel
            className="btn btn-outline-success"
            table="std-table"
            filename="student attendance Excel"
            sheet="Sheet"
            buttonText="Download all studnet attendance"
          />
          <br />
          <br />
          <button className="btn btn-success">
            <a
              href="/addnewstdattendance"
              style={{ textDecoration: "none", color: "white" }}
            >
              Mark New Student attendance
            </a>
          </button>
          <br />
          <br />
          <table
            id="std-table"
            className="table  table-striped table-bordered"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">lecturer ID</th>
                <th scope="col">Lecturer Full Name </th>
                <th scope="col">subject or course </th>
                <th scope="col">Date</th>
                <th scope="col">Student Count</th>
                <th scope="col">Delete Row</th>
              </tr>
            </thead>
            <tbody>
              {this.state.stdattendance.map((stdattendance, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{stdattendance.lecturerid}</td>
                  <td>{stdattendance.lecname}</td>
                  <td>{stdattendance.subjectorcourse}</td>
                  <td>{stdattendance.date}</td>
                  <td>{stdattendance.count}</td>
                  <td>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      href=""
                      onClick={() => this.onDelete(stdattendance._id)}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <i>Delete</i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
