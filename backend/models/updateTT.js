const mongoose = require('mongoose');

const timetableReqSchema = new mongoose.Schema({


    timetableId:{
        type:String,
        required:true
    },

    lecId:{
        type:String,
        required:true
    },
    lecName:{
        
        type:String,
        required:true
    },

    subject:{
        type:String,
        required:true
    },

    day:{
        
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("timetableReq",timetableReqSchema);