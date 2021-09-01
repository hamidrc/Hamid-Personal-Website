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
  contactBox: {
    width: "70vw",
    backgroundColor: "#1E2029",
    padding: "1% 2% 2% 5%",
    margin: "3% 0 0 12%",
    borderRadius: "12px",
  },
  inputBox: {
    padding: "0px 0px 0px 9%",
  },
  aboutSection: {
    padding: "0px 0px 0px 10%",
  },
  contactboxTitle: {
    padding: "2% 0px 2% 0%",
    textAlign: "left",
    fontFamily: "courier",
    fontSize: "1.8vw",
    fontWeight: 600,
    color: "#682ae9",
  },
  nameTitle: {
    color: "#889094",
    fontSize: "1.4vw",
    fontFamily: "courier",
    padding: '0 0 0 13.5%',
    fontWeight: 400,
  },
  nameInput: {
    color: "#889094",
    backgroundColor: '#000',
    borderColor: "#000",
    width: "45vw",
    height: "4vh",
    fontFamily: "courier",
    fontSize: '1.1vw',
  },
  emailInput: {
    color: "#889094",
    backgroundColor: '#000',
    borderColor: "#000",
    width: "45vw",
    height: "4vh",
    fontFamily: "courier",
    fontSize: '1.1vw',
  },
  messageTitle: {
    color: "#e6e3e3",
    fontSize: "1.5vw",
    fontFamily: "courier",
  },
  messageInput: {
    color: "#889094",
    backgroundColor: '#000',
    borderColor: "#000",
    fontFamily: "courier",
    fontSize: '1.1vw',
    width: "45vw",
    height: "10vh",
  },
  topcontactBox: {
    padding: "1% 0 2% 0%",
  },
  middlecontactBox: {
    padding: "1% 0 2% 0%",
  },
  buttomcontactBox: {
    padding: "1% 0 2% 0%",
  },
  sendButton: {
    width: '8vw',
    height: '3vw',
    fontSize: '1.2vw',
    padding: '0.5% 0 0 0',    
  }
}));

export default useStyles;
