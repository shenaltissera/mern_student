import React, { Component } from 'react';
import axios from 'axios';


export default class HomePayment extends Component {
  constructor(props){
    super(props);

    this.state={
      additional_pay:[]
    };

  }
  componentDidMount(){
    this.retrieveadditional_pay();
  }

  retrieveadditional_pay(){
    axios.get("/additional_pay").then(res =>{
      if(res.data.success){
        this.setState({
          additional_pay:res.data.existingadditional_pay
        });
      
        console.log(this.state.additional_pay)
      }
    });
  }

  onDelete = (id) =>{
      axios.delete(`/additional_pay/delete/${id}`).then((res) => {
          alert("Deleted Successfully!");
          this.retrieveadditional_pay();
      })
  }

  filterData(additional_pay,searchKey) {

      const result = additional_pay.filter((additional_pay) =>
          additional_pay.itemName.toLowerCase().includes(searchKey)||
          additional_pay.description.toLowerCase().includes(searchKey)
         
      )

      this.setState({additional_pay:result})
      
  }


  handleSearchArea =(e) =>{
    const searchKey = e.currentTarget.value;
    axios.get("/additional_pay").then(res =>{
        if(res.data.success){
          this.filterData(res.data.existingadditional_pay,searchKey)
        }
    });

}
  render(){
    return(
    
        <div className ="container">
          <div className="row">
            <div className ="col-lg-9 mt-2 mb-2"></div>
         
          <p> <h3><center><u><b>ALL ITEMS</b></u></center></h3></p>
          </div>
          <div className ="col-lg-9 mt-2 mb-2">
            <input className = "form-control"
            type = "search"
            placeholder = "Search Items"
            name = "searchQuery"
            onChange = {this.handleSearchArea}></input>
          </div>
          <table className ="table table-success table-striped table-bordered" style = {{marginTop:'40px'}}> 
          <thead>
            <tr>
              <th scope = "col"> No </th>
              <th scope = "col"> Item ID </th>
              <th scope = "col"> Item Name </th>
              <th scope = "col"> Description </th>
              <th scope = "col"> Quantity </th>
              <th scope = "col"> Price </th>
              <th scope = "col"> Process </th>
            </tr>
          </thead>
          <tbody>
            {this.state.additional_pay.map((additional_pay,index) =>(
               <tr key={index}>
                <th scope = "row">{index +1}</th>
                <td> {additional_pay.itemID}</td>
                <td>{additional_pay.itemName}</td>
                <td>{additional_pay.description}</td>
                <td>{additional_pay.quantity}</td>
                <td>{additional_pay.price}</td>
                <td>
                  <a className ="btn btn-success" href = {`/edititem/${additional_pay._id}`}>
                    <i className = "fas fa-edit"></i> &nbsp;Edit
                  </a>
                  &nbsp;
                  <a className ="btn btn-danger" href = "#" onClick = {() => this.onDelete(additional_pay._id)}>
                    <i className = "far fa-trash-alt"></i> &nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        <button className = "btn btn-primary"> <a href = "/additem" style ={{textDecoration:'none',color :'black'}}>  Create New Item</a> </button>
        
      </div>
    )
  }
}



