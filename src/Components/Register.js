// import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            phoneNo:"",
            emailInput:"",
            ageInput:"",
            passwordInput:"",
            passwordInput2:""
        }
        this.handleChange= this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    validateForm(event){
        if((this.state.firstName==='' || this.state.lastName ===''|| this.state.phoneNo ===''|| this.state.ageInput ==='' || this.state.passwordInput ==='' || this.state.passwordInput2 ==='') && this.state.passwordInput === this.state.passwordInput2 ){
            alert("Dont leave anything blank");
            event.preventDefault();
        }
    }

      render() {
        return (
          <Box component="form" sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate  autoComplete="off" >
            <TextField id="firstName" label="First Name" variant="filled" name="firstName"  value={this.state.firstName} onChange={this.handleChange}/>
            <br />
            <TextField id="lastName" label="Last Name" variant="filled" name="lastNmae"  value={this.state.lastName} onChange={this.handleChange}/>
            <br />
            <TextField id="ageInput" label="Age" variant="filled" name="ageinput"  value={this.state.ageInput} onChange={this.handleChange}/>
            <br />
            <TextField id="phoneNo" label="Phone No" variant="filled" name="phoneNo"  value={this.state.phoneNo} onChange={this.handleChange}/>
            <br />
            <TextField id="emailInput" label="Email" variant="filled" name="emailInput"  value={this.state.emailInput} onChange={this.handleChange}/>
            <br />
            <TextField id="passwordInput" label="Password" variant="filled" name="passwordInput"  value={this.state.passwordInput} onChange={this.handleChange}/>
            <br />
            <TextField id="passwordInput2" label="Re Enter Password" variant="filled" name="passwordInput2"  value={this.state.passwordInput2} onChange={this.handleChange}/>
            <br />
            <Button variant="text" onClick={this.validateForm}>SignUp</Button>
          </Box>
        );
      }
}


