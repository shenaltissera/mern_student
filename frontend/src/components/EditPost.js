import React, { Component } from 'react'
import axios from 'axios'
import pics6 from '../images/pencil.png';
import pics66 from '../images/editPost.jpeg';

export default class EditPost extends Component {


    constructor(props) {
        super(props);
        this.state = {
            registrationNo: "",
            student_full_name: "",
            Name_with_initials: "",
            date_of_addmission: "",
            class_name: "",
            course_name: "",
            date_of_birth: "",
            nic: "",
            email: "",
            address: "",
            telephone: "",
            gender: "",
            religion: "",
            nationality: "",
            gurdian_name: "",
            gurdian_contact_number: "",
            gurdian_email: "",
            gurdian_occupation: "",
            date: "",
            bank_name: "",
            branch: "",
            payment_date: ""
        }

    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let nam = e.target.name;
        let val = e.target.value;

        //validations
        if (nam === 'nic') {

            if (val.length > 12) {
                alert("Invalid length!!");
            }
        }

        if (nam === 'telephone') {

            if (val.length > 10) {
                alert("Invalid length!!");
            }
        }

        if (nam === 'gurdian_contact_number') {

            if (val.length > 10) {
                alert("Invalid length!!");
            }
        }

        this.setState({
            ...this.state,
            [name]: value
        })
    }
    onsubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { registrationNo, student_full_name, Name_with_initials, date_of_addmission, class_name, course_name, date_of_birth, nic, email, address, telephone, gender, religion, nationality, gurdian_name, gurdian_contact_number, gurdian_email, gurdian_occupation, date, bank_name, branch, payment_date } = this.state;

        const data = {
            registrationNo: registrationNo,
            student_full_name: student_full_name,
            Name_with_initials: Name_with_initials,
            date_of_addmission: date_of_addmission,
            class_name: class_name,
            course_name: course_name,
            date_of_birth: date_of_birth,
            nic: nic,
            email: email,
            address: address,
            telephone: telephone,
            gender: gender,
            religion: religion,
            nationality: nationality,
            gurdian_name: gurdian_name,
            gurdian_contact_number: gurdian_contact_number,
            gurdian_email: gurdian_email,
            gurdian_occupation: gurdian_occupation,
            date: date,
            bank_name: bank_name,
            branch: branch,
            payment_date: payment_date
        }
        console.log(data)
        axios.put(`/Approved/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Updated Successfully")
                this.setState({
                    registrationNo: "",
                    student_full_name: "",
                    Name_with_initials: "",
                    date_of_addmission: "",
                    class_name: "",
                    course_name: "",
                    date_of_birth: "",
                    nic: "",
                    email: "",
                    address: "",
                    telephone: "",
                    gender: "",
                    religion: "",
                    nationality: "",
                    gurdian_name: "",
                    gurdian_contact_number: "",
                    gurdian_email: "",
                    gurdian_occupation: "",
                    date: "",
                    bank_name: "",
                    branch: "",
                    payment_date: ""
                })
            }
        })
    }


    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/Approved/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    registrationNo: res.data.post.registrationNo,
                    student_full_name: res.data.post.student_full_name,
                    Name_with_initials: res.data.post.Name_with_initials,
                    date_of_addmission: res.data.post.date_of_addmission,
                    class_name: res.data.post.class_name,
                    course_name: res.data.post.course_name,
                    date_of_birth: res.data.post.date_of_birth,
                    nic: res.data.post.nic,
                    email: res.data.post.email,
                    address: res.data.post.address,
                    telephone: res.data.post.telephone,
                    gender: res.data.post.gender,
                    religion: res.data.post.religion,
                    nationality: res.data.post.nationality,
                    gurdian_name: res.data.post.gurdian_name,
                    gurdian_contact_number: res.data.post.gurdian_contact_number,
                    gurdian_email: res.data.post.gurdian_email,
                    gurdian_occupation: res.data.post.gurdian_occupation,
                    date: res.data.post.date,
                    bank_name: res.data.post.bank_name,
                    branch: res.data.post.branch,
                    payment_date: res.data.post.payment_date
                });

                console.log(this.state.post);
            }
        });
    }



    render() {
        return (
            <div>
                <p class="fs-4">Student Management System</p>
                <div className="container">
                    <h1>Edit Student Details </h1>
                </div>
                <div className='card container'>
                    <div className="container">
                        <img src={pics66} style={{ width: '1300px', height: '100%' }}></img>
                        <h1><p class="fs-1">  Admin Edit Students Details<img src={pics6} style={{ width: '100px', height: '100%' }}></img> </p></h1>
                        &nbsp;&nbsp;
                        <form className="needs-validation" onSubmit={this.onsubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">Registraion No</p></label>
                                <input className="form-control" name="registrationNo" aria-describedby="emailHelp" value={this.state.registrationNo} onChange={this.handleInputChange} readOnly />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">Student full Name </p></label>
                                <input className="form-control" name="student_full_name" aria-describedby="emailHelp" value={this.state.student_full_name} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"><p class="fw-bold">Name with Initials </p></label>
                                <input className="form-control" name="Name_with_initials" value={this.state.Name_with_initials} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"> <p class="fw-bold">Date of Addmission </p></label>
                                <input className="form-control" name="date_of_addmission" value={this.state.date_of_addmission} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Class Name </p></label>
                                <input className="form-control" name="class_name" aria-describedby="emailHelp" value={this.state.class_name} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Course Name </p></label>
                                <input className="form-control" name="course_name" aria-describedby="emailHelp" value={this.state.course_name} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">Date of Birth</p></label>
                                <input className="form-control" name="date_of_birth" aria-describedby="emailHelp" value={this.state.date_of_birth} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">NIC</p></label>
                                <input className="form-control" name="nic" aria-describedby="emailHelp" value={this.state.nic} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Email </p></label>
                                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Address</p></label>
                                <input className="form-control" name="address" aria-describedby="emailHelp" value={this.state.address} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Telephone</p></label>
                                <input className="form-control" name="telephone" aria-describedby="emailHelp" value={this.state.telephone} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gender</p></label>
                                <input className="form-control" name="gender" aria-describedby="emailHelp" value={this.state.gender} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Religion</p></label>
                                <input className="form-control" name="religion" aria-describedby="emailHelp" value={this.state.religion} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Nationality</p></label>
                                <input className="form-control" name="nationality" aria-describedby="emailHelp" value={this.state.nationality} onChange={this.handleInputChange} required />
                            </div>&nbsp;
                            <h3>Student Gurdian Details</h3>
                            &nbsp;
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Name</p></label>
                                <input className="form-control" name="gurdian_name" aria-describedby="emailHelp" value={this.state.gurdian_name} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Contact Number</p></label>
                                <input className="form-control" name="gurdian_contact_number" aria-describedby="emailHelp" value={this.state.gurdian_contact_number} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Email </p></label>
                                <input type="email" className="form-control" name="gurdian_email" aria-describedby="emailHelp" value={this.state.gurdian_email} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Occupation </p></label>
                                <input className="form-control" name="gurdian_occupation" aria-describedby="emailHelp" value={this.state.gurdian_occupation} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Date</p></label>
                                <input className="form-control" name="date" aria-describedby="emailHelp" value={this.state.date} onChange={this.handleInputChange} required />
                            </div>&nbsp;
                            <h3>Student Payment Details</h3>
                            &nbsp;
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Bank Name </p></label>
                                <input className="form-control" name="bank_name" aria-describedby="emailHelp" value={this.state.bank_name} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Branch </p></label>
                                <input className="form-control" name="branch" aria-describedby="emailHelp" value={this.state.branch} onChange={this.handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Payment Date </p></label>
                                <input className="form-control" name="payment_date" aria-describedby="emailHelp" value={this.state.payment_date} onChange={this.handleInputChange} required />
                            </div>
                            <center><button type="submit" className="btn btn-dark" > SAVE ALL DETAILS </button></center>
                        </form>
                        &nbsp;
                    </div>
                </div>
            </div>
        )
    }
}
