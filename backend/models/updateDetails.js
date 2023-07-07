const mongoose = require('mongoose');

const updateDetailSchema = new mongoose.Schema({


    date:{
        type:String,
        required:true
    },

    notice:{
        type:String,
        required:true
    },
    

});

module.exports = mongoose.model("UpdateDetailsReq",updateDetailSchema);