import React from "react";
import { useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

//          ---- Components imports ----
import  TextField  from "../../components/textField/TextField";
import  Button  from "../../components/button/Botton";

//         --- Actions import ---
import { logInAction } from "./LogInActions";
import { Divider } from "@mui/material";



export const LogIn = () => {
    const dispatch = useDispatch();

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Must be a valid email').required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const initialValues = {
        email: '',
        password: ''
    };

    const handleLogin = async(credentials) => {
        // const { email, password } = credentials;
        try{
            await dispatch(logInAction(credentials));
        } catch(err) {
            throw new Error('Error While Log In', err);
        }
    };

    const handleFacebookLogin = async(values) => {
        console.log('this is facebook values: ' ,values);
    };

    // const handleGoogleLogin = async(googleCredentials) => {
    //     console.log('this is google values: ', googleCredentials);
    //     try{

    //     } catch(error) {
    //         throw new Error('Google Login error', error);
    //     }
    // };

    // const handleGoogleLogin = (e) => {
    //    e.preventDefault();
    //    window.open('http://localhost:4001/api/auth/google', '_blank', 'width=600,height=400');
    //    };

    return (
        <div>
            <Formik
             validationSchema = {loginSchema}
            //  initialValues={{email: '',
            //                 password: ''}}
             initialValues={initialValues}
             validateOnBlur
             onSubmit={async (values, {resetForm }) => {
                const {email, password } = values;
                await handleLogin({ email, password}); 
                // resetForm();    // use this to clear form after submition button press    

            }}
            // onSubmit = {handleLogin}

            >
                {({values, errors, touched}) => (
                    <Form>
                        <h2>This is LogIn</h2>
                        <TextField                          
                            name = 'email'
                            id = 'email-login'
                            placeholder = 'email'
                            label = {touched.email && errors.email ? errors.email : 'Email'} 
                        />
                        <TextField
                            label = 'Password'
                            name = 'password'
                            id = 'password-login'
                        />
                        {/* {
                        errors && <div>{errors}</div>
                        } */}
                        <Button
                            name = 'login'
                            variant = 'contained'
                            color = 'primary'
                            type = 'submit'
                        >
                            Log In
                        </Button>
                        <Divider/>
                        <div className="socialLogin">
                            {/* <Button variant = 'contained' className = 'googleButton' onSubmit = {handleLogin} type = 'submit'>Google</Button> */}
                            {/* <a href="/login/google" className="button">Sign in with Google</a> */}
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <p>Sign in with</p>
                            </div>
                            <div className="social-btn-container">
                                <Button name = 'facebook' variant="contained" className="facebook-btn" onClick = {() => handleFacebookLogin(values)}>Facebook</Button>
                                {/* <a href = 'http://localhost:4001/api/auth/google'> */}
                                <Button name = 'google' variant="contained" className="google-btn"  onClick = {() => window.location.href = 'http://localhost:4001/api/auth/google'}>Google</Button>
                                {/* </a> */}
                               
                            </div>
                        </div>
                    </Form>
                )}
                
            </Formik>
            
       
        </div>
    )
};

// export default LogIn;

// {/* <Button name = 'google' variant="contained" className="google-btn"  onClick = {() => window.location.href = 'http://localhost:4001/api/auth/google'}>Google</Button> */}