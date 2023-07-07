const express = require('express');
const acceptedStd = require('../models/approvedStudents');
const pdf = require('html-pdf');
const pdfTemplate3 = require('../documents/stdDocuments');

const router = express.Router();

//save posts
router.post('/approved/save',(req,res)=>{
    let newStd = new acceptedStd(req.body);
    newStd.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Student Added successfully"
        });
    });
});

//read registered students

router.get('/approved',(req,res)=>{
    acceptedStd.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts

       });
    });
});


// get specific post

router.get('/Approved/:id',(req,res)=>{
    let postId =req.params.id;

    acceptedStd.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


//update registered students

router.put('/Approved/update/:id', (req, res)=>{
    acceptedStd.findByIdAndUpdate(
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

//remove for registered students list

router.delete('/approved/delete/:id', (req, res)=>{
    acceptedStd.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{
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

router.post('/createpdfstd', (req, res) => {
    pdf.create(pdfTemplate3(req.body), {}).toFile('pdfstd.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get PDF

router.get('/fetchpdfstd', (req, res) => {
    res.sendFile('pdfstd.pdf', { root: `${__dirname}/../..` })
})

module.exports = router;