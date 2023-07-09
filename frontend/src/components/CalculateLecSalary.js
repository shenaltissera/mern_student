import React, { Component } from 'react'
import axios from 'axios';

export default class CalculateLecSalary extends Component {
   
    constructor(props){
        super(props);

        this.onChangelecId = this.onChangelecId.bind(this);
        this.onChangename= this.onChangename.bind(this);
        this.onChangenatSalary = this.onChangenatSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            lecId:'',
            name:'',
            netSalary:''            
        }
    }
    
   
    onChangelecId(e) {
        this.setState({ lecId: e.target.value })
    }

    onChangename(e) {
        this.setState({ name: e.target.value })
    }

    onChangenatSalary(e) {
        this.setState({ netSalary: e.target.value })
    }
   
    onSubmit =(e) =>{
        e.preventDefault();
        
      
        const userObject  ={
            lecId:this.state.lecId,
            name:this.state.name,
            netSalary:this.state.netSalary           
        };

        console.log(userObject)


        axios.post('/CalculatedSalary/save', userObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    
    alert("Net Salary succssfully!")
    this.setState({  lecId:'',
    name:'',
    netSalary:''  })

    }
   
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/paymentdetails/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                lecId:res.data.lArequest.lecId,
                name:res.data.lArequest.name
                  
            });

                
            }
        });
    }
    

    render() {
        return (
            <div>
                <br/><br/>
                <div className="container-xxl">
               <center><h3 style={{textDecoration:'none', color:'#ff8000'}}><b><u>Insert Calculated Net Salary</u></b></h3></center>
                </div>
                <br/>
                <form className="container-xxl">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label >Lecturer ID</label>
                        <input type="text" className="form-control"  
                         name="lecId"
                         placeholder="enter Lecturer Id"
                         value={this.state.lecId}
                         onChange={this.onChangelecId}></input>
                        </div>
                        <br/>
                        


                        <div className="form-group col-md-6">
                        <label >Lecturer Name</label>
                        <input type="text" className="form-control"  
                         name="name"
                         placeholder="enter Event Id"
                         value={this.state.name}
                         onChange={this.onChangename}></input>
                        </div>
                        <br/>
                       


                        <div className="form-group col-md-6">
                        <label >Net Salary</label>
                        <input type="text" className="form-control"  
                         name="netSalary"
                         placeholder="Enter Net Salary"
                         value={this.state.netSalary}
                         onChange={this.onChangenatSalary}></input>
                        </div>
                    </div>
                   
                    <br/>

                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Store Salary</button>
            </form>
            </div>
        )
    }
}
