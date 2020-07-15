var express = require('express');
var router = express.Router();

var Tag = require('../models/tag');

router.get('/' , (req , res)=>{
    Tag.find((err , tags)=>{
        res.json(tags);
    })
})

router.get('/:id' , (req , res)=>{
    Tag.findById(req.params.id , (err , tag)=>{
        res.json(tag);
    })
})

router.post('/' , (req , res)=>{
    Tag.create(req.body , (err, tag)=>{
        res.json(tag);
    })
})

router.put('/' , (req , res)=>{
    Tag.updateOne({_id : req.body._id} , req.body , (err , tag)=>{
        res.json(tag);
    })
})

router.delete('/:id' , (req , res)=>{
    Tag.deleteOne({_id : req.params.id} , (err , result)=>{
        res.json(result);
    })
})


module.exports = router;