import React, { Component } from 'react'
import axios from 'axios';

export default class AllSubjectsView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };

  }


  componentDidMount() {
    this.retrieveSubjects();
  }


  retrieveSubjects() {
    axios.get("/subjectclient").then(res => {
      if (res.data.success) {
        this.setState({
          subjects: res.data.existingSubjects //attention here*****
        });

        console.log(this.state.subjects)
      }
    })
  }

  onDelete = (id) => {
    axios.delete(`/subjectclient/delete/${id}`).then((res) => {
      alert("Deleted Succesfully!");
      this.retrieveSubjects();
    })
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: '45px', marginLeft: '50px' }}>
          <h1>Client Preview</h1>
          <h5>You Can Edit Client View Here</h5>
        </div >

        <hr />

        <div className='container'>
          <table className='table table-borderless'>
            <tbody>
              {this.state.subjects.map((subjects, index) => (
                <tr style={{ fontSize: '20px' }}>
                  <td style={{ width: '150px', }}>{subjects.subjectName}<br/>
                    <b style={{ fontSize: '24px' }}>Rs: {subjects.subjectFee}/<small style={{ fontSize: '13px' }}>Monthly</small></b>
                  </td>
                  <td style={{ width: '500px', fontSize: '17px', color: '#8c8c8c' }}>{subjects.subjectDes}</td>
                  <td style={{ width: '150px', marginLeft: '50px' }}>
                    <a className="btn btn-success" href={`/addenrollsub/${subjects._id}`}>
                      &nbsp;<b>Enroll</b>&nbsp;<i className="fas fa-arrow-circle-right"></i>
                    </a>&nbsp;
                    <a className="btn btn-light" href={`/subfee/${subjects._id}`}>
                      <i className="fas fa-money-bill-alt"></i>&nbsp;<b>Pay Fees</b>&nbsp;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
