const express = require('express');
const { findByIdAndUpdate } = require('../models/subjects');
const Subjects = require('../models/subjects');
const pdf = require('html-pdf');
const pdfTemplate1 = require('../documents/subDocuments');

const router = express.Router();



//save

router.post('/subject/save', (req, res)=>{

    let newSubject = new Subjects(req.body);

    newSubject.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Subject Added!"
        });
    });
});

//reading subjects

router.get('/subject', (req, res)=>{
    Subjects.find().exec((err, subjects)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingSubjects:subjects
        });
    });
});

//updating subjects stuff

router.put('/subject/update/:id', (req, res)=>{
    Subjects.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, subjects)=>{
            if(err){
                return res.status(400).json({
                    error:err
                })
            }
            return res.json({
                success:"Subject Updated!", subjects
            });
        }
    );
});


//delete subjects from the system

router.delete('/subject/delete/:id', (req, res)=>{
    Subjects.findByIdAndRemove(req.params.id).exec((err, deletedPost)=>{
        if(err){
            return res.status(400).json({
                message:"Subject Delete Unsuccesful!", err
            })
        }
        return res.json({
            message:"Subject Removed Succesfully!", deletedPost
        });
    });
});

//get a specific subject

router.get("/subject/:id", (req, res)=>{
    let subjectId = req.params.id;

    Subjects.findById(subjectId, (err, subject)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, subject
        });
    });
});

//create the PDF

router.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate1(req.body), {}).toFile('pdfsub.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get the PDF

router.get('/fetch-pdf', (req, res) => {
    res.sendFile('pdfsub.pdf', { root:  `${__dirname}/../..` });
})


module.exports = router;