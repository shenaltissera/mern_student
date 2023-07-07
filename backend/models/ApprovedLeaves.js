const mongoose = require('mongoose');

const ApprovedrequestSchema = new mongoose.Schema({


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
    PayORnoPay:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("ApprovedleaveRequets",ApprovedrequestSchema);