import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Botton'
import { Divider } from '@mui/material';




export const Register = () => {

    return (
        <div>
            
            <Formik>
                <Form>
                    <h2>Register</h2>
                    <TextField
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
                    />
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
                    <TextField
                        required
                        name = 'address'
                        placeholder = 'address'
                        id = 'user-address'
                        label = 'Address'
                        size = 'small'
                    />
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