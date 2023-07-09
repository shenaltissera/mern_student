import React, { Component } from "react";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class LecSalary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lecturers: [],
    };
  }

  componentDidMount() {
    this.retrivedulaleaverequests();
  }

  retrivedulaleaverequests() {
    axios.get("/lecturers").then((res) => {
      if (res.data.success) {
        this.setState({
          lecturers: res.data.existingLecturers,
        });

        console.log(this.state.lecturers);
      }
    });
  }

  filterData(lecturers, searchKey) {
    const result = lecturers.filter(
      (lecturers) =>
        lecturers.lecId.toLowerCase().includes(searchKey) ||
        lecturers.lecFname.toLowerCase().includes(searchKey)
    );
    this.setState({ lecturers: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("/lecturers").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingLecturers, searchKey);
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container-xxl">
          <center>
            <h2 style={{ textDecoration: "none", color: "#800080" }}>
              <b>
                <u> Lecturers' Salary</u>
              </b>
            </h2>
          </center>
        </div>
        <br />

        <br />
        <div className="col-lg-9 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search salary details here"
            name="searchQuery"
            onChange={this.handleSearchArea}
          ></input>
        </div>
        <br />

        
          <br />
          <table
            id="lec-table"
            className="table table-success table-striped table-bordered"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Lecturer ID</th>
                <th scope="col">First Name </th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Basic Salary</th>
                <th scope="col">Net Salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.lecturers.map((lecturer, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <b>{lecturer.lecId}</b>
                  </td>
                  <td>
                    <b>{lecturer.lecFname}</b>
                  </td>
                  <td>
                    <b>{lecturer.lecLname}</b>
                  </td>
                  <td>
                    <b>{lecturer.email}</b>
                  </td>
                  <td>
                    <b>{lecturer.cNumber}</b>
                  </td>
                  <td>
                    <b>{lecturer.salary}</b>
                  </td>
                  <td>{(lecturer.salary * 105) / 100}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br/>
          <br/>
          <center>

          <div className="container-xxl">
          <ReactHTMLTableToExcel
            className="btn btn-outline-success"
            table="lec-table"
            filename="lecturer salary Excel"
            sheet="Sheet"
            buttonText="Download Lecturers' Salary List"
          />
          

        </div>
        </center>
      </div>
    );
  }
}
