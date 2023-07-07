const mongoose  = require('mongoose');
const additionalPaySchema = new mongoose.Schema({
    
    itemID:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }

});
module.exports = mongoose.model('Additional Payments',additionalPaySchema);
