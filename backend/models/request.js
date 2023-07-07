const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({


    lecId:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    beginDate:{
        
        type:String,
        required:true
    },

    returnDate:{
        type:String,
        required:true
    },

    reason:{
        
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Cnumber:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model("leaverequests",requestSchema);