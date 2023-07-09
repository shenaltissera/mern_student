import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Course from "./Course";
import styled from "styled-components";
export default class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "00" && password === "123") {
      this.setState({
        loggedIn: true,
      });
    } else {
      alert(
        "cant access because your token is not vaild or contact us our members "
      );
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/inside" />;
    }
    return (
      <CourseContainer>
        <div class="register-photo">
          <div class="form-container">
            <div class="image-holder"></div>
            <form onSubmit={this.submitForm}>
              <h2 class="text-center">
                <strong>Course</strong>&nbsp;Enroll{" "}
              </h2>
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  placeholder="Enter User ID"
                />
              </div>
              <br></br>
              <br></br>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="Enter Enrollment Key"
                />
              </div>
              <br></br>
              <br></br>
              <div class="form-group">
                <div class="container">
                  <button type="submit" class="btn btn-warning">
                    Enroll
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CourseContainer>
    );
  }
}

//add css

const CourseContainer = styled.div`
  .register-photo {
    background: #f1f7fc;
    padding: 80px 0;
  }

  .register-photo .image-holder {
    display: table-cell;
    width: auto;
    background: url(https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/04/education-in-India.jpg);
    background-size: cover;
  }

  .register-photo .form-container {
    display: table;
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  }

  .register-photo form {
    display: table-cell;
    width: 400px;
    background-color: #ffffff;
    padding: 40px 60px;
    color: #505e6c;
  }

  @media (max-width: 991px) {
    .register-photo form {
      padding: 40px;
    }
  }

  .register-photo form h2 {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .register-photo form .form-control {
    background: transparent;
    border: none;
    border-bottom: 1px solid #dfe7f1;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    color: inherit;
    text-indent: 0px;
    height: 40px;
  }

  .register-photo form .form-check {
    font-size: 13px;
    line-height: 20px;
  }

  .register-photo form .btn-primary {
    background: green;
    border: none;
    border-radius: 4px;
    padding: 11px;
    box-shadow: none;
    margin-top: 35px;
    text-shadow: none;
    outline: none !important;
  }

  .register-photo form .btn-primary:hover,
  .register-photo form .btn-primary:active {
    background: green;
  }

  .register-photo form .btn-primary:active {
    transform: translateY(1px);
  }

  .register-photo form .already {
    display: block;
    text-align: center;
    font-size: 12px;
    color: #6f7a85;
    opacity: 0.9;
    text-decoration: none;
  }
`;
