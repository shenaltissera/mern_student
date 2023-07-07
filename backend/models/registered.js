const mongoose = require('mongoose');

const RegisteredSchema = new mongoose.Schema({

    RegistationNumber :{
        type:String,
        required:true
    },
    AppointedDate:{
        type:String ,
        required:true

    },
    FirstName :{
        type:String,
        required:true
    },
    LastName:{
        type:String ,
        required:true

    },
    DateOfBirth:{
        type:String,
        required:true
    },

    position :{
        type:String,
        required:true
    },
    ContactNumber:{
        type:String ,
        required:true

    },
    NationalIDNumber:{
        type:String,
        required:true
    },
    Gender :{
        type:String,
        required:true
    },
    Address:{
        type:String ,
        required:true

    },
    BasicSalary:{
        type:String ,
        required:true

    },
    Email:{
        type:String,
        required:true
    },
    WorkingExp:{
        type:String,
        required:true
    },
    CarreerSum:{
        type:String,
        required:true
    },
    EducationalQf:{
        type:String,
        required:true
    },


})

module.exports = mongoose.model('registeredStaff' , RegisteredSchema);
