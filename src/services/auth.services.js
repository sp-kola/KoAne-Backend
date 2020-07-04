import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import User from '../modules/user/user.model';
import Vendor from '../modules/vendor/vendor.model';
import constants from '../../config/constants';


// local strategy
const localOpts = {
    usernameField: 'email',
};

const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return done(null, false);
        }
        else if (!user.authenticateUser(password)) {
            return done(null, false);
        }
        return done(null, user);
    }
    catch (e) {
        return done(e, false);
    }
});

//Jwt strategy
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: constants.JWT_SECRET,
};

const JwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    console.log(payload)
    try {
        const user = await User.findById(payload._id);
        console.log(user)
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    }
    catch (e) {
        return done(e, false);
    }
});

passport.use(localStrategy);
passport.use(JwtStrategy);

export const authLocal = passport.authenticate('local', { session: false });
export const authJwt = passport.authenticate('jwt', { session: false });