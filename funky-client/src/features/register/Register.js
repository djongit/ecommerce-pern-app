import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Botton'
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';





export const Register = () => {


    //   -- Registration schema

    const registrationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password is too short. At least 8 characters please'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')],'Password must match')
            .required('Confirm Password is required')
    });
   

    return (
        <div>
            
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={ registrationSchema }
                validateOnBlur

            >
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
                        label = 'email'
                        size = 'small'
                    />
                    <TextField
                        required
                        name = 'password'
                        placeholder = 'Password'
                        id = 'user-password'
                        label = 'Password'
                        size = 'small'
                    />
                    <TextField
                        required
                        name = 'confirmPassword'
                        placeholder = 'confirmPassword'
                        id = 'user-confirm-password'
                        label = 'Confirm Password'
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
                    <Button
                        name = 'submit'
                        variant = 'contained'
                        color = 'primary'
                    >
                    Submit
                    </Button>
                </Form>
                
            </Formik>


            
          
            
        </div>
    )
};