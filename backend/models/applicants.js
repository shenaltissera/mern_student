const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const applicantsSchema = new Schema({

    NIC:{
      type:String,
      require:true
    },

    First_Name:{
    type:String,
        require:true
    },

    Last_Name:{
        type:String,
            require:true
        },

    Address:{
        type:String,
        require:true
    },

    Email:{
        type:String,
        require:true
    },

    Student_category:{
        type:String,
        require:true
    },

    User_Name:{
        type:String,
        require:true
    },

    Password:{
        type:String,
        require:true
    }
})

const Applicants = mongoose.model('Applicants_Table',applicantsSchema);
module.exports = Applicants;