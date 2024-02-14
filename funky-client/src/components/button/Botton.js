import React, { Children } from "react";
import MuiButton from '@mui/material/Button'; // Component name should begin with capital letter
import CircularProgress from '@mui/material/CircularProgress'

const Button = (props) => {
    const { isLoading, children, ...otherProps } = props
    return (
        <MuiButton
        {...otherProps}
        >
            {!isLoading && children}
      {isLoading && <CircularProgress color="secondary"/>}
        </MuiButton>
    )
}

export default Button;