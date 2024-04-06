import React, { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import {
  Grid,
  Grow,
  Container,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@mui/material";

import Form from "../Form/Form";
import Main from "../Main/Main";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <center style={{color:"gray"}}>
        <i>Start Investing Today</i>
      </center>
      <Grow in>
        <Grid container justify=" space-between" alignItems="stretch" spacing={3} className="HomeGrid">
          <Grid item xs={12} sm={12} md={12}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Form />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={6} sx={{display:{xs: "none", sm:"yes" }}}>
            <Form />
          </Grid> */}
        </Grid>
      </Grow>
    </div>
  );
};

export default Home;
