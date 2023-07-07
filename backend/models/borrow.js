const mongoose = require('mongoose');
const Schema = mongoose.Schema
const borrowSchema = new Schema({

    NIC:{
      type:String,
      require:true
    },

    Book_Name:{
    type:String,
        require:true
    },

    Borrowed_Date:{
        type:String,
        require:true
    },

    Return_Date:{
      type:String,
      require:true
  }

    
})

  const Borrow = mongoose.model('Borrow_table',borrowSchema);
  module.exports = Borrow ;