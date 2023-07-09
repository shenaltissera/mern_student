import React, { Component } from 'react';
import axios from 'axios';
import pic2 from '../images/Avenra.jpg';
import pic12 from '../images/ViewPorfileHotel.jpg';

export default class profile extends Component {

    constructor(props){ 
        super(props);

        this.state={
            posts:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/Approved/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    posts:res.data.post
                });

                console.log(this.state.posts);
            }
        });
    }



    render() {
        
            const{registrationNo,student_full_name,Name_with_initials,date_of_addmission,class_name,course_name,date_of_birth,nic,email,address,telephone,gender,religion,nationality,gurdian_name,gurdian_contact_number,gurdian_email,gurdian_occupation,date,bank_name,branch,payment_date} = this.state.posts;
            return (
                
                <div >
                <p class="fs-4">Wedding Music and Entertainment</p>
                <div className="container">
                
                <h1><p class="fs-1">  Welcome to the Band Profile </p></h1>
                <img src={pic12} style={{width:'1300px' , height:'100%'}}></img>
    
                <div className='card container'  style={{backgroundColor:'#009999'}}>
                <h1>This is My Profile</h1>
                    &nbsp;&nbsp;
                    <table>
                        <tr>
                            <td><center>
                                <a href=''><img src={pic2} style={{ height: '350px', marginTop: '40px' }}></img></a><br />
                                <br></br></center>
                            </td>
                        </tr>
                    </table>
                   
                <table className="table" id="table-to-xls">
                   
                <tr>
                            <th scope="col" style={{marginRight:'0px'}}>Registation Number</th>
                            <td style={{marginLeft:'0px'}}>{registrationNo}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Band Name</th>
                            <td>{student_full_name}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Owner Name </th>
                            <td>{Name_with_initials}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Date of Admission</th>
                            <td>{date_of_addmission}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Class Type</th>
                            <td>{class_name}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Star And Rate</th>
                            <td>{course_name}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Date Of Birth</th>
                            <td>{date_of_birth}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col"> NIC</th>
                            <td>{nic}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Band Email</th>
                            <td>{email}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Contact Number</th>
                            <td>{telephone}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Date Of Addmission</th>
                            <td>{date_of_addmission}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Gender</th>
                            <td>{gender}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Religion</th>
                            <td>{religion}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Nationality</th>
                            <td>{nationality}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Band Address</th>
                            <td>{address}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col">Other Owner Name</th>
                        <td>{gurdian_name}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col"> Contact Number</th>
                        <td>{gurdian_contact_number}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col"> Email</th>
                        <td>{gurdian_email}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col"> Occupation</th>
                        <td>{gurdian_occupation}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col">Date</th>
                        <td>{date}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col">Bank Name</th>
                        <td>{bank_name}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col">Branch</th>
                        <td>{branch}</td>
                        </tr>
                        <br></br>
                        <tr>
                        <th scope="col">Payment Date</th>
                        <td>{payment_date}</td>
                        </tr>
                        <br></br>
                        &nbsp;&nbsp;
                    </table>
                    </div>
                    <img src={pic12} style={{width:'1300px' , height:'100%'}}></img>  &nbsp;&nbsp;
                    <div className="container">   
                   
                <p class="fs-5">If you need  Edit some details which were included in your Registration form?And You can click this button as well.
                </p>
                </div>
                    <a className="btn btn-dark" href={`/stdEdit/${this.props.match.params.id}`}><i className="fas fa-edit" ></i>&nbsp;Update Details</a>
                    
                <div className="container">   
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p class="fs-5">If you need Generate a report about your details?And You can click this button as well.
                </p>
                </div>
                 
                    <a className="btn btn-danger" href={`/stdPdf/${this.props.match.params.id}`}><i className="fas fa-file" ></i>&nbsp;Generate PDF</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                
                </div>
               
            )
    }
}






