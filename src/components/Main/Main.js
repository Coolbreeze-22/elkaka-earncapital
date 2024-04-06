import React, { useEffect, useState } from "react";
import "./Main.css";
import {
  Button,
  Grid,
  Typography,
  Paper,
  Grow,
  Container,
} from "@mui/material";
import earn from "./../assets/images/earn.jpeg";
import highway from "./../assets/images/highway.jpg";
import splash1 from "./../assets/images/splash1.jpg";
import {imageUrl1, imageUrl2} from "../assets/imageUrl";

const Main = () => {
  const [ index, setIndex ] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
  
    return () => {
      clearInterval(interval);
    }
  }, [index])
  
  return (
  <div className="mainDiv">
    <Container maxWidth="xl">
      <div className="mainAnimation1">INVEST</div>
      <div className="mainAnimation2">EARN</div>
      <div className="mainAnimation3">WITHDRAW</div>
    </Container>


    <div className="mainSlider">
      <img src={imageUrl1[index]} alt="img" />
    </div>
    <div className="mainSlider">
      <img src={imageUrl2[index]} alt="img" />
    </div>


    <div className="mainSlide">
      <div className="mainSlide1">
        <img src={earn} alt="earn" />
      </div>
      <div className="mainSlide2">
        <img src={highway} alt="highway" />
      </div>
      <div className="mainSlide3">
        <img src={splash1} alt="splash1" />
      </div>
    </div>


    <div maxWidth="xl" className="mainCarousel">
      <div className="mainCarousel1">
        <img src={imageUrl1[0]} alt="img" style={{ height: "100%", width: "100%" }} />
      </div>
      <div className="mainCarousel2">
        <img src={imageUrl1[1]} alt="img" style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="mainCarousel3">
        <img src={imageUrl1[2]} alt="img" style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
    <h2 className="headMain">
      <center>Know us today and invest</center>
    </h2>
    <Grid container className="mainGrid">
      <Grid item xs={12} sm={2}>
        <img src={earn} alt="earn" className="mainImg" />
      </Grid>
      <Grid item xs={12} sm={10}>
        <div>
          Earn Capital offers lucrative long term and short-term investment
          opportunities. Established in 2000 to soley engage currency trading,
          make profits and grow the community of partnering members. Fast
          forward to a decade after, we adopted Cryptocurrencies, thereby
          trading both stocks, currencies, Cryptocurrencies, shares and bonds.
          We are happy today to boast of being among the top pioneer traders of
          Cryptocurrencies, with our trading managed by a senior team of experts
          having the extensive experience required in the development and
          implementation of systematic investment strategies.
          <br />
          <hr style={{ margin: "10px" }} />
          Earn Capital was built around a simple idea: put the client first.
          Lots of companies say that, but we work to keep clients at the heart
          of everything we do. By offering a better, more modern way to build
          and manage wealth. We believe investors deserve nothing less. It
          means, taking a more human approach in financial services. Treating
          clients the way they expect to be treated. We always try to look at
          the world through our client’s eyes. We believe our business should be
          about service, not sales. Service is the heart of who we are.
          <h3>What does that mean?</h3>
          It means offering a more intelligent way to invest. Making sure
          clients have a variety of sound options that combine the best of what
          people and technology have to offer. By using both technology and
          people we help make investing easier and more accessible for people
          who live closer to Main Street than Wall Street. It also means
          offering access to high quality products, services, and insights, all
          for very low costs. After all, cost matters a lot. That is why we
          offer some of the lowest cost products in the industry. Our entire
          business is rooted in a strong belief, that investing has the power to
          transform lives and that everyone deserves a partner that will
          champion their goals with passion and integrity. Looking ahead, we're
          confident we offer a better way to invest. One that is more human,
          more intelligent and lower cost. That is what modern means to us. For
          those of us who work here, this isn't just business, it’s our passion,
          our purpose. We show up every day to help people. Help them turn their
          questions into answers, Engagement into action, And opportunity into
          ownership. That is what Grand Capital Asset is all about. And that is
          what we mean when we say: Ask questions. Be engaged. And own Your
          tomorrow.
        </div>
      </Grid>
    </Grid>

    <div className="mainDiv1">
      Our Vision is to build an ecosystem of trust between Investors and Trade
      Analysts and render a multi-commodity Investment platform globally. Our
      Vision is to build an ecosystem of trust between Investors and Trade
      Analysts and render a multi-commodity Investment platform globally.
    </div>
    <div className="mainDiv2">
      Our Vision is to build an ecosystem of trust between Investors and Trade
      Analysts and render a multi-commodity Investment platform globally. Our
      Vision is to build an ecosystem of trust between Investors and Trade
      Analysts and render a multi-commodity Investment platform globally.
    </div>
    <hr />
  </div>
  )
};

export default Main;
