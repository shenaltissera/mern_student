import React, { Component } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';


export default class EditCourseFollowpdf extends Component {

    constructor(props){
        super(props);

        this.state={
            fullName:"",
            email:"",
            courseName:"",
            nic:""
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
                    nic:res.data.buycourse.nic,
                   
                });

                console.log(this.state.buycourse);
            }
        });
    }

    createAndDownloadPdf = () => {
      axios.post('/create-pdfcourse', this.state)
        .then(() => axios.get('/fetch-pdfcourse', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
          saveAs(pdfBlob, 'course.pdf');
        })
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: '45px', marginLeft:'50px'}}>
                    <h1>📢 Student Information : {this.state.fullName} </h1><br></br>
                    <h5> student information form will help you quickly and easily collect all the necessary student data </h5>
                    
                </div>

                <hr/>

                <div className='container' style={{marginTop: '45px'}}>
                <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">👨‍🎓 Full name </label>
    <input className="form-control" name="fullName"  value={this.state.fullName} onChange={this.handleInputChange} readOnly/>
  </div><br></br>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label"> 📧Student Email </label><br></br>
    <input className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} readOnly/>
  </div><br></br>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">🛑 Course name </label>
    <br></br>
    <input className="form-control" name="courseName" value={this.state.courseName} onChange={this.handleInputChange} readOnly/>
  </div><br></br>
   <div className="col-md-8">
    <label for="inputCity" className="form-label"> 📟 NIC number </label>
    <input className="form-control" style={{width:'600px'}} name="nic" value={this.state.nic} onChange={this.handleInputChange} readOnly/>
  </div>
 
  <div>
  </div>
</form>
<hr/>
    <button className="btn btn-success" onClick={this.createAndDownloadPdf}><i className="far fa-file-pdf"></i>&nbsp;Download PDF</button>
    <br></br><br></br>

<Link  to="/followed" type="button" class="btn btn-success"><i class="fas fa-arrow-circle-left"></i>&nbsp;Back</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

</div>
        )
    }
}
