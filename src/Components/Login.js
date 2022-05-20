
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React,{Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        this.handleChange= this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    validateForm(e){
        if(this.state.email==='' || this.state.password ===''){
            alert("Dont leave anything blank");
            e.preventDefault();
        }
    }
    render(){
  return (
    <Box
      component="form" sx={{"& > :not(style)": { m: 1, width: "25ch" },}}noValidate autoComplete="off">
      <TextField id="emailInput" label="Email"  name="email" variant="filled"  value={this.state.email} onChange={this.handleChange}/>
      <br />
      <TextField id="passwordInput" label="Password"  name="password" variant="filled" value={this.state.password} onChange={this.handleChange} />
      <br />
      
        <Button variant="contained" onClick={this.validateForm}>Login</Button>
     
    </Box>
  );
}
}
export default Login;
