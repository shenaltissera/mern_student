const express = require('express');
const studentattendances = require('../models/studentattendance');
const router = express.Router();


//student attendance insert
router.post('/studentattend/insert',(req,res)=>{
           
    let newstudentattendance = new studentattendances(req.body);

    newstudentattendance.save((err)=>{
     if(err){
         return res.status(400).json({
                 error:err
         });
     }
     return res.status(200).json({
         Success:"student attendance saved successfully"
     });
  });

}); 



//retrive stdattendance

router.get('/retriveSTDattendance',(req,res)=>{
    
    studentattendances.find().exec((err,STDattendance)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingstdattendance:STDattendance
        });
    });

});


//delete stdattendance

router.delete('/stdattendance/delete/:id',(req,res)=>{

    studentattendances.findByIdAndDelete(req.params.id).exec((err,deletedSTDattendance)=>{
          
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:" Deleted Successfull!",deletedSTDattendance
        });
    });

});


module.exports = router;