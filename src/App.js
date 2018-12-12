import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./css/logo.css";
import "./css/animation.css";
import "./css/menu.css";
import Home from "./home";
import About from "./about";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

function App() {
  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <div
              style={{
                marginLeft: expanded ? 240 : 64,
                padding: "15px 20px 0 20px"
              }}
            />
            <SideNav
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                  <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="about">
                  <NavText>About</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  );
}

export default App;
