var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function(){
    passport.use(new TwitterStrategy({
        consumerKey: 'ZB5QF5lc0E1dpOZNff2jsyp3M',
        consumerSecret:
'gVIeBEoVU2vHnQ1AGRsGrKWyTqXsX2kmTLHYFFd3QfRqzlaENt',
        callbackURL:
'http://localhost:3000/auth/twitter/callback',
        passReqToCallback: true
    },
    function (req, token, tokenSecret, profile, done) {
        var user = {};

        user.image = profile._json.profile_image_url;
        user.displayName = profile.displayName;

        user.twitter = {};
        user.twitter.id = profile.id;
        user.twitter.token = token;

        done(null, user);
    }));
};