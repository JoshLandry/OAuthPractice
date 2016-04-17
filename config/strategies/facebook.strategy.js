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

        var user = {};

            user.email = profile.emails[0].value;
            // user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;

            done(null, user);
    }));
}