import React, { Component } from 'react'
import axios from 'axios';

export default class SubjectFees extends Component {

    constructor(props) {
        super(props);
        this.onfill = this.onfill.bind(this);
        this.state = {
            fullName: "",
            studentID: "",
            date: "",
            phoneNumber: "",
            email: "",
            lecturerName: "",
            courseID: "",
            cardNo: "",
            cvc: "",
            cardHoldersName: "",

        }
    }

    onfill() {
        this.setState({
            fullName: "Tharushi ",
            studentID: "STD001",
            date: "2021/11/03",
            phoneNumber: "0712344344",
            email: "tharushi@gmail.com",
            lecturerName: "Kamal perera",
            courseID: "CID001",
            cardNo: "4674384839",
            cvc: "345",
            cardHoldersName: "Tharushi"
        });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;


        let nam = e.target.name;
        let val = e.target.value;

        //validations
        if (nam === 'phoneNumber') {

            if (val.length > 10) {
                alert("Invalid length in Number!!");
            }
            if (!Number(val)) {
                alert('The student ID should be a number!.')
            }

        }

        if (nam === 'cardNo') {

            if (val.length > 16) {
                alert("Invalid length in card number!!");
            }
            if (!Number(val)) {
                alert('The card number should be a number!.')
            }

        }

        if (nam === 'cvc') {

            if (val.length > 3) {
                alert("Invalid length in card cvc!!");
            }
            if (!Number(val)) {
                alert('The card cvc should be a number!.')
            }

        }


        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fullName, studentID, date, phoneNumber, email, lecturerName, courseID, cardNo, cvc, cardHoldersName } = this.state;

        const data = {

            fullName: fullName,
            studentID: studentID,
            date: date,
            phoneNumber: phoneNumber,
            email: email,
            lecturerName: lecturerName,
            courseID: courseID,
            cardNo: cardNo,
            cvc: cvc,
            cardHoldersName: cardHoldersName


        }


        console.log(data)

        axios.post("/feesPay/save", data).then((res) => {
            if (res.data.success) {
                alert("Successfully Recorded Your Payment!")
                this.setState(
                    {
                        fullName: "",
                        studentID: "",
                        date: "",
                        phoneNumber: "",
                        email: "",
                        lecturerName: "",
                        courseID: "",
                        cardNo: "",
                        cvc: "",
                        cardHoldersName: "",


                    }
                )
            }
        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/subjectclient/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    subjectId: res.data.subject.subjectId
                });

                console.log(this.state.subject);
            }
        });
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: '45px', marginLeft: '50px' }}>
                    <h1>Pay Subject Fees</h1>
                    <h5>Subjects are paid as monthly, You can Pay them here...</h5>
                </div>
                <hr />
                <div className='container'>
                    <form className="row g-3 needs-validation" onSubmit={this.onSubmit}>
                        <div className='card'>

                            <div className='card-header'><h4>Student Details</h4></div>

                            <div className="col-md-10" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Full Name</label>
                                <input
                                    className="form-control"
                                    name="fullName"
                                    placeholder="Enter Your Full Name"
                                    value={this.state.fullName}
                                    onChange={this.handleInputChange} required />
                            </div>

                            <div className="col-md-10" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Student ID</label>
                                <input
                                    className="form-control"
                                    name="studentID"
                                    placeholder="Enter Student ID"
                                    value={this.state.studentID}
                                    onChange={this.handleInputChange} required />
                            </div>


                            <div className="col-md-4" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    placeholder="Date"
                                    value={this.state.date}
                                    onChange={this.handleInputChange} required />
                            </div>

                            <div className="col-md-4" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Phone Number</label>
                                <input
                                    className="form-control"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleInputChange} required />
                            </div>


                            <div className="col-md-8" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} required />
                            </div>

                        </div>

                        <div className='card'>

                            <div className='card-header'><h4>Course Details</h4></div>

                            <div className="col-md-10" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Lecturer Name</label>
                                <input
                                    className="form-control"
                                    name="lecturerName"
                                    placeholder="Lecturer Name"
                                    value={this.state.lecturerName}
                                    onChange={this.handleInputChange} required />
                            </div>

                            <div className="col-md-4" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Subject ID</label>
                                <input
                                    className="form-control"
                                    name="courseID"
                                    value={this.state.subjectId}
                                    onChange={this.handleInputChange} required />
                            </div>

                        </div>

                        <div className='card'>

                            <div className='card-header'><h4>Payment Details</h4></div>

                            <div className="col-md-6" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Card No</label>
                                <input
                                    className="form-control"
                                    name="cardNo"
                                    placeholder="Card No"
                                    value={this.state.cardNo}
                                    onChange={this.handleInputChange} required />
                            </div>

                            <div className="col-md-4" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>CVC</label>
                                <input
                                    className="form-control"
                                    name="cvc"
                                    placeholder="CVC"
                                    value={this.state.cvc}
                                    onChange={this.handleInputChange} required />
                            </div>

                            <div className="col-md-10" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '15px' }}>Card Holder's Name</label>
                                <input
                                    className="form-control"
                                    name="cardHoldersName"
                                    placeholder="Card Holder's Name"
                                    value={this.state.cardHoldersName}
                                    onChange={this.handleInputChange} required />
                            </div>

                        </div>

                        <button className="btn btn-success" type="submit" style={{ width: '90px' }} >
                            <i className="far fa-check-square"></i>
                            &nbsp; PAY
                        </button>



                    </form>
                    <button
                        className="btn btn-outline-danger btn-sm"
                        type="submit"
                        style={{ marginTop: "15px" }}
                        onClick={this.onfill}
                    >Demo
                    </button>
                </div>
            </div>
        )
    }
}
