const mongoose = require('mongoose');

const nonAcStaffSalary = new mongoose.Schema({


    RegistationNumber:{
        type:String,
        required:true
    },

    FirstName:{
        type:String,
        required:true
    },
    netSalary:{
        
        type:String,
        required:true
    }

  
});

module.exports = mongoose.model("StaffNetSalary",nonAcStaffSalary);