import { makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "8vh",
  },
  logoImage: {
    width: "28px",
    height: "38px",
  },
  purpleText: {
    color: "#682ae9",
    fontFamily: "Roboto Mono,monospace",
    fontWeight: 400,
    fontSize: "1em",
    "&:hover": {
      color: "#7e57c2",
    },
    [theme.breakpoints.down("sm")]: {
      textTransform: "lowercase",
    },
  },
  whiteText: {
    color: "#e6e3e3",
    fontSize: "1em",
    fontFamily: "Roboto Mono,monospace",
    "&:hover": {
      color: "#7e57c2",
    },
    [theme.breakpoints.down("sm")]: {
      textTransform: "lowercase",
    },
  },
  itemPads: {
    padding: "0px 5% 0px 0px",
  },
  rightBar: {
    padding: "0px 10% 5% 0%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  leftBar: {
    padding: "0px 5% 5% 10%",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 5% 0% 10%",
    },
  },
  iconThemes: {
    color: "#682ae9",
    "&:hover": {
      color: "#7e57c2",
    },
  },
  // less than 960px screen
  activatehamburgerButton: {
    color: "#682ae9",
    "&:hover": {
      color: "#7e57c2",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 80,
    flexShrink: 0,
    [theme.breakpoints.down("xs")]: {
      width: 50,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000",
    borderColor: "#682ae9",
    color: "#682ae9",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default useStyles;
