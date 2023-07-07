const express = require('express');
const Members  = require('../models/members');
const router = express.Router();

//get data
router.get('/',(req,res)=>{
    Members.find()
    .then(add=>res.json(add))
    .catch (err => res.status(400).json(`Error: ${err}`))
});

// add new data 
router.post('/addLibraryMember',(req,res)=>{
    const newMembers = new Members ({
        NIC:req.body.NIC,
        First_Name:req.body.First_Name,
        Last_Name:req.body.Last_Name,
        Address:req.body.Address,
        Email:req.body.Email,
        Student_category:req.body.Student_category,
        User_Name:req.body.User_Name,
        Password:req.body.Password
    })    
    newMembers 
    .save()
    .then(()=>res.json("The Member is  Added Successfully"))
    .catch(err => res.status(400).json(`Error:${err}`));
});

// find by id 
router.get('/:id',(req,res)=>{//we can put any name insted of id 
    Members.findById(req.params.id)
    .then (addMember => res.json(addMember))
    .catch (err => res.status(400).json(`Error: ${err}`));
});

//find by id and update
router.put('/updateMember/:id',(req,res)=>{
    Members.findById(req.params.id)
    .then(updateMembers=> {
        updateMembers.NIC=req.body.NIC,
        updateMembers.First_Name=req.body.First_Name,
        updateMembers.Last_Name=req.body.Last_Name,
        updateMembers.Address=req.body.Address,
        updateMembers.Email=req.body.Email,
        updateMembers.Student_category=req.body.Student_category,
        updateMembers.User_Name=req.body.User_Name,
        updateMembers.Password=req.body.Password

        updateMembers
        .save()
        .then(()=> res.json("The Member is Updated Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});
//find by id and delete
router.delete('/:id',(req,res)=>{
    Members.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Member is Deleted Successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`));

})


module.exports = router;