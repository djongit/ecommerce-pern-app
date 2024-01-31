import TextFieldLine from '@mui/material/TextField';
import * as React from 'react';
import { useField } from 'formik';

const TextField = (props) => {
    const { name, ...rest } = props;
    const [ field, {error}] = useField({name, type: name});
    return (
        <TextFieldLine 
            {...field}
            {...rest}
            variant='outlined'
        />
    );
};

export default TextField;
