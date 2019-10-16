var express = require('express');
var router = express.Router();
var db = require('../models')

var creatingUser = (req,res,next) => {
    
    const {fullName,email,password} = req.body;
    db.User.createUser( { fullName , email , password}).then( user =>res.json({user, msg: "create user sucess"}))
        
}

router.post('/',creatingUser)

module.exports = router