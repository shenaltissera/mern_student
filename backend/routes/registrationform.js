const express = require('express');
const Posts = require('../models/posts');
const router = express.Router();
const cloudinary = require('../subUtils/cloudinary');
const upload = require('../subUtils/multer');

//save posts
router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

//save tuple with image
router.post('/savestdimg', upload.single('image'), async(req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        
        //create instance for user
        let user = new User({
            student_full_name: req.body.student_full_name,
            Name_with_initials: req.body. Name_with_initials,
            date_of_addmission: req.body.date_of_addmission,
            class_name: req.body.class_name,
            course_name: req.body. course_name,
            date_of_birth: req.body.date_of_birth,
            nic: req.body.nic,
            email: req.body.email,
            address: req.body.address,
            telephone: req.body.telephone,
            gender: req.body.gender,
            religion: req.body.religion,
            nationality: req.body.nationality,
            gurdian_name: req.body.gurdian_name,
            gurdian_contact_number: req.body.gurdian_contact_number,
            gurdian_email: req.body.gurdian_email,
            gurdian_occupation: req.body.gurdian_occupation,
            date: req.body.date,
            bank_name: req.body.bank_name,
            branch: req.body.branch,
            payment_date: req.body.payment_date,
            
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
        });

        //save user
        await user.save();
        res.json(user);

    }catch(err){
     console.log(err);
    }
});

//get posts
router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts

       });
    });
});

//updating posts(approving)
router.put('/post/update/:id', (req, res)=>{
    Posts.findByIdAndUpdate(
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


//delete posts
router.delete('/post/delete/:id', (req, res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{
        if(err){
            return res.status(400).json({
                message:"Delete error", err
            });
        }

        return res.status(200).json({
            message:"Delete successful", deletedPost
        });
    });
});


// get specific post
router.get('/post/:id',(req,res)=>{
    let postId =req.params.id;

    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});



module.exports = router;