import React, { Component } from 'react'
import axios from 'axios';

export default class calculateStaffSalary extends Component {
   
   
       
        constructor(props){
            super(props);
    
            this.onChangeRegistationNumber = this.onChangeRegistationNumber.bind(this);
            this.onChangeFirstName= this.onChangeFirstName.bind(this);
            this.onChangenatSalary = this.onChangenatSalary.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    
            this.state={
                RegistationNumber:'',
                FirstName:'',
                netSalary:''            
            }
        }
        
       
        onChangeRegistationNumber(e) {
            this.setState({ RegistationNumber: e.target.value })
        }
    
        onChangeFirstName(e) {
            this.setState({ FirstName: e.target.value })
        }
    
        onChangenatSalary(e) {
            this.setState({ netSalary: e.target.value })
        }
       
        onSubmit =(e) =>{
            e.preventDefault();
            
          
            const userObject  ={
                RegistationNumber:this.state.RegistationNumber,
                FirstName:this.state.FirstName,
                netSalary:this.state.netSalary           
            };
    
            console.log(userObject)
    
    
            axios.post('/nonAcStaffSalary/save', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        
        alert("Net Salary succssfully!")
        this.setState({  RegistationNumber:'',
        FirstName:'',
        netSalary:''  })
    
        }
       
        componentDidMount(){
            const id = this.props.match.params.id;
    
            axios.get(`/register/${id}`).then((res)=>{
                if(res.data.success){
                    this.setState({
                    RegistationNumber:res.data.post.RegistationNumber,
                    FirstName:res.data.post.FirstName
                      
                });
    
                    
                }
            });
        }
        
    
        render() {
            return (
                <div>
                    <br/><br/>
                    <div className="container-xxl">
                   <center><h3 style={{textDecoration:'none', color:'#009973'}}><b><u>Insert Calculated Net Salary</u></b></h3></center>
                    </div>
                    <br/>
                    <form className="container-xxl">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label >Registered ID</label>
                            <input type="text" className="form-control"  
                             name="RegistationNumber"
                             placeholder="enter Lecturer Id"
                             value={this.state.RegistationNumber}
                             onChange={this.onChangeRegistationNumber}></input>
                            </div>

                            <br/>

                            <div className="form-group col-md-6">
                            <label >First Name</label>
                            <input type="text" className="form-control"  
                             name="FirstName"
                             placeholder="enter Event Id"
                             value={this.state.FirstName}
                             onChange={this.onChangeFirstName}></input>
                            </div>

                            <br/>

                            <div className="form-group col-md-6">
                            <label >Net Salary </label>
                            <input type="text" className="form-control"  
                             name="netSalary"
                             placeholder="Enter Net Salary"
                             value={this.state.netSalary}
                             onChange={this.onChangenatSalary}></input>
                            </div>
                        </div>
                       
                        <br/>
    
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Store Staff Salary</button>
                </form>
                </div>
            )
        }
    }
    