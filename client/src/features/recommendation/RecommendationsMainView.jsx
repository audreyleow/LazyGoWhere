import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ActivityView from "../../common/components/ActivityView";
import Navbar from "../../common/components/NavBar";
import FilteredRecommendationView from "./FilteredRecommendationView";

export default function RecommendationsMainView() {
  let match = useRouteMatch();

  return (
    <>
      <Navbar />
      {/* The Recommendations page has its own <Switch> with more routes
          that build on the /recommendations URL path. You can think of the
          2nd <Route> here as an "index" page for all recommendations, or
          the page that is shown when no recommendation is selected */}
      <Switch>
        <Route path={`${match.path}/:activityId`}>
          <ActivityView />
        </Route>
        <Route exact path={match.path}>
          <FilteredRecommendationView />
        </Route>
      </Switch>
    </>
  );
}
