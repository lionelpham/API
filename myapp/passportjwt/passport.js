const passport    = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models')
const JWTStrategy   = passportJWT.Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return db.User.getUserCurrent(
                email,
                password
            )
            .then(user => {
                if (!user) {
                    return cb(null, false, {
                        message: 'Incorrect email or password.'
                    });
                }
                return cb(null, user, {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => cb(err));
    }
));
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'viet_1612810'
    },
    function (jwtPayload, cb) {
        console.log("payload:", jwtPayload)
        
        return db.User.getUserBy({id: jwtPayload.id})
            .then(user => {
                console.log("tesT: ",user)
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
