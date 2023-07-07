const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({

    
    subjectId:{
        type: String,
    },
    
    subjectName:{
        type: String,
    },

    subjectType:{
        type: String,

    },

    subjectCategory:{
        type: String,
        //required:true
    },
    
    subjectFee:{
        type: String,
        //required:true
    },

    subjectDes:{
        type: String,
        //required:true
    },

    avatar:{
        type:String,
        
    },

    cloudinaryId:{
        type:String,
        
    },

});

module.exports = mongoose.model('Subjects', subjectSchema);