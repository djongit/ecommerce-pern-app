import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/textField/TextField';





export const Register = () => {

    return (
        <div>
            
            <Formik>
                <Form>
                    <h2>Register</h2>
                    <TextField
                        required
                        placeholder = 'First Name'
                        label = 'First Name'
                        size = 'small'
                    />
                    <TextField
                        required
                        placeholder = 'Last Name'
                        label = 'Last Name'
                        size = 'small'
                    />
                    <TextField
                        required
                        placeholder = 'email'
                        label = 'email'
                        size = 'small'
                    />
                    <TextField
                        required
                        placeholder = 'Password'
                        label = 'Password'
                        size = 'small'
                    />
                </Form>
                
            </Formik>


            
          
            
        </div>
    )
};