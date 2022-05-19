// import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default class Register extends React.Component{

    constructor() {
        super();
      }

      render() {
        return (
          <Box component="form" sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate  autoComplete="off" >
            <TextField id="outlined-basic" label="First Name" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Last Name" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Age" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Phone No" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Password" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Re Enter Password" variant="filled" />
            <br />
            <Button variant="text">SignUp</Button>
          </Box>
        );
      }
}


