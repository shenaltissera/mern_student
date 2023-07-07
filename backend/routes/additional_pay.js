const express = require('express');
const additional_pay = require('../models/additional_pay');
const additional_payRoutes = require('../models/additional_pay');

const router = express.Router();

//save additional payaments
router.post('/additional_pay/save',(req,res)=> {
    let newAdditional_pay = new additional_payRoutes (req.body);
    
    newAdditional_pay.save((err) => {
        if(err){
        return res.status(400).json({
            error:err
        });    
    }
        return res.status(200).json({
        success:"Additional Payament saved successfully!"
        });

    });
});

//get additional payaments

router.get('/additional_pay', (req,res) => {
    additional_pay.find().exec((err,additional_pay) => {
        if (err) {
            return res.status(400).json ({
                error:err
            });
        }
        return res.status(200).json ({
            success:true,
            existingadditional_pay:additional_pay
        });
    });
});


//get a specif additional pay

router.get("/additional_pay/:itemID",(req,res) => {
    let additional_payitemID = req.params.itemID;

    additional_pay.findById(additional_payitemID,(err,additional_pay) => {
        if(err) {
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json ({
            success:true,
            additional_pay
        });
    });
});

//update additional payment

router.put('/additional_pay/update/:itemID',(req,res) =>{
    additional_pay.findByIdAndUpdate (
        req.params.itemID,
        {
            $set:req.body
        },
        (err,additional_pay) => {
            if(err) {
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully!"
            });
        }
    );
});

//delete additional payment

router.delete('/additional_pay/delete/:itemID', (req,res) =>{
    additional_pay.findByIdAndRemove(req.params.itemID).exec((err,deletedadditional_pay) => {
        
        if(err) return res.status(400).json({
            message:"Delete unsuccessful!" ,err
        });
        return res.json({
            message:"Delete successfully!" , deletedadditional_pay
        });
        
    });
});


module.exports = router;

