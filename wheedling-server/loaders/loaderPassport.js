const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



const ControllerAuth = require('../controllers/controllerAuth');
const ControllerAuthRequest = new ControllerAuth();

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
    ))
    return passport;

};


