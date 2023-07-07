const express = require('express');
const router = express.Router();
const { findById } = require('../models/registrationL');
const RegistrationL = require('../models/registrationL');
const fileValidation = require('../middlewares/file-upload/validation');
const multer = require('multer');
const registrationL = require('../models/registrationL');

const fileFilter = (req, res, cb) => {
    cb(null, true)
}
const upload = multer({
    fileFilter: fileFilter
})

router.post('/addRe', upload.single('uploads'), fileValidation, async (req, res) => {

    const lecFname = req.body.lecFname
    const lecLname = req.body.lecLname
    const nic = req.body.nic
    const dob = req.body.dob
    const email = req.body.email
    const cNumber = req.body.cNumber
    const address = req.body.address
    const Rdate = req.body.Rdate
    const uploads = req.file.buffer

    const registrationL = new RegistrationL({
        lecFname : lecFname,
        lecLname : lecLname,
        nic :  nic,
        dob :  dob,
        email :  email,
        cNumber : cNumber,
        address : address,
        Rdate : Rdate,
        uploads : uploads
    });

    //add
    await registrationL.save((err, registrationL) => {
        if (err) {
            return res.status(400).send({
                errors: err.message
            });
        }

        return res.status(201).send({
            message: 'Registered successfully',
            registrationL
        })

    });

});

//update

router.put("/register/update/:id" , (req,res) =>{
    Researcher.findById(req.params.id)
    .then(reseacher =>{
        
        reseacher.lecFname=req.body.lecFname,
        reseacher.lecLname=req.body.lecLname,
        reseacher.nic=req.body.nic,
        reseacher.dob=req.body.dob,
        reseacher.email=req.body.email,
        reseacher.cNumber=req.body.cNumber,
        reseacher.address=req.body.address,
        reseacher.Rdate=req.body.Rdate,
        
        

        reseacher
        .save()
        .then(() => res.json("updated successfully"))
        .catch(err => res.status(400).json(`${err}`));
    })
    .catch(err => res.status(400).json(`${err}`));
});


module.exports = router;