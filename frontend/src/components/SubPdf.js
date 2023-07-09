import React, { Component } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';

export default class EditSub extends Component {

    constructor(props){
        super(props);

        this.state={
            subjectId:"",
            subjectName:"",
            subjectType:"",
            subjectCategory:"",
            subjectFee:"",
            subjectDes:""
        }
    }
    
    handleInputChange=(e)=>{
        const{name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const id = this.props.match.params.id;
        const {subjectId,subjectName,subjectType,subjectCategory,subjectFee,subjectDes} = this.state;

        const data={
            subjectId:subjectId,
            subjectName:subjectName,
            subjectType:subjectType,
            subjectCategory:subjectCategory,
            subjectFee:subjectFee,
            subjectDes:subjectDes
        }

        console.log(data)

        axios.put(`/subject/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Subject Updated!")
                this.setState(
                    {
                        subjectId:"",
                        subjectName:"",
                        subjectType:"",
                        subjectCategory:"",
                        subjectFee:"",
                        subjectDes:""
                    })
            }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/subject/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    subjectId:res.data.subject.subjectId,
                    subjectName:res.data.subject.subjectName,
                    subjectType:res.data.subject.subjectType,
                    subjectCategory:res.data.subject.subjectCategory,
                    subjectFee:res.data.subject.subjectFee,
                    subjectDes:res.data.subject.subjectDes
                });

                console.log(this.state.subject);
            }
        });
    }

    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'Subject.pdf');
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
    <label for="inputEmail4" className="form-label">Subject ID</label>
    <input className="form-control" name="subjectId"  value={this.state.subjectId} onChange={this.handleInputChange} readOnly/>
  </div>

  <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputPassword4" className="form-label">Subject Name</label>
    <input className="form-control" name="subjectName" value={this.state.subjectName} onChange={this.handleInputChange} readOnly/>
  </div>

  <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputAddress2" className="form-label">Subject Fee</label>
    <input className="form-control" name="subjectFee" value={this.state.subjectFee} onChange={this.handleInputChange} readOnly/>
  </div>

   <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputCity" className="form-label">Description</label>
    <textarea rows="7" className="form-control" style={{width:'600px'}} name="subjectDes" value={this.state.subjectDes} onChange={this.handleInputChange} readOnly/>
  </div>

  <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputCity" className="form-label">Subject Type</label>
    <input className="form-control" style={{width:'600px'}} name="subjectType" value={this.state.subjectType} onChange={this.handleInputChange} readOnly/>
  </div>

  <div className="col-md-8" style={{marginTop: '20px'}}>
    <label for="inputCity" className="form-label">Subject Category</label>
    <input className="form-control" style={{width:'600px'}} name="subjectCategory" value={this.state.subjectCategory} onChange={this.handleInputChange} readOnly/>
  </div>

  <hr/>

  <div>
    <button className="btn btn-success" onClick={this.createAndDownloadPdf}>Download File</button>
  </div>

</div>
</div>
        )
    }
}
