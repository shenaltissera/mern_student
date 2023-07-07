const express = require('express');
//const feesPay = require('../models/feesPay');
const feesPayRoutes = require('../models/feesPay');
const pdf = require('html-pdf');
const pdfTemplate2 = require('../documents/feesDocs');

const router = express.Router();

//save additional payaments
router.post('/feesPay/save',(req,res)=> {
    let newFeesPay = new feesPayRoutes (req.body);
    
    newFeesPay.save((err) => {
        if(err){
        return res.status(400).json({
            error:err
        });    
    }
        return res.status(200).json({
        success:"Successfully Recorded your Payment!"
        });

    });
});

//retrive

router.get("/retriveFeesPay", (req,res) => {
    feesPayRoutes.find().exec((err,feesPayRoutes) => {
        if (err) {
            return res.status(400).json ({
                error:err
            });
        }
        return res.status(200).json ({
            success:true,
            existingfeesPay:feesPayRoutes
        });
    });
});

//get by id 

router.get("/feesPay/:id",(req,res) => {
    let feesPayid = req.params.id;

    feesPayRoutes.findById(feesPayid,(err,feesPay) => {
        if(err) {
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json ({
            success:true,
            feesPay
        });
    });
});

//create the PDF

router.post('/createpdfrecepit', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('pdffees.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get the PDF

router.get('/fetchpdfrecepit', (req, res) => {
    res.sendFile('pdffees.pdf', { root:  `${__dirname}/../..` });
});


module.exports = router;