import React, { Component } from 'react'
import axios from 'axios'

export default class PostDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }



    render() {

        const{student_full_name,Name_with_initials,date_of_addmission,class_name,course_name,date_of_birth,nic,email,address,telephone,gender,religion,nationality,gurdian_name,gurdian_contact_number,gurdian_email,gurdian_occupation,date,bank_name,branch,payment_date} = this.state;
    
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{student_full_name}</h4>
                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">student Full Name</dt>
                    <dd className="col-sm-9">{student_full_name}</dd>

                    <dt className="col-sm-3">Name with Initials</dt>
                    <dd className="col-sm-9">{Name_with_initials}</dd>

                    <dt className="col-sm-3">Date of Admission</dt>
                    <dd className="col-sm-9">{date_of_addmission}</dd>

                    <dt className="col-sm-3">Class Name</dt>
                    <dd className="col-sm-9">{class_name}</dd>

                    <dt className="col-sm-3">Course_Name</dt>
                    <dd className="col-sm-9">{course_name}</dd>

                    <dt className="col-sm-3">Date Of Birth</dt>
                    <dd className="col-sm-9">{date_of_birth}</dd>

                    <dt className="col-sm-3">NIC</dt>
                    <dd className="col-sm-9">{nic}</dd>

                    
                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{email}</dd>

                    <dt className="col-sm-3">Address</dt>
                    <dd className="col-sm-9">{address}</dd>

                    <dt className="col-sm-3">Telephone</dt>
                    <dd className="col-sm-9">{telephone}</dd>

                    <dt className="col-sm-3">Gender</dt>
                    <dd className="col-sm-9">{gender}</dd>

                    <dt className="col-sm-3">Religion</dt>
                    <dd className="col-sm-9">{religion}</dd>

                    <dt className="col-sm-3">Nationality</dt>
                    <dd className="col-sm-9">{nationality}</dd>

                    <dt className="col-sm-3">Gurdian name</dt>
                    <dd className="col-sm-9">{gurdian_name}</dd>

                    <dt className="col-sm-3">Gurdian Contact Number</dt>
                    <dd className="col-sm-9">{gurdian_contact_number}</dd>

                    <dt className="col-sm-3">Gurdian Email</dt>
                    <dd className="col-sm-9">{gurdian_email}</dd>

                    <dt className="col-sm-3">Gurdian Occupation</dt>
                    <dd className="col-sm-9">{gurdian_occupation}</dd>

                    <dt className="col-sm-3">Date</dt>
                    <dd className="col-sm-9">{date}</dd>

                    <dt className="col-sm-3">Bank Name</dt>
                    <dd className="col-sm-9">{bank_name}</dd>

                    
                    <dt className="col-sm-3">Brach</dt>
                    <dd className="col-sm-9">{branch}</dd>

                    
                    <dt className="col-sm-3">Payment Date</dt>
                    <dd className="col-sm-9">{payment_date}</dd>
                </dl>
            </div>
        )
    }
}

