import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./useStyles";
import Kanban from "../../Images/Kanban.gif";
import TweetMapper from "../../Images/TweetMapper.gif";
import twittervideo from "./TwitterVideo.mp4";
import kanbanvid from '../../Images/kanbanvid.mp4';

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Grid id="portfolio" container className={classes.root}>
      <Grid container className={classes.aboutSection}>
        <Typography className={classes.whiteText}>
          .load(<span className={classes.purpleText}>portfolio</span>)
        </Typography>
      </Grid>
      <Grid container className={classes.portfolioBox}>
        <Grid item xs={6}>
          <Grid className={classes.projectTitle}>Kanban Board</Grid>
          <Typography className={classes.techFont}>
            <p>
              <span className={classes.subtitleFont}>Technologies used:</span>{" "}
              JavaScript, TypeScript, MongoDB, Express.js, Node.js, React,
              Material UI
            </p>
            <p>
              Kanban board is an application used in the agile environment that
              allows users to constatnly control and improve their flow of work.
              The application that we developed allows users to signup and login
              by creating their own secured accounts. It also allows users to
              manage work flow through the dashboard and calendar page as well
              as allowing for personal profile picture to be added.
            </p>
            <p>
              <span className={classes.subtitleFont}>Status: </span>Completed
            </p>
            <a
              href="https://github.com/hamidrc/Kanban-board-application.git"
              style={{ textDecoration: "none" }}
              target="_blank">
              <Button
                className={classes.githubrepoButton}
                variant="outlined"
                color="primary">
                <span> Github repo</span>
              </Button>
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <img src={Kanban} className={classes.portfolioImage} />
        </Grid>
      </Grid>
      <Grid container className={classes.portfolioBox}>
        <Grid item xs={6}>
          <Grid className={classes.projectTitle}>Tweet Mapper</Grid>
          <Typography className={classes.techFont}>
            <p>
              <span className={classes.subtitleFont}>Technologies used:</span>{" "}
              Java, JavaScript, TypeScript, React, REST API, Material UI
            </p>
            <p>
              Tweet Mapper is an application that allows the user to specify
              keywords of interest, and monitors tweets from a service that
              samples Twitter in real time. It also plots the location of the
              user the originated the tweet on a map of the world. To do this,
              the app makes use of an existing geographical mapping library and
              the Twitter API.
            </p>
            <p>
              <span className={classes.subtitleFont}>Status: </span>In progress
            </p>

            <a
              href="https://github.com/hamidrc/Tweet-Mapper.git"
              style={{ textDecoration: "none" }}
              target="_blank">
              <Button
                className={classes.githubrepoButton}
                variant="outlined"
                color="primary">
                <span> Github repo</span>
              </Button>
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <img src={TweetMapper} className={classes.portfolioImage} />
{/*           <video autoPlay loop className={classes.portfolioImage} muted>
            <source src={twittervideo} type="video/mp4/" />
          </video> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
