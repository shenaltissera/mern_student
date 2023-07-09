import React, { Component } from 'react';
import axios from 'axios';
import pic3 from '../images/Avenra.jpg';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import pic33 from '../images/HotelView2.jpg';
import pic34 from '../images/HotelView1.jpg';
export default class ViewStdDetails extends Component {
 
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
                
                <div>
                <p class="fs-4">Wedding Music and Entertainment</p>
                <div className="container">
                <h1><p class="fs-1">View Band Details</p></h1>
                <img src={pic34} style={{width:'1300px' , height:'100%'}}></img>
                <div className='card container'>
                    <h1> Profile of the Band</h1>
                &nbsp;&nbsp;            
                <table>
                        <tr>
                            <td>
                                <a href=''><img src={pic3} style={{ height: '300px', marginTop: '40px', marginLeft: '300px' }}></img></a><br />
                                <br></br>
                            </td>
                        </tr>
                    </table> 
    
                <table className="table" id="table-to-xls">
                <tr>
                            <th scope="col">Registation Number</th>
                            <td>{registrationNo}</td>
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
                            <th scope="col">Owner NIC</th>
                            <td>{nic}</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="col">Owner's Email</th>
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
                        <th scope="col">Owner Name</th>
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
                    <img src={pic33} style={{width:'1300px' , height:'100%'}}></img>
                    <br></br> &nbsp;&nbsp;
                    <h3>You can Download Excel sheet of the Band Details..</h3>
                    <br></br>
                    <ReactHTMLTableToExcel
                    className="btn btn-dark fas fa-file"
                    style={{textDecoration:'none', color:'white'}}
                    table="table-to-xls"
                    filename="Students Report"
                    sheet="tablexls"
                    buttonText=" Download Excel Report"/>
                    <br></br><br></br>
                    <h3>Admin can send an Email to the Band...</h3>
                       <br></br>
                    <br></br>
                  <a href="/getmail"><button class="btn btn-danger" ><i class="far fa-envelope"></i>&nbsp;Send Email</button></a><br></br>
                </div>
                </div>
                           
                
              
               
            )
    }
}

