import React from "react";
import { Grid, Typography, Button, Snackbar } from "@material-ui/core";
import useStyles from "./useStyles";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import emailjs from "emailjs-com";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Contact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_igmc5j2",
        "template_x5q91ek",
        e.currentTarget,
        "user_QvqNrkT6tY5zCRwuhFWIR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Grid id="contact" container className={classes.root}>
      <Grid container className={classes.aboutSection}>
        <Typography className={classes.whiteText}>
          .load(<span className={classes.purpleText}>contact</span>)
        </Typography>
      </Grid>
      <Grid container className={classes.contactBox}>
        <Grid item xs={11}>
          <Grid className={classes.contactboxTitle}>Get in Touch</Grid>
          <form className={classes.inputBox} onSubmit={sendEmail}>
            <Grid container item xs={6}>
              <Grid className={classes.nameTitle}>Full name</Grid>
            </Grid>
            <Grid className={classes.topcontactBox}>
              <textarea className={classes.nameInput} name="name" />
            </Grid>
            <Grid container item xs={6}>
              <Grid className={classes.nameTitle}>Email</Grid>
            </Grid>
            <Grid className={classes.middlecontactBox}>
              <textarea className={classes.emailInput} name="email" />
            </Grid>
            <Grid container item xs={6}>
              <Grid className={classes.nameTitle}>Message</Grid>
            </Grid>
            <Grid className={classes.buttomcontactBox}>
              <textarea
                placeholder="Add your message here"
                className={classes.messageInput}
                name="message"
              />
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.sendButton}
                onClick={handleClick}>
                Send
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Message successfully sent
                </Alert>
              </Snackbar>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
