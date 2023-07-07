const mongoose = require('mongoose');

const subjectClientSchema = new mongoose.Schema({

    subjectId:{
        type: String,
    },
    
    subjectName:{
        type: String,
    },
    
    subjectFee:{
        type: String,
        //required:true
    },

    subjectDes:{
        type: String,
        //required:true
    },


});

module.exports = mongoose.model('SubjectsClient', subjectClientSchema);