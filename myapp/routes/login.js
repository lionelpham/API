var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken')
const passport = require('passport')

router.post('/', (req,res,next) => {
    passport.authenticate('local',{session:false},(err,user,info)=>{
        console.log(err)
        if ( err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            })
        }
        req.login(user,{session:false},(err)=>{
            if (err){
                res.send(err)
            }
            const token = jwt.sign(user.toJSON(),'viet_1612810')
            
            return res.json({user,token})
        })
    })(req,res)
})

module.exports = router