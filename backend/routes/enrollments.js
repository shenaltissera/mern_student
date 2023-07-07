const express = require('express');
const enrollments = require('../models/enrollments');

const router = express.Router();

//add enrollments to the list

router.post('/enrollment/save', (req, res)=>{
    
    let newEnrollment = new enrollments(req.body);

    newEnrollment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Adding Enrollment Successful!"
        });
    });
});

//view enrollment list

router.get('/enrollment', (req, res)=>{
    enrollments.find().exec((err, enrollments)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingEnrollments:enrollments
        });
    })
})

//update enrollment details

router.put('/enrollment/update/:id', (req, res)=>{
    enrollments.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, enrollments)=>{
            if(err){
                return res.status(400).json({
                    error:err
                })
            }
            return res.json({
                success:"Enrollments Updating Succesful!", enrollments
            });
        }
    );
});

//remove an enrollment from list

router.delete('/enrollment/delete/:id', (req, res)=>{
    enrollments.findByIdAndRemove(req.params.id).exec((err, deletedPost)=>{
        if(err){
            return res.status(400).json({
                message:"Enrollment Delete Unsuccesful!", err
            })
        }
        return res.json({
            message:"Enrollment Removed Succesfully!", deletedPost
        });
    });
});

module.exports = router;