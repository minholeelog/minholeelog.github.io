import React from "react";
import { Route } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Projects from "../views/Projects";

function Router() {
  return (
    <>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
    </>
  );
}

export default Router;
