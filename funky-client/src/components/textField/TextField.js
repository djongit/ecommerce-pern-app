import TextFieldLine from '@mui/material/TextField';
import * as React from 'react';
import { useField } from 'formik';

const TextField = (props) => {
    const { name, ...rest } = props;
    const [ field, meta] = useField({name, type: name});
    // console.log('this is field ',field);
    // console.log('this is meta ', meta);  
    // console.log('this is error ', meta.error);
    return (
        <TextFieldLine 
            {...field}
            {...rest}
              //      Errors shown as label
            error={ meta.touched && meta.error ? true : false } 
              //      Errors shown as helper text
            // helperText={error}          
            variant='outlined'
        />
    );
};

export default TextField;
