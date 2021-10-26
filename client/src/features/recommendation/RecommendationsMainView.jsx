import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ActivityView from "../../common/components/ActivityView";
import Navbar from "../../common/components/NavBar";
import FilteredRecommendationView from "./FilteredRecommendationView";
import SingleActivityTypeView from "./SingleActivityTypeView";
import { filterOptions } from "../../common/constants/activities-filter-options.contant";
import _ from "lodash";

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
        {filterOptions.map((filterOption) => {
          return (
            <Route path={`${match.path}/${_.kebabCase(filterOption)}`}>
              <SingleActivityTypeView type={filterOption} />
            </Route>
          );
        })}
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
