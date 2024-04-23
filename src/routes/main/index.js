import React from "react";
import {Route, Switch} from "react-router-dom";
import Widgets from "./Widgets";
import Metrics from "./Metrics";
import Dashboard from "./dashboard";
// import Layouts from "./Layouts";
import asyncComponent from "../../util/asyncComponent";

const Main = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/organization`} component={Widgets}/>
    <Route path={`${match.url}/inventory`} component={Metrics}/>
    <Route path={`${match.url}/calculation`} component={Metrics}/>
    
    <Route path={`${match.url}/report`} component={Metrics}/>
    <Route path={`${match.url}/faq`} component={Metrics}/>
    <Route path={`${match.url}/algolia`} component={asyncComponent(() => import('../algolia'))}/>
  </Switch>
);

export default Main;
