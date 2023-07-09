import React, { Component } from 'react'
import axios from 'axios';

export default class EditSub extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subjectId: "",
      subjectName: "",
      subjectType: "",
      subjectCategory: "",
      subjectFee: "",
      subjectDes: ""
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
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const { subjectId, subjectName, subjectType, subjectCategory, subjectFee, subjectDes } = this.state;

    const data = {
      subjectId: subjectId,
      subjectName: subjectName,
      subjectType: subjectType,
      subjectCategory: subjectCategory,
      subjectFee: subjectFee,
      subjectDes: subjectDes
    }

    console.log(data)

    axios.put(`/subject/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Subject Updated!")
        this.setState(
          {
            subjectId: "",
            subjectName: "",
            subjectType: "",
            subjectCategory: "",
            subjectFee: "",
            subjectDes: ""
          })
      }
    })
    window.location.replace('/Adminsubhome');
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`/subject/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          subjectId: res.data.subject.subjectId,
          subjectName: res.data.subject.subjectName,
          subjectType: res.data.subject.subjectType,
          subjectCategory: res.data.subject.subjectCategory,
          subjectFee: res.data.subject.subjectFee,
          subjectDes: res.data.subject.subjectDes
        });

        console.log(this.state.subject);
      }
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: '45px', marginLeft: '50px' }}>
          <h1>Edit Subject Details</h1>
          <h5>Edit Subject Details Here</h5>
        </div>

        <hr />

        <div className='container' style={{ marginTop: '45px' }}>

          <form className="row g-3" onSubmit={this.onSubmit}>

            <div className="col-md-4">
              <label for="inputEmail4" className="form-label">Subject ID</label>
              <input
                className="form-control"
                name="subjectId"
                value={this.state.subjectId}
                onChange={this.handleInputChange} required />
            </div>

            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Subject Name</label>
              <input
                className="form-control"
                name="subjectName"
                value={this.state.subjectName}
                onChange={this.handleInputChange} required />
            </div>

            <div className="col-md-4">
              <label for="inputAddress2" className="form-label">Subject Fee</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">Rs:</span>
                <input
                  className="form-control"
                  name="subjectFee"
                  value={this.state.subjectFee}
                  onChange={this.handleInputChange} required />
              </div>
            </div>

            <div className="col-md-3">
              <label for="inputAddress" className="form-label">Subject Type</label>
              <select
                className="form-control"
                name="subjectType"
                value={this.state.subjectType}
                onChange={this.handleInputChange} required>
                <option>Choose</option>
                <option>Group Class</option>
                <option>Mass Class</option>
                <option>Special</option>
              </select>
            </div>

            <div className="col-md-3">
              <label for="inputState" className="form-label">Subject Category</label>
              <select
                className="form-control"
                name="subjectCategory"
                value={this.state.subjectCategory}
                onChange={this.handleInputChange} required>
                <option>Choose</option>
                <option>Ordinary Level</option>
                <option>Advanced Level</option>
              </select>
            </div>

            <div className="col-md-6">
              <label for="inputCity" className="form-label">Description</label>
              <input
                className="form-control"
                style={{ width: '600px' }}
                name="subjectDes"
                value={this.state.subjectDes}
                onChange={this.handleInputChange} required />
            </div>

            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label class ="form-check-label" for="invalidCheck">
                Confirm Changes
                </label>
                <div class ="invalid-feedback">
                You must agree before submitting.
                </div>
              </div>
            </div>

            <div>
              <hr />
              <button type="submit" className="btn btn-success">Confirm Edits</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
