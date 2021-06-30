import React from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Webinar from "./pages/Webinar/Webinar";
import SignUp from "./pages/SignUp/SignUp";
import ApplicationOneHome from "./pages/Application/ApplicationOneHome";
import ApplicationTwoHome from "./pages/Application/ApplicationTwo";
import ApplicationThreeHome from "./pages/Application/ApplicationThree";
import confirmApplication from "./pages/Application/confirmApplication";
import Preview from "./pages/Application/preview";
import Dashboard from "./pages/Dashboard/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import { lightTheme, darkTheme } from './theme'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/webinars" exact component={Webinar} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/apply" exact component={ApplicationOneHome} />
        <Route path="/applicationtwo" exact component={ApplicationTwoHome} />
        <Route path="/applicationthree" exact component={ApplicationThreeHome} />
        <Route path="/confirmapplication" exact component={confirmApplication} />
        <Route path="/preview" exact component={Preview} />
        <ThemeProvider theme={lightTheme}>
          <Route path="/dashboard" exact component={Dashboard} />
        </ThemeProvider>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;