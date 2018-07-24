import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/opportunity" component={Opportunity} />
        <Route exact path="/signup" component={Signup} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
