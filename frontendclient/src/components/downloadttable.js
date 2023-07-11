import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

export default class downloadttable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timetableID: "",
      subjectORcourse: "",
      monthANDdate: "",
      time: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/timetables/search/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          timetableID: res.data.table.timetableID,
          subjectORcourse: res.data.table.subjectORcourse,
          monthANDdate: res.data.table.monthANDdate,
          time: res.data.table.time,
        });

        console.log(this.state.timetable);
      }
    });
  }

  createAndDownloadPdf = () => {
    axios
      .post("/createttpdf", this.state)
      .then(() => axios.get("/fetchttpdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "timetable.pdf");
      });
  };

  render() {
    return (
      <div>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">
            Download selected Time table
          </h1>
          <form className="needs-validation">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ margineBottom: "5px" }}>Time Table ID</label>
              <input
                className="form-control"
                name="timetableID"
                placeholder="enter Event Id"
                value={this.state.timetableID}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ margineBottom: "5px" }}>Subject or Course</label>
              <input
                className="form-control"
                name="subjectORcourse"
                placeholder="enter Subject or Course"
                value={this.state.subjectORcourse}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ margineBottom: "5px" }}>Month and Date</label>
              <input
                className="form-control"
                name="monthANDdate"
                placeholder="enter Month and Date"
                value={this.state.monthANDdate}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ margineBottom: "5px" }}>Time</label>
              <input
                className="form-control"
                name="time"
                placeholder="enter Time"
                value={this.state.time}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>
          </form>
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.createAndDownloadPdf}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Download PDF
          </button>
        </div>
      </div>
    );
  }
}
