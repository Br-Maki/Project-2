const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const { body, validationResult } = require('express-validator');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    body('email').notEmpty().isEmail().withMessage('Invalid email');
    body('password').notEmpty().isLength({ min: 4 }).withMessage('Password must be at least 4 characters long');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const messages = errors.array().map(error => error.msg);
        return done(null, false, req.flash('error', messages));
    }

    User.findOne({ 'email': email })
        .then(user => {
            if (user) {
                return done(null, false, { message: 'Email already has account.' });
            }

            const newUser = new User();
            newUser.email = email;
            newUser.password = password;

            return newUser.save();
        })
        .then(newUser => {
            return done(null, newUser);
        })
        .catch(err => {
            return done(err);
        });
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Email does not exist' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Invalid Password' });
            }
            return done(null, user);
        })
        .catch(err => {
            return done(err);
        });
}));


module.exports = passport;