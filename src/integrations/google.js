const { googleClientId, googleClientSecret, apiUrl } = require("../config");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const loginGoogle = new GoogleStrategy(
  {
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: `${apiUrl}/auth/user/google/login/callback`,
    scope: [
      'email',
      'profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/plus.me'
    ],
    accessType: 'offline'
  }, function (accessToken, refreshToken, profile, done) {
    process.nextTick(async function () {
      try {
        const googleData = {
          name: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
          accessToken: accessToken,
        }
        return done(null, googleData);
      } catch (err) {
        return done(err);
      }
    });
});

const signupGoogle = new GoogleStrategy(
  {
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: `${apiUrl}/auth/user/google/signup/callback`,
    scope: [
      'email',
      'profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/plus.me'
    ],
    accessType: 'offline'
  }, function (accessToken, refreshToken, profile, done) {
    process.nextTick(async function () {
      try {
        const userData = {
          name: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
          accessToken: accessToken,
        }
        return done(null, userData);
      } catch (err) {
        return done(err);
      }
    });
});

module.exports = {
  loginGoogle,
  signupGoogle,
};