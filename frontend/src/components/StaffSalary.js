import React, { Component } from "react";
import axios from "axios";
import { builtinModules } from "module";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class StaffSalary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      StaffDetails: [],
    };
  }

  componentDidMount() {
    this.retriveStaffDetails();
  }

  retriveStaffDetails() {
    axios
      .get("/register/posts")
      .then((response) =>
        this.setState({ StaffDetails: response.data.existingPosts })
      )
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  }

  filterData(StaffDetails, searchKey) {
    const result = StaffDetails.filter(
      (StaffDetails) =>
        StaffDetails.RegistationNumber.toLowerCase().includes(searchKey) ||
        StaffDetails.FirstName.toLowerCase().includes(searchKey) ||
        StaffDetails.LastName.toLowerCase().includes(searchKey)
    );
    this.setState({ StaffDetails: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("/register/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container-xxl">
          <center>
            <h2 style={{ textDecoration: "none", color: "#333399" }}>
              <b>
                <u> Non-Academic Staff's Salary</u>
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
            placeholder="Search here staff salary details"
            name="searchQuery"
            onChange={this.handleSearchArea}
          ></input>
        </div>
        <br />

        <br />
       
          <br />
          <table
            id="staffsal-table"
            className="table table-success table-striped table-bordered"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Registation Number</th>
                <th scope="col">First Name </th>
                <th scope="col">LastName </th>
                <th scope="col">BasicSalary </th>
                <th scope="col">Net Salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.StaffDetails.map((StaffDetails, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{StaffDetails.RegistationNumber}</td>
                  <td>{StaffDetails.FirstName}</td>
                  <td>{StaffDetails.LastName}</td>
                  <td>{StaffDetails.BasicSalary}</td>
                  <td>{(StaffDetails.BasicSalary * 110) / 100}</td>
                  {/* <td>
                    <a
                      className="btn btn-warning"
                      href={`/calculatestaffsalry/${StaffDetails._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i>
                        <b>Calculate Staff Salary</b>
                      </i>
                    </a>
                  </td> */}
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
            table="staffsal-table"
            filename="Staff salary Excel"
            sheet="Sheet"
            buttonText="Download Staff Salary List"
          />
        </div>
        </center>
      </div>
    );
  }
}
