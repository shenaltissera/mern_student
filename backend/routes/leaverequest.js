const express = require('express');
const requests = require('../models/ttrequest');

const router = express.Router();

//leave request send
router.post('/req/save',(req,res)=>{
    let newRequest = new requests(req.body);
    newRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Your leave request send successfully"
        });
    });
});

//read leave request details

router.get('/leaverequests', (req, res) => {
    requests.find().exec((err, request)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingleaveRequests:request
        });
    });
});

//delete leave requests

router.delete('/leaverequests/delete/:id',(req,res)=>{

    requests.findByIdAndDelete(req.params.id).exec((err,deletedrequests)=>{
          
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:" Deleted Successfull!",deletedrequests
        });
    });

});

//search by id

router.get('/leaverequests/search/:id',(req,res) =>{

    let requestsID = req.params.id;
 
    requests.findById(requestsID,(err,lrequets)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            lrequets
        });
    });
 
 });


module.exports = router;