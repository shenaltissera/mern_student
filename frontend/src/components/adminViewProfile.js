import React, { Component } from 'react';
import axios from 'axios';

export default class adminViewProfile extends Component {

    constructor(props){
        super(props);

        this.state={
            profile:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/register/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    profile:res.data.post
                });

                console.log(this.state.profile);
            }
        });
    }
    render() {
            const{RegistationNumber,AppointedDate, FirstName, LastName,
                DateOfBirth, position, ContactNumber, NationalIDNumber, Gender, 
                Address, BasicSalary,Email,WorkingExp,CarreerSum,EducationalQf} = this.state.profile;
            return (
                
                <div style={{marginLeft:100}}>
                 <a className="btn btn-success" href="/staffhome" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-home"></i>&nbsp;Home
                </a>
                     <h1 className="h1">Profile</h1>
    
                    <hr/>
    
                    <table className="table">
        
                        <tr>
                            <th scope="col">Registation Number</th>
                            <td>{RegistationNumber}</td>
                        </tr>
                        <tr>
                            <th scope="col">Appointed Date</th>
                            <td>{AppointedDate}</td>
                        </tr>
                        <tr>
                            <th scope="col">First Name</th>
                            <td>{FirstName}</td>
                        </tr>
                        <tr>
                            <th scope="col">Last Name</th>
                            <td>{LastName}</td>
                        </tr>
                        <tr>
                            <th scope="col">Date Of Birth</th>
                            <td>{DateOfBirth}</td>
                        </tr>
                        <tr>
                            <th scope="col">Position</th>
                            <td>{position}</td>
                        </tr>
                        <tr>
                            <th scope="col">Contact Number</th>
                            <td>{ContactNumber}</td>
                        </tr>
                        <tr>
                            <th scope="col">National ID Number</th>
                            <td>{NationalIDNumber}</td>
                        </tr>
                        <tr>
                            <th scope="col">Gender</th>
                            <td>{Gender}</td>
                        </tr>
                        <tr>
                            <th scope="col">BasicSalary</th>
                            <td>{BasicSalary}</td>
                        </tr>
                        <tr>
                        <th scope="col">Address</th>
                        <td>{Address}</td>
                        </tr>
                        <tr>
                             <th scope="col">Email</th>
                            <td>{Email}</td>
                        </tr>
                        <tr>
                            <th scope="col">Working Experience</th>
                            <td>{WorkingExp}</td>
                        </tr>
                        <tr>
                            <th scope="col">Carrier Summary</th>
                            <td>{CarreerSum}</td>
                        </tr>
                        <tr>
                            <th scope="col">Educational Quilifications</th>
                            <td>{EducationalQf}</td>
                        </tr>

                    
                    </table>
                    &nbsp;

                <a className="btn btn-success" href={`/updateStf/${this.props.match.params.id}`}>
                    <i className="fas fa-edit" ></i>&nbsp;Edit Details
                </a>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a className="btn btn-success" href={`/pdf/${this.props.match.params.id}`}>
                    <i className="fas fa-file" ></i>&nbsp;Generate PDF
                </a>


                </div>
            )
    }
}
