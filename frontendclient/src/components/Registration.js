import React, { Component } from 'react'
import axios from 'axios'
import pic from '../images/welcome1.jpg';
import ch from '../images/ui.jpg';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_full_name: " ",
            Name_with_initials: " ",
            date_of_addmission: " ",
            class_name: " ",
            course_name: " ",
            date_of_birth: " ",
            nic: " ",
            email: " ",
            address: " ",
            telephone: " ",
            gender: " ",
            religion: " ",
            nationality: " ",
            gurdian_name: " ",
            gurdian_contact_number: " ",
            gurdian_email: " ",
            gurdian_occupation: " ",
            date: " ",
            bank_name: " ",
            branch: " ",
            payment_date: " "
        }

    }

    handleInputChange  = (e) => {
        const { name, value } = e.target;

        let nam = e.target.name;
        let val = e.target.value;

        //validations
        if (nam === 'nic') {

            if (val.length > 12) {
                alert("Invalid length!!");
            }
            if (!Number(val)) {
                alert('The Fee should be numeric!.')
              }
        }

        if (nam === 'telephone') {

            if (val.length > 10) {
                alert("Invalid length!!");
            }
            if (!Number(val)) {
                alert('The Fee should be numeric!.')
              }
        }

        if (nam === 'gurdian_contact_number') {

            if (val.length > 10) {
                alert("Invalid length!!");
            }
            if (!Number(val)) {
                alert('The Fee should be numeric!.')
              }
        }


        this.setState({
            ...this.state,
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { student_full_name, Name_with_initials, date_of_addmission, class_name, course_name, date_of_birth, nic, email, address, telephone, gender, religion, nationality, gurdian_name, gurdian_contact_number, gurdian_email, gurdian_occupation, date, bank_name, branch, payment_date } = this.state;

        const data = {

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
        console.log(data);

        axios.post('/post/save', data).then((res) => {
            if (res.data.success) {
                alert("Are you sure to submit those details ?")
                this.setState({
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

    onClickDemo = () => {
        this.setState(
            {
                student_full_name: "Malshika Peiris",
                Name_with_initials: "M.Peiris",
                date_of_addmission: "2021-09-20",
                class_name: "English",
                course_name: "IT",
                date_of_birth: "1999-07-03",
                nic: "996878675V",
                email: "gpmalshika@gmail.com",
                address: "Kalamulla,Kalutara",
                telephone: "0711798124",
                gender: "Female",
                religion: "Buddhism",
                nationality: "sriLankan",
                gurdian_name: "Kumara Peiris",
                gurdian_contact_number: "0714224296",
                gurdian_email: "kumaraPeiris@gmail.com",
                gurdian_occupation: "Officer",
                date: "2020-07-12",
                bank_name: "Sampath ",
                branch: "Kalutara",
                payment_date: "2020-01-18"
            })
    }

    render() {
        return (
            <div >
                <p class="fs-4">Student Management System</p>
                <div className="container">
                    <h1>Student Registration Form</h1>
                </div>
                <div className='card container'>
                    <img src={ch} style={{ width: '1300px', height: '100%', }}></img>
                    <div className="container">

                        <h1><p class="fs-1"> You can REGISTER here and we warmly <img src={pic} style={{ width: '500px', height: '100%' }}></img> </p></h1>
                        &nbsp;&nbsp;

                        <form className="needs-validation" onSubmit={this.onSubmit}>
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
                                <input type="date" className="form-control" name="date_of_addmission" value={this.state.date_of_addmission} onChange={this.handleInputChange} required />
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
                                <input  type="date" className="form-control" name="date_of_birth" aria-describedby="emailHelp" value={this.state.date_of_birth} onChange={this.handleInputChange} required />
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
                            <h3>Now you can Fill the Student Gardian Details</h3>
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
                            <input  type="date" className="form-control" name="date" aria-describedby="emailHelp" value={this.state.date} onChange={this.handleInputChange} required />
                        </div> 
                        &nbsp;
                            <h3>Now you can Fill the Student Payment Details</h3>
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
                                <input type="date" className="form-control" name="payment_date" aria-describedby="emailHelp" value={this.state.payment_date} onChange={this.handleInputChange} required />
                            </div> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="submit" style={{ width: '100%' }} className="btn btn-dark btn-lg btn-block">SAVE ALL DETAILS</button>
                        </form>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='container'><button className="btn btn-outline-danger btn-sm" onClick={this.onClickDemo}>Demo</button>&nbsp;
                </div>
            </div>

        )
    }
}
