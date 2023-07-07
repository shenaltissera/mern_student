const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({

   attendanceID:{
       type:String,
       required:true
   },
   name:{
       type:String,
       required:true
   },
   month:{
       type:String,
       required:true
   },
   category:{
       type:String,
       required:true
   }


});

module.exports = mongoose.model('attendance',attendanceSchema);