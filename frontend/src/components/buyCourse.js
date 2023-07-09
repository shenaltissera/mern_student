import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class buyCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyCourse: [],
    };
  }

  componentDidMount() {
    this.retrivebuyCourse();
  }

  retrivebuyCourse() {
    axios
      .get("http://localhost:8000/retrivecourse")
      .then((response) =>
        this.setState({ buyCourse: response.data.existingCourseReceipt })
      )
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:8000/buycourse/delete/${id}`).then((res) => {
      alert("Delete succesfully");
      this.retrivebuyCourse();
    });
  };

  filterData(buyCourse, Searchkey) {
    const result = buyCourse.filter(
      (cus) =>
        cus.fullName.toLowerCase().includes(Searchkey) ||
        cus.email.toLowerCase().includes(Searchkey) ||
        cus.courseName.toLowerCase().includes(Searchkey) ||
        cus.nic.toLowerCase().includes(Searchkey)
    );

    this.setState({ buyCourse: result });
  }

  handleSearchArea = (e) => {
    const Searchkey = e.currentTarget.value;
    axios.get("http://localhost:8000/retrivecourse").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingCourseReceipt, Searchkey);
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <br></br>
          <h1>Courses Follow Student List</h1>
          <div align="left">
            <p>The Course Follow student In The Institue</p>
          </div>
          <td>
            <input
              className="form-control"
              style={{ width: "400px", marginLeft: "50px" }}
              type="search"
              placeholder="Search for student"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </td>
          <div align="right">
            <p></p>
          </div>
          &nbsp;
          <table class="table">
            <thead>
              <tr class="text-info bg-dark">
                <th scope="col">No</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Course Name</th>
                <th scope="col">nic</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.buyCourse.map((buyCourse, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>

                  <td>{buyCourse.fullName}</td>
                  <td>{buyCourse.email}</td>
                  <td>{buyCourse.courseName}</td>
                  <td>{buyCourse.nic}</td>

                  <td>
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(buyCourse._id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;Remove
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      className="btn btn-success"
                      href={`/buyCoursepdf/${buyCourse._id}`}
                    >
                      <i className="far fa-file-pdf"></i>&nbsp;Download PDF
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link
                      to="/EnrollKeySend"
                      type="button"
                      class="btn btn-primary"
                    >
                      <i class="far fa-envelope"></i>&nbsp;Send Enroll Key Via
                      Email
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/Admincoursepage" type="button" class="btn btn-success">
            <i class="fas fa-arrow-circle-left"></i>&nbsp;Back
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}
