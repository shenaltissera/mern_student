const express = require('express');
const nonAcStaffSalary = require('../models/nonAcStaffSalary');

const router = express.Router();

//insert Net Salry

router.post('/nonAcStaffSalary/save',(req,res)=>{
    let newnonAcStaffSalary = new nonAcStaffSalary(req.body);
    newnonAcStaffSalary.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Net Salary posted successfully"
        });
    });
});

//Retrive net salary

router.get('/nonAcStaffSalary', (req, res) => {
    nonAcStaffSalary.find().exec((err, staffNetSalary)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingnonAcStaffSalary:staffNetSalary
        });
    });
});


// get specific net salry

router.get('/StaffNetSalary/:id',(req,res)=>{
    let lecid =req.params.id;

    nonAcStaffSalary.findById(lecid,(err,StaffNetSalary)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            StaffNetSalary
        });
    });
});

module.exports = router;