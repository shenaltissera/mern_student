import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import './ClientLogin.css'
import login from '../images/login.gif'

export default class leclogin3 extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state



        if (username === "LEC1234" && password === "lec1234") {

            this.setState({

                loggedIn: true
            })

        }
        else {
            alert("Username or password is wrong! ")
        }
    }
    render() {

        if (this.state.loggedIn) {
            return <Redirect to="/markstudentattendance" />
        }
        return (
            <div>
                <div className="container mt-5">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-5">
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={login} className="image" /> </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form  onSubmit={this.submitForm}>
                                    <div className="card2 card border-0 px-4 py-5">
                                        <div class="form-floating mb-3">
                                            <input class="form-control" name="username" value={this.state.username} required onChange={this.onChange} placeholder="Enter Admin user name" placeholder="name@example.com" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" type="password" name="password" value={this.state.password} required onChange={this.onChange} placeholder="Enter Admin password" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <div className="row mb-3 px-3">
                                            <button type="submit" className="btn btn-blue text-center">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}




