const express = require('express');
//const buyCourse = require('../models/buyCourse');
const buyCourseRoutes = require('../models/buyCourse');
const pdf = require('html-pdf');
const pdfTemplate2 = require('../documents/receiptDocs');

const router = express.Router();


//fill form to Buy Course
router.post('/buyCourse/save',(req,res)=> {
    let newBuyCourse = new buyCourseRoutes (req.body);
    
    newBuyCourse.save((err) => {
        if(err){
        return res.status(400).json({
            error:err
        });    
    }
        return res.status(200).json({
        success:"Details Recorded Successfully!"
        });

    });
});

//retrive

router.get('/retrivedula', (req,res) => {
    buyCourseRoutes.find().exec((err,CourseRoutes) => {
        if (err) {
            return res.status(400).json ({
                error:err
            });
        }
        return res.status(200).json ({
            success:true,
            existingCourseReceipt:CourseRoutes
        });
    });
});

//get by id 

router.get("/buycourse/:id",(req,res) => {
    let buyCourseid = req.params.id;

    buyCourseRoutes.findById(buyCourseid,(err,buycourse) => {
        if(err) {
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json ({
            success:true,
            buycourse
        });
    });
});

//create the PDF

router.post('/createdulapdf', (req, res) => {
    pdf.create(pdfTemplate2(req.body), {}).toFile('Receipt.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get the PDF

router.get('/fetchdulapdf', (req, res) => {
    res.sendFile('Receipt.pdf', { root:  `${__dirname}/../..` });
});



module.exports = router;