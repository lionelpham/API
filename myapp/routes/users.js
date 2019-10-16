var express = require('express');
var router = express.Router();

/* GET user profile. */
router.get('/', function(req, res, next) {
    console.log('route',req)
    res.json({"profile:": req.user});
});

module.exports = router;