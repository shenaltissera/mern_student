const mongoose = require('mongoose');

const specialeventSchema = new mongoose.Schema({

   eventID:{
       type:String,
       required:true
   },
   eventname:{
       type:String,
       required:true
   },
   venue:{
       type:String,
       required:true
   },
   date:{
       type:String, 
       required:true
   },
   time:{
       type:String,
       required:true
   }


});

module.exports = mongoose.model('specialevents',specialeventSchema);