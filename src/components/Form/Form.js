import React, { useEffect, useState } from 'react';
import './Form.css';
import { useDispatch, u } from "react-redux";

import { TextField, Button, Grid, Typography, Paper } from "@mui/material";


const Form = () => {
  const initial = { title: "", message: "", tags: "", selectedFile: "" };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clear = () => {
  };

    return (
      <Paper className="formPaper" sx={{ boxShadow: "0px 1px 3px 0px red" }}>
        <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit} >
          <Typography variant="h6" textAlign="center">
            Invest
          </Typography>

          <TextField variant="outlined" label="Title" fullWidth sx={{ marginBottom: "8px" }} value='1' />

          <TextField variant="outlined" fullWidth sx={{ marginBottom: "8px" }} name="title" label="Message" value='2' />

          <TextField variant="outlined" fullWidth sx={{ marginBottom: "8px" }} name="tags" label="Tags" value='3' />

          <Button sx={{ marginY: "8px" }} variant="contained" color="primary" size="large" type="submit" fullWidth>
            Submit
          </Button>

          <Button sx={{ marginBottom: "8px" }} className="formButClear formText" variant="contained" color="secondary" size="small" fullWidth >
            Clear
          </Button>
        </form>
      </Paper>
    );
  }


export default Form;
