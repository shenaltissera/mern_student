const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    student_full_name:{
        type:String,
        //required:true
    },

    Name_with_initials:{
        type:String,
        //required:true
    },
    date_of_addmission:{
        type:String,
        //required:true

    },
    class_name:{
        type:String,
        //required:true
    },
    course_name:{
        type:String,
        //required:true
    },
    date_of_birth:{
        type:String,
        //required:true

    },
    nic:{
        type:String,
        //required:true
    },
    email:{
        type:String,
        //required:true

    },
    address:{
        type:String,
        //required:true

    },
    telephone:{
        type:String,
        //required:true

    },
    gender:{
        type:String,
        //required:true
    },
    religion:{
        type:String,
        //required:true
    },
    nationality:{
        type:String,
        //required:true
    },
    gurdian_name:{
        type:String,
        //required:true
    },
    gurdian_contact_number:{
        type:String,
        //required:true
    },
    gurdian_email:{
        type:String,
        //required:true

    },
    gurdian_occupation:{
        type:String,
        //required:true

    },
    date:{
        type:String,
       // required:true

    },
    bank_name:{
        type:String,
        //required:true

    },
    branch:{
        type:String,
        //required:true

    },
    payment_date:{
        type:String,
        //required:true

    }
});
module.exports = mongoose.model('unRegistedStds',postSchema);