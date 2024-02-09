import React, { useState } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Botton'
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


export const Register = () => {


    //   -- Registration schema

    const registrationSchema = Yup.object().shape({
        // firstName: Yup.string().required(),
        // lastName: Yup.string().required(),
        email: Yup.string().email('Must be a valid email').required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password is too short. At least 8 characters please'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')],'Password must match')
            .required('Confirm Password is required')
    });
    //      ------ Use function below to print state of the Formik
  const PrintFormikState = () => {
    const printFormikState = useFormikContext();
    console.log('Formik State:', printFormikState);
    return null;
  }
    
    return (
        <div>
            
            <Formik
                initialValues={{email: '',
                                password: '', 
                                confirmPassword: ''}}
                validationSchema={ registrationSchema }
                validateOnBlur

            >
                 {({ errors, touched }) => (
                <Form>
                    <h2>Register</h2>
                    {/* <TextField
                        required
                        name = 'firstName'
                        placeholder = 'First Name'
                        id = 'user-first-name'
                        label = 'First Name'
                        size = 'small'
                    />
                    <TextField
                        required
                        name = 'lastName'
                        placeholder = 'Last Name'
                        id = 'user-last-name'
                        label = 'Last Name'
                        size = 'small'
                    /> */}
                    <TextField
                        required
                        name = 'email'
                        placeholder = 'email'
                        id = 'user-email'
                        label = {touched.email && errors.email ? errors.email : 'Email'}                      
                        // error = {touched.email && errors.email ? true : false}
                        size = 'small'
                    />
                    <TextField
                        required
                        name = 'password'
                        placeholder = 'Password'
                        id = 'user-password'
                        label = {touched.password && errors.password ? errors.password : 'Password'}                       
                        // error = {touched.password && errors.password ? true : false }
                        size = 'small'
                    />
                    <TextField
                        required
                        name = 'confirmPassword'
                        placeholder = 'confirmPassword'
                        id = 'user-confirm-password'
                        label = {touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : 'Confirm Password'}                   
                        // error = {touched.confirmPassword && errors.confirmPassword ? true : false }
                        size = 'small'
                    />
                    <Divider/>
                    {/* <TextField
                        required
                        name = 'address'
                        placeholder = 'address'
                        id = 'user-address'
                        label = 'Address'
                        size = 'small'
                    /> */}

                    {/* {touched.email && errors.email && <div>{errors.email}</div>}
                    {touched.password && errors.password && <div>{errors.password}</div>}
                    {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>} */}
                    
                    <Button
                        name = 'submit'
                        variant = 'contained'
                        color = 'primary'
                    >
                    Submit
                    </Button>
                    <PrintFormikState /> 
                </Form>
                )}
            </Formik>
            
        </div>
       
    )
};

