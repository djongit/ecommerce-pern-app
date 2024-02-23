import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

//          ---- Components imports ----
import  TextField  from "../../components/textField/TextField";
import  Button  from "../../components/button/Botton";

//         --- Actions import ---
import { logInAction } from "./LogInActions";



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
        try{
            await dispatch(logInAction(credentials));
        } catch(err) {
            throw new Error('Error While Log In', err);
        }
    };

    return (
        <div>
            <Formik
             validationSchema = {loginSchema}
            //  initialValues={{email: '',
            //                 password: ''}}
             initialValues={initialValues}
             validateOnBlur
             onSubmit={handleLogin}
            >
                {({errors, touched}) => (
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
                    </Form>
                )}
                
            </Formik>
            
            
       
        </div>
    )
};

// export default LogIn;