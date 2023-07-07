const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({

    enrollmentCode:{
        type: String,
        //required:true
    },

    studentId:{
        type: String,
        //required:true
    },

    subjectId:{
        type: String,
        //required:true
    },

    StudentName:{
        type: String,
        //required:true
    },

    StudentAddress:{
        type: String,
        //required:true
    },

    dateOfEnroll:{
        type: String,
        //required:true
    }

});

module.exports = mongoose.model("Enrollments", enrollmentSchema);

