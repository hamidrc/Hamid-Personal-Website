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
  portfolioBox: {
    width: '70vw',
    backgroundColor: '#1E2029',
    padding: "2% 0% 2% 5%",
    margin: '3% 0 0 12%',
    borderRadius: '12px',
  },
  portfolioImage: {
    width: '28vw',
    height: '60%',
    padding: '15% 0 0% 0%',
  },
  aboutSection: {
    padding: "0px 0px 0px 10%",
  },
  projectTitle: {
    textAlign: "left",
    fontFamily: 'courier',
    fontSize: '1.7vw',
    fontWeight: 600,
    color: "#e6e3e3",
  },
  githubrepoButton: {
    textAlign: "left",
    fontFamily: 'courier',
    fontSize: '1em',
    color: "#e6e3e3",
  },
  techFont: {
    width: '32vw',
    fontFamily: 'courier',
    fontSize: "1.2vw",
    color: "#889094",
    textAlign: "left",
    lineHeight: "1em",
  },
  subtitleFont: {
    color: "#e6e3e3",
  }
}));

export default useStyles;
