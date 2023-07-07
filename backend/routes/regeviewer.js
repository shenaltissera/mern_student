const express = require('express')
const router = express.Router();
const RegistrationL = require('../models/registrationL');
const { findByIdAndUpdate } = require('../models/registrationL');
const fileValidation = require('../middlewares/file-upload/validation.js');
const multer = require('multer');
const regeviewer = require('../models/regeviewer');

const fileFilter = (req,res,cb)=>{
    cb(null,true)
}
const upload = multer({
    fileFilter:fileFilter
})

//get all data
router.get('/getAlldata',async (req,res)=>{
    await RegistrationL.find({}).then(data =>{
        res.status(200).send({data:data});
    }).catch(err=>{
        res.status(500).send({err: err.message});
    })
})

//delete
router.delete('/deleteRegistration/:id',async (req,res)=>{
    if(req.params.id){
        await RegistrationL.findByIdAndDelete(req.params.id)
        .then(data =>{
            res.status(200).send({data: data});
        }).catch(err =>{
            res.status(500).send({err: err.message})
        })    
    }
})

//updating posts

router.put('/reviewer/update/:id', (req, res)=>{
    RegistrationL.findByIdAndUpdate(
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

//get specific post

router.get("/reviewer/:id", (req, res)=>{
    let regId = req.params.id;

    RegistrationL.findById(regId, (err, post)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, post
        });
    });
});






module.exports = router;
