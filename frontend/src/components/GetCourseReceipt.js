import React, { Component } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';

export default class GetCourseReceipt extends Component {

    constructor(props){
        super(props);

        this.state={
            fullName:"",
            email:"",
            courseName:"",
            date:"",
            
        }
    }
    
    handleInputChange=(e)=>{
        const{name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/buycourse/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    fullName:res.data.buycourse.fullName,
                    email:res.data.buycourse.email,
                    courseName:res.data.buycourse.courseName,
                    date:res.data.buycourse.date,
                });

                console.log(this.state.buycourse);
            }
        });
    }

    createAndDownloadPdf = () => {
        axios.post('/createdulapdf', this.state)
          .then(() => axios.get('/fetchdulapdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'courseReceipt.pdf');
          })
      }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>Download the PDF File</h1>
                    <h5>Click Download to Continue</h5>
                    <hr/>
                </div>
                <div style={{marginTop: '45px'}}>
                
  <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputEmail4" className="form-label">Full Name :</label>
    <input className="form-control" name="fullName"  value={this.state.fullName} onChange={this.handleInputChange} readOnly/>
  </div>

  <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputPassword4" className="form-label">Email :</label>
    <input className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} readOnly/>
  </div>

  <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputAddress2" className="form-label">Category :</label>
    <input className="form-control" name="courseName" value={this.state.courseName} onChange={this.handleInputChange} readOnly/>
  </div>

   <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputCity" className="form-label">Date</label>
    <input  className="form-control" style={{width:'600px'}} name="date" value={this.state.date} onChange={this.handleInputChange} readOnly/>
  </div>

  <hr/>

  <div>
    <button className="btn btn-outline-danger" onClick={this.createAndDownloadPdf}><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp;Download File</button>
  </div>

</div>
</div>
        )
    }
}
