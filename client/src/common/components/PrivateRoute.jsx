import { Route, Redirect } from "react-router-dom";

import { useUser } from "../../features/auth/UserProvider";

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();

  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}
