const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const GoogleStrategy = require('passport-google-oidc');

const GoogleStrategy = require( 'passport-google-oauth2').Strategy;
const ControllerAuth = require('../controllers/controllerAuth');
const ControllerAuthRequest = new ControllerAuth();



const { GOOGLE, FACEBOOK } = require('../conf');

module.exports = async (app) => {

    app.use(passport.initialize());
    app.use(passport.session()); // middleware for persistent logins

    // set id as cookie in user browser
    passport.serializeUser((user, done) => {
        // console.log('Serialize userId: ', user);
        done(null, user.user_id);
    });

    
    passport.deserializeUser((id, done) => {
        console.log('deserialized user: ', id);

        done(null, {id});
    });

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) =>{
            try{
                // console.log('this is passport email: ', email);
                const findUser = await ControllerAuthRequest.login({email, password});
                console.log('this is passport findUser', findUser);
                
                return done(null, findUser);
               
            } catch(error) {
                console.log('this is passport error: ', error);
                return done(error);
            }
        }
    ));


        //          --- Google login ---
 

    passport.use(new GoogleStrategy({
        clientID: GOOGLE.CONF_GOOGLE_CLIENT_KEY,
        clientSecret: GOOGLE.CONF_GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE.CONF_GOOGLE_CALLBACK_URL,
        passReqToCallback   : true
    },
    async (req, accessToken, refreshToken, profile, done) => {
        // console.log('this is access token: ', accessToken);
        try {
            // console.log('this is passport profile: ', profile);
            const findGoogleUser =  await ControllerAuthRequest.controllerAuthGoogleLogin(profile);
            return done(null, findGoogleUser);
        } catch(error) {
            console.log('this is googlePassport error: ', error); 
            return done(error);
        }
               
    }
    ));
    return passport;

};


