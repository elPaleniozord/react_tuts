import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio/:id" component={Project} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
