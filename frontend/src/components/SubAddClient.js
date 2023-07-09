import React, { Component } from 'react'
import axios from 'axios';

export default class SubAddClient extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subjectName: "",
            subjectFee: "",
            subjectDes: "",
            subjectId: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/subject/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    subjectName: res.data.subject.subjectName,
                    subjectFee: res.data.subject.subjectFee,
                    subjectDes: res.data.subject.subjectDes,
                    subjectId: res.data.subject.subjectId
                });

                console.log(this.state.subject);
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { subjectName, subjectFee, subjectDes, subjectId } = this.state;

        const data = {
            subjectName: subjectName,
            subjectFee: subjectFee,
            subjectDes: subjectDes,
            subjectId: subjectId
        }

        console.log(data)

        axios.post("/subjectclient/save", data).then((res) => {
            if (res.data.success) {
                alert("Subject Added!")
                this.setState(
                    {
                        subejctId: "",
                        subjectName: "",
                        subjectFee: "",
                        subjectDes: ""
                    }
                )
            }
        })
        window.location.replace('/stdview');
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: '45px', marginLeft: '50px' }}>
                    <h1>Add to Client View</h1>
                    <h5>You can adda new subjects to client</h5>
                </div>

                <hr />

                <div className='container' style={{ marginTop: '45px' }}>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Subject ID</label>
                            <input className="form-control" name="subjectId" value={this.state.subjectId} onChange={this.handleInputChange} readOnly />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Subject Name</label>
                            <input className="form-control" name="subjectName" value={this.state.subjectName} onChange={this.handleInputChange} readOnly />
                        </div>
                        <div className="col-md-6">
                            <label for="inputAddress2" className="form-label">Subject Fee</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">Rs:</span>
                                <input className="form-control" name="subjectFee" value={this.state.subjectFee} onChange={this.handleInputChange} readOnly />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Description</label>
                            <textarea rows="7" className="form-control" style={{ width: '600px' }} name="subjectDes" value={this.state.subjectDes} onChange={this.handleInputChange} readOnly />
                        </div>



                        <div>
                            <hr />
                            <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Add to Client</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
