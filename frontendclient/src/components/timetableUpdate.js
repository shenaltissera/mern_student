import React, { Component } from 'react'
import axios from 'axios'
import background from '../images/hall.png';


export default class timetableUpdate extends Component {
    
    constructor(props){
        super(props);
        this.state={
            timetableId:"",
            lecId:"",
            lecname:"",
            subject:"",
            day:"",
            time:""
        }
    }

    

handleInputChange =(e) =>{
    const {name,value} =e.target;



    this.setState({
        ...this.state,
        [name]:value
    })
}
onsubmit = (e) =>{
    e.preventDefault();
    const {timetableId,lecId,lecName,subject,day,time} = this.state;
    const data ={
        timetableId: timetableId,
        lecId : lecId,
        lecName:lecName,
        subject:subject,
        day:day,
        time:time
        
    }
    console.log(data)
    axios.post("/timetablereq/save",data).then((res) =>{
        if(res.data.success){
            alert("Your request send Succesfully!")
            this.setState({
                timetableId:"",
                lecId:"",
                lecName:"",
                subject:"",
                day:"",
                time:""
            })
        }
    })
}

onClickDemo = () => {
    this.setState(
        {
            timetableId:"TT5678",
                lecId:"LEC45677",
                lecName:"Sagara Ariyaratne",
                subject:"Software Engineering",
                day:"2021-09-21",
                time:"10am-1pm"
        })
}


render(){
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            marginTop:'-5px',
            marginBottom:'-65px',
            height:'1000px'
            
           
          }}>
              <br></br>
              <br></br>
        <div  style={{
            width: '1000px',
            border: '2px solid black',
            marginRight:'40px',
            marginLeft:'540px',
            background:'white' }}>

       <div className = "container" >
           <br></br>
       <center><h3><b>Request for update to timetable</b></h3></center>
          
       <form className="needs-validation" onSubmit={this.onsubmit}>

       <div class="form-outline mb-4">
       <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Time Table ID</b></label>
    <input  
    className="form-control" 
    name="timetableId" 
    value={this.state.timetableId} 
    onChange={this.handleInputChange} 
    required/>
    </div>


<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer ID</b></label>
    <input  
    className="form-control" 
    name="lecId" 
    value={this.state.lecId} 
    onChange={this.handleInputChange}
    required/>
    </div>


       <br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer Name</b></label>
    <input 
    className="form-control" 
    name="lecName" 
    value={this.state.lecName} 
    onChange={this.handleInputChange}
    required/>
    </div>   


<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Subject To Be Updated</b></label>
    <input 
    className="form-control" 
    name="subject" 
    value={this.state.subject} 
    onChange={this.handleInputChange}
    required/>
    </div>

    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Date To Be Updated</b></label>
    <input 
    type="date"  
    className="form-control"
     name="day" 
     value={this.state.day} 
     onChange={this.handleInputChange}
     required/>
    </div>

    
<br></br>
    
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Time Required To Change</b></label>
    <input  
    className="form-control" 
    name="time" 
    value={this.state.time} 
    onChange={this.handleInputChange}
    required/>
    </div>
<br></br>

<center><button type="submit" className="btn btn-primary" >Send Request</button></center>
<br></br>
</form>

</div><center><button className="btn btn-outline-danger btn-sm" onClick={this.onClickDemo}>Demo</button></center>
<br></br>
</div>
</div>

)
}
}