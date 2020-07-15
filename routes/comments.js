var express = require('express');
var router = express.Router();

var Comment = require('../models/comment');

router.get('/' , (req , res)=>{
    Comment.find((err , comments)=>{
        res.json(comments);
    })
})

router.get('/:id' , (req , res)=>{
    Comment.findById(req.params.id , (err , comment)=>{
        res.json(comment);
    })
})

router.post('/' , (req , res)=>{
    Comment.create(req.body , (err, comment)=>{
        res.json(comment);
    })
})

router.put('/' , (req , res)=>{
    Comment.updateOne({_id : req.body._id} , req.body , (err , comment)=>{
        res.json(comment);
    })
})

router.delete('/:id' , (req , res)=>{
    Comment.deleteOne({_id : req.params.id} , (err , result)=>{
        res.json(result);
    })
})


module.exports = router;