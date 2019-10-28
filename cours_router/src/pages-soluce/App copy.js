import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HtmlDefinition from "./pages/HtmlDefinition";
import User from "./pages/User";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/html">Html</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html" component={HtmlDefinition} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/user/:id" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
