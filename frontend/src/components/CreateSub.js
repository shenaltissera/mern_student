import React, { Component } from 'react'
import axios from 'axios';

export default class CreateSub extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subjectId: "SUB" + this.rand(9999, 99999),
      subjectName: "",
      subjectType: "",
      subjectCategory: "",
      subjectFee: "",
      subjectDes: "",
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    let nam = e.target.name;
    let val = e.target.value;

    //validations
    if (nam === 'subjectName') {

      if (Number(val)) {
        alert('The name should be in letters!.')
      }
    }

    if (nam === 'subjectFee') {

      if (!Number(val)) {
        alert('The Fee should be numeric!.')
      }

      if (val < 1) {
        alert('The Fee should be greater than 00!.')
      }
    }

    this.setState({
      ...this.setState,
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { subjectId, subjectName, subjectType, subjectCategory, subjectFee, subjectDes, errors } = this.state;

    const data = {
      subjectId: subjectId,
      subjectName: subjectName,
      subjectType: subjectType,
      subjectCategory: subjectCategory,
      subjectFee: subjectFee,
      subjectDes: subjectDes
    }

    console.log(data)

    axios.post("/subject/save", data).then((res) => {
      if (res.data.success) {
        alert("Subject Added!")
        this.setState(
          {
            subjectId: "",
            subjectName: "",
            subjectType: "",
            subjectCategory: "",
            subjectFee: "",
            subjectDes: ""
          }
        )
      }
    })
    window.location.replace('/Adminsubhome');
  }

  rand = (min, max) => {
    return Math.floor(Math.random() * max - min + 1) + min;
  }

  onClickDemo = () => {
    this.setState(
      {
        subjectId: "SUB93463",
        subjectName: "Pure Mathematics",
        subjectType: "Mass Class",
        subjectCategory: "Advanced Level",
        subjectFee: "1500",
        subjectDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
      })
  }

  render() {

    return (



      <div>
        <div style={{ marginBottom: '45px', marginLeft: '50px' }}>
          <h1>Add New Subject</h1>
          <h5>Create a New Subject and Add to the System</h5>
        </div>

        <hr />

        <div className='container' style={{ marginTop: '45px' }}>

          <form className="row g-3 needs-validation" onSubmit={this.onSubmit} novalidate>

            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">Subject ID</label>
              <input
                className="form-control"
                name="subjectId"
                value={this.state.subjectId}
                onChange={this.handleInputChange} required />
            </div>

            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">Subject Name</label>
              <input
                className="form-control"
                name="subjectName"
                value={this.state.subjectName}
                onChange={this.handleInputChange} required />
              <div className="invalid-feedback">
                Please choose a subject name.
              </div>
            </div>

            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">Subject Fee</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">Rs:</span>
                <input
                type="number"
                  className="form-control"
                  name="subjectFee"
                  value={this.state.subjectFee}
                  onChange={this.handleInputChange} required />
              </div>
            </div>

            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">Subject Type</label>
              <select
                className="form-select"
                name="subjectType"
                value={this.state.subjectType}
                onChange={this.handleInputChange} required>
                <option selected disabled value="">Choose...</option>
                <option>Group Class</option>
                <option>Mass Class</option>
                <option>Special</option>
              </select>
            </div>

            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">Subject Category</label>
              <select
                className="form-select"
                name="subjectCategory"
                value={this.state.subjectCategory}
                onChange={this.handleInputChange} required>
                <option selected disabled value="">Choose...</option>
                <option>Ordinary Level</option>
                <option>Advanced Level</option>
              </select>
            </div>

            <div className="col-md-6">
              <label for="validationCustom05" className="form-label">Description</label>
              <textarea
                className="form-control"
                name="subjectDes"
                value={this.state.subjectDes}
                onChange={this.handleInputChange} required />
            </div>

            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>

            <div>
              <hr />
              <button className="btn btn-outline-danger btn-sm" onClick={this.onClickDemo}>Demo</button>&nbsp;
              <button type="submit" className="btn btn-success">Add New</button>

            </div>

          </form>

        </div>
      </div>

    )
  }
}

