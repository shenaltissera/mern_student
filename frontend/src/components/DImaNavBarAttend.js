import React, { Component } from 'react'

export default class DimaNavbarAttend extends Component {
    render() {
        return (
            <div>
                <div className="container-xxl">
                <center><h2 style={{textDecoration:'none', color:'#00ff80'}}>Attendance Home </h2></center>
                <nav class="navbar navbar-dark " >
                <form class="form-inline">
                    <a className="btn btn-success" href="/AdminStaffLecAttendance">Mark Staff and Lecturer Attendance</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-info" href="/AdminSTDattendance">Display and Download Student Attendance</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-warning" href="/AdminApproveLrequests">Approve Leave Requests</a>
                </form>
                </nav>
                </div>
                <br/><br/>
            </div>
        )
    }
}
