import React, { Children } from "react";
import MuiButton from '@mui/material/Button'; // Component name should begin with capital letter
import CircularProgress from '@mui/material/CircularProgress'

const Button = (props) => {
    return (
        <MuiButton
        {...props}
        >
           
        </MuiButton>
    )
}

export default Button;