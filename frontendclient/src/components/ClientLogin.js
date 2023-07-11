import React, { Component } from 'react'
import './ClientLogin.css'
import logo from '../images/teacher.png'

export default class ClientLogin extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-5">
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={logo} className="image" /> </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card2 card border-0 px-4 py-5">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />&nbsp;
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div>
                                    <div className="row mb-3 px-3">
                                        <a href='/loginstd'><button type="submit" className="btn btn-blue text-center">Login</button></a>
                                    </div>
                                    <div>
                                        <b><small>Don't have an account? <a className="text-danger "><b>Register</b></a></small></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
