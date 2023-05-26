import React from "react";
import { Grid, Container, CardMedia } from "@mui/material";
import lyrically from "../Assets/lyrically.png"
import portfolio from "../Assets/portfolio1.png"

export default function Home() {
  return (
    <Container className="section" id="homePage">
      <h1>Home Page</h1>
      <Grid container spacing={4} textAlign="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <div className="project4">
            First Portfolio Project
            <a
              href="https://cmv303.github.io/Camila-is-learning-code/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CardMedia
                component="img"
                className="project1"
                image={portfolio}
                height="194"
                title="firstPortfolio"
              ></CardMedia>
            </a>
            Where I started, 6 months ago, in my coding journey
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <div className="project1">
            Lyrically
            <a
              href="https://catalystix.github.io/SuperGroupOne/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CardMedia
                component="img"
                className="project1"
                image={lyrically}
                height="194"
                title="Lyrically"
              ></CardMedia>
            </a>
            This group project uses two third-party APIs to access the track
            names, lyrics, and videos of your favorite songs.
            <br></br>
            <br></br>
            Contributed to the filters, readme, and html
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}