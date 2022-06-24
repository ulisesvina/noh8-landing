import { render } from "preact";
import { FC as FunctionComponent } from "preact/compat";
import Header from "./components/Header";
import Home from './components/index';
import "./styles/main.css";
import { Switch, Route } from "wouter";

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </>
  );
};

render(<App />, document.getElementById("app")!);
