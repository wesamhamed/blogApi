var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.get('/' , (req , res)=>{
    Post.find((err , posts)=>{
        res.json(posts);
    }).populate(['user' , 'category' , 'tags'])
})

router.get('/:id' , (req , res)=>{
    Post.findById(req.params.id , (err , post)=>{
        res.json(post);
    }).populate(['user' , 'category' , 'tags'])
})

router.post('/' , (req , res)=>{
    Post.create(req.body , (err, post)=>{
        res.json(post);
    })
})

router.put('/' , (req , res)=>{
    Post.updateOne({_id : req.body._id} , req.body , (err , post)=>{
        res.json(post);
    })
})

router.delete('/:id' , (req , res)=>{
    Post.deleteOne({_id : req.params.id} , (err , result)=>{
        res.json(result);
    })
})


module.exports = router;