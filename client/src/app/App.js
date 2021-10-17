import React from "react";
import { Switch, Route } from "react-router-dom";
import { useAuth } from "../features/auth/use-auth.hook";
import NewOutingView from "../features/new-outing/NewOutingView";
import RecommendationsMainView from "../common/components/RecommendationsMainView";

function App() {
  // setup auth listeners
  useAuth();

  return (
    <Switch>
      <Route path="/recommendations">
        <RecommendationsMainView />
      </Route>
      <Route path="/">
        <NewOutingView />
      </Route>
    </Switch>
  );
}

export default App;
