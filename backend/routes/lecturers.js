const express = require('express');
const { findByIdAndUpdate } = require('../models/lecturers');
const Lecturers = require('../models/lecturers');
const pdf = require('html-pdf');
const pdfTemplate2 = require('../documents/lecDocuments');

const router = express.Router();

//save posts

router.post('/lecturer/save', (req, res)=>{

    let newLecturer = new Lecturers(req. body);

    newLecturer.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

//get posts

router.get('/lecturers', (req, res) => {
    Lecturers.find().exec((err, lecturers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingLecturers:lecturers
        });
    });
});

//get specific post

router.get("/lecturer/:id", (req, res)=>{
    let lecturerId = req.params.id;

    Lecturers.findById(lecturerId, (err, lecturer)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true,lecturer
        });
    });
});



//updating posts

router.put('/lecturer/update/:id', (req, res)=>{
    Lecturers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, lecturer)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }

            return res.status(200).json({
                success:"Updated succesfully"
            });
        }
    );
});

//delete posts

router.delete('/lecturer/delete/:id', (req, res)=>{
    Lecturers.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{
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

//create PDF
router.post('/createpdflec', (req, res) => {
    pdf.create(pdfTemplate2(req.body), {}).toFile('pdflec.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get PDF
router.get('/fetchpdflec', (req, res) => {
    res.sendFile('pdflec.pdf', { root: `${__dirname}/../..` })
})



module.exports = router;