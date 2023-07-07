const mongoose = require('mongoose');
const Schema =mongoose.Schema;


const courseSchema = new Schema({

    courseID:{type:String,required:true},
    courseName:{type:String,required:true},
    courseType:{type:String,required:true},
    description:{type:String,required:true},
    requirement:{type:String,required:true},
    courseImage:{type:String},
    price:{type:String,required:true},
    duration:{type:String,required:true},
    postdata:{type:Date, default:Date.now},

})

const Course  = mongoose.model("Course", courseSchema);

module.exports=Course;
