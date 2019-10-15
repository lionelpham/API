var exports = module.exports = {}
exports.login = function (req,res){ 
    res.render('login')
}
exports.signup = function (req,res){
    res.render('signup')
}
exports.index = function(req,res){
    res.render('index')
}