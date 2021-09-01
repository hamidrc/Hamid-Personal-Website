import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Logo from "../../Images/Logo.jpg";
import useStyles from "./useStyles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CopyrightIcon from "@material-ui/icons/Copyright";

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} >
      <Grid container item xs={10} className={classes.footerTitle} alignItems="center">
        <Grid >
          <CopyrightIcon className={classes.copyrightSize}/>
        </Grid>
        <Grid className={classes.footerFont} >
          <p>Hamid 2021</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
