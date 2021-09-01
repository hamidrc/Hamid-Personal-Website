import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./useStyles";
import "./styles.css";
import Navbar from "../../Components/NavBar/Navbar";

export default function Home() {
  const classes = useStyles();

  return (
    <Grid id="home" container className={classes.root}>
      <Navbar />
      <Grid item xs={12}>
        <div className="css-typing">
          <h1>Hi,</h1>
          <h1>
            I'm<span className={classes.purpleText}> &nbsp;Hamid </span>, a
            Full-Stack Developer.
          </h1>
          <h1>Welcome to my website!</h1>
        </div>
      </Grid>
      <Grid container className={classes.scrollArrow}>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text">Scroll down</span>
      </Grid>
    </Grid>
  );
}
