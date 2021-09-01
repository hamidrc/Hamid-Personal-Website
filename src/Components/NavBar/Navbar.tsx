import React from "react";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Logo from "../../Images/Logo.jpg";
import useStyles from "./useStyles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import { useRef } from "react";

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  /*   const anchor = useRef<HTMLInputElement | null>(null);

  const portfolioScroll = () => {
    const anchor = document.querySelector("#portfolio");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  } */
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item xs={2} className={classes.leftBar}>
        <a href="#home">
          <img className={classes.logoImage} src={Logo} />
        </a>
      </Grid>
      <Grid
        className={classes.activatehamburgerButton}
        justifyContent="flex-end"
        container
        item
        xs={10}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon className={classes.purpleText} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>
              <Button color="primary" size="large">
                <a href="#about" style={{ textDecoration: "none" }}>
                  <Typography className={classes.whiteText}>
                    .load(<span className={classes.purpleText}>about</span>)
                  </Typography>
                </a>
              </Button>
            </ListItem>
            <ListItem>
              <Button color="primary" size="large">
                <a href="#portfolio" style={{ textDecoration: "none" }}>
                  <Typography className={classes.whiteText}>
                    .load(<span className={classes.purpleText}>portfolio</span>)
                  </Typography>
                </a>
              </Button>
            </ListItem>
            <ListItem>
              <Button color="primary" size="large">
                <a href="#contact" style={{ textDecoration: "none" }}>
                  <Typography className={classes.whiteText}>
                    .load(<span className={classes.purpleText}>contact</span>)
                  </Typography>
                </a>
              </Button>
            </ListItem>
            <ListItem>
              <a href="https://github.com/hamidrc" target="_blank">
                <Button color="primary" size="large">
                  <IconButton className={classes.iconThemes}>
                    <GitHubIcon />
                  </IconButton>
                </Button>
              </a>
            </ListItem>
            <ListItem>
              <Button color="primary" size="large">
                <a href="https://www.linkedin.com/in/hrc2050" target="_blank">
                  <IconButton className={classes.iconThemes}>
                    <LinkedInIcon />
                  </IconButton>
                </a>
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      <Grid
        container
        item
        xs={10}
        className={classes.rightBar}
        alignItems="center"
        justifyContent="flex-end">
        <Grid className={classes.itemPads}>
          <a href="#about" style={{ textDecoration: "none" }}>
            <Typography className={classes.whiteText} >
              .load(<span className={classes.purpleText}>about</span>)
            </Typography>
          </a>
        </Grid>
        <Grid
          /* onClick={portfolioScroll} */
          className={classes.itemPads}>
          <a href="#portfolio" style={{ textDecoration: "none" }}>
            <Typography className={classes.whiteText}>
              .load(<span className={classes.purpleText}>portfolio</span>)
            </Typography>
          </a>
        </Grid>
        <Grid className={classes.itemPads}>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <Typography className={classes.whiteText}>
              .load(<span className={classes.purpleText}>contact</span>)
            </Typography>
          </a>
        </Grid>
        <Grid>
          <a href="https://github.com/hamidrc" target="_blank">
            <IconButton className={classes.iconThemes}>
              <GitHubIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid>
          <a href="https://www.linkedin.com/in/hrc2050" target="_blank">
            <IconButton className={classes.iconThemes}>
              <LinkedInIcon />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
