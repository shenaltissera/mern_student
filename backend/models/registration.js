const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({


    Fname:{
        type:String,
        required:true
    },

    Lname:{
        type:String,
        required:true
    },
    nicNum:{
        
        type:String,
        required:true
    },

    dob:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    cNumber:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    summary:{
        type:String,
        required:true
    },

    aQualification:{
        type:String,
        required:true
    },
    Rmembership:{
        type:String,
        required:true
    },

    Rdate:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model("Registrations",registrationSchema);