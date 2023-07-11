import React, { Component } from "react";
import axios from "axios";

export default class Apply extends Component {
  constructor(props) {
    super(props);
    this.onfill = this.onfill.bind(this);
    this.state = {
      FirstName: "",
      LastName: "",
      DateOfBirth: "",
      position: "",
      ContactNumber: "",
      NationalIDNumber: "",
      Gender: "",
      Address: "",
      ExpectedSalary: "",
      Email: "",
      WorkingExp: "",
      CarreerSum: "",
      EducationalQf: ""
    };
  }

  onfill() {
    this.setState({
      FirstName: "Hivindu",
      LastName: "Punsith",
      DateOfBirth: "2000-05-14",
      position: "IT Staff",
      ContactNumber: "0775902679",
      NationalIDNumber: "200034903755",
      Gender: "Male",
      Address: "No.73/A1, Watarappala Road, Mount Lavinia",
      ExpectedSalary: "25 000",
      Email: "hivindupunsith@gmail.com",
      WorkingExp: "3 Years",
      CarreerSum: "Trainee Electrical Engineer - National Engineering Research and Development Centre (NERDC)) - (since November 2015 - February 2016)",
      EducationalQf: "Passed GCE O/L and Passed GCE A/L"
    });
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;

    let nam = e.target.name;
    let val = e.target.value;

    if (nam === 'FirstName') {

      if (Number(val)) {
        alert('The FirstName should be in letters!.')
      }
    }

    if (nam === 'LastName') {

      if (Number(val)) {
        alert('The LastName should be in letters!.')
      }
    }

    if (nam === 'ContactNumber') {

      if (!Number(val)) {
        alert('The ContactNumber should be numeric!.')
      }
    }

    if (nam === 'ExpectedSalary') {

      if (!Number(val)) {
        alert('The Expected Salary should be numeric!.')
      }
    }


    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const {
      FirstName,
      LastName,
      DateOfBirth,
      position,
      ContactNumber,
      NationalIDNumber,
      Gender,
      Address,
      ExpectedSalary,
      Email,
      WorkingExp,
      CarreerSum,
      EducationalQf} = this.state;

    const data = {
      FirstName: FirstName,
      LastName: LastName,
      DateOfBirth: DateOfBirth,
      position: position,
      ContactNumber: ContactNumber,
      NationalIDNumber: NationalIDNumber,
      Gender: Gender,
      Address: Address,
      ExpectedSalary: ExpectedSalary,
      Email:Email,
      WorkingExp:WorkingExp,
      CarreerSum:CarreerSum,
      EducationalQf:EducationalQf
    };

    console.log(data);

    axios.post(`/application/save`, data).then((res) => {
      if (res.data.success) {
        alert("Applied Succesfully..!");
        window.location.replace('/');
        this.setState({
          FirstName: "",
          LastName: "",
          DateOfBirth: "",
          position: "",
          ContactNumber: "",
          NationalIDNumber: "",
          Gender: "",
          Address: "",
          ExpectedSalary: "",
          Email: "",
          WorkingExp: "",
          CarreerSum: "",
          EducationalQf: ""
        });
      }
    });
  };
  
  
  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <br/><br/><br/>
        <h1 className="h1">APPLY TO STAFF</h1>
        <p class="lead">
          Note*
          <br /> Need Atleast 3 Years Working Experience On Industry.
          <br />
          You Will Have physical Interview
        </p>
        <hr />
        <form
          className="row g-3 needs-validation"
          onSubmit={this.onSubmit}
        >
          <div className="mb-3">
            <label for="validationCustom01" class="form-label">
              First Name
            </label>
            <input
              className="form-control"
              name="FirstName"
              value={this.state.FirstName}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="validationCustom02" class="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              name="LastName"
              value={this.state.LastName}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="col-md-3">
            <label for="inputCity" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              name="DateOfBirth"
              value={this.state.DateOfBirth}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <br />
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Select Position
            </label>
            <select
              className="form-control"
              name="position"
              value={this.state.position}
              onChange={this.handleInputChange}
              required
            >
              <option>Choose</option>
              <option>Librarian</option>
              <option>IT Staff</option>
              <option>System Editor</option>
            </select>
          </div>

          <br />

          <div className="mb-3">
            <label for="validationCustom04" class="form-label">
              Contact Number
            </label>
            <input
              className="form-control"
              name="ContactNumber"
              value={this.state.ContactNumber}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="validationCustom04" class="form-label">
              National ID Number
            </label>
            <input
              className="form-control"
              name="NationalIDNumber"
              value={this.state.NationalIDNumber}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Select Gender
            </label>
            <select
              className="form-control"
              name="Gender"
              value={this.state.Gender}
              onChange={this.handleInputChange}
              required
            >
              <option>Choose</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <br />

          <div className="mb-3">
            <label for="validationCustom05" class="form-label">
              Address
            </label>
            <input
              className="form-control"
              name="Address"
              value={this.state.Address}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="validationCustom05" class="form-label">
              Expected Salary
            </label>
            <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  Rs:
                </span>
            <input
              className="form-control"
              name="ExpectedSalary"
              value={this.state.ExpectedSalary}
              onChange={this.handleInputChange}
              required
            />
            </div>
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Email
            </label>
            <input
              className="form-control"
              name="Email"
              value={this.state.Email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Working Experience
            </label>
            <input
              className="form-control"
              name="WorkingExp"
              value={this.state.WorkingExp}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Carreer Summary
            </label>
            <input
              className="form-control"
              name="CarreerSum"
              value={this.state.CarreerSum}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Educational Quilification
            </label>
            <input
              className="form-control"
              name="EducationalQf"
              value={this.state.EducationalQf}
              onChange={this.handleInputChange}
            />
          </div>
          <button
                type="submit"
                className="btn btn-success"
                data-toggle="modal"
              >
                Apply To Staff
              </button>
        </form>
        <br />
        <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onfill}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Fill the form
          </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
