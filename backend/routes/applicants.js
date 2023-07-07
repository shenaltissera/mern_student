const express = require('express');
const router = express.Router();
const Applicants  = require('../models/applicants');

//get data
router.get('/',(req,res)=>{
    Applicants.find()
    .then(add=>res.json(add))
    .catch (err => res.status(400).json(`Error: ${err}`))
});

// add new data 
router.post('/addApplicants',(req,res)=>{
    const newApplicant = new Applicants ({
        NIC:req.body.NIC,
        First_Name:req.body.First_Name,
        Last_Name:req.body.Last_Name,
        Address:req.body.Address,
        Email:req.body.Email,
        Student_category:req.body.Student_category,
        User_Name:req.body.User_Name,
        Password:req.body.Password
    })    
    newApplicant 
    .save()
    .then(()=>res.json("The Applicant is  Added Successfully"))
    .catch(err => res.status(400).json(`Error:${err}`));
});

// find by id 
router.get('/:id',(req,res)=>{//we can put any name insted of id 
    Applicants.findById(req.params.id)
    .then (addBooks => res.json(addBooks))
    .catch (err => res.status(400).json(`Error: ${err}`));
});

//find by id and update
router.put('/update/:id',(req,res)=>{
    Applicants.findById(req.params.id)
    .then(updateApplicants=> {
        updateApplicants.NIC=req.body.NIC,
        updateApplicants.First_Name=req.body.First_Name,
        updateApplicants.Last_Name=req.body.Last_Name,
        updateApplicants.Address=req.body.Address,
        updateApplicants.Email=req.body.Email,
        updateApplicants.Student_category=req.body.Student_category,
        updateApplicants.User_Name=req.body.User_Name,
        updateApplicants.Password=req.body.Password

        updateApplicants
        .save()
        .then(()=> res.json("The Applicant is Updated Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});
//find by id and delete
router.delete('/:id',(req,res)=>{
    Applicants.findByIdAndDelete(req.params.id)
    .then(() => res.json("The applicant is Deleted Successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`));

})


module.exports = router;