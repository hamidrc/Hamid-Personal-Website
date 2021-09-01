import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "5% 0px 10% 0px",
    width: "100%",
    backgroundColor: "#000",
  },
  purpleText: {
    color: "#682ae9",
    fontSize: '1.7vw',
    fontFamily: 'Roboto Mono,monospace',
  },
  whiteText: {
    color: "#e6e3e3",
    fontSize: '1.7vw',
    fontFamily: 'Roboto Mono,monospace',
  },
  bioContainer: {
    padding: "0% 2% 0px 12%",
    fontFamily: 'Poppins, sans-serif',
  },
  aboutSection: {
    padding: "0px 0px 2% 10%",
  },
  aboutmeFont: {
    fontSize: '1.5vw',
    fontFamily: 'courier',
    color: "#e6e3e3",
    textAlign: "left",
    lineHeight: "1.4em",
  },
  logosContainer: {
    backgroundColor: '#1E2029',
    //padding: "2% 0 0px 0",
    borderRadius: '12px',
    height: 'auto',
    fontFamily: 'Roboto Mono,monospace',
  },
  mySkills: {
    fontSize: '1.7vw',
    height: '1.8vh',
    fontFamily: 'Roboto Mono,monospace',
    color: "#682ae9",
    padding: '2% 0 0 40%',
  },
  topIcons: {
    padding: '0% 0 5% 11%',
  },
  buttomIcons: {
    padding: '5% 0 15% 11%',
  }
}));

export default useStyles;
