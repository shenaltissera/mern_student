import React, { Component } from 'react'
import std from '../images/student1.png'
import lec from '../images/lecturer22.png'
import stff from '../images/staff12.png'

export default class RegisterTypes extends Component {
    render() {
        return (
            <div>
                 <div className='container'>
                    <center><table>
                        <tr>
                            <td>
                                <a href='/signupstd'><img src={std} style={{width:400 , marginTop:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-info" style={{marginTop:'20px'}} target="_blank" rel="noopener noreferrer" href='/signupstd'>&nbsp;Student Registration&nbsp;</a></center>
                            </td>

                            <td>
                                <a href='/lecturerreg'><img src={lec} style={{width:400 , marginTop:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-info" style={{marginTop:'20px'}} target="_blank" rel="noopener noreferrer" href='/lecturerreg'>&nbsp;Lecturer Registration&nbsp;</a></center>
                            </td>

                            <td>
                                <a href=''><img src={stff} style={{width:420 ,height:'100%', marginTop:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-info" style={{marginTop:'20px'}} target="_blank" rel="noopener noreferrer" href=''>&nbsp;Staff Registration&nbsp;</a></center>
                            </td>
                        </tr>

                        
                    </table></center>
                </div>
            </div>
        )
    }
}
