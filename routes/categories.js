var express = require('express');
var router = express.Router();

var Category = require('../models/category');

router.get('/' , (req , res)=>{
    Category.find((err , categories)=>{
        res.json(categories);
    })
})

router.get('/:id' , (req , res)=>{
    Category.findById(req.params.id , (err , category)=>{
        res.json(category);
    })
})

router.post('/' , (req , res)=>{
    Category.create(req.body , (err, category)=>{
        res.json(category);
    })
})

router.put('/' , (req , res)=>{
    Category.updateOne({_id : req.body._id} , req.body , (err , category)=>{
        res.json(category);
    })
})

router.delete('/:id' , (req , res)=>{
    Category.deleteOne({_id : req.params.id} , (err , result)=>{
        res.json(result);
    })
})


module.exports = router;