import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Priorities from "./components/Priorities";
import Security from "./components/Security";
import News from "./components/News";
import Volunteer from "./components/Volunteer";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <LandingPage />
      </Route>
      <Route path="/priorities">
        <Priorities />
      </Route>
      <Route path="/priority/security">
        <Security />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/volunteer">
        <Volunteer />
      </Route>
    </Router>
  );
}

export default App;
