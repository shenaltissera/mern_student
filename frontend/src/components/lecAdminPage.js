import React, { Component } from 'react'
import details from '../images/details.png'
import registration from '../images/registration.png'
import notice from '../images/notice.png'

export default class lecAdminPage extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <center><table>
                        <tr>
                            <td>
                                <a href='/viewRegistrations'><img src={registration} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-info" target="_blank" rel="noopener noreferrer" style={{marginTop:'20px'}} href='/viewRegistrations'>&nbsp;Check registrations of Lecturers&nbsp;</a></center>
                            </td>

                            <td>
                                <a href='/lechome'><img src={details} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-info" target="_blank" rel="noopener noreferrer" style={{marginTop:'20px'}} href='/lechome'>&nbsp;All Lecturers' Details&nbsp;</a></center>
                            </td>

                            <td>
                                <a href='/viewNotice'><img src={notice} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-info" target="_blank" rel="noopener noreferrer" style={{marginTop:'20px'}} href='/publishNotice'>&nbsp;Publish Notices&nbsp;</a></center>
                            </td>
                        </tr>

                        
                    </table></center>
                </div>
            </div>
        )
    }
}
