import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./css/sidenav.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import Home from "./home";
import About from "./about";

const Main = styled.main`
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  padding: 0;
  margin-left: ${props => (props.expanded ? 200 : 0)}px;
`;

class Menu extends PureComponent {
  state = {
    expanded: false
  };

  onToggle = expanded => {
    this.setState({ expanded: expanded });
  };

  render() {
    const { expanded, selected } = this.state;

    return (
      <div>
        <div
          style={{
            marginLeft: expanded ? 240 : 64,
            padding: "15px 20px 0 20px"
          }}
        />
        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onToggle={this.onToggle}
                  onSelect={selected => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav selected={selected}>
                    <NavItem eventKey="#">
                      <NavText
                        title="#"
                        style={{
                          paddingLeft: 50,
                          paddingRight: 50,
                          fontSize: "20px"
                        }}
                      >
                        Home
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="About">
                      <NavText
                        title="About"
                        style={{
                          paddingLeft: 50,
                          paddingRight: 50,
                          fontSize: "20px"
                        }}
                      >
                        About
                      </NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <Main expanded={expanded}>
                  <Route path="/" exact component={Home} />
                  <Route path="/Home" exact component={Home} />
                  <Route path="/About" component={About} />
                </Main>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default Menu;
