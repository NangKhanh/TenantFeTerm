import React from "react";
// import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "util/asyncComponent";
import './style/dashboard.css'
const Dashboard = ({ match }) => (
  // <Switch>
  //   <Redirect exact from={`${match.url}/`} to={`${match.url}/crm`}/>
  //   <Route path={`${match.url}/crm`} component={asyncComponent(() => import('./CRM/index'))}/>
  //   <Route path={`${match.url}/crypto`} component={asyncComponent(() => import('./Crypto/index'))}/>
  //   <Route path={`${match.url}/listing`} component={asyncComponent(() => import('./Listing/index'))}/>
  // </Switch>
  <div className="dashboard">
    <h1 className="wellcome">
      Welcome, Amantha
      <i><img alt="" src={("/assets/images/icons/handicon.png")}/></i>
    </h1>
    <p>Supports organization in meansuring and managing CO2 footprint.</p>
  </div>

);

export default Dashboard;
