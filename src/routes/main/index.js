import React from "react";
import {Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard";
import Organization from "./Organization/Organization";
import Inventory from "./Inventory/Inventory";
import Calculation from "./Calculation/Calculation";
import ReportRouter from "./Report/Report";
import Faq from "./Faq/Faq";

const Main = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/organization`} component={Organization}/>
    <Route path={`${match.url}/inventory`} component={Inventory}/>
    <Route path={`${match.url}/calculation`} component={Calculation}/>
    
    <Route path={`${match.url}/report`} component={ReportRouter}/>
    <Route path={`${match.url}/faq`} component={Faq}/>
  </Switch>
);

export default Main;