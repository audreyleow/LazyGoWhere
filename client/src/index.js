import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import UserProvider from "./features/auth/UserProvider";
import LoadedItineraryProvider from "./features/itinerary-drawer/LoadedItineraryProvider";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <LoadedItineraryProvider>
        <Router>
          <App />
        </Router>
      </LoadedItineraryProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
