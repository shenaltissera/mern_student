import React, { Component } from 'react'
//import background from '../images/red.png';
import axios from 'axios'
//import './style.css'


export default class detailRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: "",
            notice: "",

            updateDetails: []

        }
    }

    componentDidMount() {
        this.retrieveUpdateDetails();
    }

    retrieveUpdateDetails() {
        axios.get("/lecDetailsReq").then(res => {
            if (res.data.success) {
                this.setState({
                    updateDetails: res.data.existingUpdateDetails
                });

                console.log(this.state.updateDetails);
            }
        });
    }
    onDelete = (id) => {
        axios.delete(`/detailreq/delete/${id}`).then((then) => {
            alert("Delete Successfully!");
            this.retrieveUpdateDetails();
        })
    }


    handleInputChange = (e) => {
        const { name, value } = e.target;



        this.setState({
            ...this.state,
            [name]: value
        })
    }
    onsubmit = (e) => {
        e.preventDefault();
        const { date, notice } = this.state;
        const data = {
            date: date,
            notice: notice

        }
        console.log(data)
        axios.post(`/lecDetailsReq/save`, data).then((res) => {
            if (res.data.success) {
                alert("Notice uploded successfully!")
                this.setState({
                    date: "",
                    notice: "",

                })
            }
        })
    }



    render() {
        return (

            <div className="container" >

                <div class="card" style={{
                    width: "80%",
                    marginLeft: "8%",
                    marginTop: '10px',
                    width: '1500px',
                    border: '1px solid black',
                    marginRight: '10px',
                    marginLeft: '-90px',
                    background:'Aquamarine'
                }}>

                    <center><h4 class="card-header"> <b>Add New Notice</b></h4></center>

                    <form className="needs-validation" noValidate>


                        <div className="card-body">
                            <label className="form-label"><b>  Date</b></label>
                            <input className="form-control" type="date" name="date" value={this.state.date} onChange={this.handleInputChange}></input>

                            <br></br>


                            <label className="form-label"><b>  Notice</b></label>
                            <textarea className="form-control" name="notice" rows="4" value={this.state.notice} onChange={this.handleInputChange}></textarea>
                        </div>




                        <center>
                            <button type="submit" className="btn btn-info" onClick={this.onsubmit}><b>Publish the notice</b></button>
                        </center>
                        <br></br>
                    </form>


                </div>
                <br></br>
                <br></br>

                <center><h3><b>Published Notices</b></h3></center>
                <br></br>
                <table className=" table table-success table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col" ></th>
                            <th scope="col" >Date</th>
                            <th scope="col" >Notice</th>
                            <th scope="col" ></th>
                            <th scope="col" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.updateDetails.map((updateDetail, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td><b>{updateDetail.date}</b></td>
                                <td><b>{updateDetail.notice}</b></td>
                                <td>
                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(updateDetail._id)}>
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a>
                                        &nbsp;
                    </td>
                    <td>
                  <a className = "btn btn-warning" href={`/editnotice/${updateDetail._id}`} target="_blank" rel="noopener noreferrer">
                    < i className ="fas fa-edit"></i>&nbsp;Edit
                    </a>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>


        )
    }
}