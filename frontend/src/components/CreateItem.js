import React, {Component} from 'react';
import axios from 'axios';

export default class CreateItem extends Component {

    constructor(props) {
        super(props);
        this.onfill = this.onfill.bind(this);
        this.state ={
            itemID:"IT" + this.randomid(999, 99999),
            itemName:"",
            description:"",
            quantity:"",
            price:""
        }
    }

    onfill() {
        this.setState({
            itemID:"IT" + this.randomid(999, 99999),
            itemName:"Projectors",
            description:"model number 234",
            quantity:"2",
            price:"50000"
        });
      }

    handleInputChange =(e) =>{
        const {name,value} =e.target;

        let nam = e.target.name;
        let val = e.target.value;


        //validations
  
      if (nam === 'quantity') {
  
        if (val<1) {
          alert('The quantity should be more than 0!.')
        }
 
      }

      if (nam === 'price') {
        if (val < 1) {
            alert('The price should be greater than 00!.')
          }
    }



        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {itemID,itemName,description,quantity,price} = this.state ;

        const data ={
            itemID:itemID,
            itemName:itemName,
            description:description,
            quantity:quantity,
            price:price
        }

        console.log(data)

        axios.post("/additional_pay/save",data).then ((res) =>{
            if (res.data.success) {
                alert("Item Added Successfully!")
                this.setState(
                    {
                        itemID:"",
                        itemName:"",
                        description:"",
                        quantity:"",
                        price:""

                    }
                )
            }
        })
    }

    randomid = (min, max) => {
        return Math.floor(Math.random() * max - min + 1) + min;
    }


    render() {
        return(
            <div className= "col-md-8 mt-4 mx-auto">
                <h3 className = "h3 mb-3 font-weight-normal"> <center><b><u> Add New Item</u></b></center></h3>
                <form className = "needs-validation" onSubmit = {this.onSubmit}>
                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}> Topic</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "itemID"
                        placeholder = "Enter item ID"
                        value = {this.state.itemID}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Item Name</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "itemName"
                        placeholder = "Enter Item Name"
                        value = {this.state.itemName}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Description</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "description"
                        placeholder = "Enter Description"
                        value = {this.state.description}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Quantity</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "quantity"
                        placeholder = "Enter Item Quantity"
                        value = {this.state.quantity}
                        onChange = {this.handleInputChange} required/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Price</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "price"
                        placeholder = "Enter Item Price"
                        value = {this.state.price}
                        onChange = {this.handleInputChange} required/>
                    </div>



                    <button className = "btn btn-success" type ="submit" style={{marginTop:'15px'}}>
                        <i className="far fa-check-square"></i>
                        &nbsp; ADD
                    </button>


                </form>
                <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onfill}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Fill the form
          </button>

            </div>
        )
    }
}
