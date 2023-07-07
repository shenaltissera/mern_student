const express = require('express');
const timetableRequests = require('../models/updateTT');

const router = express.Router();

//timetable update Request
router.post('/timetablereq/save',(req,res)=>{
    let newtimetableRequest = new timetableRequests(req.body);
    newtimetableRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Timetable Update request send successfully!"
        });
    });
});
module.exports = router;