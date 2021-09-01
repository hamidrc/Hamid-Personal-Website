import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import "./motion.css";
import csslogo from "../../Images/css-3.svg";
import htmlLogo from "../../Images/html-1.svg";
import javaLogo from "../../Images/logo-javascript.svg";
import materialuiLogo from "../../Images/material-ui-1.svg";
import mongodbLogo from "../../Images/mongodb-icon-1.svg";
import reactLogo from "../../Images/react-2.svg";
import typescriptLogo from "../../Images/typescript.svg";
import sass from "../../Images/sass-1.svg";

export default function About() {
  const classes = useStyles();

  return (
    <Grid id="about" container className={classes.root}>
      <Grid container className={classes.aboutSection}>
        <Typography className={classes.whiteText}>
          .load(<span className={classes.purpleText}>about</span>)
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.bioContainer}>
        <Typography className={classes.aboutmeFont}>
          <p>
            I am a self-taught full-stack software developer, currently living
            in Toronto, Ontario. I love programming, reading, traveling, and
            flying planes.
          </p>
          <p>
            As a software developer, I enjoy making creative and challenging web
            applications that are both practical and aesthetic in design.
          </p>
          <p>Ask me about anything, I am happy to help.</p>
        </Typography>
      </Grid>
      <Grid container xs={4} className={classes.logosContainer}>
        <Grid className={classes.mySkills}>
          <p>skills</p>
        </Grid>
        <Grid container className={classes.topIcons}>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={htmlLogo} />
              <div className="bottom">HTML5</div>
            </div>
          </a>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={csslogo} />
              <div className="bottom">CSS3</div>
            </div>
          </a>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={javaLogo} />
              <div className="bottom">JavaScript</div>
            </div>
          </a>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={typescriptLogo} />
              <div className="bottom">TypeScript</div>
            </div>
          </a>
        </Grid>
        <Grid container className={classes.buttomIcons}>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={materialuiLogo} />
              <div className="bottom">MaterialUI</div>
            </div>
          </a>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={mongodbLogo} />
              <div className="bottom">MongoDB</div>
            </div>
          </a>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={reactLogo} />
              <div className="bottom">React</div>
            </div>
          </a>
          <a className="social-container">
            <div className="social-cube">
              <img className="front" src={sass} />
              <div className="bottom">Sass</div>
            </div>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
