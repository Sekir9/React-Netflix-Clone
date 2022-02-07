import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        render={() => {
          if (!user) {
            return children;
          }

          if (user) {
            return (
              <Navigate
                to={{
                  pathname: loggedInPath,
                }}
              />
            );
          }
          return null;
        }}
      />
    </Routes>
  );
}

export default function ProtectedRoute({ user, children, ...rest }) {

}
