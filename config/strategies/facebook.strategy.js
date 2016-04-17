var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');

module.exports = function() {
    passport.use(new FacebookStrategy({
        clientID: '1596167637369891',
        clientSecret: '122b8e011d088ffea4fdefb3e3663a70',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
    function (req, accessToken, refreshToken, profile, done) {

        var query = {
            'facebook.id': profile.id
        };

        User.findOne(query, function (error, user) {
            if (user) {
                console.log('found');
                done(null, user);
            } else {
                console.log('not found');
                var user = new User;

                // user.email = profile.emails[0].value;
                user.displayName = profile.displayName;

                user.facebook = {};
                user.facebook.id = profile.id;
                user.facebook.token = accessToken;

                user.save();
                done(null, user);
            }

        })
        
    }));
}