const mongoose  = require('mongoose');
const feesPaySchema = new mongoose.Schema({
    
    fullName:{
        type:String,
        required:true
    },
    studentID:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    lecturerName:{
        type:String,
        required:true
    },
    courseID:{
        type:String,
        required:true
    },
    cardNo:{
        type:String,
        required:true
    },
    cvc:{
        type:String,
        required:true
    },
    cardHoldersName:{
        type:String,
        required:true
    },
    
});
module.exports = mongoose.model('Pay Fees Online Course',feesPaySchema);