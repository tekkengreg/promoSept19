import React, { Component } from "react";
import { Switch, Route, NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./App.css";
import Components from "./pages/Components";
import Github from "./pages/Github";

class App extends Component {
  constructor() {
    super();

    this.state = { counter: 0 };
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000);
  }
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{this.state.counter}</NavbarBrand>
          <a href="/github">hard github</a>
          <Collapse isOpen navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Components</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/github">GitHub</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Components} />
          <Route path="/github" component={Github} />
        </Switch>
      </div>
    );
  }
}

export default App;
