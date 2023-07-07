const mongoose = require('mongoose');

const timetabelSchema = new mongoose.Schema({

   timetableID:{
       type:String,
       required:true
   },
   subjectORcourse:{
       type:String,
       required:true
   },
   monthANDdate:{
       type:String,
       required:true
   },
   time:{
       type:String,
       required:true
   }


});

module.exports = mongoose.model('timetables',timetabelSchema);