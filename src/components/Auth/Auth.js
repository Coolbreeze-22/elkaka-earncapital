import React from "react";
import "./Auth.css";
import { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import Input from "./Input";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import './Auth.css';
import { useDispatch } from "react-redux";
import { jwtDecode }from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const initialState = { firstName: '', lastName: '', email: '', password: '', comfirmPassword: '' }

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ formData, setFormData ] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  };
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => {setIsSignup((preIsSignup) => !preIsSignup)};

  const success = async (res) => {
    const decode = jwtDecode(res.credential);
    console.log(res, decode);
    const profile = decode;
    const token = res?.credential;
    try {
      dispatch({ type: 'AUTH', payload: { profile, token } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  const error = async (error) => {
    console.log(error)
  }
  
  return (
    <Container component="main" maxWidth="xs" >
      <Paper elevation={3} sx={{padding:'10px'}}>
        <Avatar sx={{backgroundColor:"red", marginLeft:'45%'}}>
          <LockOutlined/>
        </Avatar>
        <Typography variant="h5" sx={{textAlign: 'center'}}>{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className="authForm" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name"  autoFocus half handleChange={handleChange} />
                <Input name="lastName" label="Last Name" half handleChange={handleChange} />
              </>
            )}
            <Input name="email" label="Email Address" type="email" handleChange={handleChange} />
            <Input name="password" label="Password" type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />
            {isSignup && (
              <Input name="comfirmPassword" label="Comfirm Password" type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />
              )}
          </Grid>          
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{marginY:"10px"}}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Button fullWidth variant="text"><GoogleLogin 
               onSuccess={success}
               onError={error}
               /></Button>
          
          <Grid container justifyContent="flex-end">
            <Grid item xs="12">
              <Button fullWidth variant='text' onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
