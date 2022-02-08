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

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        render={({ location }) => {

          if (user) {
            return children;
          }

          if(!user){
              return (
                  <Navigate
                    to={{
                        pathname: 'signin',
                        state: { from: location },
                    }}
                    />
              )
          }
          return null;
        }}
      />
    </Routes>
  );
}
