import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../views/404';
import About from '../views/About';
import Home from '../views/Home';
import Project from '../views/Project';
import Detail from '../views/Detail';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/project/:id" component={Detail} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Router;
