import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    padding: '0 0 2% 11%',
    backgroundColor: "#000",
  },
  footerTitle: {
    backgroundColor: "#1E2029",
    borderRadius: "12px",
    color: "#682ae9",
    fontFamily: 'Roboto Mono,monospace',
    padding: '0 0 0 35%',
  },
  footerFont: {
    fontSize: '1.2vw',
    padding: '0 0 0.5% 2%',
  },
  copyrightSize: {
    width: '1.4vw',
  }
}));

export default useStyles;
