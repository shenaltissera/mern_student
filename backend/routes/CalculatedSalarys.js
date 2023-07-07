const express = require('express');
const CalculatedSalary = require('../models/CalculatedSalary');

const router = express.Router();

//insert Net Salry

router.post('/CalculatedSalary/save',(req,res)=>{
    let newCalculatedSalary = new CalculatedSalary(req.body);
    newCalculatedSalary.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Net Salary successfully"
        });
    });
});

//Retrive net salary

router.get('/CalculatedSalary', (req, res) => {
    CalculatedSalary.find().exec((err, netSalary)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCalculatedSalary:netSalary
        });
    });
});


// get specific net salry

router.get('/NetSalary/:id',(req,res)=>{
    let lecid =req.params.id;

    CalculatedSalary.findById(lecid,(err,NetSalary)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            NetSalary
        });
    });
});

module.exports = router;