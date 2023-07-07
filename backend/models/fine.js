const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fineSchema = new Schema({

    NIC:{
      type:String,
      require:true
    },

    Book_Name:{
    type:String,
        require:true
    },

    Author:{
        type:String,
        require:true
    },

    Fines:{
        type:String,
        require:true
    },

    Return_Date:{
        type:String,
        require:true
    }
})

const Fine = mongoose.model("Fine_table",fineSchema);
module.exports = Fine;