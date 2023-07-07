const express = require('express');
const requests = require('../models/ttrequest');

const router = express.Router();

//leave request send
router.post('/req/save',(req,res)=>{
    let newRequest = new requests(req.body);
    newRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Your leave request send successfully"
        });
    });
});

//read leave request details

router.get('/req', (req, res) => {
    requests.find().exec((err, request)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRequests:request
        });
    });
});
module.exports = router;