const express = require('express');
const spevents = require('../models/specialevent');


const router = express.Router();

//insert special event

router.post('/events/insert',(req,res)=>{

   let newEvent = new spevents(req.body);

    newEvent.save((err)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            Success:"Special Event saved successfully"
        });
    });


});

//retrive events

router.get('/retrive',(req,res)=>{
    
    spevents.find().exec((err,events)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEvents:events
        });
    });

});


//update posts

router.put('/events/update/:id',(req,res)=>{

    spevents.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,events)=>{
            if(err){
                return res.status(400).json({error:err});
            }

             return res.status(200).json({
                success:"Updated SuccessFull!"
            });
        });
});

//delete events

router.delete('/events/delete/:id',(req,res)=>{

    spevents.findByIdAndDelete(req.params.id).exec((err,deletedevents)=>{
          
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:" Deleted Successfull!",deletedevents
        });
    });

});


//search by id

router.get('/events/search/:id',(req,res) =>{

    let eventID = req.params.id;
 
    spevents.findById(eventID,(err,event)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            event
        });
    });
 
 });
 







module.exports = router;