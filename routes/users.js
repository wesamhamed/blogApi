var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/' , (req , res)=>{
    User.find((err , users)=>{
        res.json(users);
    })
})

router.get('/:id' , (req , res)=>{
    User.findById(req.params.id , (err , user)=>{
        res.json(user);
    })
})

router.post('/' , (req , res)=>{
    User.create(req.body , (err, user)=>{
        res.json(user);
    })
})

router.put('/' , (req , res)=>{
    User.updateOne({_id : req.body._id} , req.body , (err , user)=>{
        res.json(user);
    })
})

router.delete('/:id' , (req , res)=>{
    User.deleteOne({_id : req.params.id} , (err , result)=>{
        res.json(result);
    })
})


module.exports = router;