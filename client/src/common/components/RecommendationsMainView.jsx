import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ActivityView from "./ActivityView";

export default function Recommendations() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Recommendations</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Recommendations page has its own <Switch> with more routes
          that build on the /recommendations URL path. You can think of the
          2nd <Route> here as an "index" page for all recommendations, or
          the page that is shown when no recommendation is selected */}
      <Switch>
        <Route path={`${match.path}/:activityId`}>
          <ActivityView />
        </Route>
        <Route path={match.path}>
          <h3>Please select a recommendation.</h3>
        </Route>
      </Switch>
    </div>
  );
}
