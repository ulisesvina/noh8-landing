import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/index";
import About from "./components/About";
import "./styles/main.css";
import { Switch, Route } from "wouter";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </React.StrictMode>
);
