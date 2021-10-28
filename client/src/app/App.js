import React from "react";
import { Switch, Route } from "react-router-dom";
import { useAuth } from "../features/auth/use-auth.hook";
import NewOutingView from "../features/new-outing/NewOutingView";
import RecommendationsMainView from "../features/recommendation/RecommendationsMainView";
import PrivateRoute from "../common/components/PrivateRoute";

function App() {
  // setup auth listeners
  useAuth();

  return (
    <Switch>
      <PrivateRoute path="/recommendations">
        <RecommendationsMainView />
      </PrivateRoute>
      <Route path="/">
        <NewOutingView />
      </Route>
    </Switch>
  );
}

export default App;
