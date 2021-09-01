import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '0px 0px 12% 0px',
    width: '100%',
    backgroundColor: "#000",
  },
  purpleText: { 
    color: '#682ae9',
  },
  orangeColor: {
    color: 'orange',
  },
  scrollArrow: {
    padding: '8% 0 0 45%',
  },
}));

export default useStyles;
