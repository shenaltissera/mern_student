const express = require('express');
const attendance = require('../models/attendance');


const router = express.Router();

//insert time tables

router.post('/attendance/insert',(req,res)=>{

   let newattendance = new attendance(req.body);

    newattendance.save((err)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            Success:"attendance saved successfully"
        });
    });

});


//retrive attendance

router.get('/retriveSLattendance',(req,res)=>{
    
    attendance.find().exec((err,SLattendance)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingattendance:SLattendance
        });
    });

});


//delete attendance

router.delete('/attendance/delete/:id',(req,res)=>{

    attendance.findByIdAndDelete(req.params.id).exec((err,deletedattendance)=>{
          
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:" Deleted Successfull!",deletedattendance
        });
    });

});

module.exports = router;