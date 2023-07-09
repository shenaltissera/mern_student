import React, { Component } from 'react'
import student from './AdminHomeImages/MusicBand.gif'
import subject from './AdminHomeImages/bookshelf.png'
import lecturer from './AdminHomeImages/lecture.png'
import course from './AdminHomeImages/online-course.png'
import timetable from './AdminHomeImages/schedule.png'
import attendence from './AdminHomeImages/immigration.png'
import staff from './AdminHomeImages/networking.png'

import payment from './AdminHomeImages/pay.png'
import adminmain from './AdminHomeImages/adminmain.gif'

export default class AdminHome extends Component {
    render() {
        return (
            <div>
                <div >
                    <table>
                        <tr>
                            <td>
                                <img src={adminmain} style={{ width: 600, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img>
                            </td>
                            <td>
                                <tr>
                                    <td>
                                        <a href=''><img src={student} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/AdminStudnethome'>&nbsp;Music and Entertainment&nbsp;</a></center>
                                    </td>

                                    <td>
                                        <a href='/Adminsubhome'><img src={subject} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/Adminsubhome'>&nbsp;Decorations&nbsp;</a></center>
                                    </td>

                                    <td>
                                        <a href='/lecAdminPage'><img src={lecturer} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/lecAdminPage'>&nbsp;Hotels&nbsp;</a></center>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href=''><img src={course} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/Admincoursepage'>&nbsp;Photography&nbsp;</a></center>
                                    </td>

                                    <td>
                                        <a href=''><img src={timetable} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/Admintimetable'>&nbsp;Jewellery&nbsp;</a></center>
                                    </td>

                                    <td>
                                        <a href=''><img src={attendence} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/AdminAttendance'>&nbsp;Wedding Car rental&nbsp;</a></center>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href='/staffhome'><img src={staff} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/staffhome'>&nbsp;Costume&nbsp;</a></center>
                                    </td>
                                    <td>
                                        <a href='/paymenthome'><img src={payment} style={{ width: 200, marginTop: '40px', marginLeft: '40px', marginRight: '40px', Bottm: '40px' }}></img></a><br />
                                        <center><a className="btn btn-outline-success" style={{ marginTop: '20px' }} href='/paymenthome'>&nbsp;Payment Management&nbsp;</a></center>
                                    </td>
                                   
                                    
                                </tr>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
