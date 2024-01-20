import TextFieldLine from '@mui/material/TextField';
import * as React from 'react';
// import { useField } from 'formik';

function TextField (props) {

    return (
        <TextFieldLine 
            {...props}
            variant='outlined'
        />
    );
};

export default TextField;
