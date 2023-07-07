const express = require('express');
const { findByIdAndUpdate } = require('../models/registration');
const registrations = require('../models/registration');

const router = express.Router();

//lecturer registration 
router.post('/reg/save',(req,res)=>{
    let newRegistration = new registrations(req.body);
    newRegistration.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Registered successfully"
        });
    });
});

//Read registration details

router.get('/reg', (req, res) => {
    registrations.find().exec((err, registration)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRegistrations:registration
        });
    });
});

//get specific registration detail

router.get("/reg/:id", (req, res)=>{
    let regId = req.params.id;

    registrations.findById(regId, (err, post)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, post
        });
    });
});

//reject registration

router.delete('/reg/delete/:id', (req, res)=>{
    registrations.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{
        if(err){
            return res.status(400).json({
                message:"Delete error", err
            });
        }

        return res.status(200).json({
            message:"Delete successful", deletedPost
        });
    });
});
module.exports = router;