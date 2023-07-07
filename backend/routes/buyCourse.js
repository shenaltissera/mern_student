const express = require('express');
const buyCourseRoutes = require('../models/buyCourse');
const pdf = require('html-pdf');
const pdfTemplate4 = require('../documents/courseDocs');

const router = express.Router();


router.get('/retrivecourse', (req,res) => {
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


// delte


router.delete('/buycourse/delete/:id' , (req, res )=>{

    
    buyCourseRoutes.findByIdAndRemove(req.params.id).exec((err , deleteCourse)=>{

    if(err) return res.status(400).json({

        message:"delete uncscessfull", err

    });
    return res.json({
        message:"delete sucessfull" , deleteCourse
    });

});
});

//create PDF

router.post('/create-pdfcourse', (req, res) => {
    pdf.create(pdfTemplate4(req.body), {}).toFile('pdfcourse.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get PDF

router.get('/fetch-pdfcourse', (req, res) => {
    res.sendFile('pdfcourse.pdf', { root:  `${__dirname}/../..` });
})






module.exports = router;