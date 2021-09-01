import logo from "./logo.svg";
import "./App.css";
import { Divider, Grid, Switch } from "@material-ui/core";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Route, BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Grid className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route path="/" component={About} />
          <Route path="/" component={Portfolio} />
          <Route path="/" component={Contact} />
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>

      {/*       <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer /> */}
    </Grid>
  );
}

export default App;
