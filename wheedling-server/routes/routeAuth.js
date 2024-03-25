const express = require('express');
const authRouter = express.Router();

const ControllerAuth = require('../controllers/controllerAuth');
const ControllerAuthRequest = new ControllerAuth();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication and authorization
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *         password:
 *           type: string
 *           format: password
 *           description: User's password
 *       required:
 *         - email
 *         - password
 */
module.exports = (app, passport) => {
    app.use('/api/auth',authRouter);
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       description: User registration data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successful registration
 *         content:
 *           application/json:
 *             example:
 *               message: User registered successfully
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 */

    authRouter.post('/register', async (req, res, next) => {
        try {
            // console.log('this is data: ', req.body);
            const data = req.body;
            const response = await ControllerAuthRequest.register(data);
           
            res.status(200).send(response);
            
        } catch (error) {
            next(error);
        }

    });
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login to the system
 *     tags: [Authentication]
 *     requestBody:
 *       description: User login credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             example:
 *               message: User logged in successfully
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             example:
 *               error: Unauthorized
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 */


//            -- Local login --
// authRouter.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), async (req, res, next) => {
    authRouter.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), async (req, res, next) => {
        // console.log('this is route request: ', req);
        // console.log('this is route response: ', res);
        try {
            // console.log('this is Route body ', req.body);
            const {email, password} = req.body;
            
            const response = await ControllerAuthRequest.login({email, password});
            console.log('route response: ', response);
            // console.log('this is route response: ', res);
            // res.status(200).send(response);
            return res.status(200).json({ success: true, data: response, redirectTo: '/' });
            // return res.status(200).redirect('/');
        } catch(error) {
            console.log('this is auth error: ', error);           
            next(error);
        }
    });
    // authRouter.post('/login', async (req, res, next) => {
    //     console.log('this is route request: ', req.body);
    //     console.log('this is route response: ', res.body);
    //     try {
    //         console.log('this is Route body ', req.body);
    //         const { email, password } = req.body;
    //         console.log('this is Route back email: ', email, password);
            
    //         // Move passport.authenticate('local') here
    //         passport.authenticate('local', async (err, user, info) => {
    //             if (err) {
    //                 console.error('Passport authentication error:', err);
    //                 return next(err);
    //             }
    //             if (!user) {
    //                 console.error('User not found:', info.message);
    //                 return res.status(401).send({ message: 'Incorrect email or password.' });
    //             }
    //             req.logIn(user, (loginErr) => {
    //                 if (loginErr) {
    //                     console.error('Login error:', loginErr);
    //                     return next(loginErr);
    //                 }
    //                 console.log('User authenticated:', user);
    //                 return res.status(200).send(user); // Assuming user contains necessary data
    //             });
    //         })(req, res, next);
            
    //     } catch (error) {
    //         console.error('Route error:', error);
    //         next(error);
    //     }
    // });

    // authRouter.get('/profile', isLoggedIn, (req, res, next) => {
        
    // })

//       --- Google Login ---
authRouter.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

authRouter.get('/google/callback',//(req, res, next) =>{
    // console.log('this is route response: ', res)
    // next() },  
    passport.authenticate('google', { failureRedirect: '/login'}),
    (req, res) => {
        // On successful authentication, user redirected to homepage.

        // console.log('this is route callback: ', res);
        // res.redirect('/');
        res.redirect('http://localhost:3000');
    }
);


//              --- Facebook Login ---
authRouter.get('/facebook', passport.authenticate('facebook'));
authRouter.get('/facbook/callback', passport.authenticate('facebook', { failureRedirect: '/login'}),
    (req, res) => {
        // On succesful authentication, redirect to homepage.
        res.redirect('/');
    }
);

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout from the system
 *     tags: [Authentication]
 *     responses:
 *       302:
 *         description: Redirect to login page after logout
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 */
    authRouter.get('/logout', async (req, res, next) => {
        try {
            req.logout();
            res.redirect('/login');
        } catch(error) {
            next(error);
        }
    });
}