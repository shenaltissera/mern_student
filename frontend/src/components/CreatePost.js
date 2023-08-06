import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state={
            student_full_name:" ",
            Name_with_initials:" ",
            date_of_addmission:" ",
            class_name:" ",
            course_name:" ",
            date_of_birth:" ",
            nic:" ",
            email:" ",
            address:" ",
            telephone:" ",
            gender:" ",
            religion:" ",
            nationality:" ",
            gurdian_name:" ",
            gurdian_contact_number:" ",
            gurdian_email:" ",
            gurdian_occupation:" ",
            date:" ",
            bank_name:" ",
            branch:" ",
            payment_date:" "
        }
    
    }

handleInputChange =(e) =>{
    const {name,value} =e.target;

    this.setState({
        ...this.state,
        [name]:value
    })
}
onSubmit = (e) =>{
    e.preventDefault();
    const {student_full_name,Name_with_initials,date_of_addmission,class_name,course_name,date_of_birth,nic,email,address,telephone,gender,religion,nationality,gurdian_name,gurdian_contact_number,gurdian_email,gurdian_occupation,date,bank_name,branch,payment_date} = this.state;

    const data ={
        
        student_full_name:student_full_name,
        Name_with_initials:Name_with_initials,
        date_of_addmission:date_of_addmission,
        class_name:class_name,
        course_name:course_name,
        date_of_birth:date_of_birth,
        nic:nic,
        email:email,
        address:address,
        telephone:telephone,
        gender:gender,
        religion:religion,
        nationality:nationality,
        gurdian_name:gurdian_name,
        gurdian_contact_number:gurdian_contact_number,
        gurdian_email:gurdian_email,
        gurdian_occupation:gurdian_occupation,
        date:date,
        bank_name:bank_name,
        branch:branch,
        payment_date:payment_date
    }
    console.log(data);

    axios.post('/post/save',data).then((res) =>{
        if(res.data.success){
            this.setState({
            student_full_name:"",
            Name_with_initials:"",
            date_of_addmission:"",
            class_name:"",
            course_name:"",
            date_of_birth:"",
            nic:"",
            email:"",
            address:"",
            telephone:"",
            gender:"",
            religion:"",
            nationality:"",
            gurdian_name:"",
            gurdian_contact_number:"",
            gurdian_email:"",
            gurdian_occupation:"",
            date:"",
            bank_name:"",
            branch:"",
            payment_date:""
            })
        }
    })
}



render(){
    return (
   <div className="container">
   <form className="needs-validation" noValidate>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Student full Name</label>
<input type="text" className="form-control" name="student_full_name" aria-describedby="emailHelp" value={this.state.student_full_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Name with Initials</label>
<input type="text" className="form-control" name="Name_with_initials" value={this.state.Name_with_initials} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Date of Addmission</label>
<input type="text" className="form-control" name="date_of_addmission" value={this.state.date_of_addmission} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Class Name</label>
<input type="text" className="form-control" name="class_name" aria-describedby="emailHelp" value={this.state.class_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Course Name</label>
<input type="text" className="form-control" name="course_name" aria-describedby="emailHelp" value={this.state.course_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Date of Birth</label>
<input type="text" className="form-control" name="date_of_birth" aria-describedby="emailHelp" value={this.state.date_of_birth} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">NIC</label>
<input type="text" className="form-control" name="nic" aria-describedby="emailHelp" value={this.state.nic} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Email</label>
<input type="text" className="form-control" name="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Address</label>
<input type="text" className="form-control" name="address" aria-describedby="emailHelp" value={this.state.address} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Telephone</label>
<input type="text" className="form-control" name="telephone" aria-describedby="emailHelp" value={this.state.telephone} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Gender</label>
<input type="text" className="form-control" name="gender" aria-describedby="emailHelp" value={this.state.gender} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Religion</label>
<input type="text" className="form-control" name="religion" aria-describedby="emailHelp" value={this.state.religion} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Nationality</label>
<input type="text" className="form-control" name="nationality" aria-describedby="emailHelp" value={this.state.nationality} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Gurdian Name</label>
<input type="text" className="form-control" name="gurdian_name" aria-describedby="emailHelp" value={this.state.gurdian_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Gurdian Contact Number</label>
<input type="text" className="form-control" name="gurdian_contact_number" aria-describedby="emailHelp" value={this.state.gurdian_contact_number} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Gurdian Email</label>
<input type="text" className="form-control" name="gurdian_email" aria-describedby="emailHelp" value={this.state.gurdian_email} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Gurdian Occupation</label>
<input type="text" className="form-control" name="gurdian_occupation" aria-describedby="emailHelp" value={this.state.gurdian_occupation} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Date</label>
<input type="text" className="form-control" name="date" aria-describedby="emailHelp" value={this.state.date} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Bank Name</label>
<input type="text" className="form-control" name="bank_name" aria-describedby="emailHelp" value={this.state.bank_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Branch</label>
<input type="text" className="form-control" name="branch" aria-describedby="emailHelp" value={this.state.branch} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Payment Date</label>
<input type="text" className="form-control" name="payment_date" aria-describedby="emailHelp" value={this.state.payment_date} onChange={this.handleInputChange}/>
</div>
<center><button type="submit" className="btn btn-success" onClick={this.onSubmit}> SAVE ALL DETAILS</button></center>
</form>
</div>
)
}
}
