const mongoose = require('mongoose');

const studentattendanceSchema = new mongoose.Schema({

          lecturerid:{
              type:String,
              required:true
          },
          lecname:{
              type:String,
              required:true
          },
          subjectorcourse:{
              type:String,
              required:true
          },
          date:{
              type:String,
              required:true
          },
          count:{
              type:String,
              required:true
          }

});

module.exports = mongoose.model('studentattendance',studentattendanceSchema);