import React, { Component } from 'react'
import axios from 'axios'


export default class editNotice extends Component {

    constructor(props){
        super(props);
        this.state={
            date:"",
            notice:"",
            
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }


    handleInputChange = (e)=>{
        const{name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;
        const {date,notice} = this.state;

        const data ={
           date:date,
           notice:notice
        }



        console.log(data)

        axios.put(`/detailReq/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert(" Updated Succesfully!")
                this.setState({
           
            date:"",
            notice:""
                })
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/detailReq/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    date:res.data.updateDetail.date,
                    notice:res.data.updateDetail.notice,
                    
                    
                });

                console.log(this.state.updateDetail);
            }
        });
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
                    background:'white'
                }}>

                    <center><h4 class="card-header"> <b>Update Notice</b></h4></center>

<form className="needs-validation" noValidate>


<div className="card-body">
    <label className="form-label"><b>  Date</b></label>
    <input className="form-control" type="date" name="date" value={this.state.date} onChange={this.handleInputChange}></input>

    <br></br>


    <label className="form-label"><b>  Notice</b></label>
    <textarea className="form-control" name="notice" rows="4" value={this.state.notice} onChange={this.handleInputChange}></textarea>
</div>




<center>
    <button type="submit" className="btn btn-warning" onClick={this.onSubmit}><b>Update the notice</b></button>
</center>
<br></br>
</form>

</div>
</div>
        )
    }
}