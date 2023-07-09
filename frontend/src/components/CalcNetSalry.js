import React, { Component } from 'react'

export default class CalcNetSalry extends Component {
   
   
   

     CalcNetSalry(){

     
     
        var data1 = parseInt(document.getElementById("BasicSal").value);
        var data2 = parseInt(document.getElementById("LeaveswithPay").value);
        var data3 = parseInt(document.getElementById("PayperDay").value);
        var total = data1 + (data2*data3);

        if (isNaN(total)){
            if(isNaN(data1) && Number.isInteger(data2)){console.log("First Empty"); total = data2;}
            if(isNaN(data2) && Number.isInteger(data1)){console.log("Second Empty"); total = data1;}
            if(isNaN(data1) && isNaN(data2)){console.log("Both Empty"); total = 0;}
            console.log(" ");
        }

        document.getElementById("netSalary").innerHTML = total;
    }

    
//rendering part
//form
   
    render() {
        return (
            <div className="container-xxl">
                 <div>
                <br/><br/>
                <div className="container-xxl">
               <center><h3 style={{textDecoration:'none', color:'#ff8000'}}><b><u> Net Salary Calculator </u></b></h3></center>
                </div>
                <br/>
                <form className="container-xxl">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label >Basic Salary</label>
                        <input type="text" className="form-control"  
                         id="BasicSal" value="80000"></input>
                        </div>

                        <br/>

                        <div className="form-group col-md-6">
                        <label >Leaves with Pay</label>
                        <input type="text" className="form-control"  
                         id="LeaveswithPay" ></input>
                        </div>

                        <br/>


                        <div className="form-group col-md-6">
                        <label >Pay per Day</label>
                        <input type="text" className="form-control"  
                         id="PayperDay" ></input>
                        </div>

                        <br/>

                        <div className="form-group col-md-6">
                        <label><b>Net Salary :    </b></label>
                        <label
                         id="netSalary" style={{fontSize:"20px"}} >

                         </label>

                        </div>
                    </div>
                   
                    <br/>
            </form>
                <button className="btn btn-primary" onClick={() => this.CalcNetSalry()}>Calculate Salary</button>
            </div>
            </div>
        )
    }
}
