const mongoose  = require('mongoose');
const buyCourseSchema = new mongoose.Schema({
    
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    courseName:{
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
    date:{
        type:String,
        required:true
    },

});
module.exports = mongoose.model('Buy Online Course',buyCourseSchema);