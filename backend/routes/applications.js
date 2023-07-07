const express = require('express');
const { findByIdAndUpdate } = require('../models/applications');
const applications = require('../models/applications');

const router = express.Router();

//save posts

router.post('/application/save', (req, res)=>{

    let newPost = new applications(req. body);

    newPost.save((err)=>{
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

router.get('/application/posts', (req, res) => {
    applications.find().exec((err, applications)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:applications
        });
    });
});

//get specific post

router.get("/application/:id", (req, res)=>{
    let applicationId = req.params.id;

    applications.findById(applicationId, (err, post)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, 
            post
        });
    });
});

//updating posts

router.put('/application/update/:id', (req, res)=>{
    applications.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, post)=>{
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

router.delete('/application/delete/:id', (req, res)=>{
    applications.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{
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