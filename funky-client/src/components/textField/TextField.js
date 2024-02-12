import TextFieldLine from '@mui/material/TextField';
import * as React from 'react';
import { useField } from 'formik';

const TextField = (props) => {
    const { name, ...rest } = props;
    const [ field, meta] = useField({name, type: name});
   
    return (
        <TextFieldLine 
            {...field}
            {...rest}
              //      Errors shown as label
            error={ meta.touched && meta.error ? true : false } 
              //      Errors shown as helper text
            // helperText={meta.error}          
            variant='outlined'
        />
    );
};

export default TextField;
