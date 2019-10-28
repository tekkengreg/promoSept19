import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HtmlDef from "./pages/HtmlDef";
import User from "./pages/User";
import "./App.css";

function App() {
  return (
    <div className="App">
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
          <Route path="/html" component={HtmlDef} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
