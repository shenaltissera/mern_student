import React, { Component } from 'react';
import axios from 'axios';

export default class ViewStfApplication extends Component {

    constructor(props){
        super(props);

        this.state={
            application:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/application/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    application:res.data.post
                });

                console.log(this.state.application);
            }
        });
    }

    onDelete=(id)=>{
        axios.delete(`/application/delete/${id}`).then((res)=>{
          alert("Deleted Succesfully..!")
          window.location.replace('/applications');
        })
      }

    render() {
            const{FirstName, LastName,
                DateOfBirth, position, ContactNumber, NationalIDNumber, Gender, 
                Address, ExpectedSalary,Email,WorkingExp,CarreerSum,EducationalQf} = this.state.application;
            return (
                
                <div style={{marginLeft:100}}>
                 <a className="btn btn-success" href="/staffhome" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-home"></i>&nbsp;Home
                </a>
                     <h1 className="h1">Application</h1>
    
                    <hr/>
    
                    <table className="table">
    
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
                            <th scope="col">Address</th>
                            <td>{Address}</td>
                        </tr>
                        <tr>
                            <th scope="col">Expected Salary</th>
                            <td>{ExpectedSalary}</td>
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

                <a className="btn btn-success" href= {`/viewapplication/${this.props.match.params.id}`} style={{textDecoration:'none', color:'white'}}>
              <i className="fas fa-plus-circle"></i>&nbsp;Add To Staff
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a className="btn btn-danger" onClick={()=>this.onDelete(this.props.match.params.id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete Application
                </a>




                </div>
            )
    }
}
