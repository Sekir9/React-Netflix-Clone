import * as ROUTES from "./constants/routes";

import { Browse, Home, SignIn, SignUp } from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { IsUserRedirect } from "./helpers/routes";

export default function App() {
  const user = {};

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <SignUp />
      </IsUserRedirect>

      <Routes>
        <Route exact path="/browse" element={<Browse />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
