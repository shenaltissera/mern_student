import React, { Component } from 'react'
import axios from 'axios';

export default class GetFeesPayReceipt extends Component {
    
    constructor(props){
        super(props);

        this.state={
            feesPayRoutes:[]
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/retriveFeesPay/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    feesPayRoutes:res.data.feesPayRoutes
                });

                console.log(this.state.feesPayRoutes);
            }
        });
    }


    
    render() {
        const{ fullName,email,courseName,date} = this.state.feesPayRoutes;
        return (
            
            <div style={{marginTop:'20px'}}>
            <p class="fs-4"><center><h3><b>Your Fees Pay Receipt</b></h3></center></p>
            <div className="container">
             <p class="fs-1"><h5><u>Your payment details.</u></h5></p>
            &nbsp;&nbsp;            


            <table className="table" id="table-to-xls">
               
            <tr>
                        <th scope="col">Full Name</th>
                        <td>{fullName}</td>
                    </tr>
                    <tr>
                        <th scope="col">Email</th>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <th scope="col">Course Name</th>
                        <td>{courseName}</td>
                    </tr>
                    <tr>
                        <th scope="col">Date</th>
                        <td>{date}</td>
                    </tr>
                    
                       
                  
                    &nbsp;&nbsp;
                </table>
                
                <a className="btn btn-primary" href={`/detailsreceipt/${this.props.match.params.id}`}>Generate PDF</a>
            </div>
               
            </div>
           
        )
    }
}
