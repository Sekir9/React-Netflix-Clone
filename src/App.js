import * as ROUTES from "./constants/routes";

import { Browse, Home, Signin, Signup } from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/browse">
          <Browse />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}
