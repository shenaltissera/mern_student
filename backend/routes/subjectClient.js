const express = require('express');
const Subjects = require('../models/subjectClient');

const router = express.Router();

//save

router.post('/subjectclient/save', (req, res)=>{

    let newSubject = new Subjects(req.body);

    newSubject.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Subject Added to the Client Side!"
        });
    });
});

//reading subjects

router.get('/subjectclient', (req, res)=>{
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

router.put('/subjectclient/update/:id', (req, res)=>{
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
                success:"Subject Updated on the Client Side", subjects
            });
        }
    );
});

//delete subjects from the system

router.delete('/subjectclient/delete/:id', (req, res)=>{
    Subjects.findByIdAndRemove(req.params.id).exec((err, deletedPost)=>{
        if(err){
            return res.status(400).json({
                message:"Subject Delete on the Client Side Unsuccesful!", err
            })
        }
        return res.json({
            message:"Subject Removed Succesfully on the Client Side!", deletedPost
        });
    });
});

//get a specific subject

router.get("/subjectclient/:id", (req, res)=>{
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

module.exports = router;