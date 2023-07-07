const express = require('express');
const timetableRequests = require('../models/updateTT');

const router = express.Router();

//timetable update Request
router.post('/timetablereq/save',(req,res)=>{
    let newtimetableRequest = new timetableRequests(req.body);
    newtimetableRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Timetable Update request send successfully!"
        });
    });
});

//retrieve requests
router.get('/retriverequests',(req,res)=>{
    timetableRequests.find().exec((err, ttrequest)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingttRequests:ttrequest
        });
    });
});

//delete requests

router.delete('/request/delete/:id',(req,res)=>{

    timetableRequests.findByIdAndDelete(req.params.id).exec((err,deletedrequests)=>{
          
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:" Deleted Successfull!",deletedrequests
        });
    });

});


module.exports = router;