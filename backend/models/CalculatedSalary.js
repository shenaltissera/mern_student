const mongoose = require('mongoose');

const CalculatedSalary = new mongoose.Schema({


    lecId:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    netSalary:{
        
        type:String,
        required:true
    }

  
});

module.exports = mongoose.model("LecturerNetSalary",CalculatedSalary);