const express = require("express");
const router = express.Router();
const Course= require('../models/courses');
const multer = require("multer");



//create image hold in storage 

const storage = multer.diskStorage({
    destination:(req, file,callback) =>{
     callback(null, "./frontend/public/uploads/");


    },
    filename:(req, file, callback) =>{
        callback(null , file.originalname);
    }
})


const upload = multer({storage:storage});



//GET ALL COURSES IMFROMATION 

router.get("/", (req, res) =>{

    Course.find()
    .then(course =>res.json(course))
   .catch(err => res.status(400).json(`${err}`));

});




//ADD NEW COURSE TO THE SYSTEMS





router.post('/add',upload.single("courseImage"),(req, res) =>{
    const newCourse = new Course({

        courseID:req.body.courseID,
        courseName:req.body.courseName,
        courseType:req.body.courseType,
        description:req.body.description,
        requirement:req.body.requirement,
        price:req.body.price,
        courseImage:req.file.originalname,
        duration:req.body.duration,
        
    })

    newCourse.save()
    .then(() => res.json("The New Course Was Added Successfully!!"))
    .catch(err => res.status(400).json(`${err}`));

});



//COURSE FIND BY COURSE ID



router.get("/:id" ,(req, res)=>{

    Course.findById(req.params.id)
    .then(course=>res.json(course))
    .catch(err => res.status(400).json(`${err}`))
    
});


//FIND COURSE AND UPDATE COURSES




router.put("/update/:id" , (req,res) =>{
    Course.findById(req.params.id)
    .then(course =>{
        
        course.courseID=req.body.courseID,
        course.courseName=req.body.courseName,
        course.courseType=req.body.courseType,
        course.description=req.body.description,
        course.requirement=req.body.requirement,
        course.price=req.body.price,
        course.duration=req.body.duration,

        course
        .save()
        .then(() => res.json("Course was updated successfully"))
        .catch(err => res.status(400).json(`${err}`));
    })
    .catch(err => res.status(400).json(`${err}`));
});




//FIND COURSE ID AND DELETE COURSES

    router.delete("/:id", (req, res)=>{
    Course.findByIdAndDelete(req.params.id)
    .then(( )=> res.json("THIS COURSES WAS DELETE SUCCESFULLY "))
    .catch(err=> res.status(400).json(`${err}`)) 

});

module.exports= router;