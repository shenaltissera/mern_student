import React, { Component } from 'react'
import reggif from './HomeImages/reggif.gif'
import subgif from './HomeImages/subgif.gif'
import coursegif from './HomeImages/coursegif.gif'
import maingif from './HomeImages/maingif.gif'
import lecgif from './HomeImages/lecgif.gif'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import sliit1 from '../images/sliit1.png'
import sliit2 from '../images/sliit2.png'
import sliit3 from '../images/sliit3.png'
import sliit4 from '../images/sliit4.png'


export default class Middle extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%' }}>
                    <center><img src={maingif} style={{ width: '100%', height: 'auto' }} /></center>
                    <br></br>

                    <div >
                        <table>
                            <tr>
                                <td>
                                    <div style={{ fontSize: '60px', color: '#008B8B', marginLeft: '380px',fontFamily:'-moz-initial' }}><b>Welcome To Royal EDU Institute</b>
                                        <br></br>

                                        <h5><b>We are a leading non-state degree awarding institute approved by the University </b></h5>
                                        <h5><b>Grants Commission (UGC) under the Universities Act. We are also members of the</b></h5>
                                        <h5><b>Association of Commonwealth Universities (ACU), as well as the International</b></h5>
                                        <h5><b>Association of Universities (IAU), and the first Sri Lankan institute to be</b></h5>
                                        <h5><b>accredited by the Institution of Engineering & Technology, UK.</b></h5>

                                        <h5><b>We are proud to be listed as a leading and formidable awarding institute authorised</b></h5>
                                        <h5><b>and approved by the University Grants Commission (UGC) under the Universities Act,</b></h5>
                                        <h5><b>and the International Association of Universities (IAU). Furthermore, not only we</b></h5>
                                        <h5><b>are the first Sri Lankan institute to be accredited by the Institute of Engineering</b></h5>
                                        <h5><b>& Technology(IET.), UK, our IT degrees are also in turn accredited by the Council, UK.</b></h5>

                                    </div>
                                </td>
                                <td>
                                    <tr>
                                        <td>
                                            <img src={sliit1} style={{ width: 150, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }} />
                                            <center><p><b>10 YEARS OF EXISTENCE</b></p></center>
                                        </td>

                                        <td>
                                            <img src={sliit2} style={{ width: 150, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }} />
                                            <center><p><b>10000+ STUDENTS</b></p></center>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img src={sliit3} style={{ width: 150, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }} />
                                            <center><p><b>500 YEARS <br></br> OF COLLECTIVE EXPERIENCE</b></p></center>
                                        </td>

                                        <td>
                                            <img src={sliit4} style={{ width: 150, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }} />
                                            <center><p><b>OVER 7000 <br></br>SUCCESS STORIES</b></p></center>
                                        </td>


                                    </tr>


                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
                <br />

                <div className='container'>
                    <div className="row" style={{ backgroundColor: '#1a8cff', borderRadius: '0px 150px 150px 0px' }}>
                        <table>
                            <tr>
                                <td style={{ width: '40%' }}>
                                    <img src={reggif} style={{ width: '500px', height: 'auto' }} />
                                </td>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 ><b>New Registration for Students</b></h3>
                                    <p>now you can join with our next year classes</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px' }} href='/signupstd'>Register now!</a>
                                </td>
                            </tr>
                        </table>
                    </div><br />
                    <div className="row" style={{ backgroundColor: '#0069cc', borderRadius: '150px 0px 0px 150px' }}>
                        <table>
                            <tr>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 style={{ marginLeft: '30px' }}><b>How to buy online subjects?</b></h3>
                                    <p style={{ marginLeft: '30px' }}>You can buy subjects here. Click below...</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px', marginLeft: '30px' }} href='/allsubjects'>Buy now!</a>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <img src={subgif} style={{ width: '400px', height: 'auto' }} />
                                </td>
                            </tr>
                        </table>
                    </div><br />
                    <div className="row" style={{ backgroundColor: '#004f99', borderRadius: '0px 150px 150px 0px' }}>
                        <table>
                            <tr>
                                <td style={{ width: '40%' }}>
                                    <img src={coursegif} style={{ width: '500px', height: 'auto' }} />
                                </td>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 ><b>How to buy online courses?</b></h3>
                                    <p>You can buy courses here. Click below...</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px' }} href='/course'>Buy now!</a>
                                </td>
                            </tr>
                        </table>
                    </div><br />
                    <div className="row" style={{ backgroundColor: '#003566', borderRadius: '150px 0px 0px 150px' }}>
                        <table>
                            <tr>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 style={{ marginLeft: '30px' }}><b>Wanna Join With Us?</b></h3>
                                    <p style={{ marginLeft: '30px' }}>You are warmly wewlcome here as a lecturer or trainee...</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '250px', marginLeft: '30px' }} href='/lecturerreg' target="_blank" rel="noopener noreferrer">Academic Registration</a>&nbsp;
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '300px', marginLeft: '30px' }} href='/apply' target="_blank" rel="noopener noreferrer">Non-Academic Registration</a>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <img src={lecgif} style={{ width: '500px', height: 'auto' }} />
                                </td>
                            </tr>
                        </table>
                    </div><br />
                    <hr style={{ backgroundColor: '#004f99', height: '5px' }}></hr>
                    <br />
                    <div id="contact" class="container" style={{ color: '#808080' }}>
                        <h3 class="text-center">Contact</h3>
                        <p class="text-center"><em>We love our students!</em></p>

                        <div class="row" style={{ color: '#808080' }}>
                            <div class="col-md-4">
                                <p>Visitors? Drop a note.</p>
                                <p><span class="glyphicon glyphicon-map-marker"></span><i class="fas fa-map-marker-alt"></i> &nbsp;Colombo, SL</p>
                                <p><span class="glyphicon glyphicon-phone"></span><i class="fas fa-phone"></i> &nbsp;Phone: +94 1515151515</p>
                                <p><span class="glyphicon glyphicon-envelope"></span><i class="far fa-envelope"></i> &nbsp;Email: royaledu@mail.com</p>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Name" required />
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                    </div>
                                </div>
                                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                                <br />
                                <div class="row">
                                    <div class="col-md-12 form-group">

                                        <Popup trigger={<button class="btn pull-right btn btn-outline-secondary" type="submit">Send</button>} position="right center">
                                            <div>Thank You! for your response<br /></div>
                                        </Popup>
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
