const express = require('express');
const router = express.Router();
const Fine  = require('../models/fine');

//get data
router.get('/',(req,res)=>{
    Fine.find()
    .then(addfine=>res.json(addfine))
    .catch (err => res.status(400).json(`Error: ${err}`))
});

// add new data 
router.post('/addfine',(req,res)=>{
    const newFine = new Fine ({
        NIC:req.body.NIC,
        Book_Name:req.body.Book_Name,
        Author:req.body.Author,
        Fines:req.body.Fines,
        Return_Date:req.body.Return_Date
        
    }) 

    newFine 
    .save()
    .then(()=>res.json("Fine is Added Successfully"))
    .catch(err => res.status(400).json(`Error:${err}`));
});

// find by id 
router.get('/:id',(req,res)=>{//we can put any name insted of id 
    Fine.findById(req.params.id)
    .then (addfine => res.json(addfine))
    .catch (err => res.status(400).json(`Error: ${err}`));
});

//find by id and update
router.put('/updatefine/:id',(req,res)=>{
    Fine.findById(req.params.id)
    .then(updateFine=> {
        updateFine.NIC=req.body.NIC,
        updateFine.Book_Name=req.body.Book_Name,
        updateFine.Author=req.body.Author,
        updateFine.Fines=req.body.Fines
        updateFine.Return_Date=req.body.Return_Date

        updateFine
        .save()
        .then(()=> res.json("Fine is Updated Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//find by id and delete
router.delete('/:id',(req,res)=>{
    Fine.findByIdAndDelete(req.params.id)
    .then(() => res.json("Fine is Deleted Successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`));

})

module.exports = router;