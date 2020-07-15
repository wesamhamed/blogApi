var passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

var opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "blogApi",
};

passport.use(
  new JwtStrategy(opt, (payload, done) => {
    done(null, { username: "ahmad" });
  })
);

passport.serializeUser((user, done) => {
  done(null, { username: "ahmad" });
});

passport.deserializeUser((user, done) => {
  done(null, { username: "ahmad" });
});

module.exports = passport;
