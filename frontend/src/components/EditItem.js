import axios from 'axios';
import React, {Component} from 'react';

export default class EditItem extends Component {

    constructor(props) {
        super(props);
        this.state ={
            itemID:"",
            itemName:"",
            description:"",
            quantity:"",
            price:""
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
        const id = this.props.match.params.id;

        const {itemID,itemName,description,quantity,price} = this.state ;

        const data ={
            itemID:itemID,
            itemName:itemName,
            description:description,
            quantity:quantity,
            price:price
        }

        console.log(data)

    axios.put(`/additional_pay/update/${id}`,data).then ((res) =>{
            if (res.data.success) {

                alert("Item Updated Successfully!")
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

componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/additional_pay/${id}`).then((res) =>{
        if (res.data.success) {
            this.setState({
               itemID:res.data.additional_pay.itemID,
               itemName:res.data.additional_pay.itemName,
               description:res.data.additional_pay.description,
               quantity:res.data.additional_pay.quantity,
               price:res.data.additional_pay.price,

            });

            console.log(this.state.additional_pay)

        }
    });
}

    render() {
        return(
            <div className= "col-md-8 mt-4 mx-auto">
                <h3 className = "h3 mb-3 font-weight-normal"> <center><b><u> Update Item</u></b></center></h3>
                <form className = "needs-validation" noValidate>
                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}> Topic</label>
                        <input type = "text" readOnly
                        className= "form-control"
                        name = "itemID"
                        placeholder = "Enter item ID"
                        value = {this.state.itemID}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Item Name</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "itemName"
                        placeholder = "Enter Item Name"
                        value = {this.state.itemName}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Description</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "description"
                        placeholder = "Enter Description"
                        value = {this.state.description}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Quantity</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "quantity"
                        placeholder = "Enter Item Quantity"
                        value = {this.state.quantity}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Price</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "price"
                        placeholder = "Enter Item Price"
                        value = {this.state.price}
                        onChange = {this.handleInputChange}/>
                    </div>



                    <button className = "btn btn-success" type ="submit" style={{marginTop:'15px'}} onClick = {this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; UPDATE
                    </button>


                </form>


            </div>
        )
    }
}
