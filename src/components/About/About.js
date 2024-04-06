import React from 'react'
import './About.css';
import { Container, Typography, Link, Button } from "@mui/material";
import earn from "./../assets/images/earn.jpeg";

const About = () => {
  return (
    <Container sx={{fontSize: "20px"}}>
    <Typography variant='h3' align="center" sx={{ marginY: "5px" }}>ABOUT US</Typography>

    <div className="aboutImgDiv" ><img src={earn} alt="earn" className="aboutImg" /></div>
    <Typography variant='h5' align="center" sx={{ marginY: "10px" }}>OUR VISION</Typography>
    <div>Our Vision is to build an ecosystem of trust between Investors and Trade Analysts and render a multi-commodity Investment platform globally.</div><hr/>
    
    <div className="aboutImgDiv" ><img src={earn} alt="earn" className="aboutImg" /></div>
    <Typography variant='h5' align="center" sx={{ marginY: "10px" }}>OUR MISSION</Typography>
    <div>
    Our Mission is to leverage alternative trading techniques and increase ROI for our Customers.</div>
    <hr/>
    
    <div className="aboutImgDiv" ><img src={earn} alt="earn" className="aboutImg" /></div>
    <Typography variant='h5' align="center" sx={{ marginY: "10px" }}>OUR ETHICS</Typography>
    <div>We are a fast growing trading company, offering best speculation designs in FOREX and Crypto. Our objective is clear: enable our patrons to make a fortune regardless of age and area. We believe this is key in delivering quality service to our esteemed investors.</div><hr/>

    <div style={{textAlign: "center", marginTop:"95px"
    }}><i>Copyright © 2024 Earn Capital - All Rights Reserved.</i></div>
    </Container>
  )
}

export default About